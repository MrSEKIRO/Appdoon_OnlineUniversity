using Appdoon.Application.Services.Lessons.Query.GetAllLessonsService;
using Appdoon.Application.Services.Lessons.Query.GetLessonService;
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

        public LessonController(IGetAllLessonsService getAllLessonsService,
                                IGetLessonService getLessonService)
        {
            _getAllLessonsService = getAllLessonsService;
            _getLessonService = getLessonService;
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
        public JsonResult Get(int id)
        {
            var result = _getLessonService.Execute(id);

        }

        // POST api/<LessonController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<LessonController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<LessonController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {

        }
    }
}
