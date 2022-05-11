using Appdoon.Application.Services.Lessons.Command.CreateLessonService;
using Appdoon.Application.Services.Lessons.Command.UpdateLessonService;
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


		public bool IsValidLink(string link)
        {
			Uri uriResult;
			bool result = Uri.TryCreate(link, UriKind.Absolute, out uriResult)
				&& (uriResult.Scheme == Uri.UriSchemeHttp || uriResult.Scheme == Uri.UriSchemeHttps);
			return result;
		}
	}
	public class UpdateLessonValidatore : AbstractValidator<UpdateLessonDto>
	{
		public UpdateLessonValidatore()
		{
			RuleFor(l => l.Title)
				.NotEmpty().WithMessage("لطفا عنوان را وارد کنید!");

			RuleFor(l => l.TopBannerSrc)
				.NotEmpty().WithMessage("لطفا لینک را وارد کنید!");

			RuleFor(l => l.Text)
				.NotEmpty().WithMessage("لطفا متن را وارد کنید!");
		}


		public bool IsValidLink(string link)
		{
			Uri uriResult;
			bool result = Uri.TryCreate(link, UriKind.Absolute, out uriResult)
				&& (uriResult.Scheme == Uri.UriSchemeHttp || uriResult.Scheme == Uri.UriSchemeHttps);
			return result;
		}
	}
}
