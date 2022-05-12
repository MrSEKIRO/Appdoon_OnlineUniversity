
using Appdoon.Domain.Entities.Users;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Appdoon.Application.Services.Users.Command.LoginUserService;

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
        public JsonResult Login(User user)
        {
            // use new login user service

            return new JsonResult(_loginUserService.Execute(user));
        }
    }
}
