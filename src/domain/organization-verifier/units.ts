import {record,text,finite} from './input'
import {relation} from './report'
import type {Request,RelationResult,JsonValue} from './types'
export function toSeconds(value:number,unit:string):number|null {const v=unit==='s'?value:unit==='min'?value*60:null;return v!==null&&Number.isFinite(v)?v:null}
export function verifyConversion(r:Request):RelationResult[]{
 const p=r.input
 if(!record(p)||!Array.isArray(p.values)||!text(p.targetUnit))return [relation(r,'total','V-R05',null,null,['DEPENDENCIA_NAO_MAPEADA'])]
 const target=p.targetUnit,temporal=target==='s'||target==='min'
 const rows=p.values.map((v,i)=>{
  let converted:number|null=null
  if(record(v)&&finite(v.value)&&text(v.unit)){
   if(v.unit===target)converted=v.value
   else if(temporal){const s=toSeconds(v.value,v.unit);converted=s===null?null:s/(target==='min'?60:1)}
  }
  return relation(r,`converted:${i}`,'V-R05',converted,target,converted===null?['UNIDADES_INCOMPATIVEIS']:[],undefined,v as JsonValue,[`${r.requestPath}.input.values[${i}]`,`${r.requestPath}.input.targetUnit`])
 })
 const sum=rows.every(x=>finite(x.derived))?rows.reduce((a,x)=>a+(x.derived as number),0):null
 const total=temporal&&sum!==null&&Number.isFinite(sum)?sum:null
 return [...rows,relation(r,'total','V-R05',total,target,!temporal?[]:total===null?['UNIDADES_INCOMPATIVEIS']:[],!temporal?'NAO_APLICAVEL':undefined)]
}
export function verifyComparison(r:Request):RelationResult[]{
 const p=r.input
 if(!record(p))return [relation(r,'comparison','V-R04',null,null,['DEPENDENCIA_NAO_MAPEADA'])]
 const tolerance=p.tolerance===undefined?0:p.tolerance
 const valid=finite(p.declared)&&finite(p.derived)&&text(p.unit)&&p.sameScope===true&&finite(tolerance)&&tolerance>=0
 const diff=valid?(p.declared as number)-(p.derived as number):null
 const usable=diff!==null&&Number.isFinite(diff)
 const divergent=usable&&Math.abs(diff)> (tolerance as number)
 const result=relation(r,'comparison','V-R04',usable?p.derived as number:null,text(p.unit)?p.unit:null,!usable?['INCOMPARAVEL']:divergent?['TOTAL_DIVERGENTE']:[],usable?(divergent?'DIVERGENTE':'CALCULADO'):'NAO_CALCULAVEL',(p.declared??null) as JsonValue)
 result.difference=usable?diff:null
 return [result]
}
