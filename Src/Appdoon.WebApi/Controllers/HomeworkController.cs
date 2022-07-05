using Appdoon.Application.Services.Homeworks.Command.CreateHomeworkService;
using Appdoon.Application.Services.Homeworks.Command.DeleteHomeworkService;
using Appdoon.Application.Services.Homeworks.Command.UpdateHomeworkService;
using Appdoon.Application.Services.Homeworks.Query.GetHomeworkService;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Appdoon.WebApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class HomeworkController : ControllerBase
    {
        //Get
        private readonly IGetHomeworkService _getHomeworkService;
        //Create
        private readonly ICreateHomeworkService _createHomeworkService;
        //Update
        private readonly IUpdateHomeworkService _updateHomeworkService;
        //Delete
        private readonly IDeleteHomeworkService _deleteHomeworkService;


        private readonly IWebHostEnvironment _env;

        public HomeworkController(IGetHomeworkService getHomeworkService,
                                  ICreateHomeworkService createHomeworkService,
                                  IUpdateHomeworkService updateHomeworkService,
                                  IDeleteHomeworkService deleteHomeworkService,
                                  IWebHostEnvironment env)
        {
            _getHomeworkService = getHomeworkService;
            _createHomeworkService = createHomeworkService;
            _updateHomeworkService = updateHomeworkService;
            _deleteHomeworkService = deleteHomeworkService;
            _env = env;
        }

        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            var result = _getHomeworkService.Execute(id);

            return new JsonResult(result);
        }

        [HttpPost]
        public JsonResult Post()
        {
            var result = _createHomeworkService.Execute(Request);
            return new JsonResult(result);
        }

        [HttpPut("{id}")]
        public JsonResult Put(int id)
        {
            var result = _updateHomeworkService.Execute(id, Request);
            return new JsonResult(result);
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            var result = _deleteHomeworkService.Execute(id);
            return new JsonResult(result);
        }
    }
}
