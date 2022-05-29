using Appdoon.Application.Services.Categories.Command.CreateCategoryService;
using Appdoon.Application.Services.Categories.Command.DeleteCategoryService;
using Appdoon.Application.Services.Categories.Command.UpdateCategoryService;
using Appdoon.Application.Services.Categories.Query.GetAllCategoriesService;
using Appdoon.Application.Services.Categories.Query.GetIndividualCategoryService;
using Appdoon.Application.Services.Categories.Query.SearchCategoriesService;
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
    public class CategoryController : ControllerBase
    {
        //Get All
        private readonly IGetAllCategoriesService _getCategoriesService;
        //Get Individual
        private readonly IGetIndividualCategoryService _getIndividualCategoryService;
        //Create
        private readonly ICreateCategoryService _createCategoryService;
        //Delete
        private readonly IDeleteCategoryService _deleteCategoryService;
        //Update
        private readonly IUpdateCategoryService _updateCategoryService;
        //Search
        private readonly ISearchCategoriesService _searchCategoriesService;


        public CategoryController(IGetAllCategoriesService getCategoriesService,
                                  IGetIndividualCategoryService getIndividualCategoryService,
                                  ICreateCategoryService createCategoryService,
                                  IDeleteCategoryService deleteCategoryService,
                                  IUpdateCategoryService updateCategoryService,
                                  ISearchCategoriesService searchCategoriesService)
        {
            _getCategoriesService = getCategoriesService;
            _getIndividualCategoryService = getIndividualCategoryService;
            _createCategoryService = createCategoryService;
            _deleteCategoryService = deleteCategoryService;
            _updateCategoryService = updateCategoryService;
            _searchCategoriesService = searchCategoriesService;
        }

        // GET: api/<CategoryController>
        [HttpGet]
        public JsonResult Get(int page_number, int page_size)
        {
            var result = _getCategoriesService.Execute(page_number,page_size);
            return new JsonResult(result);
        }

        // GET api/<CategoryController>/5
        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            var result = _getIndividualCategoryService.Execute(id);
            return new JsonResult(result);
        }

        // POST api/<CategoryController>
        [HttpPost]
        public JsonResult Post(CreateCategoryDto Category)
        {
            var result = _createCategoryService.Execute(Category);
            return new JsonResult(result);
        }

        // PUT api/<CategoryController>/5
        [HttpPut("{id}")]
        public JsonResult Put(int id,[FromBody] UpdateCategoryDto Category)
        {
            var result = _updateCategoryService.Execute(id,Category);
            return new JsonResult(result);
        }

        // DELETE api/<CategoryController>/5
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            var result = _deleteCategoryService.Execute(id);
            return new JsonResult(result); 
        }

        [HttpGet]
        public JsonResult Search(string searched_text, int page_number, int page_size)
        {
            var result = _searchCategoriesService.Execute(searched_text, page_number, page_size);
            return new JsonResult(result);
        }
    }
}
