using Appdoon.Application.Services.Steps.Command.CreateStepService;
using Appdoon.Application.Services.Steps.Command.DeleteStepService;
using Appdoon.Application.Services.Steps.Command.UpdateStepService;
using Appdoon.Application.Services.Steps.Query.GetAllStepService;
using Appdoon.Application.Services.Steps.Query.GetIndividualStepService;
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
    public class StepController : ControllerBase
    {

        //Get All
        private readonly IGetAllStepsService _getAllStepsService;
        //Get Individual
        private readonly IGetIndividualStepService _getIndividualStepService;
        //Create
        private readonly ICreateStepService _createStepService;
        //Delete
        private readonly IDeleteStepService _deleteStepService;
        //Update
        private readonly IUpdateStepService _updateStepService;


        public StepController(IGetAllStepsService getAllStepsService,
                                  IGetIndividualStepService getIndividualStepService,
                                  ICreateStepService createStepService,
                                  IDeleteStepService deleteStepService,
                                  IUpdateStepService updateStepService)
        {
            _getAllStepsService = getAllStepsService;
            _getIndividualStepService = getIndividualStepService;
            _createStepService = createStepService;
            _deleteStepService = deleteStepService;
            _updateStepService = updateStepService;
        }
        // GET: api/<StepController>
        [HttpGet]
        public JsonResult Get()
        {
            var result = _getAllStepsService.Execute();
            return new JsonResult(result);
        }

        // GET api/<StepController>/5
        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            var result = _getIndividualStepService.Execute(id);
            return new JsonResult(result);
        }

        // POST api/<StepController>
        [HttpPost]
        public JsonResult Post(CreateStepDto createStepDto)
        {
            var result = _createStepService.Execute(createStepDto);
            return new JsonResult(result);
        }

        // PUT api/<StepController>/5
        [HttpPut("{id}")]
        public JsonResult Put(int id, UpdateStepDto updateStepDto)
        {
            var result = _updateStepService.Execute(id, updateStepDto);
            return new JsonResult(result);
        }

        // DELETE api/<StepController>/5
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            var result = _deleteStepService.Execute(id);
            return new JsonResult(result);
        }
    }
}
