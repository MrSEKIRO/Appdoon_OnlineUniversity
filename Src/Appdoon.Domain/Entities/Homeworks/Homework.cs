using Appdoon.Domain.Commons;
using Appdoon.Domain.Entities.Homeworks;
using Appdoon.Domain.Entities.Progress;
using Appdoon.Domain.Entities.RoadMaps;
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
        public int MinScore { get; set; }
        public List<HomeworkProgress> HomeworkProgresses { get; set; } = new();
        public ChildStep? ChildStep { get; set; }
      //  public int ChildStepId { get; set; }
    }
}
