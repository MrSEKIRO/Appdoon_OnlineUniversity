using Appdoon.Application.Interfaces;
using Appdoon.Domain.Entities.RoadMaps;
using Appdoon.Common.Dtos;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.RoadMaps.Query.SearchRoadmapsService
{
    public interface ISearchRoadmapsService
    {
        ResultDto<List<SearchRoadMapsDto>> Execute(string name);
    }
    public class SearchRoadmapsService : ISearchRoadmapsService
    {
        private readonly IDatabaseContext _context;
        public SearchRoadmapsService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultDto<List<SearchRoadMapsDto>> Execute(string name)
        {
            try
            {
                var roadmaps = _context.RoadMaps
                    .Where(r => r.Title.Contains(name))
                    .Select(r => new SearchRoadMapsDto()
                    {
                        Id = r.Id,
                        Title = r.Title,
                    }).ToList();

                return new ResultDto<List<SearchRoadMapsDto>>()
                {
                    IsSuccess = true,
                    Message = "رودمپ ها پیدا و ارسال شد",
                    Data = roadmaps,
                };
            }
            catch (Exception)
            {
                return new ResultDto<List<SearchRoadMapsDto>>()
                {
                    IsSuccess = false,
                    Message = "جستجو ناموفق!",
                    Data = new List<SearchRoadMapsDto>(),
                };
            }
        }
    }
    public class SearchRoadMapsDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
    }
}
