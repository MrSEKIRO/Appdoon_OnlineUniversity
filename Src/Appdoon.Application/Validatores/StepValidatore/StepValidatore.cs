using Appdoon.Application.Services.Steps.Command.CreateStepService;
using Appdoon.Application.Validatores.CommonValidatores;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Validatores.StepValidatore
{
	public class StepValidatore : AbstractValidator<CreateStepDto>
	{
		public StepValidatore()
		{
			RuleFor(x => x.Title)
				.NotEmpty().WithMessage("لطفا عنوان قدم را وارد کنید!")
				.Length(3, 50).WithMessage("عنوان باید حداقل 3 و حداکثر 50 کارکتر باشد!");

			RuleFor(x => x.Description)
				.MaximumLength(100).WithMessage("توضیحات باید حداکثر 100 کاراکتر باشد!");

			RuleFor(x => x.Link)
				//.NotEmpty().WithMessage("لینک قدم را وارد کنید!");
				.Must(link => link == string.Empty || CommonValidatore.IsValidLink(link) == true).WithMessage("فرمت لینک اشتباه است!");

			//RuleFor(x => x.RoadMapId)
			//	.NotNull().WithMessage("")
			//	.GreaterThan(0).WithMessage("");
		}
	}
}
