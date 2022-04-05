using Appdoon.Domain.Entities.Users;
using Appdoon.Presistence.Contexts;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OU_API.Models.Services.Register
{
    public interface IRegisterService
    {
        JsonResult Execute(User user);
    }

    public class RegisterService : IRegisterService
    {
        private readonly DatabaseContext _databaseContext;

        public RegisterService(IConfiguration configuration)
        {
            this._databaseContext = new DatabaseContext(configuration);
        }

        public JsonResult Execute(User user)
        {
            _databaseContext.Users.Add(user);
            _databaseContext.SaveChanges();
            return new JsonResult("Registered Successfully");
        }

    }


    //public class RegisterDto
    //{
    //
    //}
}
