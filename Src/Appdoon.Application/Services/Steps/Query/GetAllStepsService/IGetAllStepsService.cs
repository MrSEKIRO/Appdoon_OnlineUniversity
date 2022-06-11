using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using Appdoon.Domain.Entities.RoadMaps;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Steps.Query.GetAllStepService
{
	public class StepDto
	{
		public int Id { get; set; }
		public int RoadMapId { get; set; }
		public string Title { get; set; } = string.Empty;
		public string Link { get; set; } = string.Empty;
		public string Description { get; set; } = string.Empty;


		public string RoadmapTitle { get; set; }
		public string RoadmapImageSrc { get; set; }
		public int RoadmapStars { get; set; }

		public List<ChildStep> ChildSteps { get; set; }
	}
	public interface IGetAllStepsService
    {
        ResultDto<List<StepDto>> Execute();
    }

	public class GetAllStepService : IGetAllStepsService
    {
		private readonly IDatabaseContext _context;

		public GetAllStepService(IDatabaseContext context)
		{
			_context = context;
		}


		public ResultDto<List<StepDto>> Execute()
		{
			try
			{
				var steps = _context.Steps
					.Include(r => r.RoadMap)
					.Select(s => new StepDto()
					{
						Id = s.Id,
						Title = s.Title,
						RoadMapId = (int)s.RoadMapId,
						ChildSteps = s.ChildSteps,
						Link = s.Link,
						RoadmapTitle = s.RoadMap.Title,
						RoadmapImageSrc = s.RoadMap.ImageSrc,
						RoadmapStars = s.RoadMap.Stars,
						Description = s.Description

					}).ToList();

				return new ResultDto<List<StepDto>>()
				{
					IsSuccess = true,
					Message = "قدم‌ها ارسال شد.",
					Data = steps,
				};
			}
			catch (Exception e)
			{
				return new ResultDto<List<StepDto>>()
				{
					IsSuccess = false,
					Message = "ارسال ناموفق!",
					Data = new List<StepDto>(),
				};
			}
		}
	}
}
