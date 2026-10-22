import {test,expect} from 'vitest'
import {verifyOrganization} from '../../../src/domain/organization-verifier'
import {snapshotOf,resultOf} from './helpers'
test('review: unpaired surrogate identity cannot abort independent requests',()=>{
 const s=snapshotOf('unicode','COUNT',{mode:'SERIES_COUNTS',requestedUnit:'EXERCISE_SERIES',counts:[{taskId:'\ud800',value:1}],groupingApplicable:false})
 s.requests.push({...s.requests[0],requestId:'independent',input:{mode:'SERIES_COUNTS',requestedUnit:'EXERCISE_SERIES',counts:[{taskId:'C',value:2}],groupingApplicable:false}})
 const r=verifyOrganization(s)
 expect(resultOf(r,'independent:total').derived).toBe(2)
 expect(r.results.filter(x=>x.requestId==='unicode'&&x.relationId.includes(':task:'))).toHaveLength(1)
})
test('review: incomplete weekly task total is unknown, known subtotal survives',()=>{
 const r=verifyOrganization(snapshotOf('week','WEEK',{unit:'EXERCISE_SERIES',coverageComplete:false,sessionOccurrences:[{id:'known',sessionVersion:'v1',basis:'PLANNED',counts:[{taskId:'A',value:4}]},{id:'missing',sessionVersion:'v1',basis:'PLANNED',counts:null}]}))
 expect(resultOf(r,'week:task:A').derived).toBeNull()
 expect(resultOf(r,'week:known-subtotal').derived).toBe(4)
})
test('review: malformed known task occurrence blocks that task only',()=>{
 const r=verifyOrganization(snapshotOf('count','COUNT',{mode:'OCCURRENCES',requestedUnit:'WORK_OCCURRENCES',groupingApplicable:false,occurrences:[{taskId:'A',occurrenceId:'a',role:'WORK'},{taskId:'A',role:'WORK'},{taskId:'C',occurrenceId:'c',role:'WORK'}]}))
 expect(resultOf(r,'count:task:A').derived).toBeNull()
 expect(resultOf(r,'count:task:C').derived).toBe(1)
})
test('review: invalid count unit cannot label per-task counts kg',()=>{
 const r=verifyOrganization(snapshotOf('count','COUNT',{mode:'REPEATED_PATTERN',requestedUnit:'kg',rounds:1,items:[{taskId:'A',countPerRound:1,role:'WORK'}],groupingApplicable:true}))
 expect(resultOf(r,'count:task:A').derived).toBeNull()
})
test('review: contained duration cannot exceed its parent estimate',()=>{
 const r=verifyOrganization(snapshotOf('budget','BUDGET',{components:[{id:'parent',min:10,max:10,unit:'min',includedIn:null},{id:'child',min:70,max:70,unit:'min',includedIn:'parent'}],coverageComplete:true,outputUnit:'min',limit:{value:60,unit:'min'}}))
 expect(resultOf(r,'budget:range').derived).toBeNull()
 expect(resultOf(r,'budget:budget-class').derived).toBeNull()
})
test('review: sparse request arrays cannot disappear from coverage',()=>{
 const s=snapshotOf('count','COUNT',{mode:'SERIES_COUNTS',requestedUnit:'EXERCISE_SERIES',counts:[{taskId:'A',value:1}],groupingApplicable:false});s.requests.length=2
 const r=verifyOrganization(s)
 expect(r.inputIssues.some(x=>x.code==='NON_JSON_INPUT')).toBe(true)
 expect(r.results).toEqual([])
})
test('review: sparse nested lists are rejected too',()=>{
 const counts:any[]=[{taskId:'A',value:1}];counts.length=2
 expect(verifyOrganization(snapshotOf('r','COUNT',{mode:'SERIES_COUNTS',requestedUnit:'EXERCISE_SERIES',groupingApplicable:false,counts})).inputIssues[0].code).toBe('NON_JSON_INPUT')
})
test('review: Unicode WEEK and recovery identities remain separate and safe',()=>{
 const s=snapshotOf('week','WEEK',{unit:'EXERCISE_SERIES',coverageComplete:true,sessionOccurrences:[{id:'s',sessionVersion:'v1',basis:'PLANNED',counts:[{taskId:'\ud800',value:4},{taskId:'\ufffd',value:1}]}]})
 s.requests.push({requestId:'time',kind:'TIMELINE',purpose:'clock',basis:'PLANNED',input:{intervals:[{id:'a',taskId:'A',start:0,end:10,role:'WORK',recoveryKey:'\ud800',concurrencyGroupId:null},{id:'\udfff',taskId:'A',start:20,end:30,role:'WORK',recoveryKey:'\ud800',concurrencyGroupId:null}],simultaneityGroups:[],coverageComplete:true,boundary:{start:0,end:30}}})
 const r=verifyOrganization(s)
 expect(r.results.filter(x=>x.requestId==='week'&&x.relationId.includes(':task:')).map(x=>x.relationId)).toHaveLength(2)
 expect(r.results.find(x=>x.requestId==='time'&&x.relationId.includes(':recovery:'))?.derived).toBe(10)
})
test('review: invalid intermediate interval never gets skipped for recovery',()=>{
 const rows=[{id:'a',taskId:'A',start:0,end:30},{id:null,taskId:'A',start:45,end:70},{id:'b',taskId:'A',start:130,end:160},{id:'c',taskId:'C',start:200,end:210},{id:'d',taskId:'C',start:220,end:230}].map(x=>({...x,role:'WORK',recoveryKey:x.taskId,concurrencyGroupId:null}))
 const r=verifyOrganization(snapshotOf('time','TIMELINE',{intervals:rows,simultaneityGroups:[],coverageComplete:true,boundary:{start:0,end:230}}))
 expect(resultOf(r,'time:recovery:A:b').derived).toBeNull()
 expect(resultOf(r,'time:recovery:C:d').derived).toBe(10)
})
test.each(['invalid-count','duplicate'])('review: opposite basis %s does not erase planned task data',variant=>{
 const planned={id:'p',sessionVersion:'v1',basis:'PLANNED',counts:[{taskId:'A',value:4}]}
 const observed={id:'o',sessionVersion:'v1',basis:'OBSERVED',counts:[{taskId:'A',value:variant==='invalid-count'?-1:2}]}
 const sessions=[planned,observed,...(variant==='duplicate'?[observed]:[])]
 const r=verifyOrganization(snapshotOf('week','WEEK',{unit:'EXERCISE_SERIES',coverageComplete:true,sessionOccurrences:sessions}))
 expect(resultOf(r,'week:task:A')).toMatchObject({derived:4,basis:'PLANNED'})
 expect(resultOf(r,'week:weekly-total').derived).toBeNull()
})
test.each([{intervals:null,simultaneityGroups:[]},{intervals:[],simultaneityGroups:null}])('review: explicit boundary survives malformed distribution %j',extra=>{
 const r=verifyOrganization(snapshotOf('time','TIMELINE',{...extra,coverageComplete:false,boundary:{start:0,end:200}}))
 expect(resultOf(r,'time:elapsed').derived).toBe(200)
 expect(resultOf(r,'time:work-clock').derived).toBeNull()
})
test('review: paths identify duplicate identities and missing duration fields',()=>{
 const countInput={mode:'OCCURRENCES',requestedUnit:'WORK_OCCURRENCES',groupingApplicable:false,occurrences:[{occurrenceId:'dup',taskId:'A',role:'WORK'},{occurrenceId:'dup',taskId:'A',role:'WORK'}]}
 const r=verifyOrganization(snapshotOf('count','COUNT',countInput))
 expect(resultOf(r,'count:task:A').inputPaths).toContain('requests[0].input.occurrences[1].occurrenceId')
 expect(resultOf(r,'count:task:A').message).toMatch(/identificador|identidade/i)
 const t=verifyOrganization(snapshotOf('time','TIMELINE',{intervals:[{id:'a',taskId:'A',start:0,end:null,role:'WORK',recoveryKey:'A',concurrencyGroupId:null}],simultaneityGroups:[],coverageComplete:true,boundary:null}))
 expect(resultOf(t,'time:work-clock').inputPaths).toContain('requests[0].input.intervals[0].end')
})
test('review: stage and weekly conflict paths identify their rows',()=>{
 const t=verifyOrganization(snapshotOf('t','TRAJECTORY',{axis:'load',stages:[{value:10,unit:'kg',conditionKey:'A'},{value:20,unit:'kg',conditionKey:'B'}]}))
 expect(resultOf(t,'t:trajectory').inputPaths).toContain('requests[0].input.stages[1].conditionKey')
 const sessions=[{id:'s',sessionVersion:'v1',basis:'PLANNED',counts:[{taskId:'A',value:4}]},{id:'s',sessionVersion:'v2',basis:'PLANNED',counts:[{taskId:'A',value:4}]}]
 const w=verifyOrganization(snapshotOf('w','WEEK',{unit:'EXERCISE_SERIES',coverageComplete:true,sessionOccurrences:sessions}))
 expect(resultOf(w,'w:weekly-total').inputPaths).toContain('requests[0].input.sessionOccurrences[1].id')
 expect(resultOf(w,'w:task:A').inputPaths).toContain('requests[0].input.sessionOccurrences[1].id')
})
test('review: duration sum subtracts each interval before accumulation',()=>{
 const intervals=[{id:'a',taskId:'A',start:0,end:1},{id:'b',taskId:'B',start:1e16,end:1e16+2}].map(x=>({...x,role:'WORK',recoveryKey:null,concurrencyGroupId:null}))
 const r=verifyOrganization(snapshotOf('time','TIMELINE',{intervals,simultaneityGroups:[],coverageComplete:true,boundary:null}))
 expect(resultOf(r,'time:work-task-sum').derived).toBe(3)
})
test.each([undefined,'yes',null])('review: grouping context %j cannot become true',groupingApplicable=>{
 const input:any={mode:'REPEATED_PATTERN',requestedUnit:'EXERCISE_SERIES',rounds:2,items:[{taskId:'A',countPerRound:1,role:'WORK'}]}
 if(groupingApplicable!==undefined)input.groupingApplicable=groupingApplicable
 const r=verifyOrganization(snapshotOf('count','COUNT',input))
 expect(resultOf(r,'count:group-rounds').derived).toBeNull()
 expect(resultOf(r,'count:group-rounds').calculationStatus).toBe('NAO_CALCULAVEL')
 expect(resultOf(r,'count:total').derived).toBe(2)
})
