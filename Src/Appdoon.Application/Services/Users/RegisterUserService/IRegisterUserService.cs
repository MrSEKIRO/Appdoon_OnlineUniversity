using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using Appdoon.Domain.Entities.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Appdoon.Common.CommonRegex;

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
            //Regex
            if (!CommonRegex.isValidEmail(user.Email))
            {
                return new ResultDto()
                {
                    IsSuccess = false,
                    Message = "فرمت ایمیل را به درستی وارد کنید!",
                };
            }

            if (!CommonRegex.isValidUsername(user.Username))
            {
                return new ResultDto()
                {
                    IsSuccess = false,
                    Message = "فرمت نام کاربری را به درستی وارد کنید!",
                };
            }

            if (!CommonRegex.isValidPassword(user.Password))
            {
                return new ResultDto()
                {
                    IsSuccess = false,
                    Message = "فرمت رمز عبور را به درستی وارد کنید!",
                };
            }

            //Uniqueness(Email/Password)



            _context.Users.Add(user);
            _context.SaveChanges();

            return new ResultDto()
            {
                IsSuccess = true,
                Message = "ثبت نام با موفقیت انجام شد.",
            };
        }

    }
}
