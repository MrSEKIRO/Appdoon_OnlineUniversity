using Appdoon.Domain.Commons;
using System.Collections.Generic;

namespace Appdoon.Domain.Entities.RoadMaps
{
	public class Category : BaseEntity
	{
		public string Name { get; set; } = string.Empty;
		public string Link { get; set; }
		public List<RoadMap> RoadMaps { get; set; } = new();
	}
}
