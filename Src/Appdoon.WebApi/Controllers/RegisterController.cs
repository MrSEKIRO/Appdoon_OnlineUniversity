using Appdoon.Domain.Entities.Users;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using OU_API.Models.Services.Register;
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

        private readonly IRegisterService _registerService;

        public RegisterController(IConfiguration configuration)
        {
            _registerService = new RegisterService(configuration);
        }


        [HttpPost]
        public JsonResult Register(User user)
        {
            // use new regiser user service

			return _registerService.Execute(user);
		}


    }
}
