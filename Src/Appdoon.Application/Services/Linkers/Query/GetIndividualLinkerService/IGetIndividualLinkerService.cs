using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Linkers.Query.GetIndividualLinkerService
{
	public interface IGetIndividualLinkerService
	{
		ResultDto<LinkDto> Execute(int id);
	}
	public class LinkDto
	{
		public int Id { get; set; }
		public string Title { get; set; } = string.Empty;
		public string Link { get; set; }
		public int ChildStepId { get; set; }
	}
	public class GetIndividualLinkerService : IGetIndividualLinkerService
	{
		private readonly IDatabaseContext _context;
		public GetIndividualLinkerService(IDatabaseContext context)
		{
			_context = context;
		}
		public ResultDto<LinkDto> Execute(int id)
		{
			try
			{
				var link = _context.Linkers
					.Where(x => x.Id == id)
					.Select(r => new LinkDto()
					{
						Id = r.Id,
						Title = r.Title,
						Link = r.Link,
						ChildStepId = r.ChildSteps.FirstOrDefault().Id,
					}).FirstOrDefault();

				if (link == null)
				{
					return new ResultDto<LinkDto>()
					{
						IsSuccess = false,
						Message = "لینک یافت نشد!",
						Data = new LinkDto(),
					};
				}

				return new ResultDto<LinkDto>()
				{
					IsSuccess = true,
					Message = "لینک ها ارسال شد",
					Data = link,
				};
			}
			catch (Exception e)
			{
				return new ResultDto<LinkDto>()
				{
					IsSuccess = false,
					Message = "ارسال ناموفق!",
					Data = new LinkDto(),
				};
			}
		}
	}
}
