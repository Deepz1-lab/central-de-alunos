import {test,expect} from 'vitest'
import {verifyOrganization} from '../../../src/domain/organization-verifier'
import {snapshotOf,resultOf} from './helpers'
const session=(id:string,n:number|null,basis='PLANNED',sessionVersion='v1')=>({id,basis,sessionVersion,counts:n===null?null:[{taskId:'A',value:n}]})
const run=(sessionOccurrences:unknown[],extra={})=>verifyOrganization(snapshotOf('r1','WEEK',{unit:'EXERCISE_SERIES',coverageComplete:true,sessionOccurrences,...extra}))
test('heterogeneous_week_uses_both_session_occurrences',()=>{const r=run([session('Tue',4),session('Fri',6,'PLANNED','v2')]);expect(resultOf(r,'r1:weekly-total').derived).toBe(10);expect(resultOf(r,'r1:task:A').derived).toBe(10)})
test('availability does not clone missing session dose',()=>{const r=run([session('Tue',4),session('Fri',null)],{coverageComplete:false,availabilityDays:2});expect(resultOf(r,'r1:known-subtotal').derived).toBe(4);expect(resultOf(r,'r1:weekly-total').derived).toBeNull()})
test.each(['v1','v2'])('same occurrence repeated version %s conflicts',version=>{const r=run([session('Tue',4),session('Tue',6,'PLANNED',version),session('other',2)]);expect(resultOf(r,'r1:weekly-total').derived).toBeNull();expect(resultOf(r,'r1:known-subtotal').derived).toBe(2)})
test('distinct sessions same day are counted independently',()=>expect(resultOf(run([session('Tue-AM',4),session('Tue-PM',6)]),'r1:weekly-total').derived).toBe(10))
test('mixed planned and observed are separate subtotals',()=>{const r=run([session('plan',4),session('done',3,'OBSERVED')]);expect(resultOf(r,'r1:weekly-total').derived).toBeNull();expect(resultOf(r,'r1:known-subtotal:PLANNED')).toMatchObject({derived:4,basis:'PLANNED'});expect(resultOf(r,'r1:known-subtotal:OBSERVED')).toMatchObject({derived:3,basis:'OBSERVED'})})
test('request nature must match the included sessions',()=>expect(resultOf(run([session('done',4,'OBSERVED')]),'r1:weekly-total').derived).toBeNull())
test('seconds can be fractional, discrete counts cannot',()=>{expect(resultOf(run([session('one',1.5)],{unit:'s'}),'r1:weekly-total').derived).toBe(1.5);expect(resultOf(run([session('one',1.5)]),'r1:weekly-total').derived).toBeNull()})
test('unknown session nature and repeated task identity cannot be summed',()=>{expect(resultOf(run([session('one',4,'OTHER')]),'r1:weekly-total').derived).toBeNull();expect(resultOf(run([{...session('one',4),counts:[{taskId:'A',value:4},{taskId:'A',value:4}]}]),'r1:weekly-total').derived).toBeNull()})
