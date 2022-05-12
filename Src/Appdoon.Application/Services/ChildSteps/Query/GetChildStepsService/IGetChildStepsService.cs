using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using Appdoon.Domain.Entities.RoadMaps;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.ChildSteps.Query.GetChildStepsService
{
    public class ChildStepDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Link { get; set; }
        public int StepId { get; set; }
        public List<Linker> Linkers { get; set; }
    }

    public interface IGetChildStepsService
    {
        public ResultDto<List<ChildStepDto>> Execute();
    }

    public class GetChildStepsService : IGetChildStepsService
    {
        private readonly IDatabaseContext _context;

        public GetChildStepsService(IDatabaseContext databaseContext)
        {
            _context = databaseContext;
        }

        public ResultDto<List<ChildStepDto>> Execute()
        {
            try
            {
                var childsteps = _context.ChildSteps.Select(s => new ChildStepDto
                {
                    Id = s.Id,
                    Title = s.Title,
                    Description = s.Description,
                    Link = s.Link,
                    StepId = s.StepId,
                    Linkers = s.Linkers
                }).ToList();

                return new ResultDto<List<ChildStepDto>>()
                {
                    IsSuccess = true,
                    Message = "محتوا ها ارسال شدند.",
                    Data = childsteps
                };

            }
            catch (Exception e)
            {
                return new ResultDto<List<ChildStepDto>>()
                {
                    IsSuccess = false,
                    Message = "ارسال ناموفق محتوا ها!",
                    Data = new List<ChildStepDto>()
                };
            }
        }
    }
}
