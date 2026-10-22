import {record,text,finite,count,encodeSegment,fieldPaths} from './input'
import {duplicateIds} from './integrity'
import {relation} from './report'
import type {Basis,Request,RelationResult} from './types'
export function verifyWeek(r:Request):RelationResult[]{
 const p=r.input
 if(!record(p)||!Array.isArray(p.sessionOccurrences)||!['EXERCISE_SERIES','WORK_OCCURRENCES','STATION_VISITS','s'].includes(p.unit as string))return [relation(r,'weekly-total','V-R09',null,null,['DEPENDENCIA_NAO_MAPEADA'])]
 const unit=p.unit as string,duplicates=duplicateIds(p.sessionOccurrences,'id'),reasons=new Set<string>(),natures=new Set<Basis>()
 const subtotals=new Map<Basis,number>([['PLANNED',0],['OBSERVED',0]]),tasks=new Map<string,number>()
 const unknownTasks=new Map<Basis,Set<string>>([['PLANNED',new Set()],['OBSERVED',new Set()]])
 const incompleteBasis=new Set<Basis>(),taskPaths=new Map<string,string[]>()
 const base=`${r.requestPath}.input`
 for(const [index,s] of p.sessionOccurrences.entries()){
  const sessionPath=`${base}.sessionOccurrences[${index}]`
  if(!record(s)||!text(s.id)||!text(s.sessionVersion)||(s.basis!=='PLANNED'&&s.basis!=='OBSERVED')){reasons.add('INVALID_SESSION');if(record(s)&&(s.basis==='PLANNED'||s.basis==='OBSERVED'))incompleteBasis.add(s.basis);else {incompleteBasis.add('PLANNED');incompleteBasis.add('OBSERVED')}continue}
  natures.add(s.basis)
  if(s.basis===r.basis&&Array.isArray(s.counts))s.counts.forEach((c,countIndex)=>{
   if(record(c)&&text(c.taskId))taskPaths.set(c.taskId,[...(taskPaths.get(c.taskId)??[]),`${sessionPath}.id`,`${sessionPath}.sessionVersion`,`${sessionPath}.basis`,...fieldPaths(c,`${sessionPath}.counts[${countIndex}]`)])
  })
  if(duplicates.has(s.id)){
   reasons.add('IDENTIFICADOR_DUPLICADO')
   if(Array.isArray(s.counts)){
    for(const c of s.counts){
     if(record(c)&&text(c.taskId))unknownTasks.get(s.basis)!.add(c.taskId)
     else incompleteBasis.add(s.basis)
    }
   }else incompleteBasis.add(s.basis)
   continue
  }
  if(!Array.isArray(s.counts)){reasons.add('DOSE_AUSENTE');incompleteBasis.add(s.basis);continue}
  const taskDuplicates=duplicateIds(s.counts,'taskId')
  for(const [countIndex,c] of s.counts.entries()){
   if(!record(c)||!text(c.taskId)){reasons.add('INVALID_COUNT');incompleteBasis.add(s.basis);continue}
   const valid=(unit==='s'?finite(c.value)&&c.value>=0:count(c.value))&&!taskDuplicates.has(c.taskId)
   if(!valid){reasons.add('INVALID_COUNT');unknownTasks.get(s.basis)!.add(c.taskId);continue}
   subtotals.set(s.basis,subtotals.get(s.basis)!+(c.value as number))
   if(s.basis===r.basis)tasks.set(c.taskId,(tasks.get(c.taskId)??0)+(c.value as number))
  }
 }
 const numeric=(v:number)=>Number.isFinite(v)&&(unit==='s'||Number.isSafeInteger(v))
 if([...subtotals.values()].some(v=>!numeric(v)))reasons.add('NUMERIC_OVERFLOW')
 if(p.coverageComplete!==true)reasons.add('COBERTURA_INCOMPLETA')
 if(natures.size>1||[...natures].some(b=>b!==r.basis))reasons.add('NATUREZAS_INCOMPATIVEIS')
 const subtotal=subtotals.get(r.basis)!,known=numeric(subtotal)?subtotal:null
 const results=[relation(r,'weekly-total','V-R09',reasons.size?null:known,unit,[...reasons]),relation(r,'known-subtotal','V-R09',known,unit,known===null?['NUMERIC_OVERFLOW']:[])]
 for(const basis of natures){const v=subtotals.get(basis)!;const item=relation(r,`known-subtotal:${basis}`,'V-R09',numeric(v)?v:null,unit);item.basis=basis;results.push(item)}
 for(const id of new Set([...tasks.keys(),...unknownTasks.get(r.basis)!])){
  const value=tasks.get(id)??0
  const partial=p.coverageComplete!==true||incompleteBasis.has(r.basis)
  const blocked=partial||unknownTasks.get(r.basis)!.has(id)||!numeric(value)
  const paths=[`${base}.coverageComplete`,`${base}.unit`,...(taskPaths.get(id)??[])];
  if(partial)for(const [i,s]of p.sessionOccurrences.entries())if(record(s)&&s.basis===r.basis&&!Array.isArray(s.counts))paths.push(`${base}.sessionOccurrences[${i}].counts`)
  results.push(relation(r,`task:${encodeSegment(id)}`,'V-R09',blocked?null:value,unit,blocked?[partial?'COBERTURA_INCOMPLETA':'DOSE_CONFLITANTE']:[],undefined,null,paths))
  results.push(relation(r,`known-task-subtotal:${encodeSegment(id)}`,'V-R09',numeric(value)?value:null,unit,[],undefined,null,paths))
 }
 return results
}
