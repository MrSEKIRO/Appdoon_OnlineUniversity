using Appdoon.Application.Interfaces;
using Appdoon.Application.Validatores.LessonValidatore;
using Appdoon.Common.Dtos;
using System;
using System.Collections.Generic;
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
		ResultDto Execute(int id, UpdateLessonDto lesson);
	}

	public class UpdateLessonService : IUpdateLessonService
	{
		private readonly IDatabaseContext _context;

		public UpdateLessonService(IDatabaseContext context)
		{
			_context = context;
		}
		public ResultDto Execute(int id, UpdateLessonDto lesson)
		{
			try
			{

				// check validation rules
				UpdateLessonValidatore validationRules = new UpdateLessonValidatore();
				var result = validationRules.Validate(lesson);
				if (result.IsValid == false)
				{
					return new ResultDto()
					{
						IsSuccess = false,
						Message = result.Errors[0].ErrorMessage,
					};
				}



				var les = _context.Lessons.Where(s => s.Id == id).FirstOrDefault();
				if (les == null)
				{
					return new ResultDto()
					{
						IsSuccess = false,
						Message = "این آیدی وجود ندارد!",
					};
				}

				les.Text = lesson.Text;
				les.TopBannerSrc = lesson.TopBannerSrc;
				les.Title = lesson.Title;
				les.UpdateTime = DateTime.Now;
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
					Message = "خطا در بروزرسانی دسته!",
				};
			}
		}
	}
}
