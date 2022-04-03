using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using OU_API.Models.Contexts;
using OU_API.Models.Entities;
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

        private readonly RegisterService _registerService;

        public RegisterController(IConfiguration configuration)
        {
            this._registerService = new RegisterService(configuration);
        }


        [HttpPost]
        public JsonResult Register(User user)
        {
            return _registerService.Execute(user);
        }


    }
}
