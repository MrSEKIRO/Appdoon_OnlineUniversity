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
		public string? Description { get; set; }
		public string? ImageSrc { get; set; }
		public int Stars { get; set; } = 5;
		public List<Category> Categories { get; set; } = new();
		public List<Step> Steps { get; set; } = new();
		public List<User> Students { get; set; } = new();
		public User? Creatore { get; set; }
		public int? CreatoreId { get; set; }
		public List<User> UsersBookmarked { get; set; } = new();
	}
}
