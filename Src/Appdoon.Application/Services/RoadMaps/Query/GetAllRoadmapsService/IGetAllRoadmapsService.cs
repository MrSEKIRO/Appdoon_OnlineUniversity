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

namespace Appdoon.Application.Services.Roadmaps.Query.GetAllRoadmapsService
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
    public interface IGetAllRoadmapsService
    {
        ResultDto<AllRoadmapsDto> Execute(int page_number, int page_size);
    }

    public class GetAllRoadMapService : IGetAllRoadmapsService
    {
        private readonly IDatabaseContext _context;

        public GetAllRoadMapService(IDatabaseContext context)
        {
            _context = context;
        }
        public ResultDto<AllRoadmapsDto> Execute(int page_number, int page_size)
        {
            try
            {
                int rowCount = 0;

                var roadmaps = _context.RoadMaps
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
                    Message = "رودمپ ها ارسال شد",
                    Data = allRoadmapsDto,
                };
            }
            catch (Exception e)
            {
                return new ResultDto<AllRoadmapsDto>()
                {
                    IsSuccess = false,
                    Message = "ارسال ناموفق!",
                    Data = new AllRoadmapsDto(),
                };
            }
        }
    }


}
