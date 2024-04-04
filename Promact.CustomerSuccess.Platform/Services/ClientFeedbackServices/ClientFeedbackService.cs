using Promact.CustomerSuccess.Platform.Entities;
using Promact.CustomerSuccess.Platform.Services.Dtos;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace Promact.CustomerSuccess.Platform.Services.ClientFeedbackServices
{
    public class ClientFeedbackService : 
        CrudAppService<ClientFeedback, 
            ClientFeedbackDto, 
            Guid, 
            PagedAndSortedResultRequestDto, 
            CreateClientFeedbackDto, 
            UpdateClientFeedbackDto>
        , IClientFeedbackServie
    {
        public ClientFeedbackService(IRepository<ClientFeedback, Guid> repository) : base(repository)
        {
        }
    }
}
