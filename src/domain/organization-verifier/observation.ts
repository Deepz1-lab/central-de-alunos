import {record,text,source} from './input'
import {relation} from './report'
import type {Request,RelationResult,JsonValue} from './types'
export function verifyObservation(r:Request):RelationResult[]{
 const p=r.input
 if(!record(p))return [relation({...r,source:null},'observed','V-R10',null,null,['DEPENDENCIA_NAO_MAPEADA'])]
 const origin=source(p.observedSource)?p.observedSource:null
 const raw=(p.observed??null) as JsonValue,reasons:string[]=[]
 if(raw===null)reasons.push('OBSERVACAO_AUSENTE')
 if(!origin)reasons.push('MISSING_PROVENANCE')
 if(!text(p.variable)||!text(p.unit))reasons.push('CONTEXTO_DA_OBSERVACAO_AUSENTE')
 const result=relation({...r,source:origin},'observed','V-R10',raw,text(p.unit)?p.unit:null,reasons,undefined,(p.target??null) as JsonValue,[`${r.requestPath}.input.observed`,`${r.requestPath}.input.observedSource`,`${r.requestPath}.input.variable`,`${r.requestPath}.input.unit`])
 if(reasons.length)result.suggestedQuality='CONTEXTO_INSUFICIENTE'
 return [result]
}
