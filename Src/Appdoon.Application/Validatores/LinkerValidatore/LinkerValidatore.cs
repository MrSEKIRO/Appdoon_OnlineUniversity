using Appdoon.Application.Services.Linkers.Command.AddLinkerService;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Validatores.LinkerValidatore
{
	public class LinkerValidatore:AbstractValidator<AddLinkerDto>
	{
		public LinkerValidatore()
		{
			RuleFor(l => l.Title)
				.NotEmpty().WithMessage("لطفا عنوان را وارد کنید!");

			RuleFor(l => l.Link)
				.NotEmpty().WithMessage("لطفا لینک را وارد کنید!");

			//RuleFor(l=>l.ChildStepId)
			//	.NotEmpty().WithMessage("");
		}
	}
}
