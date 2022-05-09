using Appdoon.Application.Services.Lessons.Command.CreateLessonService;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Validatores.LessonValidatore
{
	public class LessonValidatore : AbstractValidator<CreateLessonDto>
	{
		public LessonValidatore()
		{
			RuleFor(l => l.Title)
				.NotEmpty().WithMessage("لطفا عنوان را وارد کنید!");

			RuleFor(l => l.TopBannerSrc)
				.NotEmpty().WithMessage("لطفا لینک را وارد کنید!");

			RuleFor(l => l.Text)
				.NotEmpty().WithMessage("لطفا متن را وارد کنید!");
		}
	}
}
