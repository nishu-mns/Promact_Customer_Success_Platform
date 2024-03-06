export interface RiskProfiling {
    ProjectId: string;
    RiskType: RiskType;
    Severity: RiskSeverity;
    Impact: RiskImpact;
    Id: string;
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
  