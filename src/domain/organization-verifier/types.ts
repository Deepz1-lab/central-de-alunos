export type JsonValue = null|boolean|number|string|JsonValue[]|{[key:string]:JsonValue}
export interface Source {id:string;version:string;locator:string}
export type Basis='PLANNED'|'OBSERVED'
export interface Request {requestId:string;kind:string;purpose:string;basis:Basis;input:unknown;originalMethodLabel?:string;source?:Source|null;requestPath:string}
export type RequestInput=Omit<Request,'requestPath'>
export interface ProcessingLimits {maxJsonBytes:number;maxRequests:number;maxExpandedOccurrences:number;maxDepth:number}
export type CalculationStatus='CALCULADO'|'DIVERGENTE'|'NAO_CALCULAVEL'|'NAO_APLICAVEL'
export interface InputIssue {path:string;code:string;message:string;affectedRequestIds:string[]}
export interface NotEvaluatedRequest {requestId:string|null;path:string;reasonCode:string}
export interface RelationResult {
 relationId:string;requestId:string;ruleId:string;ruleVersion:'0.1';purpose:string;basis:Basis;inputPaths:string[];source:Source|null;
 derived:JsonValue;declared:JsonValue;difference:number|null;unit:string|null;calculationStatus:CalculationStatus;reasonCodes:string[];
 dependentUses:string[];independentResultIds:string[];suggestedQuality:'SEM_DADO'|'CONTEXTO_INSUFICIENTE'|'INCONSISTENTE'|null;
 impactReview:null;messageCode:string;message:string
}
export type ResultFields=Omit<RelationResult,'relationId'|'requestId'|'purpose'|'basis'|'source'|'ruleVersion'>
export interface SnapshotV1 {schemaVersion:'ver-001/1';snapshotId:string|null;planVersion:string|null;source:Source|null;requests:Request[]}
export interface CoverageSeed {requested:number|null;notEvaluated:NotEvaluatedRequest[]}
export type ParseResult={ok:true;snapshot:SnapshotV1;issues:InputIssue[];coverage:CoverageSeed}|{ok:false;issues:InputIssue[];coverage:CoverageSeed}
export interface VerificationReport {snapshotId:string|null;schemaVersion:string|null;engineVersion:'ver-001/0.1';inputIssues:InputIssue[];results:RelationResult[];coverage:CoverageSeed&{evaluated:number;limitations:string[]}}
