using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using Appdoon.Domain.Entities.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Users.RegisterUserService
{
    public interface IRegisterUserService
    {
        ResultDto Execute(User user);
    }

    public class RegisterUserService : IRegisterUserService
    {
        private readonly IDatabaseContext _context;

        public RegisterUserService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultDto Execute(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();

            return new ResultDto()
            {
                IsSuccess = true,
                Message = "Registered Successfully",
            };
        }

    }
}
