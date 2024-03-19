export interface ApprovedTeam {
    id:string;
    projectId: string;
    phase: number;
    numberOfResources: number;
    role: string;
    availabilityPercentage: number;
    duration: number;
  }