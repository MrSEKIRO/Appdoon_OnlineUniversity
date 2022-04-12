using Appdoon.Domain.Commons;

namespace Appdoon.Domain.Entities.RoadMaps
{
	public class ChildStep : BaseEntity
	{
		public string Title { get; set; } = string.Empty;
		public string Description { get; set; }
		public string Link { get; set; }
		public bool IsDone { get; set; } = false;

		public Step Step { get; set; }
		public int StepId { get; set; }
	}
}
