export interface RiskProfiling {
  id:string;
  projectId: string;
  riskType: number;
  severity: number;
  impact: number;
  description: string;
  remedialSteps: string;
  status: string;
  dateReceived: Date;
}
  
  export enum RiskType {
    Financial,
    Operational,
    Technical,
    HumanResource,
    External,
    Legal,
    Reputational,
    Strategic
  }
  
  export enum RiskSeverity {
    Low = 1,
    Medium = 2,
    High = 3
  }
  
  export enum RiskImpact {
    Low = 1,
    Medium = 2,
    High = 3
  }
  