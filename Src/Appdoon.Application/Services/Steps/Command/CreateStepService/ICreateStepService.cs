using Appdoon.Application.Interfaces;
using Appdoon.Application.Validatores.StepValidatore;
using Appdoon.Common.Dtos;
using Appdoon.Domain.Entities.RoadMaps;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Steps.Command.CreateStepService
{
    public class CreateStepDto
    {
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; }
        public string Link { get; set; }
        public int RoadMapId { get; set; }
    }

    public interface ICreateStepService
    {
        ResultDto Execute(CreateStepDto StepDto);
    }
    public class CreateStepService : ICreateStepService
    {
        private readonly IDatabaseContext _context;

        public CreateStepService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultDto Execute(CreateStepDto StepDto)
        {
            try
            {
                // validate step
                StepValidatore validationRules = new StepValidatore();
                var result = validationRules.Validate(StepDto);
				if(result.IsValid == false)
				{
                    return new ResultDto()
                    {
                        IsSuccess = false,
                        Message = result.Errors[0].ErrorMessage,
                    };
				}

                Step step = new Step()
                {
                    Title = StepDto.Title,
                    Description = StepDto.Description,
                    Link = StepDto.Link,
                };


                var roadmap = _context.RoadMaps.First(roadmap => roadmap.Id == StepDto.RoadMapId);

                // trash?????
                roadmap.Steps ??= new List<Step>();



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
