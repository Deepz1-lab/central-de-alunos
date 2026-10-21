import type {SupabaseClient} from '@supabase/supabase-js';
export interface StudentRow {id:string;coach_user_id:string;student_user_id:string;display_name:string;link_status:'active'|'suspended'|'closed'}
export interface IntakeRow {id:string;student_id:string;objective_reported:string;availability_reported:string;created_at:string}
export interface SummaryRow {id:string;student_id:string;version_no:number;objective_reported:string;objective_confirmed:string;record_status:string;publication_status:string;created_at:string;approved_at:string|null;released_at:string|null;previous_version_id:string|null}
export interface CorrectionRow {id:string;student_id:string;summary_id:string;proposed_value:string;reason:string;request_status:string;decision_reason:string|null;created_at:string;resulting_summary_id:string|null}
export interface AuditRow {id:string;event_type:string;occurred_at:string;reason:string|null;previous_state:string|null;new_state:string|null}
export interface StudentData {intakes:IntakeRow[];summaries:SummaryRow[];corrections:CorrectionRow[];audit:AuditRow[]}
export interface Context {userId:string;email:string;isCoach:boolean;students:StudentRow[]}
export function makeApi(db:SupabaseClient){
 async function context():Promise<Context|null>{
  const {data:{user}}=await db.auth.getUser();if(!user)return null;
  const coach=await db.from('coach_accounts').select('user_id').eq('user_id',user.id).maybeSingle();if(coach.error)throw coach.error;
  const students=await db.from('student_records').select('*').order('display_name');if(students.error)throw students.error;
  return {userId:user.id,email:user.email??'',isCoach:!!coach.data,students:students.data as StudentRow[]};
 }
 async function studentData(id:string,isCoach:boolean):Promise<StudentData>{
  const result=await Promise.all([db.from('intake_submissions').select('*').eq('student_id',id).order('created_at',{ascending:false}),db.from('coach_summaries').select('*').eq('student_id',id).order('version_no',{ascending:false}),db.from('correction_requests').select('*').eq('student_id',id).order('created_at',{ascending:false})]);
  for(const r of result)if(r.error)throw r.error;
  const audit=isCoach?await db.from('audit_events').select('id,event_type,occurred_at,reason,previous_state,new_state').eq('student_id',id).order('occurred_at',{ascending:false}):{data:[],error:null};if(audit.error)throw audit.error;
  return {intakes:result[0].data as IntakeRow[],summaries:result[1].data as SummaryRow[],corrections:result[2].data as CorrectionRow[],audit:audit.data as AuditRow[]};
 }
 async function rpc(name:string,params:Record<string,unknown>){const {data,error}=await db.rpc(name,params);if(error)throw new Error(error.message);return data;}
 return {context,studentData,rpc,signIn:async(email:string,password:string)=>{const {error}=await db.auth.signInWithPassword({email,password});if(error)throw new Error('Confira e-mail e senha da conta local.');},signOut:async()=>{const {error}=await db.auth.signOut();if(error)throw error;}};
}
export type Api=ReturnType<typeof makeApi>;
