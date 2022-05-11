using Appdoon.Application.Services.Lessons.Command.CreateLessonService;
using Appdoon.Application.Services.Linkers.Command.AddLinkerService;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

namespace Appdoon.WebApi.Controllers
{
	[Route("api/[controller]/[action]")]
	[ApiController]
	public class TeacherController : Controller
	{
		private readonly IWebHostEnvironment _env;
		private readonly ICreateLessonService _createLessonService;
		private readonly IAddLinkerService _addLinkerService;

		public TeacherController(IWebHostEnvironment env,
			ICreateLessonService createLessonService,
			IAddLinkerService addLinkerService)
		{
			_env = env;
			_createLessonService = createLessonService;
			_addLinkerService = addLinkerService;
		}

		[HttpGet]
		public JsonResult AddLesson()
		{
			var result = _createLessonService.Execute(HttpContext.Request, _env.ContentRootPath);
			return new JsonResult(result);
		}

		//[HttpGet]
		//public JsonResult AddLinker()
		//{
		//	var result=_
		//}

		//[HttpPost]
		//public JsonResult AddLinker(AddLinkerDto addLinkerDto)
		//{
		//	var result = _addLinkerService.Execute(addLinkerDto);

		//	return new JsonResult(result);
		//}


	}
}
