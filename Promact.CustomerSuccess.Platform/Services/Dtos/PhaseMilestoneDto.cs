using Volo.Abp.Application.Dtos;

namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class PhaseMilestoneDto:IEntityDto<Guid>
    {
        public Guid ProjectId { get; set; }
        public string Title { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public DateTime ApprovalDate { get; set; }
        public MilestoneOrPhaseStatus Status { get; set; }
        public DateTime RevisedCompletionDate { get; set; }
        public string Comments { get; set; }
        public Guid Id { get; set; }
    }
}