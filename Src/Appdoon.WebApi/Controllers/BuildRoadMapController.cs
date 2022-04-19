
using Appdoon.Application.Services.Categories.Command.ICreateCategoryService;
using Appdoon.Application.Services.RoadMaps.Command.ICreateRoadMapIndividualService;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Microsoft.AspNetCore.Hosting;
using System;
using System.IO;
using Appdoon.Common.Dtos;

namespace Appdoon.WebApi.Controllers
{
	[Route("api/[controller]/[action]")]
	[ApiController]
	public class BuildRoadMapController : ControllerBase
	{
		private readonly ICreateRoadMapIndividualService _createRoadMapService;
        private readonly ICreateCategoryService _createCategoryService;

		private readonly IWebHostEnvironment _env;

        public BuildRoadMapController(ICreateRoadMapIndividualService createRoadMapService, ICreateCategoryService createCategoryService, IWebHostEnvironment env)
		{
			_createRoadMapService = createRoadMapService;
			_createCategoryService = createCategoryService;

			_env = env;
		}

		[HttpPost]
		public JsonResult CreateRoadMap()
		{
			var reslut = _createRoadMapService.Execute(Request,_env.ContentRootPath);
			return new JsonResult(reslut);
		}

		[HttpPost]
		public JsonResult CreateCategory(RequestCreateCategoryDto requestCreateCategoryDto)
        {
			var result = _createCategoryService.Execute(requestCreateCategoryDto);
			return new JsonResult(result);
        }

		/*
		[HttpPost]
		public JsonResult CreateStep(RequestCreateCategoryDto requestCreateCategoryDto)
		{
			var result = _createCategoryService.Execute(requestCreateCategoryDto);
			return new JsonResult(result);
		}

		*/

	}

	
}
