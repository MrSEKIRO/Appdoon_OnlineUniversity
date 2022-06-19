using Appdoon.Domain.Commons;
using Appdoon.Domain.Entities.Progress;
using System.Collections.Generic;

namespace Appdoon.Domain.Entities.RoadMaps
{
	public class ChildStep : BaseEntity
	{
		public string Title { get; set; } = string.Empty;
		public string? Description { get; set; }
		public string? Link { get; set; }
		public bool IsRequired { get; set; } = true;

		public Step? Step { get; set; }
		public int StepId { get; set; }

		public List<Linker> Linkers { get; set; } = new();

		public List<ChildStepProgress> ChildStepProgresses { get; set; } = new();
	}
}
