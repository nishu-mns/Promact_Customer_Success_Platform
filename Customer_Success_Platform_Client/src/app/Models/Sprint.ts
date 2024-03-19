export interface Sprint {
  id:string;
  projectId: string;
  sprintNumber: number;
  startDate: Date;
  endDate: Date;
  status: number;
  comments: string;
  goals: string;
}

  export enum SprintStatus {
    InProgress = 1,
    Completed = 2,
    Delayed = 3,
    OnTrack = 4,
    SignOffPending = 5,
  }