begin;
create extension if not exists pgtap with schema extensions;
select plan(31);
insert into auth.users(id,email) values
('00000000-0000-4000-8000-000000000001','coach-a@example.test'),
('00000000-0000-4000-8000-000000000002','student-a@example.test'),
('00000000-0000-4000-8000-000000000003','student-b@example.test'),
('00000000-0000-4000-8000-000000000004','coach-b@example.test');
insert into public.coach_accounts(user_id,display_name) values
('00000000-0000-4000-8000-000000000001','Treinador fictício A'),
('00000000-0000-4000-8000-000000000004','Treinador fictício B');
insert into public.student_records(id,coach_user_id,student_user_id,display_name) values
('11000000-0000-4000-8000-000000000001','00000000-0000-4000-8000-000000000001','00000000-0000-4000-8000-000000000002','Aluno fictício A'),
('11000000-0000-4000-8000-000000000002','00000000-0000-4000-8000-000000000004','00000000-0000-4000-8000-000000000003','Aluno fictício B');
set local role authenticated;
set local request.jwt.claims='{"sub":"00000000-0000-4000-8000-000000000002","role":"authenticated"}';
select is((select count(*) from public.student_records),1::bigint,'TC51 aluno só vê próprio cadastro');
select is((select count(*) from public.student_records where id='11000000-0000-4000-8000-000000000002'),0::bigint,'TC51 ID direto não revela outro aluno');
select throws_ok($$update public.student_records set display_name='invasão'$$,'42501',null,'DML direto é negado');
select lives_ok($$select public.submit_intake('11000000-0000-4000-8000-000000000001','Praticar regularmente','Duas tardes')$$,'Aluno informa objetivo');
select throws_ok($$select public.submit_intake('11000000-0000-4000-8000-000000000002','Outro','')$$,'42501',null,'Não informa objetivo de outro aluno');
set local request.jwt.claims='{"sub":"00000000-0000-4000-8000-000000000001","role":"authenticated"}';
select is((select count(*) from public.student_records),1::bigint,'Treinador só vê própria carteira');
select throws_ok($$select public.save_summary('11000000-0000-4000-8000-000000000002','Objetivo indevido',null)$$,'42501',null,'Treinador não altera outra carteira');
select throws_ok($$select public.save_summary('11000000-0000-4000-8000-000000000001',' ',(select id from public.intake_submissions limit 1))$$,'22023',null,'Objetivo confirmado vazio é negado');
select throws_ok($$delete from public.audit_events$$,'42501',null,'Histórico não permite exclusão direta');
select public.save_summary('11000000-0000-4000-8000-000000000001','Construir rotina semanal',(select id from public.intake_submissions limit 1));
select public.approve_summary((select id from public.coach_summaries limit 1));
set local request.jwt.claims='{"sub":"00000000-0000-4000-8000-000000000002","role":"authenticated"}';
select is((select count(*) from public.coach_summaries),0::bigint,'TC55 aprovado mas não publicado fica interno');
set local request.jwt.claims='{"sub":"00000000-0000-4000-8000-000000000001","role":"authenticated"}';
select public.release_summary((select id from public.coach_summaries limit 1));
set local request.jwt.claims='{"sub":"00000000-0000-4000-8000-000000000002","role":"authenticated"}';
select is((select count(*) from public.coach_summaries),1::bigint,'Resumo liberado é visível ao aluno');
select public.request_correction((select id from public.coach_summaries limit 1),'Treinar duas vezes','Nova disponibilidade');
select is((select objective_confirmed from public.coach_summaries limit 1),'Construir rotina semanal','TC53 pedido não altera resumo');
select throws_ok($$select public.approve_summary((select id from public.coach_summaries limit 1))$$,'42501',null,'Aluno não aprova');
set local request.jwt.claims='{"sub":"00000000-0000-4000-8000-000000000001","role":"authenticated"}';
select public.review_correction((select id from public.correction_requests limit 1),true,'Conferido em conversa');
select is((select count(*) from public.coach_summaries),2::bigint,'TC54 nova versão preserva anterior');
select is((select publication_status from public.coach_summaries order by version_no desc limit 1),'internal','Nova versão não é publicada automaticamente');
select is((select record_status from public.coach_summaries order by version_no desc limit 1),'draft','Nova versão exige aprovação');
select throws_ok($$select public.release_summary((select id from public.coach_summaries order by version_no desc limit 1))$$,'22023',null,'Rascunho não pode ser publicado');
select throws_ok($$select public.approve_summary((select id from public.coach_summaries order by version_no limit 1))$$,'22023',null,'Versão antiga não pode ser reaprovada');
select throws_ok($$select public.review_correction((select id from public.correction_requests limit 1),true,'Repetido')$$,'22023',null,'Decisão repetida não duplica versão');
set local request.jwt.claims='{"sub":"00000000-0000-4000-8000-000000000002","role":"authenticated"}';
select public.request_correction((select id from public.coach_summaries limit 1),'Outro objetivo','Outro contexto');
set local request.jwt.claims='{"sub":"00000000-0000-4000-8000-000000000001","role":"authenticated"}';
select throws_ok($$select public.review_correction((select id from public.correction_requests where request_status='pending'),true,'Base desatualizada')$$,'22023',null,'Correção sobre versão anterior não sobrescreve novo rascunho');
select throws_ok($$select public.review_correction((select id from public.correction_requests where request_status='pending'),false,' ')$$,'22023',null,'Decisão exige motivo');
select lives_ok($$select public.review_correction((select id from public.correction_requests where request_status='pending'),false,'Já existe nova versão em revisão')$$,'Pedido desatualizado pode ser rejeitado com motivo');
select is((select count(*) from public.coach_summaries),2::bigint,'Rejeição preserva versões');
select public.set_link_status('11000000-0000-4000-8000-000000000001','suspended','Pausa sintética');
set local request.jwt.claims='{"sub":"00000000-0000-4000-8000-000000000002","role":"authenticated"}';
select is((select count(*) from public.student_records),0::bigint,'TC52 vínculo suspenso nega acesso');
select is((select count(*) from public.coach_summaries),0::bigint,'Link antigo não contorna suspensão');
select throws_ok($$select public.submit_intake('11000000-0000-4000-8000-000000000001','Novo relato','')$$,'42501',null,'Vínculo suspenso não envia relato');
set local request.jwt.claims='{"sub":"00000000-0000-4000-8000-000000000001","role":"authenticated"}';
select public.set_link_status('11000000-0000-4000-8000-000000000001','closed','Encerramento sintético');
select is((select count(*) from public.coach_summaries),2::bigint,'Treinador preserva histórico após encerramento');
set local request.jwt.claims='{"sub":"00000000-0000-4000-8000-000000000002","role":"authenticated"}';
select is((select count(*) from public.student_records),0::bigint,'Vínculo encerrado nega consulta de cadastro');
select is((select count(*) from public.coach_summaries),0::bigint,'Vínculo encerrado nega resumo');
set local role anon;
select throws_ok($$select * from public.student_records$$,'42501',null,'Anônimo não consulta cadastro');
reset role;
select ok((select count(*)>0 from public.audit_events),'Histórico de eventos foi preservado');
select * from finish();
rollback;
