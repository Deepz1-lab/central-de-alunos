import type {Request,ResultFields,RelationResult,SnapshotV1,InputIssue,CoverageSeed,VerificationReport,JsonValue,CalculationStatus} from './types'
export function makeResult(request:Request,suffix:string,fields:ResultFields):RelationResult {
 return {relationId:`${request.requestId}:${suffix}`,requestId:request.requestId,purpose:request.purpose,basis:request.basis,source:request.source??null,ruleVersion:'0.1',...fields}
}
export function relation(request:Request,suffix:string,ruleId:string,derived:JsonValue,unit:string|null=null,reasons:string[]=[],status?:CalculationStatus,declared:JsonValue=null,paths:string[]=[`${request.requestPath}.input`]):RelationResult {
 const calculationStatus=status??(derived===null?'NAO_CALCULAVEL':'CALCULADO')
 return makeResult(request,suffix,{ruleId,derived,declared,unit,calculationStatus,difference:null,inputPaths:paths,reasonCodes:reasons,dependentUses:calculationStatus==='NAO_CALCULAVEL'?[`${request.purpose}:${suffix}`]:[],independentResultIds:[],suggestedQuality:calculationStatus==='DIVERGENTE'?'INCONSISTENTE':calculationStatus==='NAO_CALCULAVEL'?'CONTEXTO_INSUFICIENTE':null,impactReview:null,messageCode:reasons[0]??calculationStatus,message:calculationStatus==='CALCULADO'?`Relação ${suffix} calculada no escopo ${request.purpose}; não aprova o treino.`:calculationStatus==='NAO_APLICAVEL'?`Relação ${suffix} não se aplica ao escopo declarado.`:`Revisar relação ${suffix} no escopo ${request.purpose}: ${reasons.join(', ')||calculationStatus}. Resultados independentes conservam seu próprio estado.`})
}
export function buildReport(snapshot:SnapshotV1|null,issues:InputIssue[],results:RelationResult[],coverage:CoverageSeed,completedRequestIds:string[]):VerificationReport {
 return {snapshotId:snapshot?.snapshotId??null,schemaVersion:snapshot?.schemaVersion??null,engineVersion:'ver-001/0.1',inputIssues:issues,results,coverage:{...coverage,evaluated:completedRequestIds.length,limitations:['Conferências de organização; sem aprovação científica, clínica ou de execução.',...(!snapshot?['Retrato não interpretado.']:[]),...(coverage.notEvaluated.length?['Há pedidos não avaliados.']:[])]}}
}
