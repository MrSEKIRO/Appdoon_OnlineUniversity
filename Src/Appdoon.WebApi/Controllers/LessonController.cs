using Appdoon.Application.Services.Lessons.Command.CreateLessonService;
using Appdoon.Application.Services.Lessons.Command.DeleteLessonService;
using Appdoon.Application.Services.Lessons.Command.UpdateLessonService;
using Appdoon.Application.Services.Lessons.Query.GetAllLessonsService;
using Appdoon.Application.Services.Lessons.Query.GetIndividualLessonService;
using Appdoon.Application.Services.Lessons.Query.SearchLessonsService;
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
    public class LessonController : ControllerBase
    {
        //Get All
        private readonly IGetAllLessonsService _getAllLessonsService;
        //Get Individual
        private readonly IGetIndividualLessonService _getLessonService;
        //Create
        private readonly ICreateLessonService _createLessonService;
        //Delete
        private readonly IDeleteLessonService _deleteLessonService;
        //Update
        private readonly IUpdateLessonService _updateLessonService;
        //search 
        private readonly ISearchLessonsService _searchLessonsService;

        private readonly IWebHostEnvironment _env;

        public LessonController(IGetAllLessonsService getAllLessonsService,
                                IGetIndividualLessonService getLessonService,
                                ICreateLessonService createLessonService,
                                IDeleteLessonService deleteLessonService,
                                IUpdateLessonService updateLessonService,
                                ISearchLessonsService searchLessonsService,
                                IWebHostEnvironment env)
        {
            _getAllLessonsService = getAllLessonsService;
            _getLessonService = getLessonService;
            _createLessonService = createLessonService;
            _deleteLessonService = deleteLessonService;
            _updateLessonService = updateLessonService;
            _searchLessonsService = searchLessonsService;
            _env = env;
        }

        // GET: api/<LessonController>
        [HttpGet]
        public JsonResult Get(int PageNumber, int PageSize)
        {
            var result = _getAllLessonsService.Execute(PageNumber, PageSize);
            return new JsonResult(result);
        }

        // GET api/<LessonController>/5
        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            var result = _getLessonService.Execute(id);
            return new JsonResult(result);
        }

        // POST api/<LessonController>
        [HttpPost]
        public JsonResult Post()
        {
            var userId = GetIdFromCookie();

            var result = _createLessonService.Execute(Request, _env.ContentRootPath, userId);
            return new JsonResult(result);
        }

        // PUT api/<LessonController>/5
        [HttpPut("{id}")]
        public JsonResult Put(int id)
        {
            var result = _updateLessonService.Execute(id, Request, _env.ContentRootPath);
            return new JsonResult(result);
        }

        // DELETE api/<LessonController>/5
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            var result = _deleteLessonService.Execute(id);
            return new JsonResult(result);
        }

        // GET api/<LessonController>
        [HttpGet]
        public JsonResult Search(string SearchedText, int PageNumber, int PageSize)
        {
            var result = _searchLessonsService.Execute(SearchedText, PageNumber, PageSize);
            return new JsonResult(result);
        }

        private int GetIdFromCookie()
        {
            try
            {
                if(HttpContext.User.Identities.FirstOrDefault().Claims.FirstOrDefault() == null)
                {
                    return -1;
                }

                var IdStr = HttpContext.User.Identities
                    .FirstOrDefault()
                    .Claims
                    //.Where(c => c.Type == "NameIdentifier")
                    .FirstOrDefault()
                    .Value;

                int Id = int.Parse(IdStr);
                return Id;
            }
            catch(Exception e)
            {
                return -1;
            }

        }
    }
}
