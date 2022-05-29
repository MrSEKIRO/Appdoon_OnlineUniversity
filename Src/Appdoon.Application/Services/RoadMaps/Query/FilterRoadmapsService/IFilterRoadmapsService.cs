using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using Appdoon.Common.Pagination;
using Appdoon.Domain.Entities.RoadMaps;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.RoadMaps.Query.FilterRoadmapsService
{
    public class FilterDto
    {
        public List<int> CategoriesId { get; set; }
        public int PageNumber { get; set; }
        public int PageSize { get; set; }
    }
    public class RoadMapDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; }
        public string ImageSrc { get; set; } = string.Empty;
        public int Stars { get; set; }
        public List<Category> Categories { get; set; }
    }
    public class AllRoadmapsDto
    {
        public List<RoadMapDto> Roadmaps { get; set; }
        public int RowCount { get; set; }
    }
    public interface IFilterRoadmapsService
    {
        ResultDto<AllRoadmapsDto> Execute(FilterDto filterDto);
    }
    public class FilterRoadmapsService : IFilterRoadmapsService
    {
        private readonly IDatabaseContext _context;
        public FilterRoadmapsService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultDto<AllRoadmapsDto> Execute(FilterDto filterDto)
        {
            try
            {
                int rowCount = 0;
                var roadmaps = _context.RoadMaps
                    .Include(r => r.Categories)
                    .Where(r => r.Categories.Select(c=>c.Id).Any(id => filterDto.CategoriesId.Contains(id)))
                    .Select(r => new RoadMapDto()
                    {
                        Id = r.Id,
                        Description = r.Description,
                        ImageSrc = r.ImageSrc,
                        Stars = r.Stars,
                        Title = r.Title,
                        Categories = r.Categories,
                    }).ToPaged(filterDto.PageNumber, filterDto.PageSize, out rowCount)
                    .ToList();

                AllRoadmapsDto allRoadmapsDto = new AllRoadmapsDto();
                allRoadmapsDto.Roadmaps = roadmaps;
                allRoadmapsDto.RowCount = rowCount;

                return new ResultDto<AllRoadmapsDto>()
                {
                    IsSuccess = true,
                    Message = "رودمپ ها پیدا و ارسال شد",
                    Data = allRoadmapsDto,
                };
            }
            catch (Exception)
            {
                return new ResultDto<AllRoadmapsDto>()
                {
                    IsSuccess = false,
                    Message = "جستجو ناموفق!",
                    Data = new AllRoadmapsDto(),
                };
            }
        }
    }
}
