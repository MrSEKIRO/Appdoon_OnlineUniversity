using Appdoon.Application.Interfaces;
using Appdoon.Application.Validatores.LessonValidatore;
using Appdoon.Common.Dtos;
using Appdoon.Domain.Entities.RoadMaps;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Lessons.Command.CreateLessonService
{
	public interface ICreateLessonService
	{
		ResultDto Execute(CreateLessonDto createLessonDto);
	}

	public class CreateLessonService : ICreateLessonService
	{
		private readonly IDatabaseContext _context;

		public CreateLessonService(IDatabaseContext context)
		{
			_context = context;
		}
		public ResultDto Execute(CreateLessonDto createLessonDto)
		{
			try
			{
				// validate
				LessonValidatore validationRules = new LessonValidatore();
				var result = validationRules.Validate(createLessonDto);

				if(result.IsValid == false)
				{
					return new ResultDto()
					{
						IsSuccess = false,
						Message = result.Errors[0].ErrorMessage,
					};
				}

				var lesson = new Lesson()
				{
					Title = createLessonDto.Title,
					TopBannerSrc = createLessonDto.TopBannerSrc,
					Text = createLessonDto.Text,
				};

				_context.Lessons.Add(lesson);
				_context.SaveChanges();

				return new ResultDto()
				{
					IsSuccess = true,
					Message = "صفحه درس با موفقیت ساخته شد!",
				};
			}
			catch(Exception e)
			{
				return new ResultDto()
				{
					IsSuccess = false,
					Message = "خطا در ساخت صفخه درس!",
				};
			}
		}
	}

	public class CreateLessonDto
	{
		public string Title { get; set; } = string.Empty;
		public string TopBannerSrc { get; set; } = string.Empty;
		public string Text { get; set; } = string.Empty;
	}
}
