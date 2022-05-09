using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using Appdoon.Domain.Entities.RoadMaps;
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

		public List<ChildStep> ChildSteps { get; set; }
	}
	public interface IGetAllStepService
    {
        ResultDto<List<StepDto>> Execute();
    }

	public class GetAllStepService : IGetAllStepService
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
					.Select(r => new StepDto()
					{
						Id = r.Id,
						Title = r.Title,
						RoadMapId = r.RoadMapId,
						ChildSteps = r.ChildSteps
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
