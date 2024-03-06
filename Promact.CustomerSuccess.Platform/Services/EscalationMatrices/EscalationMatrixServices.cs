using Promact.CustomerSuccess.Platform.Entities;
using Promact.CustomerSuccess.Platform.Services.Dtos;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace Promact.CustomerSuccess.Platform.Services.EscalationMatrices
{
    public class EscalationMatrixServices : CrudAppService<EscalationMatrix, EscalationMatrixDto, Guid, PagedAndSortedResultRequestDto, CreateEscalationMatrix, updateEscalationMatrix>, IEscalationMatrixService
    {
        public EscalationMatrixServices(IRepository<EscalationMatrix, Guid> repository) : base(repository)
        {
        }
    }
}
