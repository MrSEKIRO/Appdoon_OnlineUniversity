using Appdoon.Application.Services.Steps.Command.CreateStepService;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Validatores.StepValidatore
{
	public class StepValidatore : AbstractValidator<RequestCreateStepDto>
	{
		public StepValidatore()
		{
			RuleFor(x => x.Title)
				.NotEmpty().WithMessage("لطفا عنوان قدم را وارد کنید!")
				.Length(3, 25).WithMessage("عنوان باید حداقل 3 و حداکثر 25 کارکتر باشد!");

			RuleFor(x => x.Description)
				.MaximumLength(50).WithMessage("توضیحات باید حداکثر 50 کاراکتر باشد!");

			//RuleFor(x => x.Link)
				//.NotEmpty().WithMessage("لینک قدم را وارد کنید!");

			//RuleFor(x => x.RoadMapId)
			//	.NotNull().WithMessage("")
			//	.GreaterThan(0).WithMessage("");
		}
	}
}
