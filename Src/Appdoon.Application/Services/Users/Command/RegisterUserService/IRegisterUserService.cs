using Appdoon.Application.Interfaces;
using Appdoon.Application.Validatores.UserValidatore;
using Appdoon.Common.Dtos;
using Appdoon.Common.HashFunctions;
using Appdoon.Common.UserRoles;
using Appdoon.Domain.Entities.Users;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Appdoon.Application.Services.Users.Command.RegisterUserService
{
    public class RequestRegisterUserDto
    {
        public string Username { get; set; } = string.Empty;
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string RePassword { get; set; } = string.Empty;
        public string PhoneNumber { get; set; }
        public string Role { get; set; } = string.Empty;
    }
    public interface IRegisterUserService
    {
        ResultDto<int> Execute(RequestRegisterUserDto user);
    }

    public class RegisterUserService : IRegisterUserService
    {
        private readonly IDatabaseContext _context;

        public RegisterUserService(IDatabaseContext context)
        {
            _context = context;
        }

        public ResultDto<int> Execute(RequestRegisterUserDto user)
        {
            try
            {
                #region ArmanRegex
                //Regex
                /*
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
                */
                #endregion

                UserRole userRole;
                bool isValidRole = ParseEnum<UserRole>(user.Role, out userRole);
                if (isValidRole == false)
                {
                    return new ResultDto<int>()
                    {
                        IsSuccess = false,
                        Message = "فرمت نقش کاربر صحبح نیست!",
                        Data = new(),
                    };
                }

                UserValidatore validations = new UserValidatore();
                var validationResullt = validations.Validate(user);

                List<string> properties = new List<string>()
                {
                    "Email",
                    "Username",
                    "Password",
                };

                var errors = validationResullt.Errors
                    .Where(e => properties.Contains(e.PropertyName))
                    .ToList();

                if (errors.Count > 0)
                {
                    return new ResultDto<int>()
                    {
                        IsSuccess = false,
                        Message = errors[0].ErrorMessage,
                        Data = 0,
                    };
                }

                //Uniqueness(Email/Username)
                var duplicatedEmail = _context.Users.Any(p => p.Email == user.Email);

                if (duplicatedEmail == true)
                {
                    return new ResultDto<int>()
                    {
                        IsSuccess = false,
                        Message = "ایمیل تکراری است!",
                        Data = 0,
                    };
                }

                var duplicatedUsername = _context.Users.Any(p => p.Username == user.Username);
                if (duplicatedUsername == true)
                {
                    return new ResultDto<int>()
                    {
                        IsSuccess = false,
                        Message = "نام کاربری تکراری است!",
                        Data = 0,
                    };
                }

                string newpass = ArshiaHash.Hash(user.Password);

                List<Role> roles = new List<Role>();
                roles.Add(new Role()
                {
                    Name = userRole.ToString(),
                });

                User newUser = new User()
                {
                    Email = user.Email,
                    Password = newpass,
                    Username = user.Username,
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                    Roles=roles,
                };

                // we don`t set Id
                //newuser.Id = user.Id;
                _context.Users.Add(newUser);
                _context.SaveChanges();

                return new ResultDto<int>()
                {
                    IsSuccess = true,
                    Message = "ثبت نام با موفقیت انجام شد.",
                    Data = newUser.Id,
                };
            }
            catch (Exception e)
            {
                return new ResultDto<int>()
                {
                    IsSuccess = false,
                    Message = "خطا در ثبت نام!",
                    Data = 0,
                };
            }
        }

        public static bool ParseEnum<T>(string value, out UserRole enumParsed)
        {
            return Enum.TryParse(value, true, out enumParsed);
        }
    }
}
