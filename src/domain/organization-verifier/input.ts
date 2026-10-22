import type {ParseResult,ProcessingLimits,InputIssue,Request,Source} from './types'
export const defaults:ProcessingLimits={maxJsonBytes:1048576,maxRequests:1000,maxExpandedOccurrences:20000,maxDepth:50}
export const record=(x:unknown):x is Record<string,unknown>=>x!==null&&typeof x==='object'&&!Array.isArray(x)
export const text=(x:unknown):x is string=>typeof x==='string'&&x.trim().length>0
export const finite=(x:unknown):x is number=>typeof x==='number'&&Number.isFinite(x)
export const count=(x:unknown):x is number=>finite(x)&&Number.isSafeInteger(x)&&x>=0
export const source=(x:unknown):x is Source=>record(x)&&text(x.id)&&text(x.version)&&text(x.locator)
export function parseSnapshot(raw:unknown, limits:ProcessingLimits):ParseResult {
 const issues:InputIssue[]=[]
 let requested:number|null=null
 const fail=(code:string,path='$'):ParseResult=>({ok:false,issues:[{path,code,message:`Não foi possível interpretar o retrato: ${code}.`,affectedRequestIds:[]}],coverage:{requested,notEvaluated:[]}})
 if(!Object.values(limits).every(v=>Number.isSafeInteger(v)&&v>0))return fail('INVALID_PROCESSING_LIMITS')
 let input=raw
 if(typeof input==='string'){
  if(new TextEncoder().encode(input).length>limits.maxJsonBytes)return fail('PROCESSING_LIMIT')
  try{input=JSON.parse(input)}catch{return fail('INVALID_JSON')}
 }
 // Inspect descriptors before reading values: callers cannot execute getters via parsing.
 const stack=new Set<object>()
 function inspect(x:unknown,depth:number):string|null {
  if(depth>limits.maxDepth)return 'PROCESSING_LIMIT'
  if(x===null||typeof x==='string'||typeof x==='boolean'||finite(x))return null
  if(typeof x!=='object')return 'NON_JSON_INPUT'
  const proto=Object.getPrototypeOf(x)
  if((!Array.isArray(x)&&proto!==Object.prototype&&proto!==null)||stack.has(x))return 'NON_JSON_INPUT'
  stack.add(x)
  for(const key of Reflect.ownKeys(x)){
   if(Array.isArray(x)&&key==='length')continue
   if(typeof key!=='string')return 'NON_JSON_INPUT'
   const d=Object.getOwnPropertyDescriptor(x,key)!
   if(!('value'in d)||!d.enumerable)return 'NON_JSON_INPUT'
   const error=inspect(d.value,depth+1);if(error)return error
  }
  stack.delete(x);return null
 }
 const error=inspect(input,0);if(error)return fail(error)
 if(!record(input))return fail('INVALID_SNAPSHOT')
 if(Array.isArray(input.requests))requested=input.requests.length
 if(input.schemaVersion!=='ver-001/1')return fail('UNSUPPORTED_SCHEMA','schemaVersion')
 if(!Array.isArray(input.requests))return fail('INVALID_REQUESTS','requests')
 if(input.requests.length>limits.maxRequests)return fail('PROCESSING_LIMIT','requests')
 const coverage={requested,notEvaluated:[] as {requestId:string|null;path:string;reasonCode:string}[]}
 const issue=(path:string,code:string,ids:string[]=[])=>issues.push({path,code,message:`Revisar ${path}: ${code}.`,affectedRequestIds:ids})
 const rootSource=source(input.source)?input.source:null
 if(!rootSource)issue('source','MISSING_PROVENANCE')
 for(const key of ['snapshotId','planVersion'])if(!text(input[key]))issue(key,'MISSING_METADATA')
 const frequencies=new Map<string,number>()
 for(const r of input.requests)if(record(r)&&text(r.requestId))frequencies.set(r.requestId,(frequencies.get(r.requestId)||0)+1)
 const requests:Request[]=[]
 input.requests.forEach((r,i)=>{
  const path=`requests[${i}]`,id=record(r)&&text(r.requestId)?r.requestId:null
  let code:string|null=null
  if(!record(r)||!id||!text(r.kind)||!text(r.purpose)||(r.basis!=='PLANNED'&&r.basis!=='OBSERVED'))code='INVALID_REQUEST'
  else if(frequencies.get(id)!==1)code='IDENTIFICADOR_DUPLICADO'
  if(code){issue(path,code,id?[id]:[]);coverage.notEvaluated.push({requestId:id,path,reasonCode:code});return}
  const v=r as Record<string,unknown>
  const origin=Object.hasOwn(v,'source')?(source(v.source)?v.source:null):rootSource
  if(!origin)issue(`${path}.source`,'MISSING_PROVENANCE',[id!])
  requests.push({requestId:id!,kind:v.kind as string,purpose:v.purpose as string,basis:v.basis as 'PLANNED'|'OBSERVED',input:v.input,source:origin,requestPath:path,...(text(v.originalMethodLabel)?{originalMethodLabel:v.originalMethodLabel}:{})})
 })
 return {ok:true,snapshot:{schemaVersion:'ver-001/1',snapshotId:text(input.snapshotId)?input.snapshotId:null,planVersion:text(input.planVersion)?input.planVersion:null,source:rootSource,requests},issues,coverage}
}
