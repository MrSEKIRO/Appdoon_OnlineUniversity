using Appdoon.Application.Services.RoadMap.Command.ICreateRoadMapIndividualService;
using Appdoon.Domain.Entities.RoadMaps;
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
    public class BuildRoadMapIndividualController : ControllerBase
    {
		private readonly ICreateRoadMapIndividualService _createRoadMapIndividualService;

		public BuildRoadMapIndividualController(ICreateRoadMapIndividualService createRoadMapIndividualService)
		{
			_createRoadMapIndividualService = createRoadMapIndividualService;
		}
		[HttpPost]
		public JsonResult Create(string Title, string Description, string ImageSrc, int Stars, List<Category> Categories, List<Step> Steps)
		{
			var reslut = _createRoadMapIndividualService.Execute(Title, Description, ImageSrc, Stars, Categories, Steps);
			return new JsonResult(reslut);
		}
	}
}
