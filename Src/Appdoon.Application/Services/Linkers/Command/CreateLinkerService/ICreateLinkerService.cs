using Appdoon.Application.Interfaces;
using Appdoon.Application.Validatores.LinkerValidatore;
using Appdoon.Common.Dtos;
using Appdoon.Domain.Entities.RoadMaps;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Linkers.Command.CreateLinkerService
{
    public class CreateLinkerLinkerDto
    {
        public string Title { get; set; } = string.Empty;
        public string Link { get; set; } = string.Empty;
        public int ChildStepId { get; set; }
    }
    public interface ICreateLinkerService
    {
        ResultDto Execute(CreateLinkerLinkerDto addLinkerDto);
    }
    public class AddLinkerService : ICreateLinkerService
    {
        private readonly IDatabaseContext _context;
        public AddLinkerService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultDto Execute(CreateLinkerLinkerDto addLinkerDto)
        {
            try
            {
                //validate
                LinkerValidatore validationRules = new LinkerValidatore();
                var result = validationRules.Validate(addLinkerDto);

                if (result.IsValid == false)
                {
                    return new ResultDto()
                    {
                        IsSuccess = false,
                        Message = result.Errors[0].ErrorMessage,
                    };
                }

                var linker = new Linker()
                {
                    Title = addLinkerDto.Title,
                    Link = addLinkerDto.Link,
                };

                var childStep = _context.ChildSteps.Find(addLinkerDto.ChildStepId);

                // trash???
                childStep.Linkers ??= new List<Linker>();

                childStep.Linkers.Add(linker);

                _context.SaveChanges();

                return new ResultDto()
                {
                    IsSuccess = true,
                    Message = $"اضافه شد! {childStep.Title}لینک با موفقیت به محتوای",
                };
            }
            catch (Exception e)
            {
                return new ResultDto()
                {
                    IsSuccess = false,
                    Message = "خطا در اضافه کردن لینک به زیرقدم!",
                };
            }
        }
    }


}
