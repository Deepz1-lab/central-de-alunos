import './styles.css';
import {makeLocalClient} from './lib/supabase';
import {makeApi} from './lib/api';
import {el,field,form,value,button,type Run} from './ui/dom';
import {coachView} from './features/coach/view';
import {studentView} from './features/student/view';
const app=document.querySelector<HTMLDivElement>('#app')!;
const header=el('header','','topbar');const mark=el('div','C','mark');const brand=el('div');brand.append(el('h1','Central de Alunos'),el('p','Conhecer · acompanhar · evoluir','small'));header.append(mark,brand);app.append(header);
app.append(el('div','Ambiente local de validação · somente dados fictícios','prototype'));
const notice=el('p','','notice');notice.setAttribute('role','status');notice.setAttribute('aria-live','polite');app.append(notice);
const content=el('div');app.append(content);
let api:ReturnType<typeof makeApi>;
let rendering=0;
const run:Run=async(fn,message='Alteração registrada.')=>{notice.className='notice';notice.textContent='Salvando…';try{await fn();notice.textContent=message;await render();}catch(e){notice.className='notice error';notice.textContent=e instanceof Error?e.message:'Não foi possível concluir. Confira o ambiente local e tente novamente.';}};
async function render(){const generation=++rendering;content.replaceChildren(el('p','Carregando acompanhamento…','notice'));header.querySelector('.account')?.remove();try{const ctx=await api.context();if(generation!==rendering)return;content.replaceChildren();
 if(!ctx){const main=el('main','','login');main.append(el('p','UM ACOMPANHAMENTO COM PROPÓSITO','eyebrow'),el('h2','Cada aluno tem um caminho.'),el('p','A Central organiza o percurso. A conversa e as decisões continuam com o treinador.','lead'),form('Entrar',[field('E-mail','email','email'),field('Senha','password','password')],d=>run(()=>api.signIn(value(d,'email'),value(d,'password')),'Bem-vindo à Central.')));content.append(main);return;}
 const account=el('div','','account');account.append(el('span',ctx.isCoach?'Área do treinador':'Área do aluno','small'),button('Sair',()=>void run(async()=>{await api.signOut();history.replaceState(null,'','/');},'Você saiu da Central.'),'secondary'));header.append(account);
 const requested=new URLSearchParams(location.search).get('aluno');const student=requested?ctx.students.find(s=>s.id===requested)??null:ctx.students[0]??null;const data=student?await api.studentData(student.id,ctx.isCoach):null;if(generation!==rendering)return;
 if(ctx.isCoach){content.append(coachView(api,ctx,student,data,run,id=>{history.replaceState(null,'',`?aluno=${encodeURIComponent(id)}`);void render();}));}
 else if(student&&data)content.append(studentView(api,student,data,run));else{const main=el('main','','login');main.append(el('h2','Registro indisponível'),el('p','Converse com seu treinador para conferir o vínculo de acesso.'));content.append(main);}
 }catch{notice.className='notice error';notice.textContent='Não foi possível carregar o acompanhamento. Confira se o ambiente local está em execução.';content.replaceChildren();}}
window.addEventListener('popstate',()=>void render());
try{api=makeApi(makeLocalClient());void render();}catch{content.append(el('main','','login'));content.firstElementChild!.append(el('p','PRIMEIRO FLUXO','eyebrow'),el('h2','Preparar ambiente local'),el('p','A prévia está pronta para receber o ambiente de teste. Consulte o arquivo LEIA-ME para concluir a configuração local.'))}
