-- Local prototype: business writes are atomic, authorized and audited.
create schema if not exists private;
revoke all on schema private from public, anon, authenticated;
grant usage on schema private to authenticated;
alter default privileges in schema private revoke execute on functions from public;

create table public.coach_accounts (
 user_id uuid primary key references auth.users(id),
 display_name text not null check(length(trim(display_name)) between 1 and 160)
);
create table public.student_records (
 id uuid primary key default gen_random_uuid(),
 coach_user_id uuid not null references public.coach_accounts(user_id),
 student_user_id uuid not null unique references auth.users(id),
 display_name text not null check(length(trim(display_name)) between 1 and 160),
 link_status text not null default 'active' check(link_status in ('active','suspended','closed')),
 created_at timestamptz not null default now(),
 check(coach_user_id <> student_user_id)
);
create index student_coach_idx on public.student_records(coach_user_id);
create table public.intake_submissions (
 id uuid primary key default gen_random_uuid(),
 student_id uuid not null references public.student_records(id),
 objective_reported text not null check(length(trim(objective_reported)) between 1 and 2000),
 availability_reported text not null default '' check(length(availability_reported)<=2000),
 created_by uuid not null references auth.users(id),
 created_at timestamptz not null default clock_timestamp()
);
create index intake_student_idx on public.intake_submissions(student_id,created_at desc);
create table public.coach_summaries (
 id uuid primary key default gen_random_uuid(),
 student_id uuid not null references public.student_records(id),
 version_no integer not null check(version_no>0),
 previous_version_id uuid references public.coach_summaries(id),
 intake_id uuid references public.intake_submissions(id),
 objective_reported text not null,
 objective_confirmed text not null check(length(trim(objective_confirmed)) between 1 and 2000),
 record_status text not null default 'draft' check(record_status in ('draft','approved','superseded')),
 publication_status text not null default 'internal' check(publication_status in ('internal','released','suspended')),
 created_by uuid not null references auth.users(id),
 created_at timestamptz not null default clock_timestamp(),
 approved_by uuid references auth.users(id), approved_at timestamptz,
 released_at timestamptz,
 unique(student_id,version_no),
 check((record_status='draft' and approved_by is null and approved_at is null and publication_status='internal')
    or (record_status in ('approved','superseded') and approved_by is not null and approved_at is not null)),
 check((publication_status='internal' and released_at is null) or (publication_status in ('released','suspended') and released_at is not null))
);
create table public.correction_requests (
 id uuid primary key default gen_random_uuid(),
 student_id uuid not null references public.student_records(id),
 summary_id uuid not null references public.coach_summaries(id),
 proposed_value text not null check(length(trim(proposed_value)) between 1 and 2000),
 reason text not null check(length(trim(reason)) between 1 and 2000),
 request_status text not null default 'pending' check(request_status in ('pending','accepted','rejected')),
 created_by uuid not null references auth.users(id),
 created_at timestamptz not null default clock_timestamp(),
 reviewed_by uuid references auth.users(id), reviewed_at timestamptz, decision_reason text,
 resulting_summary_id uuid references public.coach_summaries(id),
 check((request_status='pending' and reviewed_by is null and reviewed_at is null and decision_reason is null and resulting_summary_id is null)
  or(request_status in ('accepted','rejected') and reviewed_by is not null and reviewed_at is not null and length(trim(decision_reason)) between 1 and 2000)),
 check((request_status='accepted')=(resulting_summary_id is not null))
);
create index corrections_student_idx on public.correction_requests(student_id,created_at desc);
create unique index one_pending_correction_per_summary on public.correction_requests(summary_id) where request_status='pending';
create table public.audit_events (
 id uuid primary key default gen_random_uuid(), student_id uuid not null references public.student_records(id),
 actor_user_id uuid not null references auth.users(id), event_type text not null,
 entity_id uuid not null, reason text, occurred_at timestamptz not null default clock_timestamp()
);
create index audit_student_idx on public.audit_events(student_id,occurred_at desc);

alter table public.coach_accounts enable row level security;
alter table public.student_records enable row level security;
alter table public.intake_submissions enable row level security;
alter table public.coach_summaries enable row level security;
alter table public.correction_requests enable row level security;
alter table public.audit_events enable row level security;
revoke all on public.coach_accounts,public.student_records,public.intake_submissions,public.coach_summaries,public.correction_requests,public.audit_events from anon,authenticated;
grant select on public.coach_accounts,public.student_records,public.intake_submissions,public.coach_summaries,public.correction_requests,public.audit_events to authenticated;
create policy own_coach on public.coach_accounts for select to authenticated using(user_id=(select auth.uid()));
create policy own_student on public.student_records for select to authenticated using(coach_user_id=(select auth.uid()) or (student_user_id=(select auth.uid()) and link_status='active'));
create policy read_intakes on public.intake_submissions for select to authenticated using(exists(select 1 from public.student_records s where s.id=student_id));
create policy read_summaries on public.coach_summaries for select to authenticated using(exists(select 1 from public.student_records s where s.id=student_id and (s.coach_user_id=(select auth.uid()) or publication_status='released')));
create policy read_corrections on public.correction_requests for select to authenticated using(exists(select 1 from public.student_records s where s.id=student_id));
create policy coach_audit on public.audit_events for select to authenticated using(exists(select 1 from public.student_records s where s.id=student_id and s.coach_user_id=(select auth.uid())));

-- Never exposed through the Data API. Locks serialize all mutations for a student.
create function private.lock_student(p_id uuid,p_coach boolean) returns public.student_records
language plpgsql security definer set search_path='' as $$
declare s public.student_records;
begin
 select * into s from public.student_records where id=p_id for update;
 if auth.uid() is null or s.id is null or p_coach is null or
   (p_coach and s.coach_user_id<>auth.uid()) or
   (not p_coach and (s.student_user_id<>auth.uid() or s.link_status<>'active')) then
  raise exception using errcode='42501',message='Registro indisponível para esta conta.';
 end if;
 return s;
end $$;
create function private.note(p_student uuid,p_type text,p_entity uuid,p_reason text default null) returns void
language sql security invoker set search_path='' as $$
 insert into public.audit_events(student_id,actor_user_id,event_type,entity_id,reason) values(p_student,auth.uid(),p_type,p_entity,p_reason);
$$;
create function private.require_text(p_value text) returns text
language plpgsql security invoker set search_path='' as $$
begin
 if p_value is null or length(trim(p_value)) not between 1 and 2000 then
  raise exception using errcode='22023',message='Preencha o texto solicitado (até 2000 caracteres).';
 end if;
 return trim(p_value);
end $$;

create function private.create_student(p_display_name text,p_email text) returns uuid
language plpgsql security definer set search_path='' as $$
declare target_user uuid; new_id uuid;
begin
 if auth.uid() is null or not exists(select 1 from public.coach_accounts where user_id=auth.uid()) then
  raise exception using errcode='42501',message='Operação disponível ao treinador.';
 end if;
 if p_display_name is null or length(trim(p_display_name)) not between 1 and 160 then
  raise exception using errcode='22023',message='Informe um nome de até 160 caracteres.';
 end if;
 select id into target_user from auth.users where lower(email)=lower(trim(p_email));
 if target_user is null or target_user=auth.uid() or exists(select 1 from public.coach_accounts where user_id=target_user) or exists(select 1 from public.student_records where student_user_id=target_user) then
  raise exception using errcode='22023',message='Conta de teste indisponível para cadastro.';
 end if;
 insert into public.student_records(coach_user_id,student_user_id,display_name) values(auth.uid(),target_user,trim(p_display_name)) returning id into new_id;
 perform private.note(new_id,'student_created',new_id);
 return new_id;
end $$;
create function private.submit_intake(p_student_id uuid,p_objective text,p_availability text) returns uuid
language plpgsql security definer set search_path='' as $$
declare new_id uuid;
begin
 perform private.lock_student(p_student_id,false);
 if p_availability is null or length(p_availability)>2000 then raise exception using errcode='22023',message='Confira a disponibilidade.'; end if;
 insert into public.intake_submissions(student_id,objective_reported,availability_reported,created_by)
 values(p_student_id,private.require_text(p_objective),trim(p_availability),auth.uid()) returning id into new_id;
 perform private.note(p_student_id,'intake_submitted',new_id); return new_id;
end $$;
create function private.save_summary(p_student_id uuid,p_objective text) returns uuid
language plpgsql security definer set search_path='' as $$
declare prev public.coach_summaries; intake public.intake_submissions; new_id uuid;
begin
 perform private.lock_student(p_student_id,true);
 select * into prev from public.coach_summaries where student_id=p_student_id order by version_no desc limit 1;
 select * into intake from public.intake_submissions where student_id=p_student_id order by created_at desc limit 1;
 insert into public.coach_summaries(student_id,version_no,previous_version_id,intake_id,objective_reported,objective_confirmed,created_by)
 values(p_student_id,coalesce(prev.version_no,0)+1,prev.id,intake.id,coalesce(intake.objective_reported,''),private.require_text(p_objective),auth.uid()) returning id into new_id;
 perform private.note(p_student_id,'summary_saved',new_id); return new_id;
end $$;
create function private.approve_summary(p_summary_id uuid) returns void
language plpgsql security definer set search_path='' as $$
declare summary public.coach_summaries;
begin
 select * into summary from public.coach_summaries where id=p_summary_id;
 perform private.lock_student(summary.student_id,true);
 select * into summary from public.coach_summaries where id=p_summary_id;
 if summary.record_status<>'draft' or exists(select 1 from public.coach_summaries where student_id=summary.student_id and version_no>summary.version_no) then
  raise exception using errcode='22023',message='Aprovação requer o rascunho mais recente.';
 end if;
 perform private.require_text(summary.objective_confirmed);
 update public.coach_summaries set record_status='approved',approved_by=auth.uid(),approved_at=clock_timestamp() where id=p_summary_id;
 perform private.note(summary.student_id,'summary_approved',p_summary_id);
end $$;
create function private.release_summary(p_summary_id uuid) returns void
language plpgsql security definer set search_path='' as $$
declare summary public.coach_summaries;
begin
 select * into summary from public.coach_summaries where id=p_summary_id;
 perform private.lock_student(summary.student_id,true);
 select * into summary from public.coach_summaries where id=p_summary_id;
 if summary.record_status<>'approved' or summary.publication_status<>'internal' or exists(select 1 from public.coach_summaries where student_id=summary.student_id and version_no>summary.version_no) then
  raise exception using errcode='22023',message='Liberação requer a versão atual aprovada e interna.';
 end if;
 update public.coach_summaries set record_status='superseded' where student_id=summary.student_id and publication_status='released' and record_status='approved';
 update public.coach_summaries set publication_status='released',released_at=clock_timestamp() where id=p_summary_id;
 perform private.note(summary.student_id,'summary_released',p_summary_id);
end $$;
create function private.request_correction(p_summary_id uuid,p_proposed text,p_reason text) returns uuid
language plpgsql security definer set search_path='' as $$
declare summary public.coach_summaries; new_id uuid;
begin
 select * into summary from public.coach_summaries where id=p_summary_id;
 perform private.lock_student(summary.student_id,false);
 select * into summary from public.coach_summaries where id=p_summary_id;
 if summary.record_status<>'approved' or summary.publication_status<>'released' or exists(select 1 from public.correction_requests where summary_id=p_summary_id and request_status='pending') then
  raise exception using errcode='22023',message='Pedido requer resumo atual liberado e sem pedido pendente.';
 end if;
 insert into public.correction_requests(student_id,summary_id,proposed_value,reason,created_by)
 values(summary.student_id,p_summary_id,private.require_text(p_proposed),private.require_text(p_reason),auth.uid()) returning id into new_id;
 perform private.note(summary.student_id,'correction_requested',new_id); return new_id;
end $$;
create function private.review_correction(p_request_id uuid,p_accept boolean,p_reason text) returns uuid
language plpgsql security definer set search_path='' as $$
declare req public.correction_requests; summary public.coach_summaries; new_id uuid; decision text;
begin
 select * into req from public.correction_requests where id=p_request_id;
 perform private.lock_student(req.student_id,true);
 select * into req from public.correction_requests where id=p_request_id;
 decision:=private.require_text(p_reason);
 if req.request_status<>'pending' or p_accept is null then raise exception using errcode='22023',message='Pedido já revisado ou decisão inválida.'; end if;
 if p_accept then
  select * into summary from public.coach_summaries where id=req.summary_id;
  if summary.record_status<>'approved' or summary.publication_status<>'released' or exists(select 1 from public.coach_summaries where student_id=req.student_id and version_no>summary.version_no) then
   raise exception using errcode='22023',message='Há uma versão posterior. Revise o contexto antes de criar outro rascunho.';
  end if;
  insert into public.coach_summaries(student_id,version_no,previous_version_id,intake_id,objective_reported,objective_confirmed,created_by)
  values(req.student_id,summary.version_no+1,summary.id,summary.intake_id,summary.objective_reported,req.proposed_value,auth.uid()) returning id into new_id;
 end if;
 update public.correction_requests set request_status=case when p_accept then 'accepted' else 'rejected' end,reviewed_by=auth.uid(),reviewed_at=clock_timestamp(),decision_reason=decision,resulting_summary_id=new_id where id=p_request_id;
 perform private.note(req.student_id,case when p_accept then 'correction_accepted' else 'correction_rejected' end,p_request_id,decision);
 return new_id;
end $$;
create function private.set_link_status(p_student_id uuid,p_status text,p_reason text) returns void
language plpgsql security definer set search_path='' as $$
begin
 perform private.lock_student(p_student_id,true);
 if p_status is null or p_status not in ('active','suspended','closed') then raise exception using errcode='22023',message='Situação inválida.'; end if;
 perform private.require_text(p_reason);
 update public.student_records set link_status=p_status where id=p_student_id;
 perform private.note(p_student_id,'link_changed',p_student_id,trim(p_reason));
end $$;

-- Narrow typed entrypoints; the private implementation validates the actor again.
create function public.create_student(p_display_name text,p_email text) returns uuid language sql security invoker set search_path='' as $$select private.create_student(p_display_name,p_email)$$;
create function public.submit_intake(p_student_id uuid,p_objective text,p_availability text) returns uuid language sql security invoker set search_path='' as $$select private.submit_intake(p_student_id,p_objective,p_availability)$$;
create function public.save_summary(p_student_id uuid,p_objective text) returns uuid language sql security invoker set search_path='' as $$select private.save_summary(p_student_id,p_objective)$$;
create function public.approve_summary(p_summary_id uuid) returns void language sql security invoker set search_path='' as $$select private.approve_summary(p_summary_id)$$;
create function public.release_summary(p_summary_id uuid) returns void language sql security invoker set search_path='' as $$select private.release_summary(p_summary_id)$$;
create function public.request_correction(p_summary_id uuid,p_proposed text,p_reason text) returns uuid language sql security invoker set search_path='' as $$select private.request_correction(p_summary_id,p_proposed,p_reason)$$;
create function public.review_correction(p_request_id uuid,p_accept boolean,p_reason text) returns uuid language sql security invoker set search_path='' as $$select private.review_correction(p_request_id,p_accept,p_reason)$$;
create function public.set_link_status(p_student_id uuid,p_status text,p_reason text) returns void language sql security invoker set search_path='' as $$select private.set_link_status(p_student_id,p_status,p_reason)$$;

revoke all on all functions in schema private from public,anon,authenticated;
grant execute on function private.create_student(text,text),private.submit_intake(uuid,text,text),private.save_summary(uuid,text),private.approve_summary(uuid),private.release_summary(uuid),private.request_correction(uuid,text,text),private.review_correction(uuid,boolean,text),private.set_link_status(uuid,text,text) to authenticated;
revoke all on function public.create_student(text,text),public.submit_intake(uuid,text,text),public.save_summary(uuid,text),public.approve_summary(uuid),public.release_summary(uuid),public.request_correction(uuid,text,text),public.review_correction(uuid,boolean,text),public.set_link_status(uuid,text,text) from public,anon,authenticated;
grant execute on function public.create_student(text,text),public.submit_intake(uuid,text,text),public.save_summary(uuid,text),public.approve_summary(uuid),public.release_summary(uuid),public.request_correction(uuid,text,text),public.review_correction(uuid,boolean,text),public.set_link_status(uuid,text,text) to authenticated;
