using Appdoon.Application.Interfaces;
using Appdoon.Application.Validatores.CategoryValidatore;
using Appdoon.Common.Dtos;
using Appdoon.Domain.Entities.RoadMaps;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Categories.Command.CreateCategoryService
{
    public class CreateCategoryDto
    {
        public string Name { get; set; }
        public string Link { get; set; }

    }
    public interface ICreateCategoryService
    {
        ResultDto Execute(CreateCategoryDto requestCreateCategoryDto);
    }
    public class CreateCategoryService : ICreateCategoryService
    {
        private readonly IDatabaseContext _context;

        public CreateCategoryService(IDatabaseContext context)
        {
            _context = context;
        }
        public ResultDto Execute(CreateCategoryDto requestCreateCategoryDto)
        {
            try
            {
                // check validation rules
                CategoryValidatore validationRules = new CategoryValidatore();
                var result = validationRules.Validate(requestCreateCategoryDto);
                if (result.IsValid == false)
                {
                    return new ResultDto()
                    {
                        IsSuccess = false,
                        Message = result.Errors[0].ErrorMessage,
                    };
                }

                //Uniqueness(Name)
                if (_context.Categories.Any(s => s.Name == requestCreateCategoryDto.Name.ToString()) == true)
                {
                    return new ResultDto()
                    {
                        IsSuccess = false,
                        Message = "این نام برای دسته تکراری است",
                    };
                }

                var category = new Category()
                {
                    Name = requestCreateCategoryDto.Name,
                    Link = requestCreateCategoryDto.Link,
                };
                _context.Categories.Add(category);
                _context.SaveChanges();

                return new ResultDto()
                {
                    IsSuccess = true,
                    Message = "دسته اضافه شد",
                };
            }
            catch (Exception e)
            {
                return new ResultDto()
                {
                    IsSuccess = false,
                    Message = "خطا در ساخت دسته!",
                };
            }
        }
    }
}
