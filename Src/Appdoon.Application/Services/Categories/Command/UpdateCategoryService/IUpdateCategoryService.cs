using Appdoon.Application.Interfaces;
using Appdoon.Application.Services.Categories.Command.CreateCategoryService;
using Appdoon.Application.Validatores.CategoryValidatore;
using Appdoon.Common.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Categories.Command.UpdateCategoryService
{
	public class UpdateCategoryDto
	{
		public string Name { get; set; }
		public string Link { get; set; }
	}
	public interface IUpdateCategoryService
	{
		ResultDto Execute(int id,UpdateCategoryDto category);
	}

	public class UpdateCategoryService : IUpdateCategoryService
	{
		private readonly IDatabaseContext _context;

		public UpdateCategoryService(IDatabaseContext context)
		{
			_context = context;
		}
		public ResultDto Execute(int id,UpdateCategoryDto category)
		{
			try
			{

				// check validation rules
				CategoryValidatore validationRules = new CategoryValidatore();
				var result = validationRules.Validate(new CreateCategoryDto()
				{
					Link = category.Link,
					Name = category.Name
				});

                if (result.IsValid == false)
				{
					return new ResultDto()
					{
						IsSuccess = false,
						Message = result.Errors[0].ErrorMessage,
					};
				}



				var cat = _context.Categories.Where(s => s.Id == id).FirstOrDefault();
				if(cat == null)
                {
					return new ResultDto()
					{
						IsSuccess = false,
						Message = "این آیدی وجود ندارد!",
					};
				}

				cat.Name = category.Name;
				cat.Link = category.Link;
				cat.UpdateTime = DateTime.Now;
				_context.SaveChanges();

				return new ResultDto()
				{
					IsSuccess = true,
					Message = "دسته بروزرسانی شد.",
				};
			}
			catch (Exception e)
			{
				return new ResultDto()
				{
					IsSuccess = false,
					Message = "خطا در بروزرسانی دسته!",
				};
			}
		}
	}
}
