namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class CreateScopeDto
    {
        public Guid ProjectId { get; set; }
        public string Technology { get; set; }
        public string ScopeDetails { get; set; }
    }
}
