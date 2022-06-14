using Appdoon.Application.Services.Roadmaps.Command.CreateRoadmapService;
using Appdoon.Application.Services.Roadmaps.Command.DeleteRoadmapService;
using Appdoon.Application.Services.Roadmaps.Command.UpdateRoadmapService;
using Appdoon.Application.Services.Roadmaps.Query.GetAllRoadmapsService;
using Appdoon.Application.Services.Roadmaps.Query.GetIndividualRoadmapService;
using Appdoon.Application.Services.RoadMaps.Command.RegisterRoadmapService;
using Appdoon.Application.Services.RoadMaps.Query.FilterRoadmapsService;
using Appdoon.Application.Services.RoadMaps.Query.GetUserRoadmapService;
using Appdoon.Application.Services.RoadMaps.Query.SearchRoadmapsService;
using Appdoon.Domain.Entities.RoadMaps;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Appdoon.WebApi.Controllers
{
	[Route("api/[controller]/[action]")]
	[ApiController]
	public class RoadmapController : ControllerBase
	{

		//Get All
		private readonly IGetAllRoadmapsService _getAllRoadmapsService;
		//Get Individual
		private readonly IGetIndividualRoadmapService _getIndividualRoadmapService;
		//Create
		private readonly ICreateRoadmapService _createRoadmapService;
		//Delete
		private readonly IDeleteRoadmapService _deleteRoadmapService;
		//Update
		private readonly IUpdateRoadmapService _updateRoadmapService;
		//Search
		private readonly ISearchRoadmapsService _searchRoadmapsService;
		//filter
		private readonly IFilterRoadmapsService _filterRoadmapsService;

		private readonly IGetUserRoadmapService _getUserRoadmapService;
		private readonly IRegisterRoadmapService _registerRoadmapService;
		private readonly IWebHostEnvironment _env;


		public RoadmapController(IGetAllRoadmapsService getAllRoadmapsService,
								  IGetIndividualRoadmapService getIndividualRoadmapService,
								  ICreateRoadmapService createRoadmapService,
								  IDeleteRoadmapService deleteRoadmapService,
								  IUpdateRoadmapService updateRoadmapService,
								  ISearchRoadmapsService searchRoadmapsService,
								  IFilterRoadmapsService filterRoadmapsService,
								  IGetUserRoadmapService getUserRoadmapService,
								  IRegisterRoadmapService registerRoadmapService,
								  IWebHostEnvironment env)
		{
			_getAllRoadmapsService = getAllRoadmapsService;
			_getIndividualRoadmapService = getIndividualRoadmapService;
			_createRoadmapService = createRoadmapService;
			_deleteRoadmapService = deleteRoadmapService;
			_updateRoadmapService = updateRoadmapService;
			_searchRoadmapsService = searchRoadmapsService;
			_filterRoadmapsService = filterRoadmapsService;
			_getUserRoadmapService = getUserRoadmapService;
			_registerRoadmapService = registerRoadmapService;
			_env = env;
		}

		// GET: api/<RoadmapController>
		[HttpGet]
		public JsonResult Get(int PageNumber = 1, int PageSize = 15)
		{
			var result = _getAllRoadmapsService.Execute(PageNumber, PageSize);
			return new JsonResult(result);
		}

		// GET api/<RoadmapController>/5
		[HttpGet("{id}")]
		public JsonResult Get(int id)
		{
			// GetUserRoadmapService
			//var userId = int.Parse(User.Identities.First()
			//    .Claims.First()
			//    .Value);

			//var result = _getUserRoadmapService.Execute(id,userId);

			var result = _getIndividualRoadmapService.Execute(id);

			return new JsonResult(result);
		}

		// POST api/<RoadmapController>
		[HttpPost]
		public JsonResult Post()
		{
			var result = _createRoadmapService.Execute(Request, _env.ContentRootPath);
			return new JsonResult(result);
		}

		// PUT api/<RoadmapController>/5
		[HttpPut("{id}")]
		public JsonResult Put(int id)
		{
			var result = _updateRoadmapService.Execute(id, Request, _env.ContentRootPath);
			return new JsonResult(result);
		}

		// DELETE api/<RoadmapController>/5
		[HttpDelete("{id}")]
		public JsonResult Delete(int id)
		{
			var result = _deleteRoadmapService.Execute(id);
			return new JsonResult(result);
		}

		// GET api/<RoadmapController>
		[HttpGet]
		public JsonResult Search(string searched_text, int page_number, int page_size)
		{
			var result = _searchRoadmapsService.Execute(searched_text, page_number, page_size);
			return new JsonResult(result);
		}

		// GET api/<RoadmapController>
		[HttpPost]
		public JsonResult Filter(FilterDto fliterDto)
		{
			var result = _filterRoadmapsService.Execute(fliterDto);
			return new JsonResult(result);
		}

		[HttpPost]
		public JsonResult RegisterRoadmap(int RoadmapId,int UserId)
		{
			// should use cookies for geting userId not api call
			var result = _registerRoadmapService.Execute(RoadmapId, UserId);

			return new JsonResult(result);
		}
	}
}
