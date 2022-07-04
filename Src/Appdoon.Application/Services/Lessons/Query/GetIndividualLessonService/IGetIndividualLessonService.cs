using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Lessons.Query.GetIndividualLessonService
{
	public class LessonDto
	{
		public int Id { get; set; }
		public string Title { get; set; } = string.Empty;
		public string CreatorName { get; set; } = string.Empty;
		public DateTime CreateTime { get; set; }
		public string TopBannerSrc { get; set; }
		public string Text { get; set; } = string.Empty;
	}
	public interface IGetIndividualLessonService
	{
		ResultDto<LessonDto> Execute(int id);
	}

	public class GetLessonService : IGetIndividualLessonService
	{
		private readonly IDatabaseContext _context;
		public GetLessonService(IDatabaseContext context)
		{
			_context = context;
		}
		public ResultDto<LessonDto> Execute(int id)
		{
			try
			{
				var lesson = _context.Lessons
					.Where(x => x.Id == id)
					.Select(r => new LessonDto()
					{
						Id = r.Id,
						Title = r.Title,
						CreatorName = r.Creator.Username,
						CreateTime = r.InsertTime,
						TopBannerSrc = r.TopBannerSrc,
						Text = r.Text,
					}).FirstOrDefault();

				if(lesson == null)
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
			catch(Exception e)
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
}
