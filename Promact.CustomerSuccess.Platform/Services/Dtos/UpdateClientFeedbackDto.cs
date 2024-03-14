namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class UpdateClientFeedbackDto
    {
        public Guid ProjectId { get; set; }
        public DateTime FeedbackDate { get; set; }
        public FeedbackType FeedbackType { get; set; }
        public required string Details { get; set; }
        public required string ActionTaken { get; set; }
        public DateTime ClosureDate { get; set; }
    }
}
