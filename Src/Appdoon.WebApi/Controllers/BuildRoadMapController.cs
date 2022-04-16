
using Appdoon.Application.Services.Categories.Command.ICreateCategoryService;
using Appdoon.Application.Services.RoadMaps.Command.ICreateRoadMapIndividualService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Appdoon.WebApi.Controllers
{
	[Route("api/[controller]/[action]")]
	[ApiController]
	public class BuildRoadMapController : ControllerBase
	{
		private readonly ICreateRoadMapIndividualService _createRoadMapService;
        private readonly ICreateCategoryService _createCategoryService;

        public BuildRoadMapController(ICreateRoadMapIndividualService createRoadMapService, ICreateCategoryService createCategoryService)
		{
			_createRoadMapService = createRoadMapService;
			_createCategoryService = createCategoryService;
		}

		[HttpPost]
		public JsonResult CreateRoadMap(string Title, string Description, List<int> CategoriesId)
		{
			IFormFile image=null;
			if(Request.Form.Files.Count>0)
				image = Request.Form.Files[0];
			
			var reslut= _createRoadMapService.Execute(Title, Description, image, CategoriesId);

			return new JsonResult(reslut);
		}

		[HttpPost]
		public JsonResult CreateCategoy(string Name, string Link)
        {
			var result = _createCategoryService.Execute(Name, Link);
			return new JsonResult(result);
        }
	}

	
}
