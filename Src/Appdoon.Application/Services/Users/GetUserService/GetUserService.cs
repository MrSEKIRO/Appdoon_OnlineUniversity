using Appdoon.Common.Dtos;
using Microsoft.EntityFrameworkCore;
using Appdoon.Domain.Entities.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Appdoon.Application.Interfaces;

namespace Appdoon.Application.Services.Users.GetUserService
{
    public interface IGetUserService
    {
        ResultDto<GetUserDto> Execute(int id);
    }

    public class GetUserDto
    {
        public string Username;
        public string FirstName;
        public string LastName;
        public string Email;
        public string PhoneNumber;
    }

    public class GetUserService: IGetUserService
    {
        private readonly IDatabaseContext _context;
        public GetUserService(IDatabaseContext context)
        {
            _context = context;
        }
        public ResultDto<GetUserDto> Execute(int id)
        {
            try
            {
                var user = _context.Users
                    .Where(u => u.Id == id)
                .Select(u => new GetUserDto()
                {
                    Username = u.Username,
                    FirstName = u.FirstName,
                    LastName = u.LastName,
                    Email = u.Email,
                    PhoneNumber = u.PhoneNumber,
                }).FirstOrDefault();

                // I doubt on it
				if(user == null)
				{
                    return new ResultDto<GetUserDto>()
                    {
                        IsSuccess = false,
                        Message = "کاربر یافت نشد!",
                        Data = new(),
                    };
				}

                return new ResultDto<GetUserDto>()
                {
                    IsSuccess = true,
                    Message = "اطلاعات یوزر دریافت شد",
                    Data = user,
                };
            }
            catch (Exception e)
            {
                return new ResultDto<GetUserDto>()
                {
                    IsSuccess = false,
                    Message = "ارسال ناموفق!",
                    Data = new(),
                };
            }
        }
    }
    
}
