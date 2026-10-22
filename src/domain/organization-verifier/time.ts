import {record,text,finite} from './input'
import {duplicateIds} from './integrity'
import {relation} from './report'
import {toSeconds} from './units'
import type {Request,RelationResult} from './types'
type Interval={id:string;taskId:string;start:number|null;end:number|null;role:string;recoveryKey:string|null;concurrencyGroupId:string|null;valid:boolean}
export function verifyTimeline(r:Request):RelationResult[]{
 const p=r.input
 if(!record(p)||!Array.isArray(p.intervals)||!Array.isArray(p.simultaneityGroups))return [relation(r,'elapsed','V-R07',null,'s',['DEPENDENCIA_NAO_MAPEADA']),relation(r,'work-clock','V-R07',null,'s',['DEPENDENCIA_NAO_MAPEADA'])]
 const reasons=new Set<string>(),duplicates=duplicateIds(p.intervals,'id')
 const boundary=record(p.boundary)&&finite(p.boundary.start)&&finite(p.boundary.end)&&p.boundary.start>=0&&p.boundary.end>=p.boundary.start?{start:p.boundary.start,end:p.boundary.end}:null
 const intervals:Interval[]=[]
 for(const raw of p.intervals){
  if(!record(raw)||!text(raw.id)||!text(raw.taskId)){reasons.add('INVALID_STRUCTURE');continue}
  const valid=finite(raw.start)&&finite(raw.end)&&raw.start>=0&&raw.end>=raw.start&&(raw.role!=='WORK'||raw.end>raw.start)&&['WORK','PREPARATION','OTHER'].includes(raw.role as string)
  if(!valid)reasons.add('TEMPO_AUSENTE_OU_INVALIDO')
  if(duplicates.has(raw.id))reasons.add('IDENTIFICADOR_DUPLICADO')
  if(valid&&boundary&&((raw.start as number)<boundary.start||(raw.end as number)>boundary.end))reasons.add('FORA_DA_FRONTEIRA')
  intervals.push({id:raw.id,taskId:raw.taskId,start:finite(raw.start)?raw.start:null,end:finite(raw.end)?raw.end:null,role:typeof raw.role==='string'?raw.role:'',recoveryKey:text(raw.recoveryKey)?raw.recoveryKey:null,concurrencyGroupId:text(raw.concurrencyGroupId)?raw.concurrencyGroupId:null,valid:valid&&!duplicates.has(raw.id)})
 }
 const valid=intervals.filter(x=>x.valid).sort((a,b)=>a.start!-b.start!)
 let overlap=false
 for(let i=0;i<valid.length;i++)for(let j=i+1;j<valid.length&&valid[j].start!<valid[i].end!;j++){
  const a=valid[i],b=valid[j]
  if(a.start===a.end||b.start===b.end)continue
  if(!a.concurrencyGroupId||a.concurrencyGroupId!==b.concurrencyGroupId||!p.simultaneityGroups.includes(a.concurrencyGroupId))overlap=true
 }
 if(overlap)reasons.add('SOBREPOSICAO_NAO_EXPLICADA')
 const work=valid.filter(x=>x.role==='WORK')
 let clock=0,end=-Infinity
 for(const w of work){clock+=Math.max(0,w.end!-Math.max(end,w.start!));end=Math.max(end,w.end!)}
 const sum=work.reduce((a,x)=>a+x.end!-x.start!,0)
 const complete=p.coverageComplete===true&&intervals.length===p.intervals.length&&intervals.every(x=>x.valid)
 const clockValid=complete&&!overlap&&!reasons.has('FORA_DA_FRONTEIRA')&&Number.isFinite(clock)
 const sumValid=complete&&Number.isFinite(sum)
 const results=[relation(r,'elapsed','V-R07',boundary?boundary.end-boundary.start:null,'s',boundary?[]:['FRONTEIRA_AUSENTE']),relation(r,'work-clock','V-R07',clockValid?clock:null,'s',clockValid?[]:[...reasons,...(!complete?['COBERTURA_INCOMPLETA']:[])]),relation(r,'work-task-sum','V-R07',sumValid?sum:null,'s',sumValid?[]:['TEMPO_AUSENTE_OU_INVALIDO'])]
 const byKey=new Map<string,Interval[]>()
 for(const i of intervals)if(i.role==='WORK'&&i.recoveryKey){const list=byKey.get(i.recoveryKey)??[];list.push(i);byKey.set(i.recoveryKey,list)}
 for(const [key,list]of byKey){
  const ordered=list.every(x=>finite(x.start))?[...list].sort((a,b)=>a.start!-b.start!):list
  for(let i=1;i<ordered.length;i++){
   const prev=ordered[i-1],next=ordered[i]
   const gap=prev.valid&&next.valid?next.start!-prev.end!:null
   const usable=gap!==null&&gap>=0&&Number.isFinite(gap)
   results.push(relation(r,`recovery:${encodeURIComponent(key)}:${encodeURIComponent(next.id)}`,'V-R07',usable?gap:null,'s',usable?[]:['RECUPERACAO_NAO_CALCULAVEL']))
  }
 }
 return results
}
export function verifyBudget(r:Request):RelationResult[]{
 const p=r.input
 if(!record(p)||!Array.isArray(p.components)||!['s','min'].includes(p.outputUnit as string))return [relation(r,'range','V-R08',null,null,['DEPENDENCIA_NAO_MAPEADA'])]
 const unit=p.outputUnit as string,factor=unit==='min'?60:1,reasons=new Set<string>()
 const duplicates=duplicateIds(p.components,'id'),components=new Map<string,Record<string,unknown>>()
 for(const c of p.components){if(!record(c)||!text(c.id)){reasons.add('INVALID_STRUCTURE');continue}components.set(c.id,c)}
 let min=0,max=0
 for(const c of components.values()){
  let usable=true,current=c
  const seen=new Set<string>()
  while(true){
   const id=current.id as string
   if(seen.has(id)){reasons.add('CICLO_DE_INCLUSAO');usable=false;break}seen.add(id)
   if(duplicates.has(id)){reasons.add('IDENTIFICADOR_DUPLICADO');usable=false;break}
   if(!finite(current.min)||!finite(current.max)||current.min<0||current.max<current.min||!text(current.unit)||toSeconds(current.min,current.unit)===null||toSeconds(current.max,current.unit)===null){reasons.add('FAIXA_INVALIDA');usable=false;break}
   if(current.includedIn===null)break
   if(current.includedIn==='UNKNOWN'||!text(current.includedIn)){reasons.add('INCLUSAO_DESCONHECIDA');usable=false;break}
   const parent=components.get(current.includedIn)
   if(!parent){reasons.add('REFERENCIA_INEXISTENTE');usable=false;break}current=parent
  }
  if(usable&&c.includedIn===null){min+=toSeconds(c.min as number,c.unit as string)!;max+=toSeconds(c.max as number,c.unit as string)!}
 }
 const numeric=Number.isFinite(min)&&Number.isFinite(max)
 if(!numeric)reasons.add('NUMERIC_OVERFLOW')
 if(p.coverageComplete!==true)reasons.add('COBERTURA_INCOMPLETA')
 const complete=reasons.size===0,range=complete?[min/factor,max/factor]:null
 let limit:number|null=null
 if(record(p.limit)&&finite(p.limit.value)&&p.limit.value>=0&&text(p.limit.unit))limit=toSeconds(p.limit.value,p.limit.unit)
 const classification=complete&&limit!==null?(max<=limit?'CABE_NAS_HIPOTESES':min>limit?'TODA_FAIXA_EXCEDE':'PODE_EXCEDER'):null
 return [relation(r,'range','V-R08',range,unit,[...reasons]),relation(r,'known-subtotal','V-R08',numeric?[min/factor,max/factor]:null,unit,numeric?[]:['NUMERIC_OVERFLOW']),relation(r,'budget-class','V-R08',classification,null,classification===null?[...reasons,'LIMITE_OU_TOTAL_INDISPONIVEL']:[],p.limit===null?'NAO_APLICAVEL':undefined)]
}
