using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Lessons.Query.SearchLessonsService
{
    public interface ISearchLessonsService
    {
        ResultDto<List<SearchLessonsDto>> Execute(string name);
    }
    public class SearchLessonsService : ISearchLessonsService
    {
        private readonly IDatabaseContext _context;
        public SearchLessonsService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultDto<List<SearchLessonsDto>> Execute(string name)
        {
            try
            {
                var lessons = _context.Lessons
                    .Where(r => r.Title.Contains(name))
                    .Select(r => new SearchLessonsDto()
                    {
                        Id = r.Id,
                        Title = r.Title,
                    }).ToList();

                return new ResultDto<List<SearchLessonsDto>>()
                {
                    IsSuccess = true,
                    Message = "مقالات پیدا و ارسال شد",
                    Data = lessons,
                };
            }
            catch (Exception)
            {
                return new ResultDto<List<SearchLessonsDto>>()
                {
                    IsSuccess = false,
                    Message = "جستجو ناموفق!",
                    Data = new List<SearchLessonsDto>(),
                };
            }
        }
    }
    public class SearchLessonsDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
    }
}
