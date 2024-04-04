using Volo.Abp.Application.Dtos;

namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class ProjectDto : IEntityDto<Guid>
    {
        public Guid Id { get; set; }
        public required string Name { get; set; }
        public string Description { get; set; }
        public DateTime StartedOn { get; set; }
        public string Status { get; set; }
        public string ProjectManager { get; set; }
        public int Members { get; set; }
        public IEnumerable<ProjectBudgetDto>? Budgets { get; set; }
        public IEnumerable<EscalationMatrixDto>? EscalationMatrices { get; set; }
        public IEnumerable<RiskProfileDto>? RiskProfiles { get; set; }
        public IEnumerable<PhaseMilestoneDto>? PhaseMilestones { get; set; }
        public IEnumerable<ProjectResourcesDto>? Resources { get; set; }
        public IEnumerable<ClientFeedbackDto>? ClientFeedbacks { get; set; }
        public IEnumerable<MeetingMinuteDto>? MeetingMinutes { get; set; }

    }
}
