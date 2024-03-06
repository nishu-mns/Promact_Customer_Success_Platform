export interface AuditHistory {
    id: string;
    dateOfAudit: Date;
    reviewedBy: string;
    status: string;
    reviewedSection: string;
    commentQueries: string;
    actionItem: string;
  }