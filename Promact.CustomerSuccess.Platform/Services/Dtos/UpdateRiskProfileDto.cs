﻿namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class UpdateRiskProfileDto
    {
        public Guid ProjectId { get; set; }
        public RiskType RiskType { get; set; }
        public RiskSeverity Severity { get; set; }
        public RiskImpact Impact { get; set; }
    }
}
