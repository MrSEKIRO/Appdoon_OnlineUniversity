using Appdoon.Common.Dtos;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Users.Query.GetUserFromCookieService
{
	public interface IGetUserFromCookieService
	{
		ResultDto<UserCookieDto> Execute(HttpContext httpContext);
	}

	public class UserFromCookieService : IGetUserFromCookieService
	{
		public ResultDto<UserCookieDto> Execute(HttpContext httpContext)
		{
			try
			{
				var identity= httpContext.User.Identities.FirstOrDefault();

				var email = identity.Claims
					.Skip(1)
					.FirstOrDefault()
					.Value;
				
				var name = identity.Claims
					.Skip(2)
					.FirstOrDefault()
					.Value;

				return new ResultDto<UserCookieDto>()
				{
					IsSuccess = true,
					Data = new UserCookieDto()
					{
						Name = name,
						Email = email,
					},
					Message = "اطالاعات کاربر ارسال شد!",
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
		public string Email { get; set; } = string.Empty;
		public string Name { get; set; } = string.Empty;
	}
}
