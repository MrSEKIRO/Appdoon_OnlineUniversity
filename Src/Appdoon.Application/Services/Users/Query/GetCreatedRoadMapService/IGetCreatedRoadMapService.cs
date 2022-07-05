using Appdoon.Application.Interfaces;
using Appdoon.Application.Services.RoadMaps.Query.FilterRoadmapsService;
using Appdoon.Common.Dtos;
using Appdoon.Common.UserRoles;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Users.Query.GetCreatedRoadMapService
{
	public interface IGetCreatedRoadMapService
	{
		ResultDto<List<RoadMapDto>> Execute(int userId);
	}

	public class GetCreatedRoadMapService : IGetCreatedRoadMapService
	{
		private readonly IDatabaseContext _context;

		public GetCreatedRoadMapService(IDatabaseContext context)
		{
			_context = context;
		}
		public ResultDto<List<RoadMapDto>> Execute(int userId)
		{
			try
			{
				var user = _context.Users
					.AsNoTracking()
					.Include(u => u.Roles)
					.Include(u => u.CreatedRoadMaps)
					.Where(u => u.Id == userId)
					.FirstOrDefault();

				if(user == null)
				{
					return new ResultDto<List<RoadMapDto>>()
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
					return new ResultDto<List<RoadMapDto>>()
					{
						IsSuccess = false,
						Message = "کابری دسترسی به ساخت رودمپ ندارد",
						Data = new(),
					};
				}

				var roadmaps = user.CreatedRoadMaps
					.Select(cr => new RoadMapDto()
					{
						Id = cr.Id,
						Title = cr.Title,
						ImageSrc = cr.ImageSrc,
						Description = cr.Description,
						// categories not loaded
						Stars = cr.Stars,
					}).ToList();

				return new ResultDto<List<RoadMapDto>>()
				{
					IsSuccess = true,
					Data = roadmaps,
					Message = "رودمپ های ساخته شده با موفقیت ارسال شدند!",
				};
			}
			catch(Exception e)
			{
				return new ResultDto<List<RoadMapDto>>()
				{
					IsSuccess = false,
					Message = "خطا در ارسال رودمپ های ساخته شده!",
					Data = new(),
				};
			}
		}
	}
}
