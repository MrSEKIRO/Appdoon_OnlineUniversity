using Appdoon.Domain.Commons;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Domain.Entities.RoadMaps
{
	public class Lesson : BaseEntity
	{
		public string Title { get; set; } = string.Empty;
		public string TopBannerSrc { get; set; } = string.Empty;
		public string Text { get; set; } = string.Empty;

	}
}
