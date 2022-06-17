using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Users.Query.GetUserFromCookieService
{
	public interface IGetUserFromCookieService
	{
		ResultDto<UserCookieDto> Execute(int id);
	}

	public class GetUserFromCookieService : IGetUserFromCookieService
	{
		private readonly IDatabaseContext _context;
		public GetUserFromCookieService(IDatabaseContext context)
		{
			_context = context;
		}
		public ResultDto<UserCookieDto> Execute(int id)
		{
			try
			{
				var user = _context.Users
					.Where(u => u.Id == id)
					.Include(u => u.Roles).FirstOrDefault();

				// I doubt on it
				if (user == null)
				{
					return new ResultDto<UserCookieDto>()
					{
						IsSuccess = false,
						Message = "کاربر یافت نشد!",
						Data = new(),
					};
				}

				var userCookie = new UserCookieDto
				{
					Id = user.Id,
					Email = user.Email,
					Username = user.Username,
					Role = user.Roles[0].Name

				};

				return new ResultDto<UserCookieDto>()
				{
					IsSuccess = true,
					Message = "اطلاعات یوزر دریافت شد",
					Data = userCookie,
				};
			}
			catch(Exception e)
			{
				return new ResultDto<UserCookieDto>()
				{
					Data = new(),
					IsSuccess = false,
					Message = "ارسال ناموفق!",
				};
			}
		}
	}
	public class UserCookieDto
	{
		public int? Id { get; set; }
		public string Email { get; set; } = string.Empty;
		public string Username { get; set; } = string.Empty;
		public string Role { get; set; } = string.Empty;
	}
}
