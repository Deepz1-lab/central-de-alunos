import {record,text} from './input'
import {relation} from './report'
import type {Request,ProcessingLimits,RelationResult} from './types'
export function duplicateIds(items:unknown[],key:string):Set<string>{
 const seen=new Set<string>(),duplicates=new Set<string>()
 for(const item of items)if(record(item)&&text(item[key])){const id=item[key] as string;if(seen.has(id))duplicates.add(id);seen.add(id)}
 return duplicates
}
export function verifyIntegrity(request:Request,limits:ProcessingLimits):RelationResult[]{
 const p=request.input
 const out=(reasons:string[],size:number|null)=>[
  relation(request,'integrity','V-R02',reasons.length?null:true,null,reasons),
  relation(request,'expansion','V-R02',size,'WORK_OCCURRENCES',reasons),
 ]
 if(!record(p)||!Array.isArray(p.occurrences)||!Array.isArray(p.groups))return out(['INVALID_STRUCTURE'],null)
 const reasons=new Set<string>()
 const occurrences=new Map<string,Record<string,unknown>>(),groups=new Map<string,Record<string,unknown>>()
 if(duplicateIds(p.occurrences,'occurrenceId').size||duplicateIds(p.groups,'groupId').size)reasons.add('IDENTIFICADOR_DUPLICADO')
 for(const o of p.occurrences){if(!record(o)||!text(o.occurrenceId)||!text(o.taskId)){reasons.add('INVALID_STRUCTURE');continue}occurrences.set(o.occurrenceId,o)}
 for(const g of p.groups){if(!record(g)||!text(g.groupId)||!Array.isArray(g.childGroupIds)||!g.childGroupIds.every(text)||!Array.isArray(g.occurrenceIds)||!g.occurrenceIds.every(text)){reasons.add('INVALID_STRUCTURE');continue}groups.set(g.groupId,g)}
 for(const g of groups.values()){
  for(const id of g.childGroupIds as string[])if(!groups.has(id))reasons.add('REFERENCIA_INEXISTENTE')
  for(const id of g.occurrenceIds as string[])if(!occurrences.has(id))reasons.add('REFERENCIA_INEXISTENTE')
 }
 const active=new Set<string>(),memo=new Map<string,{size:number;height:number}>()
 function visit(id:string,depth:number):{size:number;height:number}{
  if(depth>limits.maxDepth){reasons.add('PROCESSING_LIMIT');return {size:0,height:0}}
  if(active.has(id)){reasons.add('CICLO_DE_AGRUPAMENTO');return {size:0,height:0}}
  const cached=memo.get(id);if(cached){if(depth+cached.height>limits.maxDepth)reasons.add('PROCESSING_LIMIT');return cached}
  const g=groups.get(id);if(!g)return {size:0,height:0}
  active.add(id);let size=(g.occurrenceIds as string[]).length,height=0
  for(const child of g.childGroupIds as string[]){const v=visit(child,depth+1);size+=v.size;height=Math.max(height,1+v.height);if(size>limits.maxExpandedOccurrences){reasons.add('PROCESSING_LIMIT');break}}
  active.delete(id);const value={size,height};memo.set(id,value);return value
 }
 let size=0
 for(const id of groups.keys()){size+=visit(id,1).size;if(size>limits.maxExpandedOccurrences){reasons.add('PROCESSING_LIMIT');break}}
 if(p.occurrences.length>limits.maxExpandedOccurrences)reasons.add('PROCESSING_LIMIT')
 return out([...reasons],reasons.size?null:size)
}
