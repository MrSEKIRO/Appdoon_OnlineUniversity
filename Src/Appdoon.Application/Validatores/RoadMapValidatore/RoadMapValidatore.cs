using Appdoon.Application.Services.RoadMaps.Command.ICreateRoadMapIndividualService;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Validatores.RoadMapValidatore
{
	public class RoadMapValidatore:AbstractValidator<RequestCreateRoadmapDto>
	{
		public RoadMapValidatore()
		{
			RuleFor(x => x.Title)
				.NotEmpty().WithMessage("لطفا عنوان رودمپ را وارد کنید!")
				.Length(3, 35).WithMessage("عنوان حداقل 3 و حداکثر 35 کاراکتر می باشد");

			RuleFor(x => x.Description)
				//.NotEmpty().WithMessage("")
				.MaximumLength(300).WithMessage("توضیحات رودمپ باید حداکثر 300 کارکتر باشد!");
		}
	}
}
