using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using Appdoon.Domain.Entities.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Appdoon.Common.CommonRegex;
using Appdoon.Common.HashFunctions;

namespace Appdoon.Application.Services.Users.Command.LoginUserService
{
	public interface ILoginUserService
	{
		ResultDto Execute(User user);
	}

	public class LoginUserService : ILoginUserService
	{
		private readonly IDatabaseContext _context;

		public LoginUserService(IDatabaseContext context)
		{
			_context = context;
		}

		public ResultDto Execute(User user)
		{

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


			if(ArshiaHash.Verify(user.Password, database_password))
			{
				//Login user and give him/her access to the private pages(make his/her session on)

				return new ResultDto()
				{
					IsSuccess = true,
					Message = "ورود با موفقیت انجام شد.",
				};
			}
			else
			{
				return new ResultDto()
				{
					IsSuccess = false,
					Message = "رمز عبور اشتباه می‌باشد!",
				};
			}


		}

	}

}
