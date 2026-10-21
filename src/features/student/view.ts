import {el,card,form,field,value,type Run} from '../../ui/dom';
import type {Api,StudentRow,StudentData} from '../../lib/api';
export function studentView(api:Api,student:StudentRow,data:StudentData,run:Run){const main=el('main','','student-detail');main.append(el('p','SEU PERCURSO','eyebrow'),el('h2',`Olá, ${student.display_name}`),el('p','Seu objetivo e sua experiência ajudam a construir um acompanhamento que faça sentido para você.','lead'));
 const intake=data.intakes[0];
 main.append(card('O que você deseja construir?',el('p','Use apenas informações fictícias neste protótipo. Não inclua informações de saúde.','muted'),form('Enviar objetivo',[field('O que você deseja alcançar?','goal','textarea',intake?.objective_reported??''),field('Sua disponibilidade','availability','text',intake?.availability_reported??'',false)],d=>run(()=>api.rpc('submit_intake',{p_student_id:student.id,p_objective:value(d,'goal'),p_availability:value(d,'availability')}),'Seu objetivo foi enviado para revisão.'))));
 if(intake)main.append(card('Seu relato enviado',el('p',intake.objective_reported,'objective'),el('p','O treinador vai conversar com você e confirmar o caminho.','muted')));
 const current=data.summaries.find(s=>s.record_status==='approved'&&s.publication_status==='released');
 if(!current)main.append(card('Resumo do acompanhamento',el('p','Ainda não há resumo liberado.')));else{
  main.append(card('O que combinamos',el('span',`Versão ${current.version_no} · liberada pelo treinador`,'badge'),el('p',current.objective_confirmed,'objective'),el('p','Se algo não representa o que foi conversado, você pode pedir uma correção.','muted')));
  if(!data.corrections.some(r=>r.summary_id===current.id&&r.request_status==='pending'))main.append(card('Pedir uma correção',form('Solicitar correção',[field('Qual ajuste você solicita?','proposal','textarea'),field('Motivo do pedido','reason','textarea')],d=>run(()=>api.rpc('request_correction',{p_summary_id:current.id,p_proposed:value(d,'proposal'),p_reason:value(d,'reason')}),'Pedido enviado. O resumo atual foi preservado.'))));
 }
 for(const req of data.corrections){const released=data.summaries.some(s=>s.id===req.resulting_summary_id&&s.publication_status==='released');main.append(card('Seu pedido de correção',el('p',req.proposed_value),el('span',req.request_status==='pending'?'Em revisão pelo treinador':req.request_status==='accepted'?(released?'Aceito · versão liberada':'Aceito · nova versão em preparação'):'Decisão registrada','badge'),el('p',req.decision_reason??'O resumo atual permanece até a revisão.','muted')));}
 return main;
}
