import {createClient} from '@supabase/supabase-js';
import {validateLocalConfig} from './config';
export function makeLocalClient(){
 const {url,key}=validateLocalConfig(import.meta.env.VITE_SUPABASE_URL??'',import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY??'');
 return createClient(url,key,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:false}});
}
