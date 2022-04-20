using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using Appdoon.Domain.Entities.RoadMaps;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Categories.Command.ICreateCategoryService
{
	public class RequestCreateCategoryDto
	{
		public string Name { get; set; }
		public string Link { get; set; }

	}
	public interface ICreateCategoryService
    {
		ResultDto Execute(RequestCreateCategoryDto requestCreateCategoryDto);
    }
    public class CreateCategoryService: ICreateCategoryService
    {
		private readonly IDatabaseContext _context;

		public CreateCategoryService(IDatabaseContext context)
		{
			_context = context;
		}
		public ResultDto Execute(RequestCreateCategoryDto requestCreateCategoryDto)
		{
            try
            {
				//Uniqueness(Name)
				if (_context.Categories.Where(s => s.Name == requestCreateCategoryDto.Name.ToString()).Count() != 0)
				{
					return new ResultDto()
					{
						IsSuccess = false,
						Message = "این نام برای دسته تکراری است",
					};
				}




				var category = new Category()
				{
					Name = requestCreateCategoryDto.Name,
					Link = requestCreateCategoryDto.Link,
				};
				_context.Categories.Add(category);
				_context.SaveChanges();

				return new ResultDto()
				{
					IsSuccess = true,
					Message = "کتگوری اضافه شد",
				};
			}
			catch(Exception e)
            {
				return new ResultDto()
				{
					IsSuccess = false,
					Message = "خطا در ساخت کتگوری!",
				};
			}
		}
	}
}
