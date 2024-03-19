export interface ProjectResource {
    projectId: string;
    resourceName: string;
    allocationPercentage: number;
    start: Date;
    end: Date;
    role: string;
    comment: string;
  }