using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using Appdoon.Domain.Entities.RoadMaps;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.ChildSteps.Query.GetIndividualChildStepService
{
	public class IndividualChildStepDto
	{
		public int Id { get; set; }
		public string Title { get; set; } = string.Empty;
		public string Description { get; set; }
		public string Link { get; set; }
		public int StepId { get; set; }
		public List<Linker> Linkers { get; set; }
	}
	public interface IGetIndividualChildStepService
	{
		ResultDto<IndividualChildStepDto> Execute(int id);
	}
	public class GetIndividualChildStepService : IGetIndividualChildStepService
	{
		private readonly IDatabaseContext _context;
		public GetIndividualChildStepService(IDatabaseContext context)
		{
			_context = context;
		}
		public ResultDto<IndividualChildStepDto> Execute(int id)
		{
			try
			{
				var childstep = _context.ChildSteps
					.Where(x => x.Id == id)
					.Select(r => new IndividualChildStepDto()
					{
						Id = r.Id,
						Title = r.Title,
						Description = r.Description,
						StepId = r.StepId,
						Link = r.Link,
						Linkers = r.Linkers
					}).FirstOrDefault();

				if (childstep == null)
				{
					return new ResultDto<IndividualChildStepDto>()
					{
						IsSuccess = false,
						Message = "محتوا یافت نشد!",
						Data = new IndividualChildStepDto(),
					};
				}

				return new ResultDto<IndividualChildStepDto>()
				{
					IsSuccess = true,
					Message = "محتوا ارسال شد",
					Data = childstep,
				};
			}
			catch (Exception e)
			{
				return new ResultDto<IndividualChildStepDto>()
				{
					IsSuccess = false,
					Message = "ارسال ناموفق!",
					Data = new IndividualChildStepDto(),
				};
			}
		}
	}
}
