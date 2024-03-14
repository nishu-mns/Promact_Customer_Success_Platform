namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class UpdateMeetingMinuteDto
    {
        public Guid ProjectId { get; set; }
        public required DateTime MeetingDate { get; set; }
        public required string MoMLink { get; set; }
        public required string Comments { get; set; }
        public required string Duration { get; set; }
    }
}
