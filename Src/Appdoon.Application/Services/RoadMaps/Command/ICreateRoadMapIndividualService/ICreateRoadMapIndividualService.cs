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
    public interface ICreateRoadMapIndividualService
    {
        ResultDto Execute(string Title, string Description, IFormFile Image, List<int> CategoriesId);
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
		public ResultDto Execute(string Title, string Description, IFormFile Image, List<int> CategoriesId)
		{
			try
			{
				List<Category> categories = new List<Category>();
                foreach (var item in CategoriesId)
                {
					Category category = _context.Categories.Find(item);
					categories.Add(category);
                }

				var imageSrc = ExtractImages(Image, _environment);

				var roadmap = new RoadMap()
				{
					Title = Title,
					Description = Description,
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

		private static string ExtractImages(IFormFile image, IHostingEnvironment environment)
		{
			var uploadResult = UploadFile(image, environment);
			return uploadResult.FileNameAddress;
		}

		private static UploadDto UploadFile(IFormFile file, IHostingEnvironment environment)
		{
			if(file != null)
			{
				string folder = $@"images\ProductImages\";
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
	}

	public class UploadDto
	{
		public bool Status { get; set; }
		public string FileNameAddress { get; set; }
	}
}
