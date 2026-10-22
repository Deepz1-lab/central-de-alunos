import {record,text,finite} from './input'
import {relation} from './report'
import type {Request,RelationResult} from './types'
export function verifyTrajectory(r:Request):RelationResult[]{
 const p=r.input
 if(!record(p)||!Array.isArray(p.stages))return [relation(r,'trajectory','V-R06',null,null,['DEPENDENCIA_NAO_MAPEADA'])]
 const stages=p.stages,known=stages.filter(s=>record(s)&&finite(s.value)).length
 const first=stages[0]
 const comparable=text(p.axis)&&stages.length>=2&&record(first)&&text(first.unit)&&text(first.conditionKey)&&stages.every(s=>record(s)&&finite(s.value)&&s.unit===first.unit&&s.conditionKey===first.conditionKey)
 let direction:string|null=null
 if(comparable){
  const values=stages.map(s=>(s as Record<string,unknown>).value as number)
  const pairs=values.slice(1).map((v,i)=>Math.sign(v-values[i]))
  direction=pairs.every(v=>v===1)?'CRESCENTE_ESTRITA':pairs.every(v=>v===-1)?'DECRESCENTE_ESTRITA':pairs.every(v=>v===0)?'CONSTANTE':'MISTA'
 }
 const declared=text(p.claimedDirection)?p.claimedDirection:null
 const divergent=direction!==null&&declared!==null&&direction!==declared
 return [relation(r,'trajectory','V-R06',direction,null,direction===null?['ETAPAS_INCOMPARAVEIS']:divergent?['DESCRICAO_DIVERGENTE']:[],divergent?'DIVERGENTE':undefined,declared),relation(r,'known-stage-count','V-R06',known,'STAGES'),relation(r,'stage-count','V-R06',stages.length,'STAGES')]
}
