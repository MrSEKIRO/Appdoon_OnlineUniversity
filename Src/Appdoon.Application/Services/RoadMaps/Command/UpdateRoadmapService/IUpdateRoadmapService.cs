using Appdoon.Application.Interfaces;
using Appdoon.Application.Validatores.RoadMapValidatore;
using Appdoon.Common.Dtos;
using Appdoon.Domain.Entities.RoadMaps;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Roadmaps.Command.UpdateRoadmapService
{
    public interface IUpdateRoadmapService
    {
        ResultDto Execute(int id, HttpRequest httpRequest, string currentpath);
    }

    public class UpdateRoadmapService : IUpdateRoadmapService
    {
        private readonly IDatabaseContext _context;

        public UpdateRoadmapService(IDatabaseContext context)
        {
            _context = context;
        }
        public ResultDto Execute(int id, HttpRequest httpRequest, string currentpath)
        {
            try
            {
                List<string> data = new List<string>();

                foreach (var key in httpRequest.Form.Keys)
                {
                    var val = httpRequest.Form[key];
                    data.Add(val);
                }

                var Title = data[0];
                var Description = data[1];
                var PhotoFileName = data[2];

                List<string> CategoriesName = new List<string>();

                for (int i = 3; i < data.Count; i++)
                {
                    CategoriesName.Add(data[i]);
                }

                var imageSrc = "";
                var TimeNow = DateTime.Now;
                if (httpRequest.Form.Files.Count() != 0)
                {
                    var postedFile = httpRequest.Form.Files[0];
                    string filename = postedFile.FileName;
                    var physicalPath = currentpath + "/Photos/Lesson/" + $"({Title}+{TimeNow})" + filename;
                    using (var stream = new FileStream(physicalPath, FileMode.Create))
                    {
                        postedFile.CopyTo(stream);
                    }
                    imageSrc = $"({Title}+{TimeNow})" + PhotoFileName.ToString();
                }
                else
                {
                    PhotoFileName = "1.jpg";
                    imageSrc = PhotoFileName;
                }


                //////////////////////


                var roamap = _context.RoadMaps.Where(r => r.Id == id).FirstOrDefault();

                List<Category> categories = new List<Category>();
                if (CategoriesName.Count != 0)
                {
                    foreach (var item in CategoriesName)
                    {
                        Category category = _context.Categories.Where(s => s.Name == item).FirstOrDefault();
                        categories.Add(category);
                    }
                }

                RoadMapValidatore validationRules = new RoadMapValidatore();
                var result = validationRules.Validate(new RoadMap()
                {
                    Title = Title,
                    ImageSrc = imageSrc,
                    Description = Description,
                });

                List<string> properties = new List<string>()
                {
                    "Title",
                    "ImageSrc",
                    "Description",
                };

                var errors = result.Errors.Where(e => properties.Contains(e.PropertyName) == true)
                    .Select(e => e.ErrorMessage)
                    .ToList();

				if(errors.Count > 0)
				{
                    return new ResultDto()
                    {
                        IsSuccess = false,
                        Message = errors[0],
                    };
				}

                roamap.UpdateTime = TimeNow;
                roamap.ImageSrc = imageSrc;
                roamap.Title = Title;
                roamap.Description = Description;
                roamap.Categories = categories;

                _context.SaveChanges();

                return new ResultDto()
                {
                    IsSuccess = true,
                    Message = "رودمپ بروزرسانی شد.",
                };
            }
            catch (Exception e)
            {
                return new ResultDto()
                {
                    IsSuccess = false,
                    Message = "خطا در بروزرسانی رودمپ!",
                };
            }
        }
    }
}
