using Appdoon.Application.Interfaces;
using Appdoon.Application.Services.Users.Command.RegisterUserService;
using Appdoon.Application.Validatores.UserValidatore;
using Appdoon.Common.Dtos;
using Appdoon.Common.HashFunctions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Users.Command.EditPasswordService
{
	public class EditPasswordDto
	{
		public string OldPassword { get; set; }
		public string NewPassword { get; set; }
		public string RepeatNewPassword { get; set; }

	}

	public interface IEditPasswordService
	{
		ResultDto Execute(int id, EditPasswordDto editUserDto);
	}

	public class EditPasswordService : IEditPasswordService
	{
		private readonly IDatabaseContext _context;

		public EditPasswordService(IDatabaseContext context)
		{
			_context = context;
		}
		public ResultDto Execute(int id, EditPasswordDto editPasswordDto)
		{
			try
			{

				UserValidatore validationRules = new UserValidatore();
				var result = validationRules.Validate(new RequestRegisterUserDto()
				{
					Password = editPasswordDto.NewPassword,
					RePassword = editPasswordDto.RepeatNewPassword,
				});

				List<string> properties = new List<string>()
				{
					"Password",
					"RePassword",
				};

				var errors = result.Errors.Where(e => properties.Contains(e.PropertyName))
					.Select(e => e.ErrorMessage)
					.ToList();

				if (errors.Count != 0)
				{
					return new ResultDto()
					{
						IsSuccess = false,
						Message = errors.First(),
					};
				}

				var userpass = _context.Users.FirstOrDefault(u => u.Id == id).Password;
				if (!ArshiaHash.Verify(editPasswordDto.OldPassword, userpass))
				{
					return new ResultDto()
					{
						IsSuccess = false,
						Message = "رمز عبور اشتباه است!",
					};
				}

				var user = _context.Users.Find(id);

				user.Password = ArshiaHash.Hash(editPasswordDto.NewPassword);

				_context.SaveChanges();

				return new ResultDto()
				{
					IsSuccess = true,
					Message = "رمز عبور با موفقیت تغییر یافت!",
				};
			}
			catch (Exception e)
			{
				return new ResultDto()
				{
					IsSuccess = false,
					Message = "خطا در تغییر اطلاعات!",
				};
			}
		}
	}
}
