using Appdoon.Application.Services.Users.RegisterUserService;
using Appdoon.Domain.Entities.Users;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OU_API.Controllers
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
        public JsonResult Register(User user)
        {
            // use new regiser user service

			return new JsonResult(_registerUserService.Execute(user).Message);
		}


    }
}
