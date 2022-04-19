using Appdoon.Application.Services.Categories.Query.GetCategoriesService;
using Appdoon.Application.Services.RoadMaps.Query.GetRoadMapService;
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

        public RoadMapsController(IGetAllRoadMapService getAllRoadMapService, IGetIndivdualRoadMapService getRoadMapService, IGetCategoriesService getCategoriesService)
		{
			_getAllRoadMapService = getAllRoadMapService;
			_getRoadMapService = getRoadMapService;

			_getCategoriesService = getCategoriesService;
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






	}
}
