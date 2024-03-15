
using System.ComponentModel.DataAnnotations.Schema;
using Volo.Abp.Domain.Entities.Auditing;

namespace Promact.CustomerSuccess.Platform.Entities
{
    public class ApprovedTeam : AuditedEntity<Guid>
    {
        [ForeignKey(nameof(Project))]
        public Guid ProjectId { get; set; }
        public virtual Project? Project { get; set; }
        public int Phase { get; set; }
        public int NumberOfResources { get; set; }
        public required string Role { get; set; }
        public int AvailabilityPercentage { get; set; }
        public int duration { get; set; }

    }
}
