using System.ComponentModel.DataAnnotations.Schema;

namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class CreateEscalationMatrix
    {
        public EscalationMatrixLevels Level { get; set; }
        public EscalationType EscalationType { get; set; }
        public required Guid ProjectId { get; set; }
    }
}
