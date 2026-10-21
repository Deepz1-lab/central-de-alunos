import type {Actor,StudentProfile,CoachSummary,CorrectionRequest,SummaryAction} from './types';
const required=(value:string)=>{if(!value.trim())throw new Error('Informe o conteúdo e o motivo antes de continuar.');};
const owner=(summary:CoachSummary,actor:Actor)=>{if(actor.role!=='coach'||actor.userId!==summary.coachUserId)throw new Error('Somente o treinador responsável pode decidir.');};
/** Ajuda de apresentação; a autorização efetiva é sempre aplicada no banco. */
export function canStudentSeeSummary(actor:Actor,student:StudentProfile,summary:CoachSummary):boolean {
 return actor.role==='student'&&actor.userId===student.studentUserId&&student.id===summary.studentId&&student.coachUserId===summary.coachUserId&&student.linkStatus==='active'&&summary.publicationStatus==='released'&&summary.recordStatus!=='draft';
}
export function transitionSummary(summary:CoachSummary,action:SummaryAction,actor:Actor,at:string):CoachSummary {
 owner(summary,actor);
 if(action==='approve'){
  if(summary.recordStatus!=='draft')throw new Error('Esta versão já foi revisada.');required(summary.objectiveConfirmed);
  return {...summary,recordStatus:'approved',approvedBy:actor.userId,approvedAt:at};
 }
 if(action==='release'){
  if(summary.recordStatus!=='approved'||summary.publicationStatus!=='internal')throw new Error('Revise e aprove esta versão antes de liberar.');
  return {...summary,publicationStatus:'released',releasedAt:at};
 }
 if(summary.publicationStatus!=='released')throw new Error('Somente conteúdo liberado pode ser suspenso.');
 return {...summary,publicationStatus:'suspended'};
}
export function requestCorrection(actor:Actor,student:StudentProfile,summary:CoachSummary,proposedValue:string,reason:string,id:string,at:string):CorrectionRequest {
 if(!canStudentSeeSummary(actor,student,summary))throw new Error('Registro indisponível.');required(proposedValue);required(reason);
 return {id,studentId:student.id,summaryId:summary.id,requestedBy:actor.userId,proposedValue:proposedValue.trim(),reason:reason.trim(),requestStatus:'pending',reviewedBy:null,reviewedAt:null,decisionReason:null};
}
export function reviewCorrection(summary:CoachSummary,request:CorrectionRequest,actor:Actor,decision:'accept'|'reject',reason:string,newId:string,at:string):{summary:CoachSummary;request:CorrectionRequest}{
 owner(summary,actor);required(reason);
 if(request.summaryId!==summary.id||request.studentId!==summary.studentId||request.requestStatus!=='pending')throw new Error('Pedido já revisado ou vínculo incompatível.');
 const reviewed:CorrectionRequest={...request,requestStatus:decision==='accept'?'accepted':'rejected',reviewedBy:actor.userId,reviewedAt:at,decisionReason:reason.trim()};
 if(decision==='reject')return {summary,request:reviewed};
 required(request.proposedValue);
 return {summary:{...summary,id:newId,objectiveConfirmed:request.proposedValue,version:summary.version+1,previousVersionId:summary.id,recordStatus:'draft',publicationStatus:'internal',approvedBy:null,approvedAt:null,releasedAt:null},request:reviewed};
}
