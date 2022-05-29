using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using Appdoon.Domain.Entities.RoadMaps;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Roadmaps.Query.GetIndividualRoadmapService
{
    public interface IGetIndividualRoadmapService
    {
        ResultDto<IndividualRoadMapDto> Execute(int id);
    }
    public class GetIndividualRoadMapService : IGetIndividualRoadmapService
    {
        private readonly IDatabaseContext _context;
        public GetIndividualRoadMapService(IDatabaseContext context)
        {
            _context = context;
        }
        public ResultDto<IndividualRoadMapDto> Execute(int id)
        {
            try
            {
                var roadmap = _context.RoadMaps
                    .Where(x => x.Id == id)
                    .Include(r => r.Categories)
                    .Include(r => r.Steps)
                    .ThenInclude(s => s.ChildSteps)
                    .ThenInclude(l => l.Linkers)
                    .Select(r => new IndividualRoadMapDto()
                    {
                        Id = r.Id,
                        Description = r.Description,
                        ImageSrc = r.ImageSrc,
                        Stars = r.Stars,
                        Title = r.Title,
                        Categories = r.Categories,
                        Steps = r.Steps.Select(s => new Step()
                        {
                            Id = s.Id,
                            Title = s.Title,
                            Description = s.Description,
                            //IsDone = s.IsDone,
                            Link = s.Link,
                            IsRemoved = s.IsRemoved,
                            InsertTime = s.InsertTime,
                            UpdateTime = s.UpdateTime,
                            RemoveTime = s.RemoveTime,
                            RoadMapId = s.RoadMapId,
                            ChildSteps = s.ChildSteps,
                        }).ToList(),
                    }).FirstOrDefault();

                if (roadmap == null)
                {
                    return new ResultDto<IndividualRoadMapDto>()
                    {
                        IsSuccess = false,
                        Message = "رود مپ یافت نشد!",
                        Data = new IndividualRoadMapDto(),
                    };
                }

                return new ResultDto<IndividualRoadMapDto>()
                {
                    IsSuccess = true,
                    Message = "رودمپ ها ارسال شد",
                    Data = roadmap,
                };
            }
            catch (Exception e)
            {
                return new ResultDto<IndividualRoadMapDto>()
                {
                    IsSuccess = false,
                    Message = "ارسال ناموفق!",
                    Data = new IndividualRoadMapDto(),
                };
            }
        }
    }
    public class IndividualRoadMapDto
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; }
        public string ImageSrc { get; set; } = string.Empty;
        public int Stars { get; set; }
        public List<Category> Categories { get; set; }
        public List<Step> Steps { get; set; }
    }
}
