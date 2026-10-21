import { describe,it,expect } from 'vitest';
import { canStudentSeeSummary,transitionSummary,requestCorrection,reviewCorrection } from '../../src/domain/flow';
const coach={userId:'coach-a',role:'coach'} as const;
const pupil={userId:'user-a',role:'student'} as const;
const student={id:'student-a',coachUserId:'coach-a',studentUserId:'user-a',displayName:'Aluno fictício A',linkStatus:'active'} as const;
const draft={id:'summary-1',studentId:'student-a',coachUserId:'coach-a',objectiveReported:'Praticar com regularidade',objectiveConfirmed:'Construir uma rotina semanal',recordStatus:'draft',publicationStatus:'internal',version:1,previousVersionId:null,approvedBy:null,approvedAt:null,releasedAt:null} as const;
const at='2026-10-19T12:00:00Z';
describe('publicação e identidade',()=>{
 it('aprovar preserva a publicação interna e o objetivo relatado',()=>{
  const result=transitionSummary(draft,'approve',coach,at);
  expect(result.recordStatus).toBe('approved');expect(result.publicationStatus).toBe('internal');expect(result.objectiveReported).toBe('Praticar com regularidade');expect(draft.recordStatus).toBe('draft');
 });
 it('não aprova objetivo vazio',()=>expect(()=>transitionSummary({...draft,objectiveConfirmed:'  '},'approve',coach,at)).toThrow());
 it('aluno e treinador de outra carteira não aprovam',()=>{
  expect(()=>transitionSummary(draft,'approve',pupil,at)).toThrow();expect(()=>transitionSummary(draft,'approve',{userId:'coach-b',role:'coach'},at)).toThrow();
 });
 it('não publica rascunho',()=>expect(()=>transitionSummary(draft,'release',coach,at)).toThrow());
 it('libera somente depois de aprovação explícita',()=>{
  const approved=transitionSummary(draft,'approve',coach,at);expect(canStudentSeeSummary(pupil,student,approved)).toBe(false);
  expect(canStudentSeeSummary(pupil,student,transitionSummary(approved,'release',coach,at))).toBe(true);
 });
 it('nega aluno errado, associação errada e vínculo suspenso/encerrado',()=>{
  const released={...draft,recordStatus:'approved',publicationStatus:'released'} as const;
  expect(canStudentSeeSummary({userId:'user-b',role:'student'},student,released)).toBe(false);
  expect(canStudentSeeSummary(pupil,student,{...released,studentId:'student-b'})).toBe(false);
  for(const linkStatus of ['suspended','closed'] as const)expect(canStudentSeeSummary(pupil,{...student,linkStatus},released)).toBe(false);
 });
});
describe('correção preserva o histórico',()=>{
 const released={...draft,recordStatus:'approved',publicationStatus:'released'} as const;
 it('pedido não altera o resumo e não aceita ator de outro aluno',()=>{
  const req=requestCorrection(pupil,student,released,'Treinar duas vezes na semana','Ajustar disponibilidade','req-1',at);
  expect(req.requestStatus).toBe('pending');expect(released.objectiveConfirmed).toBe('Construir uma rotina semanal');
  expect(()=>requestCorrection({userId:'user-b',role:'student'},student,released,'outro','motivo','req-2',at)).toThrow();
 });
 it('aceite cria novo rascunho interno vinculado ao anterior',()=>{
  const req=requestCorrection(pupil,student,released,'Treinar duas vezes na semana','Nova preferência','req-1',at);
  const result=reviewCorrection(released,req,coach,'accept','Confirmado na conversa','summary-2',at);
  expect(result.summary).toMatchObject({id:'summary-2',version:2,previousVersionId:'summary-1',recordStatus:'draft',publicationStatus:'internal',approvedBy:null,objectiveConfirmed:'Treinar duas vezes na semana'});
  expect(result.request.requestStatus).toBe('accepted');expect(released.publicationStatus).toBe('released');
 });
 it('rejeição conserva resumo e exige motivo; decisão repetida é negada',()=>{
  const req=requestCorrection(pupil,student,released,'Outra meta','Revisão','req-1',at);
  expect(()=>reviewCorrection(released,req,coach,'reject','','summary-2',at)).toThrow();
  const result=reviewCorrection(released,req,coach,'reject','Vamos esclarecer primeiro','summary-2',at);
  expect(result.summary).toBe(released);expect(result.request.requestStatus).toBe('rejected');
  expect(()=>reviewCorrection(released,result.request,coach,'accept','sim','summary-3',at)).toThrow();
 });
});
