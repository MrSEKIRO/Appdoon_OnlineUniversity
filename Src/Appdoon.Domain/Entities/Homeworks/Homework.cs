using Appdoon.Domain.Commons;
using Appdoon.Domain.Entities.Homeworks;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Domain.Entities.HomeWorks
{
    public class Homework : BaseEntity 
    {
        public List<Question> Questions { get; set; } = new();
        public int MinScore { get; set; } = 0;

    }
}
