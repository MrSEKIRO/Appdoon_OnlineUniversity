using Appdoon.Application.Services.RoadMap.Query.GetRoadMapService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Appdoon.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoadMapIndividualController : ControllerBase
    {
		private readonly IGetRoadMapService _getRoadMapService;

		public RoadMapIndividualController(IGetRoadMapService getRoadMapService)
		{
			_getRoadMapService = getRoadMapService;
		}

		[HttpGet]
		public JsonResult Index()
		{
			var result = _getRoadMapService.Execute();
			return new JsonResult(result);
		}
	}
}
