using Promact.CustomerSuccess.Platform.Entities;
using Volo.Abp.Application.Dtos;

namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class ApprovedTeamDto:IEntityDto<Guid>
    {
        public Guid ProjectId { get; set; }
        public Guid Id { get; set; }
        public int Phase { get; set; }
        public int NumberOfResources { get; set; }
        public required string Role { get; set; }
        public int AvailabilityPercentage { get; set; }
        public int Duration { get; set; }
    }
}
