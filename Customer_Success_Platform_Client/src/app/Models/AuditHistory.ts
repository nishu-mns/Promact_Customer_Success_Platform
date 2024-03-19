export interface AuditHistory {
    id: string;
    projectId:string;
    dateOfAudit: Date;
    reviewedBy: string;
    status: string;
    reviewedSection: string;
    commentQueries: string;
    actionItem: string;
  }