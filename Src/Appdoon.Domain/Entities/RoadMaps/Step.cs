using Appdoon.Domain.Commons;
using Appdoon.Domain.Entities.Progress;
using System.Collections.Generic;

namespace Appdoon.Domain.Entities.RoadMaps
{
	public class Step : BaseEntity
	{
		public string Title { get; set; } = string.Empty;
		public string? Description { get; set; }
		public string? Link { get; set; }
		//public bool IsDone { get; set; } = false;

		public RoadMap RoadMap { get; set; } = new();
		public int RoadMapId { get; set; }

		public List<ChildStep>? ChildSteps { get; set; }

		public List<StepProgress>? StepProgresses { get; set; }
	}
}
