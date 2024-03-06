﻿using Promact.CustomerSuccess.Platform.Entities;
using Promact.CustomerSuccess.Platform.Services.Dtos;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace Promact.CustomerSuccess.Platform.Services.AuditHistoryServices
{
    public class AuditHistoryService :
        CrudAppService<AuditHistory, AuditHistoryDto, Guid,
            PagedAndSortedResultRequestDto, CreateAuditHistory, UpdateAuditHistory>,
        IAuditHistoryService
    {
        public AuditHistoryService(IRepository<AuditHistory, Guid> repository) : base(repository)
        {
        }
    }
}
