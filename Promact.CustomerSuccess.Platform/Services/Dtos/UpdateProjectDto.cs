using System.ComponentModel.DataAnnotations;

namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class UpdateProjectDto
    {
        [Required]
        [StringLength(128)]
        public required string Name { get; set; }
        public string Description { get; set; }
        public DateTime StartedOn { get; set; }
        public string Status { get; set; }
        public string ProjectManager { get; set; }
        public int Members { get; set; }
    }
}
