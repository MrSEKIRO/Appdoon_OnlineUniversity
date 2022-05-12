using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.RoadMaps.Command.DeleteRoadmapService
{
	public interface IDeleteRoadmapService
	{
		ResultDto Execute(int id);
	}

	public class DeleteRoadmapService : IDeleteRoadmapService
	{
		private readonly IDatabaseContext _context;

		public DeleteRoadmapService(IDatabaseContext context)
		{
			_context = context;
		}
		public ResultDto Execute(int id)
		{
			try
			{

				var road = _context.RoadMaps.Where(s => s.Id == id).FirstOrDefault();
				if(road == null)
                {
					return new ResultDto()
					{
						IsSuccess = false,
						Message = "این آیدی وجود ندارد!",
					};
				}

				road.IsRemoved = true;
				road.RemoveTime = DateTime.Now;
				_context.SaveChanges();

				return new ResultDto()
				{
					IsSuccess = true,
					Message = "رودمپ حدف شد.",
				};
			}
			catch (Exception e)
			{
				return new ResultDto()
				{
					IsSuccess = false,
					Message = "خطا در حذف رودمپ!",
				};
			}
		}
	}
}
