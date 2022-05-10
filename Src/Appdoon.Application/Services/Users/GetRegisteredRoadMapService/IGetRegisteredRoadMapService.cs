using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using Appdoon.Domain.Entities.RoadMaps;
using Appdoon.Domain.Entities.Users;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Users.GetRoadMapService
{
	public interface IGetRegisteredRoadMapService
	{
		ResultDto<List<RegisteredRoadMapDto>> Execute(int id);
	}
	public class RegisteredRoadMapDto
	{
		public int Id;
		public string Title;
		public string ImageSrc;
	}
	public class GetRegisteredRoadMapService : IGetRegisteredRoadMapService
	{
		private readonly IDatabaseContext _context;
		public GetRegisteredRoadMapService(IDatabaseContext context)
		{
			_context = context;
		}
		public ResultDto<List<RegisteredRoadMapDto>> Execute(int id)
		{
			try
			{
				var user = _context.Users
					.Where(r => r.Id == id)
					.Include(r => r.SignedRoadMaps)
					.FirstOrDefault();

				if(user == null)
				{
					return new ResultDto<List<RegisteredRoadMapDto>>()
					{
						IsSuccess = false,
						Message = "کاربر یافت نشد!",
						Data = new(),
					};
				}

				user.SignedRoadMaps ??= new List<RoadMap>();

				var roadmaps = user.SignedRoadMaps
					.Select(r => new RegisteredRoadMapDto()
					{
						Title = r.Title,
						ImageSrc = r.ImageSrc,
						Id = r.Id,
					}).ToList();

				return new ResultDto<List<RegisteredRoadMapDto>>()
				{
					IsSuccess = true,
					Message = "رودمپ های ثبت نام شده ی یوزر دریافت شد",
					Data = roadmaps,
				};
			}
			catch(Exception e)
			{
				return new ResultDto<List<RegisteredRoadMapDto>>()
				{
					IsSuccess = false,
					Message = "ارسال ناموفق!",
					Data = new(),
				};
			}
		}
	}
}
