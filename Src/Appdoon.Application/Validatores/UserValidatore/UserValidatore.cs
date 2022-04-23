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
				.NotEmpty().WithMessage("لطفا رمز خود را وارد کنید!");

			// check repass be same as password
			RuleFor(u => u.RePassword)
				.NotEmpty().WithMessage("لطفا تکرار رمز عبور خود را وارد کنید!")
				.Equal(u => u.Password).WithMessage("");

			RuleFor(u => u.Username)
				.NotEmpty().WithMessage("نام کاربری را وارد کنید!")
				.Length(3, 20).WithMessage("");

			RuleFor(u => u.FirstName)
				.NotEmpty().WithMessage("اسم خوذ را وارد کنید!")
				.Length(3, 20).WithMessage("");

			RuleFor(u=>u.LastName)
				.NotEmpty().WithMessage("نام خوانوداگی را وارد کنید!")
				.Length(3, 20).WithMessage("");

			RuleFor(u => u.PhoneNumber)
				.NotEmpty().WithMessage("شماره تلفن خود را وارد کنید!");
		}
	}
}
