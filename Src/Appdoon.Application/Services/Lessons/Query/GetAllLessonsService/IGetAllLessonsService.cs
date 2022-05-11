using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using Appdoon.Domain.Entities.RoadMaps;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Lessons.Query.GetAllLessonsService
{
	public class LessonDto
	{
		public int Id { get; set; }
		public string Title { get; set; } = string.Empty;
		public string Text { get; set; }
		public string TopBannerSrc { get; set; } = string.Empty;
	}
	public interface IGetAllLessonsService
	{
		ResultDto<List<LessonDto>> Execute();
	}

	public class GetAllLessonsService : IGetAllLessonsService
	{
		private readonly IDatabaseContext _context;

		public GetAllLessonsService(IDatabaseContext context)
		{
			_context = context;
		}
		public ResultDto<List<LessonDto>> Execute()
		{
			try
			{
				var lessons = _context.Lessons
					.Select(r => new LessonDto()
					{
						Id = r.Id,
						Title = r.Title,
						TopBannerSrc = r.TopBannerSrc,
						Text = r.Text,
					}).ToList();

				return new ResultDto<List<LessonDto>>()
				{
					IsSuccess = true,
					Message = "مقالات ارسال شد",
					Data = lessons,
				};
			}
			catch (Exception e)
			{
				return new ResultDto<List<LessonDto>>()
				{
					IsSuccess = false,
					Message = "ارسال ناموفق!",
					Data = new List<LessonDto>(),
				};
			}
		}
	}


}
