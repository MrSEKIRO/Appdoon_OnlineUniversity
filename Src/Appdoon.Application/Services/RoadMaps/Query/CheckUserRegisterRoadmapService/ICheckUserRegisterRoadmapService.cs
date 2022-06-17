using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using Appdoon.Domain.Entities.RoadMaps;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.RoadMaps.Query.CheckUserRegisterRoadmapService
{
	public interface ICheckUserRegisterRoadmapService
	{
		ResultDto<bool> Execute(int RoadmapId, int UserId);
	}

	public class CheckUserRegisterRoadmapService : ICheckUserRegisterRoadmapService
	{
		private readonly IDatabaseContext _context;

		public CheckUserRegisterRoadmapService(IDatabaseContext context)
		{
			_context = context;
		}
		public ResultDto<bool> Execute(int RoadmapId, int UserId)
		{
			try
			{
				var user = _context.Users
					.Include(u => u.SignedRoadMaps.Select(sr=> sr.Id))
					.Where(u => u.Id == UserId)
					.FirstOrDefault();

				if(user == null)
				{
					return new ResultDto<bool>()
					{
						IsSuccess = false,
						Message = "کابر یافت نشد!",
						Data = false,
					};
				}

				var isRegistered = user.SignedRoadMaps.Any(r => r.Id == RoadmapId);

				if(isRegistered == true)
				{
					return new ResultDto<bool>()
					{
						IsSuccess = true,
						Data = true,
						Message = "کابر در رودمپ ثبت نام کرده است!",
					};
				}
				else
				{
					return new ResultDto<bool>()
					{
						IsSuccess = true,
						Data = false,
						Message = "کابر در رودمپ ثبت نام نکرده است!",
					};
				}
			}
			catch(Exception e)
			{
				return new ResultDto<bool>()
				{
					IsSuccess = false,
					Message = "خطا در چک کردن رودمپ و کاربر",
					Data = false,
				};
			}
		}
	}
}
