import type { VerificationReport } from '../../../src/domain/organization-verifier'
export function snapshotOf(requestId: string, kind: string, input: unknown, basis: 'PLANNED'|'OBSERVED' = 'PLANNED'): any {
  return {schemaVersion:'ver-001/1',snapshotId:'fixture-1',planVersion:'v1',source:{id:'synthetic',version:'v1',locator:'test'},requests:[{requestId,kind,input,basis,purpose:'conferencia_sintetica'}]}
}
export function resultOf(report: VerificationReport, id: string) {
  const found=report.results.find(r=>r.relationId===id)
  if(!found) throw new Error(`Missing result ${id}: ${JSON.stringify(report)}`)
  return found
}
