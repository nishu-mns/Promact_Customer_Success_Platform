using Promact.CustomerSuccess.Platform.Entities;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Entities;

namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class SprintDto:IEntityDto<Guid>
    {
        public Guid ProjectId { get; set; }
        public int SprintNumber { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public SprintStatus Status { get; set; }
        public required string Comments { get; set; }
        public required string Goals { get; set; }
        public Guid Id { get; set; }
    }
}
