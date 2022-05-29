using Appdoon.Application.Interfaces;
using Appdoon.Domain.Entities.RoadMaps;
using Appdoon.Common.Dtos;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Appdoon.Common.Pagination;

namespace Appdoon.Application.Services.RoadMaps.Query.SearchRoadmapsService
{
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
    public interface ISearchRoadmapsService
    {
        ResultDto<AllRoadmapsDto> Execute(string searched_text, int page_number, int page_size);
    }
    public class SearchRoadmapsService : ISearchRoadmapsService
    {
        private readonly IDatabaseContext _context;
        public SearchRoadmapsService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultDto<AllRoadmapsDto> Execute(string searched_text, int page_number, int page_size)
        {
            try
            {
                int rowCount = 0;
                var roadmaps = _context.RoadMaps
                    .Where(r => r.Title.Contains(searched_text))
                    .Include(r => r.Categories)
                    .Select(r => new RoadMapDto()
                    {
                        Id = r.Id,
                        Description = r.Description,
                        ImageSrc = r.ImageSrc,
                        Stars = r.Stars,
                        Title = r.Title,
                        Categories = r.Categories,
                    }).ToPaged(page_number, page_size, out rowCount)
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
