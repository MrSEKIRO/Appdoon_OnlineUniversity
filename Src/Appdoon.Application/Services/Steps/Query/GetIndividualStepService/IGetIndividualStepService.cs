using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Steps.Query.GetIndividualStepService
{
	public class IndividualStepDto
	{
		public int Id { get; set; }
		public string Title { get; set; } = string.Empty;
		public string Description { get; set; }
		public string Link { get; set; }
		public int RoadMapId { get; set; }
	}
	public interface IGetIndividualStepService
	{
		ResultDto<IndividualStepDto> Execute(int id);
	}
	public class GetIndividualStepService : IGetIndividualStepService
	{
		private readonly IDatabaseContext _context;
		public GetIndividualStepService(IDatabaseContext context)
		{
			_context = context;
		}
		public ResultDto<IndividualStepDto> Execute(int id)
		{
			try
			{
				var step = _context.Steps
					.Where(x => x.Id == id)
					.Select(r => new IndividualStepDto()
					{
						Id = r.Id,
						Title = r.Title,
						Description = r.Description,
						Link = r.Link,
						RoadMapId = r.RoadMapId
					}).FirstOrDefault();

				if (step == null)
				{
					return new ResultDto<IndividualStepDto>()
					{
						IsSuccess = false,
						Message = "قدم یافت نشد!",
						Data = new IndividualStepDto(),
					};
				}

				return new ResultDto<IndividualStepDto>()
				{
					IsSuccess = true,
					Message = "قدم ارسال شد",
					Data = step,
				};
			}
			catch (Exception e)
			{
				return new ResultDto<IndividualStepDto>()
				{
					IsSuccess = false,
					Message = "ارسال ناموفق!",
					Data = new IndividualStepDto(),
				};
			}
		}
	}
}
