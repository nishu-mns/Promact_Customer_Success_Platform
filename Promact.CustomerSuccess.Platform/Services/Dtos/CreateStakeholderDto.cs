namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class CreateStakeholderDto
    {
        public Guid ProjectId { get; set; }
        public required string Title { get; set; }
        public required string Name { get; set; }
        public required string Contact { get; set; }
    }
}
