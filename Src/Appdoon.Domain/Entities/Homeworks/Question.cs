using Appdoon.Domain.Commons;
using Appdoon.Domain.Entities.HomeWorks;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Domain.Entities.Homeworks
{
    public class Question : BaseEntity
    {
        public string QuestionDescription { get; set; } = string.Empty;
        public string Option1 { get; set; } = string.Empty;
        public string Option2 { get; set; } = string.Empty;
        public string Option3 { get; set; } = string.Empty;
        public string Option4 { get; set; } = string.Empty;
        public Homework? Homework { get; set; }
        public int HomeworkId { get; set; }
        public int Answer { get; set; } = 0;
    }
}
