using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Steps.Command.UpdateStepService
{
	public class UpdateStepDto
	{
		public string Title { get; set; } = string.Empty;
		public string? Description { get; set; }
		public string? Link { get; set; }

		public int RoadMapId { get; set; }

	}
	public interface IUpdateStepService
	{
		ResultDto Execute(int id, UpdateStepDto step);
	}

	public class UpdateStepService : IUpdateStepService
	{
		private readonly IDatabaseContext _context;

		public UpdateStepService(IDatabaseContext context)
		{
			_context = context;
		}
		public ResultDto Execute(int id, UpdateStepDto step_front)
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


				var step_back = _context.Steps.Where(s => s.Id == id).FirstOrDefault();
				if (step_back == null)
				{
					return new ResultDto()
					{
						IsSuccess = false,
						Message = "این آیدی وجود ندارد!",
					};
				}

				step_back.Title = step_front.Title;
				step_back.Description = step_front.Description;
				step_back.Link = step_front.Link;
				step_back.RoadMapId = step_front.RoadMapId;
				step_back.UpdateTime = DateTime.Now;
				_context.SaveChanges();

				return new ResultDto()
				{
					IsSuccess = true,
					Message = "قدم بروزرسانی شد.",
				};
			}
			catch (Exception e)
			{
				return new ResultDto()
				{
					IsSuccess = false,
					Message = "خطا در بروزرسانی قدم!",
				};
			}
		}
	}
}
