using Appdoon.Domain.Commons;
using System.Collections.Generic;

namespace Appdoon.Domain.Entities.Users
{
	public class Role : BaseEntity
	{
		public string Name { get; set; }
		public List<User> Users { get; set; }
	}
}
