using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Domain.Entities.Users
{
    public class UserEmailOptions
    {
        public string ToEmail { get; set; }
        public string Subject { get; set; } = string.Empty;
        public string Body { get; set; } = string.Empty;
        public List<KeyValuePair<string, string>>? PlaceHolders { get; set; }
    }
}
