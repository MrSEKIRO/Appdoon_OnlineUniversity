using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.RoadMaps.Command.BookmarkRoadmapService
{
	public interface IBookmarkRoadmapService
	{
		ResultDto Execute(int RoadmapId, int UserId);
	}

	public class BookmarkRoadmapService : IBookmarkRoadmapService
	{
		private readonly IDatabaseContext _context;

		public BookmarkRoadmapService(IDatabaseContext context)
		{
			_context = context;
		}
		public ResultDto Execute(int RoadmapId, int UserId)
		{
			try
			{
				var user = _context.Users
					.Include(u => u.BookmarkedRoadMaps)
					.Where(u => u.Id == UserId)
					.FirstOrDefault();

				if(user == null)
				{
					return new ResultDto()
					{
						IsSuccess = false,
						Message = "کاربر یافت نشد!",
					};
				}

				var roadmap = _context.RoadMaps.Find(RoadmapId);

				if(roadmap == null)
				{
					return new ResultDto()
					{
						IsSuccess = false,
						Message = "رودمپ موردنظر یافت نشد!",
					};
				}

				bool isBookmarkedBefore = user.BookmarkedRoadMaps.Any(br => br.Id == RoadmapId);
				string message = string.Empty;

				if(isBookmarkedBefore == true)
				{
					user.BookmarkedRoadMaps.Remove(roadmap);
					message = "رودمپ از لیست علاقه مندی ها خارج شد!";
				}
				else
				{
					user.BookmarkedRoadMaps.Add(roadmap);
					message = "رودمپ به لیست علاقه مندی ها افزوده شد!";
				}

				_context.SaveChanges();

				return new ResultDto()
				{
					IsSuccess = true,
					Message = message,
				};
			}
			catch(Exception e)
			{
				return new ResultDto()
				{
					IsSuccess = false,
					Message = "خطا در اضافه کردن به لیست علاقه مندی ها!",
				};
			}
		}
	}
}
