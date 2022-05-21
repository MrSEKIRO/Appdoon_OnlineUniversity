using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Linkers.Command.UpdateLinkerService
{
	public class UpdateLinkerLinkerDto
	{
		public string Title { get; set; } = string.Empty;
		public string Link { get; set; } = string.Empty;
	}
	public interface IUpdateLinkerService
	{
		ResultDto Execute(int id, UpdateLinkerLinkerDto category);
	}

	public class UpdateLinkerService : IUpdateLinkerService
	{
		private readonly IDatabaseContext _context;

		public UpdateLinkerService(IDatabaseContext context)
		{
			_context = context;
		}
		public ResultDto Execute(int id, UpdateLinkerLinkerDto link_front)
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



				var lin = _context.Linkers.Where(s => s.Id == id).FirstOrDefault();
				if (lin == null)
				{
					return new ResultDto()
					{
						IsSuccess = false,
						Message = "این آیدی وجود ندارد!",
					};
				}

				lin.Title = link_front.Title;
				lin.Link = link_front.Link;
				//lin.ChildSteps = lin.ChildSteps;
				lin.UpdateTime = DateTime.Now;
				_context.SaveChanges();

				return new ResultDto()
				{
					IsSuccess = true,
					Message = "لینک بروزرسانی شد.",
				};
			}
			catch (Exception e)
			{
				return new ResultDto()
				{
					IsSuccess = false,
					Message = "خطا در بروزرسانی لینک!",
				};
			}
		}
	}
}
