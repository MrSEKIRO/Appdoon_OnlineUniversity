using Appdoon.Domain.Entities.RoadMaps;
using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.RoadMaps.Command.ICreateRoadMapIndividualService
{
    public interface ICreateRoadMapIndividualService
    {
        ResultDto Execute(string Title, string Description, string ImageSrc, List<int> CategoriesId);
    }
	public class CreateRoadMapIndividualService : ICreateRoadMapIndividualService
	{
		private readonly IDatabaseContext _context;

		public CreateRoadMapIndividualService(IDatabaseContext context)
		{
			_context = context;
		}
		public ResultDto Execute(string Title, string Description, string ImageSrc, List<int> CategoriesId)
		{
			try
			{
				List<Domain.Entities.RoadMaps.Category> categories = new List<Domain.Entities.RoadMaps.Category>();
                foreach (var item in CategoriesId)
                {
					Domain.Entities.RoadMaps.Category category = _context.Categories.Find(item);
					categories.Add(category);
                }
				var roadmap = new RoadMap()
				{
					Title = Title,
					Description = Description,
					ImageSrc = ImageSrc,
					Categories = categories,
				};

				_context.RoadMaps.Add(roadmap);
				_context.SaveChanges();

				return new ResultDto()
				{
					IsSuccess = true,
					Message = "رودمپ ساخته شد",
				};
			}
			catch (Exception e)
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
