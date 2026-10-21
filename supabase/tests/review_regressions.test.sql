begin;
select plan(8);
insert into auth.users(id,email) values
('20000000-0000-4000-8000-000000000001','review-coach@example.test'),
('20000000-0000-4000-8000-000000000002','review-student@example.test');
insert into public.coach_accounts values('20000000-0000-4000-8000-000000000001','Treinador revisão');
insert into public.student_records(id,coach_user_id,student_user_id,display_name) values
('30000000-0000-4000-8000-000000000001','20000000-0000-4000-8000-000000000001','20000000-0000-4000-8000-000000000002','Aluno revisão');
set local role authenticated;
set local request.jwt.claims='{"sub":"20000000-0000-4000-8000-000000000002","role":"authenticated"}';
select public.submit_intake('30000000-0000-4000-8000-000000000001','Relato A revisado pelo treinador','Manhã');
select public.submit_intake('30000000-0000-4000-8000-000000000001','Relato B enviado em outra sessão','Tarde');
set local request.jwt.claims='{"sub":"20000000-0000-4000-8000-000000000001","role":"authenticated"}';
select throws_ok($$select public.save_summary('30000000-0000-4000-8000-000000000001','Confirmado sobre A')$$,'42883',null,'Assinatura sem base revisada não permanece disponível');
select throws_ok($$select public.save_summary('30000000-0000-4000-8000-000000000001','Confirmado sobre A',(select id from public.intake_submissions order by created_at limit 1))$$,'22023',null,'Relato alterado exige nova conferência');
select is((select count(*) from public.coach_summaries),0::bigint,'Falha de base não grava resumo nem altera versão');
select lives_ok($$select public.save_summary('30000000-0000-4000-8000-000000000001','Confirmado sobre B',(select id from public.intake_submissions order by created_at desc limit 1))$$,'Base atual revisada permite salvar');
select is((select objective_reported from public.coach_summaries limit 1),'Relato B enviado em outra sessão','Snapshot corresponde à base revisada');
select public.set_link_status('30000000-0000-4000-8000-000000000001','suspended','Pausa combinada');
select is((select previous_state from public.audit_events where event_type='link_changed' order by occurred_at desc limit 1),'active','Histórico preserva estado anterior');
select is((select new_state from public.audit_events where event_type='link_changed' order by occurred_at desc limit 1),'suspended','Histórico preserva novo estado');
select public.set_link_status('30000000-0000-4000-8000-000000000001','active','Retorno combinado');
select is((select previous_state from public.audit_events where event_type='link_changed' order by occurred_at desc limit 1),'suspended','Reativação não apaga a suspensão anterior');
select * from finish();
rollback;
