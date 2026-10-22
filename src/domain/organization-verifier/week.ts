import {record,text,finite,count} from './input'
import {duplicateIds} from './integrity'
import {relation} from './report'
import type {Basis,Request,RelationResult} from './types'
export function verifyWeek(r:Request):RelationResult[]{
 const p=r.input
 if(!record(p)||!Array.isArray(p.sessionOccurrences)||!['EXERCISE_SERIES','WORK_OCCURRENCES','STATION_VISITS','s'].includes(p.unit as string))return [relation(r,'weekly-total','V-R09',null,null,['DEPENDENCIA_NAO_MAPEADA'])]
 const unit=p.unit as string,duplicates=duplicateIds(p.sessionOccurrences,'id'),reasons=new Set<string>(),natures=new Set<Basis>()
 const subtotals=new Map<Basis,number>([['PLANNED',0],['OBSERVED',0]]),tasks=new Map<string,number>(),unknownTasks=new Set<string>()
 for(const s of p.sessionOccurrences){
  if(!record(s)||!text(s.id)||!text(s.sessionVersion)||(s.basis!=='PLANNED'&&s.basis!=='OBSERVED')){reasons.add('INVALID_SESSION');continue}
  natures.add(s.basis)
  if(duplicates.has(s.id)){reasons.add('IDENTIFICADOR_DUPLICADO');if(Array.isArray(s.counts))for(const c of s.counts)if(record(c)&&text(c.taskId))unknownTasks.add(c.taskId);continue}
  if(!Array.isArray(s.counts)){reasons.add('DOSE_AUSENTE');continue}
  const taskDuplicates=duplicateIds(s.counts,'taskId')
  for(const c of s.counts){
   if(!record(c)||!text(c.taskId)){reasons.add('INVALID_COUNT');continue}
   const valid=(unit==='s'?finite(c.value)&&c.value>=0:count(c.value))&&!taskDuplicates.has(c.taskId)
   if(!valid){reasons.add('INVALID_COUNT');unknownTasks.add(c.taskId);continue}
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
 for(const id of new Set([...tasks.keys(),...unknownTasks]))results.push(relation(r,`task:${encodeURIComponent(id)}`,'V-R09',unknownTasks.has(id)||!numeric(tasks.get(id)??0)?null:tasks.get(id)??0,unit,unknownTasks.has(id)?['DOSE_CONFLITANTE']:[]))
 return results
}
