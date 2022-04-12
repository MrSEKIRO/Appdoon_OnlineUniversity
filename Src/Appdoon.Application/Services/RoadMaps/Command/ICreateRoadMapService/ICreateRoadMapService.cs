using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using Appdoon.Domain.Entities.RoadMaps;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.RoadMaps.Command.ICreateRoadMapService
{
	//public class BuildRoadMapDto
	//{
	//	public string Title { get; set; } = string.Empty;
	//	public string Description { get; set; }
	//	public string ImageSrc { get; set; } = string.Empty;
	//	public int Stars { get; set; }
	//}
	public interface ICreateRoadMapService
	{
		ResultDto Execute(string Title, string Description, string ImageSrc, int Stars);
	}

	public class CreateRoadMapService : ICreateRoadMapService
	{
		private readonly IDatabaseContext _context;

		public CreateRoadMapService(IDatabaseContext context)
		{
			_context = context;
		}
		public ResultDto Execute(string Title, string Description, string ImageSrc, int Stars)
		{
			try
			{
				var roadmap = new RoadMap()
				{
					Title = Title,
					Description = Description,
					ImageSrc = ImageSrc,
					Stars = Stars,
				};

				_context.RoadMaps.Add(roadmap);
				_context.SaveChanges();

				return new ResultDto()
				{
					IsSuccess = true,
					Message = "رودمپ ساخته شد",
				};
			}
			catch(Exception e)
			{
				return new ResultDto()
				{
					IsSuccess = false,
					Message = "خطا در ساخت رودمپ!",
				};
			}
		}
	}
}
