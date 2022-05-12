using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using Appdoon.Domain.Entities.RoadMaps;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Roadmaps.Query.GetAllRoadmapsService
{
    public interface IGetAllRoadmapsService
    {
        ResultDto<List<RoadMapDto>> Execute();
    }

    public class GetAllRoadMapService : IGetAllRoadmapsService
    {
        private readonly IDatabaseContext _context;

        public GetAllRoadMapService(IDatabaseContext context)
        {
            _context = context;
        }
        public ResultDto<List<RoadMapDto>> Execute()
        {
            try
            {
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
                    }).ToList();

                return new ResultDto<List<RoadMapDto>>()
                {
                    IsSuccess = true,
                    Message = "رودمپ ها ارسال شد",
                    Data = roadmaps,
                };
            }
            catch (Exception e)
            {
                return new ResultDto<List<RoadMapDto>>()
                {
                    IsSuccess = false,
                    Message = "ارسال ناموفق!",
                    Data = new List<RoadMapDto>(),
                };
            }
        }
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
}
