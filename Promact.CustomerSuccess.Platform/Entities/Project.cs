using Volo.Abp.Domain.Entities.Auditing;

namespace Promact.CustomerSuccess.Platform.Entities
{
    public class Project : AuditedEntity<Guid>
    {
        public required string Name { get; set; }
        public required string Description { get; set; }
        public required DateTime StartedOn { get; set; }
        public required string Status { get; set; }
        public required string ProjectManager {  get; set; }
        public int Members { get; set; }

        public virtual ICollection<Document>? Documents { get; set; }
        public virtual ICollection<ProjectBudget>? Budgets { get; set; }        
        public virtual ICollection<EscalationMatrix>? EscalationMatrices { get; set; }
        public virtual ICollection<RiskProfile>? RiskProfiles { get; set; }
        public virtual ICollection<PhaseMilestone>? PhaseMilestones { get; set; }
        public virtual ICollection<ProjectResources>? Resources { get; set; }
        public virtual ICollection<ClientFeedback>? ClientFeedbacks { get; set; }
        public virtual ICollection<MeetingMinute>? MeetingMinutes { get; set; }
    }
}
