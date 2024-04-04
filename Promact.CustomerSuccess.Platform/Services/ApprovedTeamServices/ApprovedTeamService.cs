using Promact.CustomerSuccess.Platform.Entities;
using Promact.CustomerSuccess.Platform.Services.Dtos;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace Promact.CustomerSuccess.Platform.Services.ApprovedTeamServices
{
    public class ApprovedTeamService : 
        CrudAppService<ApprovedTeam, 
            ApprovedTeamDto, 
            Guid, 
            PagedAndSortedResultRequestDto, 
            CreateApprovedTeamDto, 
            UpdateApprovedTeamDto>, 
        IApprovedTeamService
    {
        public ApprovedTeamService(IRepository<ApprovedTeam, Guid> repository) : base(repository)
        {
        }
    }
}
