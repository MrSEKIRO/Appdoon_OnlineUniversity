using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using Appdoon.Domain.Entities.RoadMaps;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.ChildSteps.Command.UpdateChildStepService
{
	public class UpdateChildStepDto
	{
		public string Title { get; set; } = string.Empty;
		public string Description { get; set; }
		public string Link { get; set; }
		public int StepId { get; set; }
		public List<UpdateLinkerDto> Linkers { get; set; }

	}
	public class UpdateLinkerDto
	{
		public string LinkTitle { get; set; } = string.Empty;
		public string LinkURL { get; set; } = string.Empty;
	}
	public interface IUpdateChildStepService
	{
		ResultDto Execute(int id, UpdateChildStepDto childstep);
	}

	public class UpdateChildStepService : IUpdateChildStepService
	{
		private readonly IDatabaseContext _context;

		public UpdateChildStepService(IDatabaseContext context)
		{
			_context = context;
		}
		public ResultDto Execute(int id, UpdateChildStepDto child_step_front)
		{
			try
			{
				/*
				// check validation rules
				UpdateCategoryValidatore validationRules = new UpdateCategoryValidatore();
				var result = validationRules.Validate(category);
				if (result.IsValid == false)
				{
					return new ResultDto()
					{
						IsSuccess = false,
						Message = result.Errors[0].ErrorMessage,
					};
				}
				*/



				var child_step_back = _context.ChildSteps.Where(s => s.Id == id).FirstOrDefault();
				if (child_step_back == null)
				{
					return new ResultDto()
					{
						IsSuccess = false,
						Message = "این آیدی وجود ندارد!",
					};
				}

				List<Linker> linkers = new List<Linker>();

				for (int i = 0; i < child_step_front.Linkers.Count; i++)
				{
					Linker linker = new Linker()
					{
						Title = child_step_front.Linkers[i].LinkTitle,
						Link = child_step_front.Linkers[i].LinkURL
					};

					/*
                    LinkerValidatore validationRulesLink = new LinkerValidatore();
                    var resultLink = validationRulesLink.Validate();

                    if (resultLink.IsValid == false)
                    {
                        return new ResultDto()
                        {
                            IsSuccess = false,
                            Message = result.Errors[0].ErrorMessage,
                        };
                    }
                    */
					linkers.Add(linker);
				}



				child_step_back.Title = child_step_front.Title;
				child_step_back.Description = child_step_front.Description;
				child_step_back.Link = child_step_front.Link;
				child_step_back.StepId = child_step_front.StepId;
				child_step_back.Linkers = linkers;
				child_step_back.UpdateTime = DateTime.Now;


				_context.SaveChanges();

				return new ResultDto()
				{
					IsSuccess = true,
					Message = "محتوا بروزرسانی شد.",
				};
			}
			catch (Exception e)
			{
				return new ResultDto()
				{
					IsSuccess = false,
					Message = "خطا در بروزرسانی محتوا!",
				};
			}
		}
	}
}
