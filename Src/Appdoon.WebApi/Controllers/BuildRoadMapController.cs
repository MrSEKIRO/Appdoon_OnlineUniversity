
using Appdoon.Application.Services.Categories.Command.ICreateCategoryService;
using Appdoon.Application.Services.ChildSteps.Command.CreateChildStepService;
using Appdoon.Application.Services.Lessons.Command.CreateLessonService;
using Appdoon.Application.Services.RoadMaps.Command.ICreateRoadMapIndividualService;
using Appdoon.Application.Services.Steps.Command.CreateStepService;
using Appdoon.Common.Dtos;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;

namespace Appdoon.WebApi.Controllers
{
	[Route("api/[controller]/[action]")]
	[ApiController]
	public class BuildRoadMapController : ControllerBase
	{
		private readonly ICreateRoadMapIndividualService _createRoadMapService;
		private readonly ICreateCategoryService _createCategoryService;
		private readonly ICreateStepService _createStepService;
		private readonly ICreateChildStepService _createChildStepService;
		private readonly ICreateLessonService _createLessonService;

		private readonly IWebHostEnvironment _env;

		public BuildRoadMapController(ICreateRoadMapIndividualService createRoadMapService,
			ICreateCategoryService createCategoryService,
			ICreateStepService createStepService,
			ICreateChildStepService createChildStepService,
			ICreateLessonService createLessonService,
			IWebHostEnvironment env)
		{
			_createRoadMapService = createRoadMapService;
			_createCategoryService = createCategoryService;
			_createStepService = createStepService;
			_createChildStepService = createChildStepService;
			_createLessonService = createLessonService;

			_env = env;
		}

		[HttpPost]
		public JsonResult CreateRoadMap()
		{
			var reslut = _createRoadMapService.Execute(Request, _env.ContentRootPath);
			return new JsonResult(reslut);
		}

		[HttpPost]
		public JsonResult CreateCategory(RequestCreateCategoryDto requestCreateCategoryDto)
		{
			var result = _createCategoryService.Execute(requestCreateCategoryDto);
			return new JsonResult(result);
		}


		[HttpPost]
		public JsonResult CreateStep(RequestCreateStepDto requestCreateStepDto)
		{
			var result = _createStepService.Execute(requestCreateStepDto);
			return new JsonResult(result);
		}

		[HttpPost]
		public JsonResult CreateChildStep(RequestCreateChildStepDto requestCreateChildStepDto)
		{
			var result = _createChildStepService.Execute(requestCreateChildStepDto);
			return new JsonResult(result);
		}

		[HttpPost]
		public JsonResult CreateLesson()
		{
			var result = _createLessonService.Execute(Request, _env.ContentRootPath);
			return new JsonResult(result);
		}
	}


}
