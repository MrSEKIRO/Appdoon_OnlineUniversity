using Appdoon.Domain.Commons;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Domain.Entities.RoadMaps
{
	public class Linker : BaseEntity
	{
		public string Title { get; set; } = string.Empty;
		public string Link { get; set; } = string.Empty;
		public List<ChildStep> ChildSteps { get; set; } = new();
	}
}
