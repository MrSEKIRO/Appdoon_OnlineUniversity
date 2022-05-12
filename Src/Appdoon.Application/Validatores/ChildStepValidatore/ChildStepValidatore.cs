using Appdoon.Application.Services.ChildSteps.Command.CreateChildStepService;
using Appdoon.Application.Validatores.CommonValidatores;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Validatores.ChildStepValidatore
{
	public class ChildStepValidatore : AbstractValidator<RequestCreateChildStepDto>
	{
		public ChildStepValidatore()
		{
			RuleFor(x => x.Title)
				.NotEmpty().WithMessage("لطفا عنوان قدم را وارد کنید!")
				.Length(3, 25).WithMessage("عنوان باید حداقل 3 و حداکثر 25 کارکتر باشد!");

			RuleFor(x => x.Description)
				.MaximumLength(50).WithMessage("توضیحات باید حداکثر 50 کاراکتر باشد!");

			RuleFor(x => x.Link)
				//.NotEmpty().WithMessage("لینک قدم را وارد کنید!");
				.Must(link => link == string.Empty || CommonValidatore.IsValidLink(link) == true).WithMessage("فرمت لینک اشتباه است!");


			//RuleFor(x => x.StepId)
			//	.NotNull().WithMessage("")
			//	.GreaterThan(0).WithMessage("");
		}
	}
}
