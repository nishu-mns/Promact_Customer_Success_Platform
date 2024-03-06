using System;
using System.ComponentModel.DataAnnotations;
using Volo.Abp.Domain.Entities.Auditing;

namespace Promact.CustomerSuccess.Platform.Entities
{
    public class AuditHistory : AuditedEntityWithUser<Guid, ApplicationUser>
    {
        public DateTime DateOfAudit { get; set; }
        public required string ReviewedBy { get; set; }
        public required string Status { get; set; }
        public required string ReviewedSection { get; set; }
        public required string CommentQueries { get; set; }
        public required string ActionItem { get; set; }
    }
}