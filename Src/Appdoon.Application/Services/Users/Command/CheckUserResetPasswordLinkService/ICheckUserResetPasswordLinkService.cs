using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using Appdoon.Common.GenerateTokens;
using Appdoon.Common.HashFunctions;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Users.Command.CheckUserResetPasswordLinkService
{
    public interface ICheckUserResetPasswordLinkService
    {
        Task<ResultDto<bool>> Execute(int userId, string token);
    }
    public class CheckUserResetPasswordLinkService : ICheckUserResetPasswordLinkService
    {
        private readonly IDatabaseContext _context;

        public CheckUserResetPasswordLinkService(IDatabaseContext context)
        {
            _context = context;
        }
        public async Task<ResultDto<bool>> Execute(int userId, string token)
        {
            try
            {
                var user = await _context.Users
                    .Where(x => x.Id == userId)
                    .FirstOrDefaultAsync();

                string newToken = GenerateTokens.GenerateToken(user.Username, user.Password);
                if (newToken != token)
                {
                    return new ResultDto<bool>()
                    {
                        Data = false,
                        Message = "صفحه ی مورد نظر یافت نشد!",
                        IsSuccess = true,
                    };
                }

                return new ResultDto<bool>()
                {
                    Data = true,
                    Message = "درحال انتقال به صفحه ی تغییر رمز:)",
                    IsSuccess = true,
                };

            }
            catch (Exception e)
            {
                return new ResultDto<bool>()
                {
                    Message = "خطا در انجام عملیات!",
                    IsSuccess = false,
                };
            }
        }
    }

}
