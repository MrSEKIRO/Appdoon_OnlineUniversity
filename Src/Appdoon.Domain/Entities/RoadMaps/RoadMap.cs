using Appdoon.Domain.Commons;
using Appdoon.Domain.Entities.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Domain.Entities.RoadMaps
{
	public class RoadMap : BaseEntity
	{
		public string Title { get; set; } = string.Empty;
		public string Description { get; set; }
		public string ImageSrc { get; set; } = string.Empty;
		public int Stars { get; set; } = 5;
		public List<Category> Categories { get; set; }
		//public List<User> Teachers { get; set; }
		//public List<User> Students { get; set; }
		public List<Step> Steps { get; set; } = new();
	}
}
