using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using Appdoon.Common.Pagination;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Lessons.Query.SearchLessonsService
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
    public interface ISearchLessonsService
    {
        ResultDto<AllLessonsDto> Execute(string searched_text, int page_number, int page_size);
    }
    public class SearchLessonsService : ISearchLessonsService
    {
        private readonly IDatabaseContext _context;
        public SearchLessonsService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultDto<AllLessonsDto> Execute(string searched_text, int page_number, int page_size)
        {
            try
            {
                int rowCount = 0;
                var lessons = _context.Lessons
                    .Where(r => r.Title.Contains(searched_text))
                    .Select(r => new LessonDto()
                    {
                        Id = r.Id,
                        Title = r.Title,
                        Text = r.Text,
                        TopBannerSrc = r.TopBannerSrc
                    }).ToPaged(page_number, page_size, out rowCount)
                    .ToList();

                AllLessonsDto allLessonsDto = new AllLessonsDto();
                allLessonsDto.Lessons = lessons;
                allLessonsDto.RowCount = rowCount;


                return new ResultDto<AllLessonsDto>()
                {
                    IsSuccess = true,
                    Message = "مقالات پیدا و ارسال شد",
                    Data = allLessonsDto,
                };
            }
            catch (Exception)
            {
                return new ResultDto<AllLessonsDto>()
                {
                    IsSuccess = false,
                    Message = "جستجو ناموفق!",
                    Data = new AllLessonsDto(),
                };
            }
        }
    }

}
