using Appdoon.Application.Interfaces;
using Appdoon.Application.Services.Users.RegisterUserService;
using Appdoon.Application.Validatores.UserValidatore;
using Appdoon.Common.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Users.EditUserService
{
	public interface IEditUserService
	{
		ResultDto Execute(EditUserDto editUserDto);
	}

	public class EditUserService : IEditUserService
	{
		private readonly IDatabaseContext _context;

		public EditUserService(IDatabaseContext context)
		{
			_context = context;
		}
		public ResultDto Execute(EditUserDto editUserDto)
		{
			try
			{
				UserValidatore validationRules = new UserValidatore();
				var result = validationRules.Validate(new RequestRegisterUserDto()
				{
					Username = editUserDto.Username,
					FirstName = editUserDto.FirstName,
					LastName = editUserDto.LastName,
					Password = editUserDto.Password,
					RePassword = editUserDto.RePassword,
					PhoneNumber = editUserDto.PhoneNumber,
				});

				List<string> properties = new List<string>()
				{
					"Username",
					"FirstName",
					"LastName",
					"Password",
					"RePassword",
					"PhoneNumber",
				};

				var errors = result.Errors.Where(e => properties.Contains(e.PropertyName))
					.Select(e => e.ErrorMessage)
					.ToList();

				if(errors.Count != 0)
				{
					return new ResultDto()
					{
						IsSuccess = false,
						Message = errors.First(),
					};
				}

				var dupUsername = _context.Users.Any(u => u.Username == editUserDto.Username);
				if(dupUsername == true)
				{
					return new ResultDto()
					{
						IsSuccess = false,
						Message = "نام کاربری تکراری است!",
					};
				}

				var user = _context.Users.Find(editUserDto.Id);

				user.Username = editUserDto.Username;
				user.FirstName = editUserDto.FirstName;
				user.LastName = editUserDto.LastName;
				user.Password = editUserDto.Password;
				user.PhoneNumber=editUserDto.PhoneNumber;

				_context.SaveChanges();

				return new ResultDto()
				{
					IsSuccess = true,
					Message = "اطلاعات با موفقیت تغییر یافت!",
				};
			}
			catch(Exception e)
			{
				return new ResultDto()
				{
					IsSuccess = false,
					Message = "خطا در تغییر اطلاعات!",
				};
			}
		}
	}

	public class EditUserDto
	{
		public int Id { get; set; }
		public string Username { get; set; } = string.Empty;
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public string Password { get; set; } = string.Empty;
		public string RePassword { get; set; } = string.Empty;
		public string PhoneNumber { get; set; }
	}
}
