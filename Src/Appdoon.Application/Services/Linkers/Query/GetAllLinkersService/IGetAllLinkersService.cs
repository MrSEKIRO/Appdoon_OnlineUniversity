using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using Appdoon.Domain.Entities.RoadMaps;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Linkers.Query.GetAllLinkersService
{
	public class LinkDto
	{
		public int Id { get; set; }
		public string Title { get; set; } = string.Empty;
		public string Link { get; set; }
		public int ChildStepId { get; set; }
		public string ChildStepTitle { get; set; }
	}
	public interface IGetAllLinkersService
	{
		ResultDto<List<LinkDto>> Execute();
	}

	public class GetAllLinkersService : IGetAllLinkersService
	{
		private readonly IDatabaseContext _context;

		public GetAllLinkersService(IDatabaseContext context)
		{
			_context = context;
		}
		public ResultDto<List<LinkDto>> Execute()
		{
			try
			{
				var links = _context.Linkers.Include(r => r.ChildSteps)
					.Select(r => new LinkDto()
					{
						Id = r.Id,
						Title = r.Title,
						Link = r.Link,
						ChildStepId = r.ChildSteps.FirstOrDefault().Id,
						ChildStepTitle = r.ChildSteps.FirstOrDefault().Title
					}).ToList();

				return new ResultDto<List<LinkDto>>()
				{
					IsSuccess = true,
					Message = "لینک‌ها ارسال شد",
					Data = links,
				};
			}
			catch (Exception e)
			{
				return new ResultDto<List<LinkDto>>()
				{
					IsSuccess = false,
					Message = "ارسال ناموفق!",
					Data = new List<LinkDto>(),
				};
			}
		}
	}
}
