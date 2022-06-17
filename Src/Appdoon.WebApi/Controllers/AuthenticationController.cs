using Appdoon.Application.Services.Users.Command.CheckUserResetPasswordLinkService;
using Appdoon.Application.Services.Users.Command.ForgetPasswordUserService;
using Appdoon.Application.Services.Users.Command.LoginUserService;
using Appdoon.Application.Services.Users.Command.RegisterUserService;
using Appdoon.Application.Services.Users.Command.ResetPasswordService;
using Appdoon.Application.Services.Users.Query.GetUserFromCookieService;
using Appdoon.Common.Dtos;
using Appdoon.Common.UserRoles;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Appdoon.WebApi.Controllers
{
	[Route("api/[controller]/[action]")]
	[ApiController]
	public class AuthenticationController : ControllerBase
	{
		private readonly IRegisterUserService _registerUserService;
		private readonly ILoginUserService _loginUserService;
        private readonly IForgetPasswordUserService _forgetPasswordUserService;
        private readonly IResetPasswordService _resetPasswordService;
        private readonly ICheckUserResetPasswordLinkService _checkUserResetPasswordLinkService;
		private readonly IGetUserFromCookieService _getUserFromCookieService;

		public AuthenticationController(IRegisterUserService registerUserService,
			ILoginUserService loginUserService,
			IForgetPasswordUserService forgetPasswordUserService,
			IResetPasswordService resetPasswordService,
			ICheckUserResetPasswordLinkService checkUserResetPasswordLinkService,
			IGetUserFromCookieService getUserFromCookieService)
		{
			_registerUserService = registerUserService;
			_loginUserService = loginUserService;
			_forgetPasswordUserService = forgetPasswordUserService;
			_resetPasswordService = resetPasswordService;
			_checkUserResetPasswordLinkService = checkUserResetPasswordLinkService;
			_getUserFromCookieService = getUserFromCookieService;
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

		[HttpPost]
		public JsonResult Register(RequestRegisterUserDto user)
		{
			// use new regiser user service
			var result = _registerUserService.Execute(user);

			if(result.IsSuccess == true)
			{
				var claims = new List<Claim>()
				{
					// Set ID,Email,Name
					new Claim(ClaimTypes.NameIdentifier,result.Data.ToString()),
					new Claim(ClaimTypes.Email,user.Email),
					new Claim(ClaimTypes.Name, user.FirstName+" "+user.LastName),
					new Claim(ClaimTypes.Role,UserRole.User.ToString()),
				};

				var identity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
				var principal = new ClaimsPrincipal(identity);
				var properties = new AuthenticationProperties()
				{
					IsPersistent = true,
				};

				HttpContext.SignInAsync(principal, properties);
			}

			return new JsonResult(result);
		}

		[HttpGet]
		public JsonResult UserSignOut()
		{
			HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme);

			return new JsonResult(new ResultDto()
			{
				IsSuccess = true,
				Message = "خروج موفق!",
			});
		}


		[HttpPost]
		public async Task<JsonResult> ForgetPassword(UserEmailOptions userEmailOptions)
        {
			var result = await _forgetPasswordUserService.Execute(userEmailOptions);
			return new JsonResult(result);
        }
		[HttpPost]
		public async Task<JsonResult> ResetPassword(string password, string repeatPassword, int userId)
        {
			var result = await _resetPasswordService.Execute(password, repeatPassword, userId);
			return new JsonResult(result);
        }
		[HttpGet]
		public async Task<JsonResult> CheckLink(int userId, string token)
        {
			var result = await _checkUserResetPasswordLinkService.Execute(userId, token);
			return new JsonResult(result);
		}


		[HttpGet]
		public JsonResult InfoFromCookie()
		{
			int Id = GetIdFromCookie();
			var result = _getUserFromCookieService.Execute(Id);
			return new JsonResult(result);
		}

		private int GetIdFromCookie()
		{
            try
            {
                if (HttpContext.User.Identities.FirstOrDefault().Claims.FirstOrDefault() == null) { 
					return -1; 
				}

				var IdStr = HttpContext.User.Identities
					.FirstOrDefault()
					.Claims
					//.Where(c => c.Type == "NameIdentifier")
					.FirstOrDefault()
					.Value;

				int Id = int.Parse(IdStr);
				return Id;
            }
            catch (Exception e)
            {
				return - 1;
            }

		}
	}
}
