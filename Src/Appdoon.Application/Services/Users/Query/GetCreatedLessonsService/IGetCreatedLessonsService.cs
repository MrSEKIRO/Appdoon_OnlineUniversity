using Appdoon.Application.Interfaces;
using Appdoon.Application.Services.Lessons.Query.GetAllLessonsService;
using Appdoon.Common.Dtos;
using Appdoon.Common.UserRoles;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Users.Query.GetCreatedLessonsService
{
	public class GetLessonsDto
	{
		public int Id { get; set; }
		public string Title { get; set; } = string.Empty;
		public string CreatorName { get; set; } = string.Empty;
	}
	public interface IGetCreatedLessonsService
	{
		ResultDto<List<GetLessonsDto>> Execute(int userId);
	}


	public class GetCreatedLessonsService : IGetCreatedLessonsService
	{
		private readonly IDatabaseContext _context;

		public GetCreatedLessonsService(IDatabaseContext context)
		{
			_context = context;
		}
		public ResultDto<List<GetLessonsDto>> Execute(int userId)
		{
			try
			{
				var user = _context.Users
						.AsNoTracking()
						.Include(u => u.Roles)
						.Include(u => u.CreatedLessons)
						.Where(u => u.Id == userId)
						.FirstOrDefault();

				if(user == null)
				{
					return new ResultDto<List<GetLessonsDto>>()
					{
						IsSuccess = false,
						Message = "کاربر یافت نشد!",
						Data = new(),
					};
				}

				bool isTeacherOrAdmin = user.Roles
					.Any(r => r.Name == UserRole.Teacher.ToString() || r.Name == UserRole.Admin.ToString());

				if(isTeacherOrAdmin == false)
				{
					return new ResultDto<List<GetLessonsDto>>()
					{
						IsSuccess = false,
						Message = "کابری دسترسی به ساخت مقاله ندارد",
						Data = new(),
					};
				}

				var roadmaps = user.CreatedLessons
					.Select(cl => new GetLessonsDto()
					{
						Id = cl.Id,
						Title = cl.Title,
						CreatorName = user.Username,
					}).ToList();

				return new ResultDto<List<GetLessonsDto>>()
				{
					IsSuccess = true,
					Data = roadmaps,
					Message = "مقاله های ساخته شده با موفقیت ارسال شدند!",
				};
			}
			catch(Exception e)
			{
				return new ResultDto<List<GetLessonsDto>>()
				{
					IsSuccess = false,
					Message = "خطا در ارسال مقاله های ساخته شده!",
					Data = new(),
				};
			}
		}
	}
}
