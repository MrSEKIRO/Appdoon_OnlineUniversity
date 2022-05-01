using Appdoon.Common.UserRoles;
using Appdoon.Domain.Commons;
using Appdoon.Domain.Entities.RoadMaps;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Domain.Entities.Users
{
	public class User : BaseEntity
    {
        public string Username { get; set; } =string.Empty;
		public string? FirstName { get; set; }
        public string? LastName { get; set; }
		public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
		public string? PhoneNumber { get; set; }
		public List<Role> Roles { get; set; } = new();
		public List<RoadMap>? SignedRoadMaps { get; set; }
		public List<RoadMap>? BookmarkedRoadMaps { get; set; }
		public List<RoadMap>? CreatedRoadMaps { get; set; }
	}
}
