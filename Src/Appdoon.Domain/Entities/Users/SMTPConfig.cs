using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Appdoon.Domain.Commons;

namespace Appdoon.Domain.Entities.Users
{
    public class SMTPConfig
    {
        public string SenderAddress { get; set; } = string.Empty;
        public string? SenderDisplayName { get; set; }
        public string Host { get; set; } = string.Empty;
        public int Port { get; set; }
        public string UserName { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public bool EnableSSL { get; set; }
        public bool UseDefaultCredentials { get; set; }
    }
}
