using Appdoon.Domain.Commons;
using Appdoon.Domain.Entities.HomeWorks;
using Appdoon.Domain.Entities.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Domain.Entities.Progress
{
    public class HomeworkProgress:BaseEntity
    {
        public Homework? Homework { get; set; }
        public int HomeworkId { get; set; }
        public int UserId { get; set; }
        public User? User { get; set; }
        public int Score { get; set; }
        public bool IsDone { get; set; }
    }
}
