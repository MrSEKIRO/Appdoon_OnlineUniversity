using Appdoon.Application.Services.Categories.Command.ICreateCategoryService;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Validatores.CategoryValidatore
{
	public class CategoryValidatore : AbstractValidator<RequestCreateCategoryDto>
	{
		public CategoryValidatore()
		{
			RuleFor(x => x.Name)
				.NotEmpty().WithMessage("لطفا نام دسته بندی را وارد کنید!")
				.Length(3, 15).WithMessage("نام دسته بندی حداقل 3 و حداکثار 15 کاراکتر می باشد");

			RuleFor(x => x.Link)
				.NotEmpty().WithMessage("لطفا لینک دسته بندی را وارد کنید!");
		}
	}
}
