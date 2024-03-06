export interface Sprint {
    PhaseMilestoneId: string;
    StartDate: Date;
    EndDate: Date;
    Status: SprintStatus;
    Comments: string;
    Goals: string;
    SprintNumber: number;
    Id: string;
  }

  export enum SprintStatus {
    InProgress = 1,
    Completed = 2,
    Delayed = 3,
    OnTrack = 4,
    SignOffPending = 5,
  }