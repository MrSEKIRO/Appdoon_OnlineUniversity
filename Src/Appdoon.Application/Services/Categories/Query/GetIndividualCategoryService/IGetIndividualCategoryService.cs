using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Categories.Query.GetIndividualCategoryService
{
	public class IndividualCategoryDto
	{
		public int Id { get; set; }
		public string Name { get; set; } = string.Empty;
		public string Link { get; set; }
	}
	public interface IGetIndividualCategoryService
	{
		ResultDto<IndividualCategoryDto> Execute(int categoryId);
	}
	public class GetIndividualCategoryService : IGetIndividualCategoryService
	{
		private readonly IDatabaseContext _context;
		public GetIndividualCategoryService(IDatabaseContext context)
		{
			_context = context;
		}
		public ResultDto<IndividualCategoryDto> Execute(int categoryId)
		{
			try
			{
				var category = _context.Categories
					.Where(x => x.Id == categoryId)
					.Select(r => new IndividualCategoryDto()
					{
						Id = r.Id,
						Name = r.Name,
						Link = r.Link
					}).FirstOrDefault();

				if (category == null)
				{
					return new ResultDto<IndividualCategoryDto>()
					{
						IsSuccess = false,
						Message = "دسته یافت نشد!",
						Data = new IndividualCategoryDto(),
					};
				}

				return new ResultDto<IndividualCategoryDto>()
				{
					IsSuccess = true,
					Message = "دسته ارسال شد",
					Data = category,
				};
			}
			catch (Exception e)
			{
				return new ResultDto<IndividualCategoryDto>()
				{
					IsSuccess = false,
					Message = "ارسال ناموفق!",
					Data = new IndividualCategoryDto(),
				};
			}
		}
	}

}
