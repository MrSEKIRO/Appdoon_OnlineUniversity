using Appdoon.Application.Interfaces;
using Appdoon.Application.Services.Users.Command.RegisterUserService;
using Appdoon.Application.Validatores.UserValidatore;
using Appdoon.Common.Dtos;
using Appdoon.Common.HashFunctions;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Users.Command.ResetPasswordService
{
    public interface IResetPasswordService
    {
        Task<ResultDto> Execute(string password, string repeatPassword, int userId);
    }
    public class ResetPasswordService : IResetPasswordService
    {
        private readonly IDatabaseContext _context;

        public ResetPasswordService(IDatabaseContext context)
        {
            _context = context;
        }
        public async Task<ResultDto> Execute(string password, string repeatPassword, int userId)
        {
            try
            {
                if (password != repeatPassword)
                {
                    return new ResultDto()
                    {
                        Message = "رمز و تکرار آن برابر نمی باشند!",
                        IsSuccess = false,
                    };
                }

                var user = await _context.Users
                     .Where(x => x.Id == userId)
                     .FirstOrDefaultAsync();

                if (user == null)
                {
                    return new ResultDto()
                    {
                        Message = "کاربر یافت نشد! ",
                        IsSuccess = false,
                    };
                }

                UserValidatore validationRules = new UserValidatore();
                var validateResult = validationRules.Validate(new RequestRegisterUserDto()
                {
                    Password = password,
                });

                var errors = validateResult.Errors
                    .Where(p => p.PropertyName == "Password")
                    .ToList();

                if (errors.Count > 0)
                {
                    return new ResultDto()
                    {
                        IsSuccess = false,
                        Message = errors.First().ErrorMessage,
                    };
                }

                var hashPassword = ArshiaHash.Hash(password);
                user.Password = hashPassword;

                await _context.SaveChangesAsync();

                return new ResultDto()
                {
                    Message = "رمز با موفقیت تغییر کرد",
                    IsSuccess = true,
                };

            }
            catch (Exception)
            {
                return new ResultDto()
                {
                    Message = "خطا در تغییر رمز!",
                    IsSuccess = false,
                };
            }
        }
    }
}
