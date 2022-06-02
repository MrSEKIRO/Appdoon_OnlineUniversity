
using Appdoon.Application.Services.Users.Command.LoginUserService;
using Appdoon.Common.UserRoles;
using Appdoon.Domain.Entities.Users;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Appdoon.WebApi.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class LoginController : ControllerBase
	{
		private readonly ILoginUserService _loginUserService;

		public LoginController(ILoginUserService loginUserService)
		{
			_loginUserService = loginUserService;
		}


		[HttpPost]
		public JsonResult Login(LoginUserDto user)
		{
			var result = _loginUserService.Execute(user);

			if(result.IsSuccess == true)
			{
				var claims = new List<Claim>()
				{
					new Claim(ClaimTypes.NameIdentifier,result.Data.Id.ToString()),
					new Claim(ClaimTypes.Email,user.Email),
					new Claim(ClaimTypes.Name,result.Data.Username),
					new Claim(ClaimTypes.Role,UserRole.User.ToString()),
				};

				var identity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
				var principal = new ClaimsPrincipal(identity);

				// Remember me check box
				bool Remember = true;
				var properties = new AuthenticationProperties()
				{
					IsPersistent = Remember,
				};

				HttpContext.SignInAsync(principal, properties);
			}
			return new JsonResult(result);
		}
	}
}
