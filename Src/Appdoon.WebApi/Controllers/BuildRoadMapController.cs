
using Appdoon.Application.Services.Categories.Command.ICreateCategoryService;
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
        private readonly ICreateCategoryService _createCategoryService;

        public BuildRoadMapController(ICreateRoadMapIndividualService createRoadMapService, ICreateCategoryService createCategoryService)
		{
			_createRoadMapService = createRoadMapService;
			_createCategoryService = createCategoryService;
		}

		[HttpPost]
		public JsonResult Create(string Title, string Description,string ImageSrc, List<int> CategoriesId)
		{
			var reslut= _createRoadMapService.Execute(Title, Description, ImageSrc, CategoriesId);

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
