import {record,text,count,finite} from './input'
import {duplicateIds} from './integrity'
import {relation} from './report'
import type {Request,ProcessingLimits,RelationResult} from './types'
export function verifyCount(r:Request,limits:ProcessingLimits):RelationResult[]{
 const p=r.input
 if(!record(p))return [relation(r,'total','V-R03',null,null,['DEPENDENCIA_NAO_MAPEADA'])]
 const unit=text(p.requestedUnit)?p.requestedUnit:null,reasons=new Set<string>(),values=new Map<string,number|null>()
 let occurrences:number|null=null,rounds:number|null=null
 const add=(id:string,value:number|null)=>{const old=values.get(id);values.set(id,value===null||old===null?null:(old??0)+value)}
 if(!['EXERCISE_SERIES','WORK_OCCURRENCES','STATION_VISITS'].includes(unit??''))reasons.add('INVALID_UNIT')
 if(p.mode==='SERIES_COUNTS'){
  if(unit!=='EXERCISE_SERIES'||!Array.isArray(p.counts))reasons.add('DEPENDENCIA_NAO_MAPEADA')
  else {
   const duplicates=duplicateIds(p.counts,'taskId')
   for(const c of p.counts){if(!record(c)||!text(c.taskId)){reasons.add('INVALID_STRUCTURE');continue}const valid=count(c.value)&&!duplicates.has(c.taskId);if(!valid)reasons.add(duplicates.has(c.taskId)?'IDENTIFICADOR_DUPLICADO':'INVALID_COUNT');values.set(c.taskId,valid?c.value as number:null)}
  }
 }else if(p.mode==='REPEATED_PATTERN'){
  if(!count(p.rounds)||!Array.isArray(p.items))reasons.add('INVALID_COUNT')
  else{
   rounds=p.rounds;let expanded=0
   for(const item of p.items){
    if(!record(item)||!text(item.taskId)){reasons.add('INVALID_STRUCTURE');continue}
    if(!['WORK','PREPARATION','OTHER'].includes(item.role as string)){reasons.add('UNKNOWN_ROLE');add(item.taskId,null);continue}
    if(!count(item.countPerRound)){reasons.add('INVALID_COUNT');add(item.taskId,null);continue}
    const n=p.rounds*item.countPerRound;expanded+=n
    if(item.role==='WORK')add(item.taskId,Number.isSafeInteger(n)?n:null)
   }
   if(expanded>limits.maxExpandedOccurrences||!Number.isSafeInteger(expanded))reasons.add('PROCESSING_LIMIT')
   if(unit==='WORK_OCCURRENCES'||unit==='STATION_VISITS')occurrences=[...values.values()].every(count)?[...values.values()].reduce<number>((a,v)=>a+(v as number),0):null
  }
 }else if(p.mode==='OCCURRENCES'){
  if(!Array.isArray(p.occurrences))reasons.add('DEPENDENCIA_NAO_MAPEADA')
  else{
   const duplicates=duplicateIds(p.occurrences,'occurrenceId'),seriesByTask=new Map<string,Set<string>>(),passages=new Set<string>()
   let occurrenceSum=0,occurrenceValid=true,passagesValid=true
   if(p.occurrences.length>limits.maxExpandedOccurrences)reasons.add('PROCESSING_LIMIT')
   for(const o of p.occurrences){
    if(!record(o)||!text(o.taskId)||!text(o.occurrenceId)){reasons.add('INVALID_STRUCTURE');occurrenceValid=false;continue}
    if(duplicates.has(o.occurrenceId)){reasons.add('IDENTIFICADOR_DUPLICADO');values.set(o.taskId,null);occurrenceValid=false;continue}
    if(!['WORK','PREPARATION','OTHER'].includes(o.role as string)){reasons.add('UNKNOWN_ROLE');values.set(o.taskId,null);occurrenceValid=false;continue}
    if(o.role!=='WORK')continue
    occurrenceSum++
    if(text(o.groupPassageId))passages.add(o.groupPassageId);else passagesValid=false
    if(unit==='EXERCISE_SERIES'){
     if(!text(o.exerciseSeriesId)){reasons.add('FRONTEIRA_DE_SERIE_AUSENTE');values.set(o.taskId,null);continue}
     let set=seriesByTask.get(o.taskId);if(!set){set=new Set();seriesByTask.set(o.taskId,set)}set.add(o.exerciseSeriesId)
     if(values.get(o.taskId)!==null)values.set(o.taskId,set.size)
    }else add(o.taskId,1)
   }
   occurrences=occurrenceValid?occurrenceSum:null
   rounds=passagesValid&&occurrenceValid?passages.size:null
  }
 }else reasons.add('DEPENDENCIA_NAO_MAPEADA')
 const sum=[...values.values()].every(count)?[...values.values()].reduce<number>((a,v)=>a+(v as number),0):null
 let total=reasons.size?null:sum
 if(total!==null&&!Number.isSafeInteger(total)){total=null;reasons.add('NUMERIC_OVERFLOW')}
 if(reasons.has('PROCESSING_LIMIT')){total=null;occurrences=null;rounds=null;for(const id of values.keys())values.set(id,null)}
 const duplicate=reasons.has('IDENTIFICADOR_DUPLICADO')
 const declared=finite(p.declaredTotal)?p.declaredTotal:null
 const difference=total!==null&&declared!==null?declared-total:null
 const divergent=duplicate||(difference!==null&&difference!==0)
 const main=relation(r,'total','V-R03',total,unit,[...reasons,...(difference!==null&&difference!==0?['TOTAL_DIVERGENTE']:[])],divergent?'DIVERGENTE':undefined,declared)
 main.difference=difference
 const result=[main,...[...values].map(([id,value])=>relation(r,`task:${encodeURIComponent(id)}`,'V-R03',value,unit,value===null?[...reasons]:[]))]
 result.push(relation(r,'occurrence-total','V-R03',occurrences,'WORK_OCCURRENCES',occurrences===null?['OCORRENCIAS_NAO_EXPLICITADAS']:[]))
 result.push(relation(r,'group-rounds','V-R03',p.groupingApplicable===false?null:rounds,'GROUP_ROUNDS',p.groupingApplicable===false?[]:rounds===null?['PASSAGENS_NAO_EXPLICITADAS']:[],p.groupingApplicable===false?'NAO_APLICAVEL':undefined,finite(p.rounds)?p.rounds:null))
 const independent=result.filter(x=>x.calculationStatus==='CALCULADO').map(x=>x.relationId)
 for(const item of result)if(item.calculationStatus!=='CALCULADO')item.independentResultIds=[...independent]
 return result
}
