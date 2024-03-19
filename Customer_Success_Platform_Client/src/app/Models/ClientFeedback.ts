export interface ClientFeedback {
    id:string;  
    projectId: string;
    feedbackType: string;
    dateReceived: Date;
    detailedFeedback: string;
    actionTaken: string;
    closureDate: Date;
  }