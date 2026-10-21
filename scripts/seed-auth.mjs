import {execFileSync} from 'node:child_process';
import {writeFileSync} from 'node:fs';
import {createClient} from '@supabase/supabase-js';

// This utility never accepts a remote endpoint or prints administrative credentials.
const cli='node_modules/supabase/dist/supabase.js';
const status=JSON.parse(execFileSync(process.execPath,[cli,'status','-o','json'],{encoding:'utf8',stdio:['ignore','pipe','pipe']}));
if(status.API_URL!=='http://127.0.0.1:54321')throw new Error('Preparação permitida somente no Supabase local deste projeto.');
export const local={url:status.API_URL,key:status.PUBLISHABLE_KEY??status.ANON_KEY};
const admin=createClient(local.url,status.SECRET_KEY??status.SERVICE_ROLE_KEY,{auth:{persistSession:false,autoRefreshToken:false}});
const password='CentralLocal!2026';
const {data:listed,error:listError}=await admin.auth.admin.listUsers({perPage:1000});
if(listError)throw new Error('Não foi possível consultar as contas sintéticas locais.');
async function account(email){
 const existing=listed.users.find(u=>u.email===email);if(existing)return existing.id;
 const {data,error}=await admin.auth.admin.createUser({email,password,email_confirm:true});
 if(error)throw new Error('Não foi possível preparar uma conta sintética local.');
 return data.user.id;
}
const coach=await account('treinador@central.test');
const coachB=await account('treinador-b@central.test');
const a=await account('aluno-a@central.test');const b=await account('aluno-b@central.test');
// A fresh, unlinked account makes repeated browser runs independent without deleting history.
export const studentEmail=`aluno-c-${Date.now()}@central.test`;
await account(studentEmail);
for(const id of [coach,coachB,a,b])if(!/^[0-9a-f-]{36}$/i.test(id))throw new Error('Identificador de teste inválido.');
const sql=`insert into public.coach_accounts(user_id,display_name) values
('${coach}','Treinador fictício A'),('${coachB}','Treinador fictício B') on conflict do nothing;
insert into public.student_records(id,coach_user_id,student_user_id,display_name) values
('10000000-0000-4000-8000-000000000001','${coach}','${a}','Aluno fictício A'),
('10000000-0000-4000-8000-000000000002','${coachB}','${b}','Aluno fictício B') on conflict do nothing;`;
for(const statement of sql.split(';').filter(s=>s.trim())){
 execFileSync(process.execPath,[cli,'db','query','--local',statement],{stdio:['ignore','pipe','pipe']});
}
writeFileSync('.env.local',`VITE_SUPABASE_URL=${local.url}\nVITE_SUPABASE_PUBLISHABLE_KEY=${local.key}\n`);
console.log('Contas fictícias preparadas; arquivo local contém somente a configuração pública.');
