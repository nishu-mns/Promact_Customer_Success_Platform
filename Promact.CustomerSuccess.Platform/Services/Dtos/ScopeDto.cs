using Promact.CustomerSuccess.Platform.Entities;
using Volo.Abp.Application.Dtos;

namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class ScopeDto:IEntityDto<Guid>
    {
        public Guid ProjectId { get; set; }
        public string Technology { get; set; }
        public string ScopeDetails { get; set; }
        public Guid Id { get; set; }
    }
}
