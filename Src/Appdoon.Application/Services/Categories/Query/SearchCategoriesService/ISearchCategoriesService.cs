using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Categories.Query.SearchCategoriesService
{
    public interface ISearchCategoriesService
    {
        ResultDto<List<SearchCategoriesDto>> Execute(string name);
    }
    public class SearchCategoriesService : ISearchCategoriesService
    {
        private readonly IDatabaseContext _context;
        public SearchCategoriesService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultDto<List<SearchCategoriesDto>> Execute(string name)
        {
            try
            {
                var Categories = _context.Categories
                    .Where(r => r.Name.Contains(name))
                    .Select(r => new SearchCategoriesDto()
                    {
                        Id = r.Id,
                        Name = r.Name,
                        Link = r.Link,
                    }).ToList();

                return new ResultDto<List<SearchCategoriesDto>>()
                {
                    IsSuccess = true,
                    Message = "کتگوری ها پیدا و ارسال شد",
                    Data = Categories,
                };
            }
            catch (Exception)
            {
                return new ResultDto<List<SearchCategoriesDto>>()
                {
                    IsSuccess = false,
                    Message = "جستجو ناموفق!",
                    Data = new List<SearchCategoriesDto>(),
                };
            }
        }
    }
    public class SearchCategoriesDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string? Link { get; set; }
    }
}
