namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class UpdateVersionHistoryDto
    {
        public Guid ProjectId { get; set; }
        public required string Version { get; set; }
        public required string Type { get; set; }
        public required string Change { get; set; }
        public required string ChangeReason { get; set; }
        public required string CreatedBy { get; set; }
        public DateTime RevisionDate { get; set; }
        public DateTime? ApprovalDate { get; set; }
        public required string ApprovedBy { get; set; }
    }
}
