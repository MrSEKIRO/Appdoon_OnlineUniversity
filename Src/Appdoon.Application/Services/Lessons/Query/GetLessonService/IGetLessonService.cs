using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Lessons.Query.GetLessonService
{
	public class LessonIdDto
	{
		public int LessonId { get; set; }
	}
	public interface IGetLessonService
    {
		ResultDto<LessonDto> Execute(LessonIdDto LessonId);
	}

	public class GetLessonService : IGetLessonService
	{
		private readonly IDatabaseContext _context;
		public GetLessonService(IDatabaseContext context)
		{
			_context = context;
		}
		public ResultDto<LessonDto> Execute(LessonIdDto LessonId)
		{
			try
			{
				var lesson = _context.Lessons
					.Where(x => x.Id == LessonId.LessonId)
					.Select(r => new LessonDto()
					{
						Id = r.Id,
						Title = r.Title,
						TopBannerSrc = r.TopBannerSrc,
						Text = r.Text,
					}).FirstOrDefault();

				if (lesson == null)
				{
					return new ResultDto<LessonDto>()
					{
						IsSuccess = false,
						Message = "درس یافت نشد!",
						Data = new LessonDto(),
					};
				}

				return new ResultDto<LessonDto>()
				{
					IsSuccess = true,
					Message = "درس ها ارسال شد",
					Data = lesson,
				};
			}
			catch (Exception e)
			{
				return new ResultDto<LessonDto>()
				{
					IsSuccess = false,
					Message = "ارسال ناموفق!",
					Data = new LessonDto(),
				};
			}
		}
	}

	public class LessonDto
	{
		public int Id { get; set; }
		public string Title { get; set; } = string.Empty;
		public string TopBannerSrc { get; set; }
		public string Text { get; set; } = string.Empty;
	}

}
