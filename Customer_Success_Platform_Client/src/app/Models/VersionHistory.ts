export interface VersionHistory {
    id: string;
    projectId:string;
    version: string;
    type: string;
    change: string;
    changeReason: string;
    createdBy: string;
    revisionDate: Date;
    approvalDate?: Date;
    approvedBy: string;
  }