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
	public class ChildStepProgress : BaseEntity
	{
		public bool IsDone { get; set; } = false;
		public bool IsRequired { get; set; } = true;

		public ChildStep ChildStep { get; set; } = new();
		public int ChildStepId { get; set; }

		public User User { get; set; } = new();
		public int UserId { get; set; }
	}
}
