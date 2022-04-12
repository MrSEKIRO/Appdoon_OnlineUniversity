
using Appdoon.Application.Services.RoadMaps.Command.ICreateRoadMapIndividualService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Appdoon.WebApi.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class BuildRoadMapController : ControllerBase
	{
		private readonly ICreateRoadMapIndividualService _createRoadMapService;

		public BuildRoadMapController(ICreateRoadMapIndividualService createRoadMapService)
		{
			_createRoadMapService = createRoadMapService;
		}
		[HttpPost]
		public JsonResult Create(string Title, string Description,string ImageSrc, List<int> CategoriesId)
		{
			var reslut= _createRoadMapService.Execute(Title, Description, ImageSrc, CategoriesId);

			return new JsonResult(reslut);
		}
	}

	
}
