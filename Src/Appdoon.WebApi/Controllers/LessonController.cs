using Appdoon.Application.Services.Lessons.Command.CreateLessonService;
using Appdoon.Application.Services.Lessons.Command.DeleteLessonService;
using Appdoon.Application.Services.Lessons.Command.UpdateLessonService;
using Appdoon.Application.Services.Lessons.Query.GetAllLessonsService;
using Appdoon.Application.Services.Lessons.Query.GetLessonService;
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
    public class LessonController : ControllerBase
    {
        private readonly IGetAllLessonsService _getAllLessonsService;
        private readonly IGetLessonService _getLessonService;
        private readonly ICreateLessonService _createLessonService;
        private readonly IDeleteLessonService _deleteLessonService;
        private readonly IUpdateLessonService _updateLessonService;
        private readonly IWebHostEnvironment _env;

        public LessonController(IGetAllLessonsService getAllLessonsService,
                                IGetLessonService getLessonService,
                                ICreateLessonService createLessonService,
                                IDeleteLessonService deleteLessonService,
                                IUpdateLessonService updateLessonService,
                                IWebHostEnvironment env)
        {
            _getAllLessonsService = getAllLessonsService;
            _getLessonService = getLessonService;
            _createLessonService = createLessonService;
            _deleteLessonService = deleteLessonService;
            _updateLessonService = updateLessonService;
            _env = env;
        }

        // GET: api/<LessonController>
        [HttpGet]
        public JsonResult Get()
        {
            var result = _getAllLessonsService.Execute();
            return new JsonResult(result);
        }

        // GET api/<LessonController>/5
        [HttpGet("{id}")]
        public JsonResult Get(LessonIdDto id)
        {
            var result = _getLessonService.Execute(id);
            return new JsonResult(result);
        }

        // POST api/<LessonController>
        [HttpPost]
        public JsonResult Create()
        {
            var result = _createLessonService.Execute(Request, _env.ContentRootPath);
            return new JsonResult(result);
        }

        // PUT api/<LessonController>/5
        [HttpPut("{id}")]
        public JsonResult Put(int id, [FromBody] UpdateLessonDto lesson)
        {
            var result = _updateLessonService.Execute(id, lesson);
            return new JsonResult(result);
        }

        // DELETE api/<LessonController>/5
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            var result = _deleteLessonService.Execute(id);
            return new JsonResult(result);
        }
    }
}
