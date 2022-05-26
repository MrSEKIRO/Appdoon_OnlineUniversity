using Appdoon.Application.Services.Users.Command.RegisterUserService;
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
    public class RegisterController : ControllerBase
    {
		private readonly IRegisterUserService _registerUserService;

		public RegisterController(IRegisterUserService registerUserService)
		{
			_registerUserService = registerUserService;
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


    }
}
