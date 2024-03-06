namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class CreatePhaseMilestoneDto
    {
        public Guid ProjectId { get; set; }
        public required string Title { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public required string Description { get; set; }
        public required string Comments { get; set; }
    }
}
