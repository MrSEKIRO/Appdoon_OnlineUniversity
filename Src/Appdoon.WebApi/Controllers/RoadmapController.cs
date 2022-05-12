using Appdoon.Application.Services.Roadmaps.Command.CreateRoadmapService;
using Appdoon.Application.Services.Roadmaps.Command.DeleteRoadmapService;
using Appdoon.Application.Services.Roadmaps.Command.UpdateRoadmapService;
using Appdoon.Application.Services.Roadmaps.Query.GetAllRoadmapsService;
using Appdoon.Application.Services.Roadmaps.Query.GetIndividualRoadmapService;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Appdoon.WebApi.Controllers
{
    [Route("api/[controller]")]
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
        
        private readonly IWebHostEnvironment _env;


        public RoadmapController(IGetAllRoadmapsService getAllRoadmapsService,
                                  IGetIndividualRoadmapService getIndividualRoadmapService,
                                  ICreateRoadmapService createRoadmapService,
                                  IDeleteRoadmapService deleteRoadmapService,
                                  IUpdateRoadmapService updateRoadmapService,
                                  IWebHostEnvironment env)
        {
            _getAllRoadmapsService = getAllRoadmapsService;
            _getIndividualRoadmapService = getIndividualRoadmapService;
            _createRoadmapService = createRoadmapService;
            _deleteRoadmapService = deleteRoadmapService;
            _updateRoadmapService = updateRoadmapService;
            _env = env;
        }

        // GET: api/<RoadmapController>
        [HttpGet]
        public JsonResult Get()
        {
            var result = _getAllRoadmapsService.Execute();
            return new JsonResult(result);
        }

        // GET api/<RoadmapController>/5
        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
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
        public JsonResult Put(int id, [FromBody] string value)
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
    }
}
