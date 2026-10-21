export type UserId=string;
export type StudentId=string;
export interface Actor { userId:UserId; role:'coach'|'student' }
export interface StudentProfile { id:StudentId;coachUserId:UserId;studentUserId:UserId;displayName:string;linkStatus:'active'|'suspended'|'closed' }
export interface CoachSummary {id:string;studentId:StudentId;coachUserId:UserId;objectiveReported:string;objectiveConfirmed:string;recordStatus:'draft'|'approved'|'superseded';publicationStatus:'internal'|'released'|'suspended';version:number;previousVersionId:string|null;approvedBy:string|null;approvedAt:string|null;releasedAt:string|null}
export interface CorrectionRequest {id:string;studentId:string;summaryId:string;requestedBy:string;proposedValue:string;reason:string;requestStatus:'pending'|'accepted'|'rejected';reviewedBy:string|null;reviewedAt:string|null;decisionReason:string|null}
export type SummaryAction='approve'|'release'|'suspend';
