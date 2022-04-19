using Appdoon.Domain.Entities.RoadMaps;
using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


using Microsoft.AspNetCore.Http;
using System.IO;
using Microsoft.AspNetCore.Hosting;


namespace Appdoon.Application.Services.RoadMaps.Command.ICreateRoadMapIndividualService
{
	public class RequestCreateRoadmapDto
	{
		public string Title { get; set; }
        public string Description { get; set; }
		public string PhotoFileName { get; set; }
		public List<int> CategoriesId { get; set; }
    }


    public interface ICreateRoadMapIndividualService
    {
        ResultDto Execute(HttpRequest httpRequest, string currentpath);
    }
	public class CreateRoadMapIndividualService : ICreateRoadMapIndividualService
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
				if (_context.RoadMaps.Where(s => s.Title == Title.ToString()).Count() != 0)
                {
					return new ResultDto()
					{
						IsSuccess = false,
						Message = "این نام برای رودمپ تکراری است",
					};
				}

				var imageSrc = "";

				if (httpRequest.Form.Files.Count() != 0)
				{
					var postedFile = httpRequest.Form.Files[0];
					string filename = postedFile.FileName;
					var physicalPath = currentpath + "/Photos/" + $"({Title})" + filename;
					using (var stream = new FileStream(physicalPath, FileMode.Create))
					{
						postedFile.CopyTo(stream);
					}
					imageSrc = $"({Title})" + PhotoFileName.ToString();
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
						categories.Add(category);
					}
				}


				

				var roadmap = new RoadMap()
				{
					Title = Title.ToString(),
					Description = Description.ToString(),
					ImageSrc = imageSrc,
					Categories = categories,
				};

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
	}

	public class UploadDto
	{
		public bool Status { get; set; }
		public string FileNameAddress { get; set; }
	}
}
