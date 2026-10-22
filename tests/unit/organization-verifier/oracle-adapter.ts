import type {RequestInput,VerificationReport,JsonValue,RelationResult} from '../../../src/domain/organization-verifier'
import {resultOf} from './helpers'
const source={id:'synthetic',version:'v1',locator:'test'}
export function snapshotFromRequests(requests:RequestInput[]):unknown{return {schemaVersion:'ver-001/1',snapshotId:'fixture-1',planVersion:'v1',source,requests}}
const req=(requestId:string,kind:string,input:unknown,extra:Partial<RequestInput>={}):RequestInput=>({requestId,kind,input,basis:'PLANNED',purpose:'conferencia_sintetica',...extra})
const series=(id:string,tasks:Record<string,number>)=>req(id,'COUNT',{mode:'SERIES_COUNTS',counts:Object.entries(tasks).map(([taskId,value])=>({taskId,value})),requestedUnit:'EXERCISE_SERIES',groupingApplicable:false})
const pattern=(id:string,rounds:unknown,tasks:string[],countPerRound:unknown=1,unit='EXERCISE_SERIES',extra={})=>req(id,'COUNT',{mode:'REPEATED_PATTERN',rounds,items:tasks.map(taskId=>({taskId,countPerRound,role:'WORK'})),requestedUnit:unit,groupingApplicable:true,...extra})
const obs=(id:string,target:unknown,observed:unknown,variable:string,unit:string)=>req(id,'OBSERVATION',{target,observed,variable,unit,observedSource:null},{purpose:'RELATO_OBSERVADO'})
const convert=(id:string,values:unknown[],targetUnit='s')=>req(id,'CONVERT',{values,targetUnit})
const trajectory=(id:string,axis:string,stages:unknown[])=>req(id,'TRAJECTORY',{axis,stages})
const occurrences=(id:string,rows:any[],unit='WORK_OCCURRENCES',groupingApplicable=false)=>req(id,'COUNT',{mode:'OCCURRENCES',requestedUnit:unit,groupingApplicable,occurrences:rows.map(o=>({...o,role:'WORK',exerciseSeriesId:o.exerciseSeriesId??null,groupPassageId:o.groupPassageId??null}))})
const timeline=(id:string,rows:any[],boundary:unknown=null,simultaneityGroups:string[]=[])=>req(id,'TIMELINE',{intervals:rows.map((x,i)=>({id:x.id??`${x.task}-${i}`,taskId:x.task,start:x.start,end:x.end,role:'WORK',recoveryKey:x.recoveryKey??null,concurrencyGroupId:x.concurrencyGroupId??null})),boundary,coverageComplete:true,simultaneityGroups})
const budget=(id:string,components:unknown[],coverageComplete:boolean,limitMinutes:number)=>req(id,'BUDGET',{components,coverageComplete,outputUnit:'min',limit:{value:limitMinutes,unit:'min'}})
const week=(id:string,sessions:unknown[],coverageComplete:boolean)=>req(id,'WEEK',{unit:'EXERCISE_SERIES',sessionOccurrences:sessions,coverageComplete})
// Input-only translation. The fragment defines the explicit representation; no expected object enters here.
export function adaptOracle(id:string,inputFragment:unknown):RequestInput[]{
 const f=inputFragment as any
 switch(id){
 case 'V-01':return [series('count',f.taskSeries)]
 case 'V-02':return [pattern('count',f.rounds,f.tasksPerRound,f.seriesPerTaskPerRound),timeline('time',f.plannedTimelineSeconds.map((x:any)=>({...x,recoveryKey:f.recoveryKeysExplicit?x.task:null})),{start:f.plannedTimelineSeconds[0].start,end:f.plannedTimelineSeconds.at(-1).end})]
 case 'V-03':return [pattern('count',f.rounds,f.tasksPerRound,f.seriesPerTaskPerRound)]
 case 'V-04':{
  const work:any[]=[],rest:any[]=[],components:any[]=[]
  for(let round=0;round<f.rounds;round++)for(let i=0;i<f.stations.length;i++){
   work.push({value:f.workSecondsPerVisit,unit:'s'});components.push({id:`w-${round}-${i}`,min:f.workSecondsPerVisit,max:f.workSecondsPerVisit,unit:'s',includedIn:null})
   if(f.includesLastRecovery||round<f.rounds-1||i<f.stations.length-1){rest.push({value:f.recoveryAndTransitionSecondsPerVisit,unit:'s'});components.push({id:`r-${round}-${i}`,min:f.recoveryAndTransitionSecondsPerVisit,max:f.recoveryAndTransitionSecondsPerVisit,unit:'s',includedIn:null})}
  }
  return [pattern('count',f.rounds,f.stations,1,'STATION_VISITS'),convert('work',work),convert('rest',rest),req('block','BUDGET',{components,coverageComplete:true,outputUnit:'s',limit:null}),obs('reps',null,f.repetitions,'repetitions','repetitions'),obs('equivalence',null,null,'muscle set equivalence','EXERCISE_SERIES')]
 }
 case 'V-05':{
  const rows:any[]=[],requests:RequestInput[]=[];const tasks=Object.keys(f.rounds[0])
  f.rounds.forEach((round:any,i:number)=>tasks.forEach(taskId=>rows.push({occurrenceId:`${taskId}-${i}`,taskId,exerciseSeriesId:f.seriesBoundariesExplicit?`${taskId}-${i}`:null,groupPassageId:`round-${i}`})))
  requests.push(occurrences('count',rows,'EXERCISE_SERIES',true))
  for(const t of tasks)requests.push(trajectory(t,f.axis,f.rounds.map((r:any,i:number)=>({value:r[t],unit:f.unit,conditionKey:f.sameTaskConditions?t:`${t}-${i}`}))))
  return requests
 }
 case 'V-06':return [req('count','COUNT',{mode:'REPEATED_PATTERN',rounds:f.rounds,items:f.tasks,requestedUnit:'WORK_OCCURRENCES',groupingApplicable:true},{originalMethodLabel:f.originalLabel}),req('time','TIMELINE',{intervals:null,simultaneityGroups:[],coverageComplete:false,boundary:null},{originalMethodLabel:f.originalLabel}),series('independent',{C:1})]
 case 'V-07':return [pattern('count',f.rounds,f.tasksPerRound,f.seriesPerTaskPerRound,'EXERCISE_SERIES',{declaredTotal:f.declaredTotalExerciseSeries}),series('independent',{C:1})]
 case 'V-08':return [...f.invalidRoundValues.map((n:number,i:number)=>pattern(`invalid${i}`,n,['A'])),series('independent',f.independentKnownTaskSeries)]
 case 'V-09':return [occurrences('count',f.workOccurrences)]
 case 'V-10':return [req('graph','INTEGRITY',{occurrences:[],groups:f.groups.map((x:any)=>({...x,occurrenceIds:[]}))}),series('independent',f.independentTaskSeries)]
 case 'V-11':return [obs('rir',f.rirTarget,f.rirObserved,'RIR','RIR'),obs('done',f.plannedExerciseSeries,f.observedExerciseSeries,'exercise series','EXERCISE_SERIES'),series('plan',{A:f.plannedExerciseSeries})]
 case 'V-12':return [convert('zero',[{value:f.declaredTransitionSeconds,unit:'s'}]),convert('missing',[{value:f.missingRecoverySeconds,unit:'s'}])]
 case 'V-13':return [convert('time',[f.durationA,f.durationB]),convert('force',[f.force],f.requestedLoadUnit)]
 case 'V-14':return [convert('sum',f.requestedSum)]
 case 'V-15':return [trajectory('trajectory',f.axis,f.values.map((value:any,i:number)=>({value,unit:f.unit,conditionKey:f.sameTaskConditions?'A':`A${i}`})))]
 case 'V-16':return [trajectory('trajectory',f.axis,f.workSeries.map((s:any)=>({value:s.load,unit:s.unit,conditionKey:f.deviceEquivalenceConfirmed?s.task:`${s.task}-${s.device}`}))),occurrences('count',f.workSeries.map((s:any,i:number)=>({occurrenceId:`s${i}`,taskId:s.task,exerciseSeriesId:`s${i}`})),'EXERCISE_SERIES')]
 case 'V-17':return [timeline('time',f.workOccurrences.map((s:any)=>({...s,recoveryKey:f.recoveryKey}))),occurrences('count',f.workOccurrences.map((s:any)=>({occurrenceId:s.id,taskId:s.task})))]
 case 'V-18':return [timeline('time',f.plannedIntervals,null,f.simultaneityExplicit?[...new Set<string>(f.plannedIntervals.map((x:any)=>x.concurrencyGroupId))]:[])]
 case 'V-19':{
  const components=f.blocksMinutes.map(([min,max]:number[],i:number)=>({id:`b${i}`,min,max,unit:'min',includedIn:null}))
  components.push({id:'reserve',min:f.reserveMinutes,max:f.reserveMinutes,unit:'min',includedIn:f.reserveIncludedInFirstBlock?'b0':null})
  return [budget('budget',components,f.coverageComplete,f.limitMinutes),obs('duration',null,null,'session duration','s')]
 }
 case 'V-20':return [...f.completeRangesMinutes.map(([min,max]:number[],i:number)=>budget(`budget${i}`,[{id:'b',min,max,unit:'min',includedIn:null}],true,f.limitMinutes)),obs('excess',null,null,'observed excess','s')]
 case 'V-21':return [budget('budget',f.knownSequentialBlockMinutes.map((n:number,i:number)=>({id:`b${i}`,min:n,max:n,unit:'min',includedIn:null})),!f.unknownAdditionalBlocks,f.limitMinutes)]
 case 'V-22':return [week('week',f.plannedSessionOccurrences.map((s:any)=>({id:s.id,sessionVersion:s.version,basis:'PLANNED',counts:[{taskId:'A',value:s.taskASeries}]})),f.coverageComplete),obs('done',null,null,'observed series','EXERCISE_SERIES')]
 case 'V-23':return [week('week',[...f.knownPlannedSessionSeries.map((n:number,i:number)=>({id:`s${i}`,sessionVersion:'v1',basis:'PLANNED',counts:[{taskId:'A',value:n}]})),...(f.missingSessionDose?[{id:'missing',sessionVersion:'v1',basis:'PLANNED',counts:null}]:[])],f.coverageComplete)]
 case 'V-24':return [{...series('count',f.explicitWorkSeriesByTask),originalMethodLabel:f.originalMethodLabel}]
 default:throw new Error(`Unmapped oracle ${id}`)
 }
}
// Safety projections inspect absence of forbidden capabilities. They never turn a calculation into approval.
const forbidden=(r:VerificationReport,key:string)=>Object.hasOwn(r,key)||r.results.some(x=>Object.hasOwn(x,key))
export function projectOracle(id:string,report:VerificationReport):JsonValue{
 const r=(name:string,suffix:string)=>resultOf(report,`${name}:${suffix}`)
 const d=(name:string,suffix:string)=>r(name,suffix).derived
 const status=(name:string,suffix:string)=>r(name,suffix).calculationStatus
 const byTask=(name:string)=>Object.fromEntries(report.results.filter(x=>x.requestId===name&&x.relationId.startsWith(`${name}:task:`)).map(x=>[decodeURIComponent(x.relationId.slice(`${name}:task:`.length)),x.derived]))
 const count=()=>({calculationStatus:status('count','total'),groupRounds:d('count','group-rounds'),seriesByTask:byTask('count'),totalExerciseSeries:d('count','total')})
 const independent=(name:string)=>report.results.some(x=>x.requestId===name&&x.calculationStatus==='CALCULADO')
 switch(id){
 case 'V-01':return {calculationStatus:status('count','total'),taskSeries:byTask('count'),totalExerciseSeries:d('count','total'),groupRounds:d('count','group-rounds'),groupRoundsStatus:status('count','group-rounds')}
 case 'V-02':return {...count(),blockSeconds:d('time','elapsed'),sameTaskRecoverySeconds:{A:d('time','recovery:A:A-2'),B:d('time','recovery:B:B-3')},physiologicalRecoveryProven:forbidden(report,'physiologicalRecoveryProven')}
 case 'V-03':return count()
 case 'V-04':return {calculationStatus:status('count','total'),stationVisits:d('count','total'),workSeconds:d('work','total'),recoveryAndTransitionSeconds:d('rest','total'),blockSeconds:(d('block','range') as JsonValue[])[0],repetitions:d('reps','observed'),muscleSetEquivalence:d('equivalence','observed')}
 case 'V-05':return {...count(),loadDirectionByTask:{A:d('A','trajectory'),B:d('B','trajectory')},extraSeriesFromMethodName:report.results.filter(x=>x.ruleId==='METHOD_NAME_DOSE').length}
 case 'V-06':return {calculationStatus:status('count','total'),workCount:d('count','total'),blockSeconds:d('time','elapsed'),reason:r('time','elapsed').reasonCodes[0],suggestedDerivativeQuality:r('time','elapsed').suggestedQuality,invalidateIndependentData:!independent('independent')}
 case 'V-07':{const x=r('count','total');return {calculationStatus:x.calculationStatus,declared:x.declared,derived:x.derived,declaredMinusDerived:x.difference,automaticCorrection:forbidden(report,'automaticCorrection'),suggestedQuality:x.suggestedQuality,clinicalSeverity:x.impactReview,preserveIndependentData:independent('independent')}}
 case 'V-08':return {calculationStatus:status('invalid0','total'),invalidRoundValues:[r('invalid0','group-rounds').declared,r('invalid1','group-rounds').declared],dependentCount:d('invalid0','total'),independentKnownTaskSeries:byTask('independent'),clampOrRoundAutomatically:forbidden(report,'clampOrRoundAutomatically')}
 case 'V-09':return {calculationStatus:status('count','total'),reason:r('count','total').reasonCodes[0],dependentCountA:d('count','task:A'),independentOccurrenceCountC:d('count','task:C'),deduplicateAutomatically:forbidden(report,'deduplicateAutomatically')}
 case 'V-10':return {calculationStatus:status('graph','expansion'),reason:r('graph','expansion').reasonCodes[0],expandGroupX:d('graph','expansion')!==null,independentTaskSeries:byTask('independent')}
 case 'V-11':return {calculationStatus:status('rir','observed'),requestedUse:r('rir','observed').purpose,rirObserved:d('rir','observed'),observedExerciseSeries:d('done','observed'),plannedExerciseSeriesPreserved:d('plan','total'),progressionApproved:forbidden(report,'progressionApproved')}
 case 'V-12':return {zeroTransitionStatus:status('zero','converted:0'),transitionSeconds:d('zero','converted:0'),missingRecoveryStatus:status('missing','converted:0'),recoverySeconds:d('missing','converted:0'),readinessInferred:forbidden(report,'readinessInferred')}
 case 'V-13':return {timeStatus:status('time','total'),totalSeconds:d('time','total'),forceToMachineLoadStatus:status('force','converted:0'),machineLoad:d('force','converted:0'),preservedForce:r('force','converted:0').declared}
 case 'V-14':return {calculationStatus:status('sum','total'),reason:r('sum','total').reasonCodes[0],sum:d('sum','total'),preserveRawValues:report.results.filter(x=>x.requestId==='sum'&&x.relationId.includes(':converted:')).every(x=>x.declared!==null)}
 case 'V-15':return {calculationStatus:status('trajectory','trajectory'),direction:d('trajectory','trajectory'),knownStages:d('trajectory','known-stage-count'),totalStages:d('trajectory','stage-count'),imputeMissing:forbidden(report,'imputeMissing')}
 case 'V-16':return {trajectoryStatus:status('trajectory','trajectory'),direction:d('trajectory','trajectory'),countStatus:status('count','total'),workSeriesCount:d('count','total'),invalidateAllData:status('count','total')!=='CALCULADO'}
 case 'V-17':return {recoveryStatus:status('time','recovery:A_mesma_condicao:A2'),recoverySeconds:d('time','recovery:A_mesma_condicao:A2'),countStatus:status('count','total'),workOccurrenceCount:d('count','total')}
 case 'V-18':return {calculationStatus:status('time','work-clock'),elapsedWorkSeconds:d('time','work-clock'),summedTaskSeconds:d('time','work-task-sum'),overlapError:r('time','work-clock').reasonCodes.includes('SOBREPOSICAO_NAO_EXPLICADA'),dualTaskBenefitConfirmed:forbidden(report,'dualTaskBenefitConfirmed')}
 case 'V-19':return {calculationStatus:status('budget','range'),totalMinutes:d('budget','range'),fitsBudgetAssumptions:d('budget','budget-class')==='CABE_NAS_HIPOTESES',observedSessionSeconds:d('duration','observed'),approvalGranted:forbidden(report,'sessionApproved')}
 case 'V-20':return {calculationStatus:status('budget0','range'),budgetClasses:[0,1,2].map(i=>d(`budget${i}`,'budget-class')),actualExcessConfirmed:d('excess','observed'),adjustDoseAutomatically:forbidden(report,'adjustDoseAutomatically')}
 case 'V-21':return {calculationStatus:status('budget','range'),knownSubtotalMinutes:(d('budget','known-subtotal') as JsonValue[])[0],sessionTotalMinutes:d('budget','range'),fitsBudgetAssumptions:d('budget','budget-class')}
 case 'V-22':return {calculationStatus:status('week','weekly-total'),weeklyTaskASeries:d('week','task:A'),assumeSessionsIdentical:forbidden(report,'assumeSessionsIdentical'),observedSeries:d('done','observed')}
 case 'V-23':return {calculationStatus:status('week','weekly-total'),knownSubtotalSeries:d('week','known-subtotal'),weeklyTotalSeries:d('week','weekly-total'),fillMissingSessionWithZeroOrClone:forbidden(report,'fillMissingSessionWithZeroOrClone')}
 case 'V-24':return {calculationStatus:status('count','total'),totalExerciseSeries:d('count','total'),rejectByName:report.coverage.notEvaluated.some(x=>x.reasonCode==='METHOD_NAME_REJECTED'),scientificApprovalGranted:forbidden(report,'scientificApprovalGranted'),methodMeaningForOtherUses:report.coverage.limitations.length?'PENDENTE':null}
 default:throw new Error(`Unmapped projection ${id}`)
 }
}
