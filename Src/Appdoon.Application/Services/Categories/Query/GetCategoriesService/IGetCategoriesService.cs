using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using Appdoon.Domain.Entities.RoadMaps;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Categories.Query.GetCategoriesService
{
    public interface IGetCategoriesService
    {
        public ResultDto<List<CategoryDto>> Execute();
    }

    public class GetCategoriesService : IGetCategoriesService
    {
        private readonly IDatabaseContext _context;

        public GetCategoriesService(IDatabaseContext databaseContext)
        {
            _context = databaseContext;
        }

        public ResultDto<List<CategoryDto>> Execute()
        {
            try
            {
                var categories = _context.Categories.Select(s => new CategoryDto
                {
                    Name = s.Name,
                    Link = s.Link
                }).ToList();

                return new ResultDto<List<CategoryDto>>()
                {
                    IsSuccess = true,
                    Message = "دسته‌بندی‌ها ارسال شدند.",
                    Data = categories
                };

            }
            catch(Exception e)
            {
                return new ResultDto<List<CategoryDto>>()
                {
                    IsSuccess = false,
                    Message = "ارسال ناموفق دسته‌بندی‌ها!",
                    Data = new List<CategoryDto>()
                };
            }
        }
    }

    public class CategoryDto
    {
        public string Name { get; set; }
        public string Link { get; set; }
    }
}
