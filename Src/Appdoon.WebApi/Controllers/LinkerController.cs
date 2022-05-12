using Appdoon.Application.Services.Linkers.Command.CreateLinkerService;
using Appdoon.Application.Services.Linkers.Command.DeleteLinkerService;
using Appdoon.Application.Services.Linkers.Command.UpdateLinkerService;
using Appdoon.Application.Services.Linkers.Query.GetAllLinkersService;
using Appdoon.Application.Services.Linkers.Query.GetIndividualLinkerService;
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
    public class LinkerController : ControllerBase
    {

        //Get All
        private readonly IGetAllLinkersService _getAllLinkersService;
        //Get Individual
        private readonly IGetIndividualLinkerService _getIndividualLinkerService;
        //Create
        private readonly ICreateLinkerService _createLinkerService;
        //Delete
        private readonly IDeleteLinkerService _deleteLinkerService;
        //Update
        private readonly IUpdateLinkerService _updateLinkerService;


        public LinkerController(IGetAllLinkersService getAllLinkersService,
                                  IGetIndividualLinkerService getIndividualLinkerService,
                                  ICreateLinkerService createLinkerService,
                                  IDeleteLinkerService deleteLinkerService,
                                  IUpdateLinkerService updateLinkerService)
        {
            _getAllLinkersService = getAllLinkersService;
            _getIndividualLinkerService = getIndividualLinkerService;
            _createLinkerService = createLinkerService;
            _deleteLinkerService = deleteLinkerService;
            _updateLinkerService = updateLinkerService;
        }
        // GET: api/<LinkerController>
        [HttpGet]
        public JsonResult Get()
        {
            var result = _getAllLinkersService.Execute();
            return new JsonResult(result);
        }

        // GET api/<LinkerController>/5
        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            var result = _getIndividualLinkerService.Execute(id);
            return new JsonResult(result);
        }

        // POST api/<LinkerController>
        [HttpPost]
        public JsonResult Post(CreateLinkerLinkerDto createLinkerDto)
        {
            var result = _createLinkerService.Execute(createLinkerDto);
            return new JsonResult(result);
        }

        // PUT api/<LinkerController>/5
        [HttpPut("{id}")]
        public JsonResult Put(int id, UpdateLinkerLinkerDto updateLinkerDto)
        {
            var result = _updateLinkerService.Execute(id, updateLinkerDto);
            return new JsonResult(result);
        }

        // DELETE api/<LinkerController>/5
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            var result = _deleteLinkerService.Execute(id);
            return new JsonResult(result);
        }
    }
}
