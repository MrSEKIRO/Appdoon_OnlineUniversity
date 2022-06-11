using Appdoon.Domain.Commons;
using Appdoon.Domain.Entities.RoadMaps;
using Appdoon.Domain.Entities.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Domain.Entities.Progress
{
	public class StepProgress : BaseEntity
	{
		public bool IsDone { get; set; } = false;
		//public bool IsRequired { get; set; } = true;

		public Step Step { get; set; }
		public int StepId { get; set; }

		public User User { get; set; }
		public int UserId { get; set; }

	}
}
