using Promact.CustomerSuccess.Platform.Entities;
using Promact.CustomerSuccess.Platform.Services.Dtos;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace Promact.CustomerSuccess.Platform.Services.StakeholderServices
{
    public class StakholderService :
        CrudAppService<Stakeholder, StakeholderDto, Guid, PagedAndSortedResultRequestDto, CreateStakeholderDto, UpdateStakeholderDto>,
        IStakeholderService
    {
        public StakholderService(IRepository<Stakeholder, Guid> repository) : base(repository)
        {
        }
    }
}
