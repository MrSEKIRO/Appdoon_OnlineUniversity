using Appdoon.Application.Interfaces;
using Appdoon.Application.Services.Lessons.Command.CreateLessonService;
using Appdoon.Application.Validatores.LessonValidatore;
using Appdoon.Common.Dtos;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Lessons.Command.UpdateLessonService
{
	public class UpdateLessonDto
	{
		public string Title { get; set; }
		public string TopBannerSrc { get; set; }
		public string Text { get; set; }
	}
	public interface IUpdateLessonService
	{
		ResultDto Execute(int id, HttpRequest httpRequest, string currentpath);
	}

	public class UpdateLessonService : IUpdateLessonService
	{
		private readonly IDatabaseContext _context;

		public UpdateLessonService(IDatabaseContext context)
		{
			_context = context;
		}
		public ResultDto Execute(int id, HttpRequest httpRequest, string currentpath)
		{
			try
			{
				List<string> data = new List<string>();

				foreach (var key in httpRequest.Form.Keys)
				{
					var val = httpRequest.Form[key];
					data.Add(val);
				}

				var Title = data[0];
				var Text = data[1];
				var PhotoFileName = data[2];

				var imageSrc = "";
				var TimeNow = DateTime.Now;
				var ImageName = Title + "_" + TimeNow.Ticks.ToString();
				if (httpRequest.Form.Files.Count() != 0)
				{
					var postedFile = httpRequest.Form.Files[0];
					string filename = postedFile.FileName;
					var physicalPath = currentpath + "/Photos/Lesson/" + $"({ImageName})" + filename;
					using (var stream = new FileStream(physicalPath, FileMode.Create))
					{
						postedFile.CopyTo(stream);
					}
					imageSrc = $"({ImageName})" + PhotoFileName.ToString();
				}
				else
				{
					PhotoFileName = "1.jpg";
					imageSrc = PhotoFileName;
				}
				var les = _context.Lessons.Where(l => l.Id == id).FirstOrDefault();
				les.UpdateTime = TimeNow;
				if (imageSrc != "1.jpg")
				{
        
					les.TopBannerSrc = imageSrc;
				}
				les.Title = Title;
				les.Text = Text;			

				_context.SaveChanges();

				return new ResultDto()
				{
					IsSuccess = true,
					Message = "مقاله بروزرسانی شد.",
				};
			}
			catch (Exception e)
			{
				return new ResultDto()
				{
					IsSuccess = false,
					Message = "خطا در بروزرسانی مقاله!",
				};
			}
		}
	}
}
