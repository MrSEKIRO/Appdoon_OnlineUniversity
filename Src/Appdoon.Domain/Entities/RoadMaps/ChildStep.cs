using Appdoon.Domain.Commons;
using System.Collections.Generic;

namespace Appdoon.Domain.Entities.RoadMaps
{
	public class ChildStep : BaseEntity
	{
		public string Title { get; set; } = string.Empty;
		public string? Description { get; set; }
		public string? Link { get; set; }
		public bool IsDone { get; set; } = false;

		public Step Step { get; set; } = new();
		public int StepId { get; set; }

		public List<Linker>? Linkers { get; set; }
	}
}
