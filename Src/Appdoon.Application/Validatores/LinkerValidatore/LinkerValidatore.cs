using Appdoon.Application.Services.Linkers.Command.CreateLinkerService;
using Appdoon.Application.Validatores.CommonValidatores;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Validatores.LinkerValidatore
{
    public class LinkerValidatore:AbstractValidator<CreateLinkerLinkerDto>
	{
		public LinkerValidatore()
		{
			RuleFor(l => l.Title)
				.NotEmpty().WithMessage("لطفا عنوان را وارد کنید!");

			RuleFor(l => l.Link)
				.NotEmpty().WithMessage("لطفا لینک را وارد کنید!")
				.Must(link => CommonValidatore.IsValidLink(link)==true).WithMessage("فرمت لینک اشتباه است!");

			//RuleFor(l=>l.ChildStepId)
			//	.NotEmpty().WithMessage("");
		}
	}
}
