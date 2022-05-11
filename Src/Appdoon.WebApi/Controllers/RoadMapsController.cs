using Appdoon.Application.Services.Categories.Query.GetCategoriesService;
using Appdoon.Application.Services.Lessons.Query.GetAllLessonsService;
using Appdoon.Application.Services.Lessons.Query.GetLessonService;
using Appdoon.Application.Services.RoadMaps.Query.GetRoadMapService;
using Appdoon.Application.Services.Steps.Query.GetAllStepService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Appdoon.WebApi.Controllers
{
	[Route("api/[controller]/[action]")]
	[ApiController]
	public class RoadMapsController : ControllerBase
	{
		private readonly IGetAllRoadMapService _getAllRoadMapService;
        private readonly IGetIndivdualRoadMapService _getRoadMapService;


		private readonly IGetCategoriesService _getCategoriesService;
		private readonly IGetAllStepService _getAllStepService;

		private readonly IGetLessonService _getLessonService;
		private readonly IGetAllLessonsService _getAllLessonsService;

		public RoadMapsController(IGetAllRoadMapService getAllRoadMapService, IGetIndivdualRoadMapService getRoadMapService, 
			IGetCategoriesService getCategoriesService, IGetAllStepService getAllStepService, IGetLessonService getLessonService,
			IGetAllLessonsService getAllLessonsService)
		{
			_getAllRoadMapService = getAllRoadMapService;
			_getRoadMapService = getRoadMapService;

			_getCategoriesService = getCategoriesService;
			_getAllStepService = getAllStepService;

			_getLessonService = getLessonService;
			_getAllLessonsService = getAllLessonsService;
		}

		[HttpGet]
		public JsonResult Index()
		{
			// ResultDto<List<RoadmapDto>>
			var result = _getAllRoadMapService.Execute();
			return new JsonResult(result);
		}

		[HttpPost]
		public JsonResult IndividualRoadMap(RoadmapIdDto roadmapId)
		{
			var result = _getRoadMapService.Execute(roadmapId);
			return new JsonResult(result);
		}


		[HttpGet]
		public JsonResult GetCategories()
        {
			var result = _getCategoriesService.Execute();
			return new JsonResult(result);
		}

		[HttpGet]
		public JsonResult GetSteps()
		{
			var result = _getAllStepService.Execute();
			return new JsonResult(result);
		}

		[HttpPost]
		public JsonResult GetLesson(LessonIdDto lessonId)
		{
			var result = _getLessonService.Execute(lessonId);
			return new JsonResult(result);
		}

		[HttpGet]
		public JsonResult GetAllLessons()
		{
			var result = _getAllLessonsService.Execute();
			return new JsonResult(result);
		}
	}
}
