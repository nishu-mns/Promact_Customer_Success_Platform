using Microsoft.AspNetCore.Mvc;
using MimeKit;
using MailKit.Net.Smtp;
using MimeKit.Text;
using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Promact.CustomerSuccess.Platform.Services.Dtos;

namespace Promact.CustomerSuccess.Platform.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailController : Controller
    {
        private const string EmailHost = "smtp.gmail.com";
        private const int EmailPort = 587;
        private const string EmailUsername = "nisha.makwana2423@gmail.com";
        private const string EmailPassword = "vxattbwliievgkef";

        [HttpPost("send")]
        public async Task<IActionResult> SendEmails([FromBody] List<EmailDto> emails)
        {
            if (emails == null || emails.Count == 0)
            {
                return BadRequest("At least one email should be provided");
            }

            foreach (var email in emails)
            {
                await SendEmail(email);
            }

            return Ok("Emails sent successfully.");
        }

        private async Task SendEmail(EmailDto email)
        {
            foreach (var recipient in email.Recipients)
            {
                if (!IsValidEmailAddress(recipient))
                {
                    Console.WriteLine("Not valid address..:(");
                    // Skip sending email if recipient email address is invalid
                    continue;
                }

                var mimeMessage = new MimeMessage();
                mimeMessage.From.Add(new MailboxAddress("noReply", EmailUsername));
                mimeMessage.To.Add(MailboxAddress.Parse(recipient));
                mimeMessage.Subject = email.Subject;
                mimeMessage.Body = new TextPart(TextFormat.Html)
                {
                    Text = email.Body
                };

                using var smtpClient = new SmtpClient();
                await smtpClient.ConnectAsync(EmailHost, EmailPort, MailKit.Security.SecureSocketOptions.StartTls);
                await smtpClient.AuthenticateAsync(EmailUsername, EmailPassword);
                await smtpClient.SendAsync(mimeMessage);
                await smtpClient.DisconnectAsync(true);
            }
        }

        private static bool IsValidEmailAddress(string emailAddress)
        {
            try
            {
                // Regular expression pattern for validating email address
                string pattern = @"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$";
                Regex regex = new Regex(pattern);
                return regex.IsMatch(emailAddress);
            }
            catch
            {
                return false;
            }
        }
    }
}
