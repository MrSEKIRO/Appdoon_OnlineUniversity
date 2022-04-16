using Appdoon.Application.Services.Users.RegisterUserService;
using Appdoon.Domain.Entities.Users;
using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Validatores.UserValidatore
{
	public class UserValidatore : AbstractValidator<RequestRegisterUserDto>
	{
		public UserValidatore()
		{
			RuleFor(u => u.Email)
				.NotEmpty().WithMessage("لطفا ایمیل خود را وارد کنید")
				.EmailAddress().WithMessage("");

			RuleFor(u => u.Password)
				.NotEmpty().WithMessage("");

			// check repass be same as password
			RuleFor(u => u.RePassword)
				.NotEmpty().WithMessage("")
				.Equal(u => u.Password).WithMessage("");

			RuleFor(u => u.Username)
				.NotEmpty().WithMessage("")
				.Length(3, 20).WithMessage("");

			RuleFor(u => u.FirstName)
				.NotEmpty().WithMessage("")
				.Length(3, 20).WithMessage("");

			RuleFor(u=>u.LastName)
				.NotEmpty().WithMessage("")
				.Length(3, 20).WithMessage("");

			RuleFor(u => u.PhoneNumber)
				.NotEmpty().WithMessage("");
		}
	}
}
