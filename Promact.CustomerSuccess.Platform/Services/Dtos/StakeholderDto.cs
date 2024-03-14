using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Entities;

namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class StakeholderDto:IEntityDto<Guid>
    {
        public Guid Id { get; set; }
        public Guid ProjectId { get; set; }
        public required string Title { get; set; }
        public required string Name { get; set; }
        public required string Contact { get; set; }
    }
}
