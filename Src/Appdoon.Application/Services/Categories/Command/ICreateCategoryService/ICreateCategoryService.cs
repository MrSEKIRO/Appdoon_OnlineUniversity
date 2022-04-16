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
    public interface ICreateCategoryService
    {
		ResultDto Execute(string name, string link);
    }
    public class CreateCategoryService: ICreateCategoryService
    {
		private readonly IDatabaseContext _context;

		public CreateCategoryService(IDatabaseContext context)
		{
			_context = context;
		}
		public ResultDto Execute(string name, string link)
		{
            try
            {
				var category = new Category()
				{
					Name = name,
					Link = link,
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
