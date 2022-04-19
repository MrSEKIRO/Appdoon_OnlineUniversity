using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using Appdoon.Domain.Entities.RoadMaps;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Steps.Command.CreateStepService
{
    public class RequestCreateStepDto
    {
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; }
        public string Link { get; set; }
        public int RoadMapId { get; set; }
    }

    public interface ICreateStepService
    {
        ResultDto Execute(RequestCreateStepDto StepDto);
    }
    public class CreateStepService : ICreateStepService
    {
        private readonly IDatabaseContext _context;

        public CreateStepService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultDto Execute(RequestCreateStepDto StepDto)
        {
            try
            {
                Step step = new Step()
                {
                    Title = StepDto.Title,
                    Description = StepDto.Description,
                    Link = StepDto.Link,
                };


                var roadmap = _context.RoadMaps.First(roadmap => roadmap.Id == StepDto.RoadMapId);
                roadmap.Steps.Add(step);

                _context.SaveChanges();

                return new ResultDto()
                {
                    IsSuccess = true,
                    Message = "قدم اضافه شد !",
                };
            }
            catch (Exception e)
            {
                return new ResultDto()
                {
                    IsSuccess = false,
                    Message = e.Message,
                };
            }
        }
    }
}
