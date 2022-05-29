using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using Appdoon.Common.Pagination;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Categories.Query.SearchCategoriesService
{
    public class CategoryDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Link { get; set; }
    }
    public class AllCategoriesDto
    {
        public List<CategoryDto> Categories { get; set; }
        public int RowCount { get; set; }
    }
    public interface ISearchCategoriesService
    {
        ResultDto<AllCategoriesDto> Execute(string searched_text, int page_number, int page_size);
    }
    public class SearchCategoriesService : ISearchCategoriesService
    {
        private readonly IDatabaseContext _context;
        public SearchCategoriesService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultDto<AllCategoriesDto> Execute(string searched_text, int page_number, int page_size)
        {
            try
            {
                int rowsCount = 0;
                var Categories = _context.Categories
                    .Where(r => r.Name.Contains(searched_text))
                    .Select(r => new CategoryDto()
                    {
                        Id = r.Id,
                        Name = r.Name,
                        Link = r.Link,
                    }).ToPaged(page_number, page_size, out rowsCount)
                    .ToList();

                AllCategoriesDto allCategoriesDto = new AllCategoriesDto();
                allCategoriesDto.Categories = Categories;
                allCategoriesDto.RowCount = rowsCount;

                return new ResultDto<AllCategoriesDto>()
                {
                    IsSuccess = true,
                    Message = "کتگوری ها پیدا و ارسال شد",
                    Data = allCategoriesDto,
                };
            }
            catch (Exception)
            {
                return new ResultDto<AllCategoriesDto>()
                {
                    IsSuccess = false,
                    Message = "جستجو ناموفق!",
                    Data = new AllCategoriesDto(),
                };
            }
        }
    }
}
