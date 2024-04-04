namespace Promact.CustomerSuccess.Platform.Services.Dtos
{
    public class EmailDto
    {
        public string Subject { get; set; }
        public string Body { get; set; }
        public List<string> Recipients { get; set; }
    }
}
