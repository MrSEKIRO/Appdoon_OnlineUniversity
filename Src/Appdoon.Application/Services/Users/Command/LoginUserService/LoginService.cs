using Appdoon.Application.Interfaces;
using Appdoon.Application.Services.Users.Command.RegisterUserService;
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

namespace Appdoon.Application.Services.Users.Command.LoginUserService
{
	public interface ILoginUserService
	{
		ResultDto<UserLoginInfoDto> Execute(LoginUserDto loginUserDto);
	}

	public class UserLoginInfoDto
	{
		public int Id { get; set; }
		public string Username { get; set; }
	}

	public class LoginUserService : ILoginUserService
	{
		private readonly IDatabaseContext _context;

		public LoginUserService(IDatabaseContext context)
		{
			_context = context;
		}

		public ResultDto<UserLoginInfoDto> Execute(LoginUserDto loginUserDto)
		{
			UserValidatore validationRules = new UserValidatore();
			var validateResult = validationRules.Validate(new RequestRegisterUserDto()
			{
				Email = loginUserDto.Email,
				Password = loginUserDto.Password,
			});

			List<string> properties = new List<string>()
			{
				"Email",
				"Password",
			};

			var errors = validateResult.Errors
				.Where(e => properties.Contains(e.PropertyName))
				.ToList();

			// check if entered Email
			if(errors.Count > 0)
			{
				validateResult = validationRules.Validate(new RequestRegisterUserDto()
				{
					Username = loginUserDto.Email,
					Password = loginUserDto.Password,
				});

				properties.Remove("Email");
				properties.Add("Username");

				errors = validateResult.Errors
					.Where(e => properties.Contains(e.PropertyName))
					.ToList();

				// check for Username
				if(errors.Count > 0)
				{
					return new ResultDto<UserLoginInfoDto>()
					{
						IsSuccess = false,
						Message = errors[0].ErrorMessage,
						Data = new(),
					};
				}

				var userWithUsername = _context.Users
					.Where(u => u.Username == loginUserDto.Email)
					.FirstOrDefault();

				if(userWithUsername == null)
				{
					return new ResultDto<UserLoginInfoDto>()
					{
						IsSuccess = false,
						Message = "نام کاربری موجود نمی‌باشد!",
						Data = new(),
					};
				}

				if(ArshiaHash.Verify(userWithUsername.Password, userWithUsername.Password))
				{
					return new ResultDto<UserLoginInfoDto>()
					{
						IsSuccess = true,
						Message = "ورود با موفقیت انجام شد.",
						Data = new UserLoginInfoDto()
						{
							Id = userWithUsername.Id,
							Username = userWithUsername.Username,
						},
					};
				}
				else
				{
					return new ResultDto<UserLoginInfoDto>()
					{
						IsSuccess = false,
						Message = "رمز عبور اشتباه می‌باشد!",
						Data = new(),
					};
				}
			}

			#region ArmanRegex
			/*
			bool is_Email = false;
			bool is_Username = false;
			if(CommonRegex.isValidEmail(user.Email))
			{
				is_Email = true;
			}
			else if(CommonRegex.isValidUsername(user.Username))
			{
				is_Username = true;
			}
			else
			{
				return new ResultDto()
				{
					IsSuccess = false,
					Message = "فرمت ایمیل/نام کاربری را به درستی وارد کنید!",
				};
			}
			//Regex
			if(is_Email)
			{
				if(!CommonRegex.isValidEmail(user.Email))
				{
					return new ResultDto()
					{
						IsSuccess = false,
						Message = "فرمت ایمیل را به درستی وارد کنید!",
					};
				}
			}

			if(is_Username)
			{
				if(!CommonRegex.isValidUsername(user.Username))
				{
					return new ResultDto()
					{
						IsSuccess = false,
						Message = "فرمت نام کاربری را به درستی وارد کنید!",
					};
				}
			}

			if(!CommonRegex.isValidPassword(user.Password))
			{
				return new ResultDto()
				{
					IsSuccess = false,
					Message = "فرمت رمز عبور را به درستی وارد کنید!",
				};
			}
			*/
			#endregion

			#region ArmanUserLogin
			/*
			//Existence(Email/Username)
			IQueryable<User> matches;
			if(is_Email)
			{
				matches = _context.Users.Where(p => p.Email == user.Email);
			}
			else
			{
				matches = _context.Users.Where(p => p.Username == user.Username);
			}

			string database_password = "";

			if(matches.Count() == 0)
			{
				if(is_Email)
				{
					return new ResultDto()
					{
						IsSuccess = false,
						Message = "کاربری با این ایمیل وجود ندارد!",
					};
				}
				else
				{
					return new ResultDto()
					{
						IsSuccess = false,
						Message = "نام کاربری موجود نمی‌باشد!",
					};
				}
			}
			else
			{
				database_password = matches.First().Password;
			}
			*/
			#endregion

			var user = _context.Users
				.Where(u => u.Email == loginUserDto.Email)
				.FirstOrDefault();

			if(user == null)
			{
				return new ResultDto<UserLoginInfoDto>()
				{
					IsSuccess = false,
					Message = "کاربری با این ایمیل وجود ندارد!",
					Data = new(),
				};
			}

			if(ArshiaHash.Verify(loginUserDto.Password, user.Password))
			{
				return new ResultDto<UserLoginInfoDto>()
				{
					IsSuccess = true,
					Message = "ورود با موفقیت انجام شد.",
					Data = new UserLoginInfoDto()
					{
						Id = user.Id,
						Username = user.Username,
					},
				};
			}
			else
			{
				return new ResultDto<UserLoginInfoDto>()
				{
					IsSuccess = false,
					Message = "رمز عبور اشتباه می‌باشد!",
					Data = new(),
				};
			}
		}

	}

	public class LoginUserDto
	{
		public string Email { get; set; } = string.Empty;
		public string Password { get; set; } = string.Empty;
	}
}
