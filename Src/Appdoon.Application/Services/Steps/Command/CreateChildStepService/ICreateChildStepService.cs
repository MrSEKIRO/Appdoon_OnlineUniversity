﻿using Appdoon.Application.Interfaces;
using Appdoon.Application.Validatores.ChildStepValidatore;
using Appdoon.Common.Dtos;
using Appdoon.Domain.Entities.RoadMaps;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Steps.Command.CreateChildStepService
{
    public class RequestCreateChildStepDto
    {
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; }
        public string Link { get; set; }
        public int StepId { get; set; }
    }
    public interface ICreateChildStepService
    {
        ResultDto Execute(RequestCreateChildStepDto childStepDto);
    }
    public class CreateChildStepService : ICreateChildStepService
    {
        private readonly IDatabaseContext _context;
        public CreateChildStepService(IDatabaseContext context)
        {
            _context = context;
        }
        public ResultDto Execute(RequestCreateChildStepDto childStepDto)
        {
            try
            {
                ChildStepValidatore validationRules = new ChildStepValidatore();
                var result = validationRules.Validate(childStepDto);
				if(result.IsValid == false)
				{
                    return new ResultDto()
                    {
                        IsSuccess = false,
                        Message = result.Errors[0].ErrorMessage,
                    };
				}

                ChildStep childStep = new ChildStep()
                { 
                    Title = childStepDto.Title,
                    Description = childStepDto.Description,
                    Link = childStepDto.Link,
                };

                var step = _context.Steps.First(step => step.Id == childStepDto.StepId);
                step.ChildSteps.Add(childStep);


                _context.SaveChanges();
                return new ResultDto()
                {
                    IsSuccess = true,
                    Message = "زیر قدم اضافه شد !"
                };
            }
            catch (Exception e)
            {
                return new ResultDto
                {
                    IsSuccess = false,
                    Message = e.Message
                };
            }
        }
    }
}