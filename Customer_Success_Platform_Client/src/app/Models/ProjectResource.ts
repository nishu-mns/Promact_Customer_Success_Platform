export interface ProjectResource {
  id:string;  
  projectId: string;
    resourceName: string;
    allocationPercentage: number;
    start: Date;
    end: Date;
    role: string;
    comment: string;
  }