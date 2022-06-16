using Appdoon.Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Appdoon.Domain.Entities.Users;
using Appdoon.Common.Dtos;
using Appdoon.Common.HashFunctions;
using Appdoon.Common.GenerateTokens;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace Appdoon.Application.Services.Users.Command.ForgetPasswordUserService
{
    public class SMTPConfig
    {
        public string SenderAddress { get; set; } = "Appdoon@gmail.com";
        public string SenderDisplayName { get; set; } = "Appdoon";
        public string Host { get; set; } = "smtp.mailtrap.io";
        public int Port { get; set; } = 587;
        public string UserName { get; set; } = "acca128f760e0d";
        public string Password { get; set; } = "85f782a0a097c3";
        public bool EnableSSL { get; set; } = true;
        public bool UseDefaultCredentials { get; set; } = true;
    }
    public class UserEmailOptions
    {
        public string ToEmail { get; set; }
        public string Subject { get; set; } = string.Empty;
        public string Body { get; set; } = string.Empty;
        //public List<KeyValuePair<string, string>>? PlaceHolders { get; set; }
    }
    public interface IForgetPasswordUserService
    {
        Task<ResultDto> Execute(UserEmailOptions userEmailOptions);
    }
    public class ForgetPasswordUserService : IForgetPasswordUserService
    {
        private readonly IDatabaseContext _context;
        private readonly IConfiguration _configuration;

        public ForgetPasswordUserService(IDatabaseContext context,
            IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }
        public async Task<ResultDto> Execute(UserEmailOptions userEmailOptions)
        {
            try
            {
                var user = await _context.Users
                    .Where(x => x.Email == userEmailOptions.ToEmail)
                    .FirstOrDefaultAsync();

                if (user == null)
                {
                    return new ResultDto()
                    {
                        Message = "یوزر پیدا نشد",
                        IsSuccess = false,
                    };
                }

                string token = GenerateTokens.GenerateToken(user.Username, user.Password);

                // https:\\localhost:5001 Resetpassword ? userid={0} & token={1}

                userEmailOptions.Subject = "reset password for appdoon site";
                userEmailOptions.Body = await GetEmailBody(user.Username, token, user.Id);

                SMTPConfig sMTPConfig = new();

                MailMessage mail = new MailMessage
                {
                    Subject = userEmailOptions.Subject,
                    Body = userEmailOptions.Body,
                    From = new MailAddress(sMTPConfig.SenderAddress, sMTPConfig.SenderDisplayName),
                    IsBodyHtml = true,
                };

                mail.To.Add(userEmailOptions.ToEmail);

                NetworkCredential networkCredential = new NetworkCredential()
                {
                    UserName = sMTPConfig.UserName,
                    Password = sMTPConfig.Password,
                };

                SmtpClient smtpClient = new SmtpClient
                {
                    Host = sMTPConfig.Host,
                    Port = sMTPConfig.Port,
                    EnableSsl = sMTPConfig.EnableSSL,
                    Credentials = networkCredential
                };

                mail.BodyEncoding = Encoding.Default;

                await smtpClient.SendMailAsync(mail);

                return new ResultDto()
                {
                    Message = "ایمیل با موفقیت ارسال شد",
                    IsSuccess = true,
                };
            }
            catch (Exception e)
            {
                return new ResultDto()
                {
                    Message = "خطا در ارسال ایمیل",
                    IsSuccess = false,
                };
            }
        }

        private string LinkGenerator(string token, int userId)
        {
            string appDomain = _configuration.GetSection("Application:AppDomain").Value;
            string forgetPassword = _configuration.GetSection("Application:ForgotPassword").Value;
            string link = string.Format(appDomain + forgetPassword, userId, token);

            return link;
        }
        private async Task<string> GetEmailBody(string Username, string token, int userId)
        {
            var body = await File.ReadAllTextAsync("../Appdoon.Application/Services/Users/Command/ForgetPasswordUserService/EmailConfirm.html");
            body = body.Replace("{{Username}}", Username);
            body = body.Replace("{{Link}}", LinkGenerator(token, userId));
            return body;
        }
    }
}
