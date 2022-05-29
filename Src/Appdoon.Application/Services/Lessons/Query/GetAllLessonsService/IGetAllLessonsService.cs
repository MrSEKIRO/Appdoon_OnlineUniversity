using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using Appdoon.Common.Pagination;
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

	public class AllLessonsDto
	{
		public List<LessonDto> Lessons { get; set; }
		public int RowCount { get; set; }
	}
	public interface IGetAllLessonsService
	{
		ResultDto<AllLessonsDto> Execute(int page_number, int page_size);
	}

	public class GetAllLessonsService : IGetAllLessonsService
	{
		private readonly IDatabaseContext _context;

		public GetAllLessonsService(IDatabaseContext context)
		{
			_context = context;
		}
		public ResultDto<AllLessonsDto> Execute(int page_number, int page_size)
		{
			try
			{
				int rowCount = 0;
				var lessons = _context.Lessons
					.Select(r => new LessonDto()
					{
						Id = r.Id,
						Title = r.Title,
						TopBannerSrc = r.TopBannerSrc,
						Text = r.Text,
					}).ToPaged(page_number, page_size,out rowCount)
					.ToList();

				AllLessonsDto allLessonsDto = new AllLessonsDto();
				allLessonsDto.Lessons = lessons;
				allLessonsDto.RowCount = rowCount;


				return new ResultDto<AllLessonsDto>()
				{
					IsSuccess = true,
					Message = "مقالات ارسال شد",
					Data = allLessonsDto,
				};
			}
			catch (Exception e)
			{
				return new ResultDto<AllLessonsDto>()
				{
					IsSuccess = false,
					Message = "ارسال ناموفق!",
					Data = new AllLessonsDto(),
				};
			}
		}
	}


}
