using Appdoon.Application.Services.RoadMaps.Command.ICreateRoadMapService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Appdoon.WebApi.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class BuildRoadMapController : ControllerBase
	{
		private readonly ICreateRoadMapService _createRoadMapService;

		public BuildRoadMapController(ICreateRoadMapService createRoadMapService)
		{
			_createRoadMapService = createRoadMapService;
		}
		[HttpPost]
		public JsonResult Create(string Title, string Description,string ImageSrc, int Stars)
		{
			var reslut= _createRoadMapService.Execute(Title, Description, ImageSrc, Stars);

			return new JsonResult(reslut);
		}
	}

	
}
