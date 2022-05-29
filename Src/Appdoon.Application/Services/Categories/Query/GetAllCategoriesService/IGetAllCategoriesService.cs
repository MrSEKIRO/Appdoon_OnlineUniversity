using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using Appdoon.Common.Pagination;
using Appdoon.Domain.Entities.RoadMaps;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Categories.Query.GetAllCategoriesService
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
    public interface IGetAllCategoriesService
    {
        public ResultDto<AllCategoriesDto> Execute(int page_number, int page_size);
    }

    public class GetCategoriesService : IGetAllCategoriesService
    {
        private readonly IDatabaseContext _context;

        public GetCategoriesService(IDatabaseContext databaseContext)
        {
            _context = databaseContext;
        }

        public ResultDto<AllCategoriesDto> Execute(int page_number, int page_size)
        {
            try
            {
                int rowCount = 0;
                var categories = _context.Categories.Select(s => new CategoryDto
                {
                    Id = s.Id,
                    Name = s.Name,
                    Link = s.Link
                }).ToPaged(page_number, page_size, out rowCount)
                .ToList();
                AllCategoriesDto allCategoriesDto = new AllCategoriesDto();
                allCategoriesDto.Categories = categories;
                allCategoriesDto.RowCount = rowCount;

                return new ResultDto<AllCategoriesDto>()
                {
                    IsSuccess = true,
                    Message = "دسته‌بندی‌ها ارسال شدند.",
                    Data = allCategoriesDto
                };

            }
            catch (Exception e)
            {
                return new ResultDto<AllCategoriesDto>()
                {
                    IsSuccess = false,
                    Message = "ارسال ناموفق دسته‌بندی‌ها!",
                    Data = new AllCategoriesDto()
                };
            }
        }
    }


}
