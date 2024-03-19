export interface PhaseMilestone {
    id:string;
    projectId: string;
    title: string;
    startDate: Date;
    endDate: Date;
    approvalDate: Date;
    status: number;
    revisedCompletionDate: Date;
    comments: string;
  }