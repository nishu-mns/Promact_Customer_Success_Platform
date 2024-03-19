export interface EscalationMatrix {
    level: string;
    escalationType: string;
    projectId: string;
    id: string;
  }
  
  export enum EscalationMatrixLevels {
    Level1 = 'Level 1',
    Level2 = 'Level 2',
    Level3 = 'Level 3',
    Level4 = 'Level 4',
    Level5 = 'Level 5',
  }
  
  export enum EscalationType {
    Operational = 'Operational',
    Financial = 'Financial',
    Technical = 'Technical',
  }