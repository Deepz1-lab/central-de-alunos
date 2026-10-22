import {readFileSync,readdirSync} from 'node:fs'
import {test,expect} from 'vitest'
import {verifyOrganization} from '../../../src/domain/organization-verifier'
import {adaptOracle,projectOracle,snapshotFromRequests} from './oracle-adapter'
const fixture=JSON.parse(readFileSync('docs/methodology/VER-001_Oraculos_v0.1.json','utf8'))
for(const c of fixture.cases)test(`documented_oracle_${c.id}`,()=>{
 const snapshot=snapshotFromRequests(adaptOracle(c.id,c.inputFragment))
 const before=JSON.stringify(snapshot)
 const freeze=(x:any):any=>{if(x&&typeof x==='object'){Object.values(x).forEach(freeze);Object.freeze(x)}return x}
 const report=verifyOrganization(freeze(snapshot))
 expect(projectOracle(c.id,report)).toEqual(c.expected)
 expect(JSON.stringify(snapshot)).toBe(before)
 expect(verifyOrganization(snapshot)).toEqual(report)
 expect(report.coverage.notEvaluated).toEqual([])
 expect(report.results.every(x=>x.impactReview===null&&x.suggestedQuality!=='VALIDADO' as any)).toBe(true)
})
test('domain imports only its own pure modules',()=>{for(const file of readdirSync('src/domain/organization-verifier').filter(f=>f.endsWith('.ts'))){const code=readFileSync(`src/domain/organization-verifier/${file}`,'utf8');expect(code).not.toMatch(/from\s+['"](?:node:|https?:|@|\.\.\/)|\b(?:fetch|Date|process|localStorage)\b/)}})
test('changed input reopens dependent computation',()=>{const input={taskSeries:{A:3,B:2}};const first=verifyOrganization(snapshotFromRequests(adaptOracle('V-01',input)));input.taskSeries.A=7;const second=verifyOrganization(snapshotFromRequests(adaptOracle('V-01',input)));expect(projectOracle('V-01',first)).not.toEqual(projectOracle('V-01',second))})
