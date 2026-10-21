import {it,expect} from 'vitest';
import {validateLocalConfig} from '../../src/lib/config';
it('recusa endpoint hospedado e chave privilegiada antes de criar cliente',()=>{
 expect(()=>validateLocalConfig('https://example.supabase.co','sb_publishable_test')).toThrow();
 expect(()=>validateLocalConfig('http://127.0.0.1:54321','sb_secret_test')).toThrow();
 const jwt=['eyJhbGciOiJIUzI1NiJ9',btoa(JSON.stringify({role:'service_role'})),'signature'].join('.');
 expect(()=>validateLocalConfig('http://localhost:54321',jwt)).toThrow();
});
it('aceita apenas endpoint HTTP local e chave pública',()=>{
 expect(validateLocalConfig('http://127.0.0.1:54321','sb_publishable_local')).toEqual({url:'http://127.0.0.1:54321',key:'sb_publishable_local'});
 expect(()=>validateLocalConfig('http://127.0.0.1.attacker.test:54321','sb_publishable_local')).toThrow();
 expect(()=>validateLocalConfig('http://user:password@localhost:54321','sb_publishable_local')).toThrow();
});
