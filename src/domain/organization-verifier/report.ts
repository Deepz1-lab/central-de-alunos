import type {Request,ResultFields,RelationResult,SnapshotV1,InputIssue,CoverageSeed,VerificationReport,JsonValue,CalculationStatus} from './types'
import {fieldPaths} from './input'
const explanations:Record<string,string>={
 IDENTIFICADOR_DUPLICADO:'O mesmo identificador foi declarado mais de uma vez; as parcelas dependentes não foram deduplicadas.',
 INVALID_STRUCTURE:'Há uma linha sem identidade ou estrutura necessária; confira os campos de origem indicados.',
 INVALID_UNIT:'A unidade pedida não é uma unidade de contagem suportada; não foi atribuída à conta.',
 TEMPO_AUSENTE_OU_INVALIDO:'Falta um início/fim válido ou a duração de trabalho não é positiva; não foi substituída por zero.',
 ETAPAS_INCOMPARAVEIS:'A sequência tem valor ausente, unidade ou condição diferente; sua direção completa não pode ser inferida.',
 TOTAL_DIVERGENTE:'O total declarado difere da conta da estrutura; ambos foram preservados.',
 CICLO_DE_AGRUPAMENTO:'As referências de agrupamento formam um ciclo e não podem ser expandidas.',
 COBERTURA_INCOMPLETA:'A cobertura não é completa; o subtotal conhecido não representa o total.',
 DOSE_AUSENTE:'Uma ocorrência de sessão não possui dose conhecida; não foi preenchida com zero ou com outra sessão.',
 NATUREZAS_INCOMPATIVEIS:'Há dados previstos e observados distintos; o total único não foi produzido.',
 CONTENCAO_IMPOSSIVEL:'A duração mínima contida supera a duração máxima do bloco que a inclui; revise as faixas.',
 UNIDADES_INCOMPATIVEIS:'Não existe conversão autorizada entre essas unidades; os valores brutos foram preservados.',
 RECUPERACAO_NAO_CALCULAVEL:'Uma ocorrência da mesma chave tem identidade/tempo inválido ou sobreposição; o intervalo não foi inferido pulando essa ocorrência.',
 AGRUPAMENTO_NAO_INFORMADO:'Não foi explicitado se a contagem possui agrupamento; a conta independente foi preservada.',
 SOBREPOSICAO_NAO_EXPLICADA:'Intervalos se sobrepõem sem declaração de simultaneidade; revise a cronologia.',
}
export function makeResult(request:Request,suffix:string,fields:ResultFields):RelationResult {
 return {relationId:`${request.requestId}:${suffix}`,requestId:request.requestId,purpose:request.purpose,basis:request.basis,source:request.source??null,ruleVersion:'0.1',...fields}
}
export function relation(request:Request,suffix:string,ruleId:string,derived:JsonValue,unit:string|null=null,reasons:string[]=[],status?:CalculationStatus,declared:JsonValue=null,paths?:string[]):RelationResult {
 const calculationStatus=status??(derived===null?'NAO_CALCULAVEL':'CALCULADO')
 return makeResult(request,suffix,{ruleId,derived,declared,unit,calculationStatus,difference:null,inputPaths:paths??fieldPaths(request.input,`${request.requestPath}.input`),reasonCodes:reasons,dependentUses:calculationStatus==='NAO_CALCULAVEL'?[`${request.purpose}:${suffix}`]:[],independentResultIds:[],suggestedQuality:calculationStatus==='DIVERGENTE'?'INCONSISTENTE':calculationStatus==='NAO_CALCULAVEL'?'CONTEXTO_INSUFICIENTE':null,impactReview:null,messageCode:reasons[0]??calculationStatus,message:calculationStatus==='CALCULADO'?`Relação ${suffix} calculada no escopo ${request.purpose}; não aprova o treino.`:calculationStatus==='NAO_APLICAVEL'?`Relação ${suffix} não se aplica ao escopo declarado.`:`Revisar relação ${suffix} no escopo ${request.purpose}. ${reasons.map(code=>explanations[code]??`Pendência ${code}; consulte os campos de origem indicados.`).join(' ')} Resultados independentes conservam seu próprio estado.`})
}
export function buildReport(snapshot:SnapshotV1|null,issues:InputIssue[],results:RelationResult[],coverage:CoverageSeed,completedRequestIds:string[]):VerificationReport {
 return {snapshotId:snapshot?.snapshotId??null,schemaVersion:snapshot?.schemaVersion??null,engineVersion:'ver-001/0.1',inputIssues:issues,results,coverage:{...coverage,evaluated:completedRequestIds.length,limitations:['Conferências de organização; sem aprovação científica, clínica ou de execução.',...(!snapshot?['Retrato não interpretado.']:[]),...(coverage.notEvaluated.length?['Há pedidos não avaliados.']:[])]}}
}
