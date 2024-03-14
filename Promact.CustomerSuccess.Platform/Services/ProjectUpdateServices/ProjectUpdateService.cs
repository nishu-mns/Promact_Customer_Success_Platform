using Promact.CustomerSuccess.Platform.Entities;
using Promact.CustomerSuccess.Platform.Services.Dtos;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace Promact.CustomerSuccess.Platform.Services.ProjectUpdateServices
{
    public class ProjectUpdateService :
        CrudAppService<ProjectUpdate, ProjectUpdateDto, Guid, PagedAndSortedResultRequestDto, CreateProjectUpdateDto, UpdateProjectUpdateDto>, IProjectUpdateService
    {
        public ProjectUpdateService(IRepository<ProjectUpdate, Guid> repository) : base(repository)
        {
        }
    }
}
