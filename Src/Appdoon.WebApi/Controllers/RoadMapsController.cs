using Appdoon.Application.Services.RoadMaps.Query.GetRoadMapService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Appdoon.WebApi.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class RoadMapsController : ControllerBase
	{
		private readonly IGetAllRoadMapService _getAllRoadMapService;
        private readonly IGetRoadMapService _getRoadMapService;

        public RoadMapsController(IGetAllRoadMapService getAllRoadMapService, IGetRoadMapService getRoadMapService)
		{
			_getAllRoadMapService = getAllRoadMapService;
			_getRoadMapService = getRoadMapService;
		}

		[HttpGet]
		public JsonResult Index()
		{
			// ResultDto<List<RoadmapDto>>
			var result = _getAllRoadMapService.Execute();

			return new JsonResult(result);
		}

		[HttpGet]
		public JsonResult IndivisualRoadMap()
		{
			var result = _getRoadMapService.Execute();
			return new JsonResult(result);
		}
	}
}
