import {defaults,parseSnapshot} from './input'
import {buildReport} from './report'
import {verifyIntegrity} from './integrity'
import type {ProcessingLimits,RelationResult,Request,VerificationReport} from './types'
export type * from './types'
const known=new Set(['INTEGRITY','COUNT','COMPARE','CONVERT','TRAJECTORY','TIMELINE','BUDGET','WEEK','OBSERVATION'])
const handlers:Record<string,(r:Request,l:ProcessingLimits)=>RelationResult[]>=Object.create(null)
handlers.INTEGRITY=verifyIntegrity
export function verifyOrganization(input:unknown,limits?:Partial<ProcessingLimits>):VerificationReport {
 const configured={...defaults,...limits}
 const parsed=parseSnapshot(input,configured)
 if(!parsed.ok)return buildReport(null,parsed.issues,[],parsed.coverage,[])
 const results:RelationResult[]=[],completed:string[]=[]
 for(const request of parsed.snapshot.requests){
  const handler=handlers[request.kind]
  if(!handler){parsed.coverage.notEvaluated.push({requestId:request.requestId,path:request.requestPath,reasonCode:known.has(request.kind)?'RULE_NOT_IMPLEMENTED':'UNKNOWN_REQUEST_KIND'});continue}
  results.push(...handler(request,configured));completed.push(request.requestId)
 }
 return buildReport(parsed.snapshot,parsed.issues,results,parsed.coverage,completed)
}
