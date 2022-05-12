﻿using Appdoon.Application.Services.Categories.Command.CreateCategoryService;
using Appdoon.Application.Services.Categories.Command.DeleteCategoryService;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Appdoon.Application.Services.Categories.Command.UpdateCategoryService;
using Appdoon.Application.Validatores.CommonValidatores;

namespace Appdoon.Application.Validatores.CategoryValidatore
{
	public class CategoryValidatore : AbstractValidator<CreateCategoryDto>
	{
		public CategoryValidatore()
		{
			RuleFor(x => x.Name)
				.NotEmpty().WithMessage("لطفا نام دسته بندی را وارد کنید!")
				.Length(3, 40).WithMessage("نام دسته بندی حداقل 3 و حداکثار 40 کاراکتر می باشد");

			RuleFor(x => x.Link)
				//.NotEmpty().WithMessage("لطفا لینک دسته بندی را وارد کنید!");
				.Must(link => link == string.Empty || CommonValidatore.IsValidLink(link) == true).WithMessage("فرمت لینک اشتباه است!");
		}
	}
}
