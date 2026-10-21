-- A decision must refer to the exact report the trainer reviewed.
drop function public.save_summary(uuid,text);
drop function private.save_summary(uuid,text);
create function private.save_summary(p_student_id uuid,p_objective text,p_expected_intake_id uuid) returns uuid
language plpgsql security definer set search_path='' as $$
declare prev public.coach_summaries; intake public.intake_submissions; new_id uuid;
begin
 perform private.lock_student(p_student_id,true);
 select * into intake from public.intake_submissions where student_id=p_student_id order by created_at desc limit 1;
 if intake.id is distinct from p_expected_intake_id then
  raise exception using errcode='22023',message='O relato do aluno mudou. Atualize a página e confira antes de salvar.';
 end if;
 select * into prev from public.coach_summaries where student_id=p_student_id order by version_no desc limit 1;
 insert into public.coach_summaries(student_id,version_no,previous_version_id,intake_id,objective_reported,objective_confirmed,created_by)
 values(p_student_id,coalesce(prev.version_no,0)+1,prev.id,intake.id,coalesce(intake.objective_reported,''),private.require_text(p_objective),auth.uid()) returning id into new_id;
 perform private.note(p_student_id,'summary_saved',new_id); return new_id;
end $$;
create function public.save_summary(p_student_id uuid,p_objective text,p_expected_intake_id uuid) returns uuid
language sql security invoker set search_path='' as $$select private.save_summary(p_student_id,p_objective,p_expected_intake_id)$$;
revoke all on function private.save_summary(uuid,text,uuid),public.save_summary(uuid,text,uuid) from public,anon,authenticated;
grant execute on function private.save_summary(uuid,text,uuid),public.save_summary(uuid,text,uuid) to authenticated;

alter table public.audit_events add column previous_state text, add column new_state text;
create or replace function private.set_link_status(p_student_id uuid,p_status text,p_reason text) returns void
language plpgsql security definer set search_path='' as $$
declare previous public.student_records;
begin
 previous:=private.lock_student(p_student_id,true);
 if p_status is null or p_status not in ('active','suspended','closed') then raise exception using errcode='22023',message='Situação inválida.'; end if;
 perform private.require_text(p_reason);
 update public.student_records set link_status=p_status where id=p_student_id;
 insert into public.audit_events(student_id,actor_user_id,event_type,entity_id,reason,previous_state,new_state)
 values(p_student_id,auth.uid(),'link_changed',p_student_id,trim(p_reason),previous.link_status,p_status);
end $$;
notify pgrst, 'reload schema';
