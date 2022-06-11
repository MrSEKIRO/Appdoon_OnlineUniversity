using Appdoon.Application.Interfaces;
using Appdoon.Application.Validatores.RoadMapValidatore;
using Appdoon.Common.Dtos;
using Appdoon.Domain.Entities.RoadMaps;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Appdoon.Application.Services.Roadmaps.Command.CreateRoadmapService
{
    public interface ICreateRoadmapService
    {
        ResultDto Execute(HttpRequest httpRequest, string currentpath);
    }
    public class CreateRoadMapIndividualService : ICreateRoadmapService
    {
        private readonly IDatabaseContext _context;
        private readonly IHostingEnvironment _environment;

        public CreateRoadMapIndividualService(IDatabaseContext context, IHostingEnvironment environment)
        {
            _context = context;
            _environment = environment;
        }
        public ResultDto Execute(HttpRequest httpRequest, string currentpath)
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

                //Uniqueness(Title)
                if (_context.RoadMaps.Any(s => s.Title == Title.ToString()) == true)
                {
                    return new ResultDto()
                    {
                        IsSuccess = false,
                        Message = "این نام برای رودمپ تکراری است",
                    };
                }

                var imageSrc = "";
                var TimeNow = DateTime.Now;
                var ImageName = Title + "_" + TimeNow.Ticks.ToString();
                // we should check create those file is 
                // they not exist !!!!!!
                if (httpRequest.Form.Files.Count() != 0)
                {
                    var postedFile = httpRequest.Form.Files[0];
                    string filename = postedFile.FileName;

                    // create Photoes\Roadmap\ folder
                    string folder = @$"Photos\Roadmap\";
                    var uploadFolder = Path.Combine(currentpath, folder);
					if(Directory.Exists(uploadFolder) == false)
					{
                        Directory.CreateDirectory(uploadFolder);
					}

                    var physicalPath = currentpath + "/Photos/Roadmap/" + $"({ImageName})" + filename;

                    using (var stream = new FileStream(physicalPath, FileMode.Create))
                    {
                        postedFile.CopyTo(stream);
                    }
                    imageSrc = $"({ImageName})" + PhotoFileName.ToString();
                }
                else
                {
                    PhotoFileName = "1.jpg";
                    imageSrc = PhotoFileName;
                }

                List<Category> categories = new List<Category>();
                if (CategoriesName.Count != 0)
                {
                    foreach (var item in CategoriesName)
                    {
                        Category category = _context.Categories.Where(s => s.Name == item).FirstOrDefault();
                        if (category != null)
                            categories.Add(category);
                    }
                }

                //////////////////////


                var roadmap = new RoadMap()
                {
                    Title = Title.ToString(),
                    Description = Description.ToString(),
                    ImageSrc = imageSrc,
                    Categories = categories,
                };

                // validate inputes
                RoadMapValidatore validationRules = new RoadMapValidatore();
                var result = validationRules.Validate(roadmap);

                if (result.IsValid == false)
                {
                    return new ResultDto()
                    {
                        IsSuccess = false,
                        Message = result.Errors[0].ErrorMessage,
                    };
                }

                _context.RoadMaps.Add(roadmap);
                _context.SaveChanges();

                return new ResultDto()
                {
                    IsSuccess = true,
                    Message = "رودمپ ساخته شد",
                };
            }
            catch (Exception e)
            {
                return new ResultDto()
                {
                    IsSuccess = false,
                    Message = "خطا در ساخت رودمپ!",
                };
            }
        }
        #region Ajax Get Image
        /*
		private static string ExtractImages(IFormFile image, IHostingEnvironment environment)
		{
			var uploadResult = UploadFile(image, environment);
			return uploadResult.FileNameAddress;
		}

		private static UploadDto UploadFile(IFormFile file, IHostingEnvironment environment)
		{
			if(file != null)
			{
				string folder = $@"images\roadmaps\";
				var uploadsRootFolder = Path.Combine(environment.WebRootPath, folder);
				if(Directory.Exists(uploadsRootFolder) == false)
				{
					Directory.CreateDirectory(uploadsRootFolder);
				}

				if(file == null || file.Length == 0)
				{
					return new UploadDto()
					{
						Status = false,
						FileNameAddress = string.Empty,
					};
				}

				string fileName = DateTime.Now.Ticks.ToString() + file.FileName;
				var filePath = Path.Combine(uploadsRootFolder, fileName);
				using(var fileStream = new FileStream(filePath, FileMode.Create))
				{
					file.CopyTo(fileStream);
				}

				return new UploadDto()
				{
					Status = true,
					FileNameAddress = folder + fileName,
				};
			}
			else
			{
				return new UploadDto()
				{
					Status = false,
					FileNameAddress = string.Empty,
				};
			}
		}
		*/
        #endregion
    }
}
