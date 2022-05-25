using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using Appdoon.Domain.Entities.RoadMaps;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.RoadMaps.Query.FilterRoadmapsService
{
    public interface IFilterRoadmapsService
    {
        ResultDto<List<FilterRoadMapsDto>> Execute(List<int> categoriesId);
    }
    public class FilterRoadmapsService : IFilterRoadmapsService
    {
        private readonly IDatabaseContext _context;
        public FilterRoadmapsService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultDto<List<FilterRoadMapsDto>> Execute(List<int> categoriesId)
        {
            try
            {
                var roadmaps = _context.RoadMaps
                    .Include(r => r.Categories)
                    .Where(r => r.Categories.Select(c=>c.Id).Any(id => categoriesId.Contains(id)))
                    .Select(r => new FilterRoadMapsDto()
                    {
                        Id = r.Id,
                        Title = r.Title,
                    }).ToList();

                return new ResultDto<List<FilterRoadMapsDto>>()
                {
                    IsSuccess = true,
                    Message = "رودمپ ها پیدا و ارسال شد",
                    Data = roadmaps,
                };
            }
            catch (Exception)
            {
                return new ResultDto<List<FilterRoadMapsDto>>()
                {
                    IsSuccess = false,
                    Message = "جستجو ناموفق!",
                    Data = new List<FilterRoadMapsDto>(),
                };
            }
        }
    }
    public class FilterRoadMapsDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
    }
}
