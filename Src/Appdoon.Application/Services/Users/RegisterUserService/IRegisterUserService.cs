using Appdoon.Application.Interfaces;
using Appdoon.Application.Validatores.UserValidatore;
using Appdoon.Common.CommonRegex;
using Appdoon.Common.Dtos;
using Appdoon.Common.HashFunctions;
using Appdoon.Domain.Entities.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Users.RegisterUserService
{
	public class RequestRegisterUserDto
	{
		public string Username { get; set; } = string.Empty;
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public string Email { get; set; } = string.Empty;
		public string Password { get; set; } = string.Empty;
		public string RePassword { get; set; } = string.Empty;
		public string PhoneNumber { get; set; }
		public List<Role> Roles { get; set; } = new();
	}
	public interface IRegisterUserService
	{
		ResultDto Execute(RequestRegisterUserDto user);
	}

	public class RegisterUserService : IRegisterUserService
	{
		private readonly IDatabaseContext _context;

		public RegisterUserService(IDatabaseContext context)
		{
			_context = context;
		}

		public ResultDto Execute(RequestRegisterUserDto user)
		{
			try
			{
				//Regex
				/*
                if (!CommonRegex.isValidEmail(user.Email))
                {
                    return new ResultDto()
                    {
                        IsSuccess = false,
                        Message = "فرمت ایمیل را به درستی وارد کنید!",
                    };
                }

                if (!CommonRegex.isValidUsername(user.Username))
                {
                    return new ResultDto()
                    {
                        IsSuccess = false,
                        Message = "فرمت نام کاربری را به درستی وارد کنید!",
                    };
                }

                if (!CommonRegex.isValidPassword(user.Password))
                {
                    return new ResultDto()
                    {
                        IsSuccess = false,
                        Message = "فرمت رمز عبور را به درستی وارد کنید!",
                    };
                }
                */
				UserValidatore validations = new UserValidatore();
				var validationResullt = validations.Validate(user);

				if(validationResullt.IsValid == false)
				{
					return new ResultDto()
					{
						IsSuccess = false,
						Message = validationResullt.Errors.First().ErrorMessage,
					};
				}


				/// use any instead
				//Uniqueness(Email/Username)
				var matchesEmail = _context.Users.Where(p => p.Email == user.Email);

				if(matchesEmail.Count() != 0)
				{
					return new ResultDto()
					{
						IsSuccess = false,
						Message = "ایمیل تکراری است!",
					};
				}

				/// use any here too
				var matchesUsername = _context.Users.Where(p => p.Username == user.Username);
				if(matchesUsername.Count() != 0)
				{
					return new ResultDto()
					{
						IsSuccess = false,
						Message = "نام کاربری تکراری است!",
					};
				}

				string newpass = ArshiaHash.Hash(user.Password);

				User newUser = new User();

				// we don`t set Id
				//newuser.Id = user.Id;
				newUser.Email = user.Email;
				newUser.Password = newpass;
				newUser.Username = user.Username;
				newUser.FirstName = user.FirstName;
				newUser.LastName = user.LastName;


				_context.Users.Add(newUser);
				_context.SaveChanges();

				return new ResultDto()
				{
					IsSuccess = true,
					Message = "ثبت نام با موفقیت انجام شد.",
				};
			}
			catch(Exception e)
			{
				return new ResultDto()
				{
					IsSuccess = false,
					Message = e.Message,
				};
			}
		}
	}
}
