using Volo.Abp.DependencyInjection;
using System.Threading.Tasks;
using Volo.Abp.Emailing;

namespace Promact.CustomerSuccess.Platform.Services.EmailService
{
    public class EmailService : ITransientDependency
    {
        private readonly IEmailSender _emailSender;

        public EmailService(IEmailSender emailSender)
        {
            _emailSender = emailSender;
        }

        public async Task DoItAsync()
        {
            await _emailSender.SendAsync(
                "nisha.makwana2423@gmail.com",     // target email address
                "Email subject",         // subject
                "This is email body..."  // email body
            );
        }
    }
}
