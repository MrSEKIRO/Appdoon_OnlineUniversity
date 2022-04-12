﻿using System;
using Appdoon.Common.Dtos;
using Appdoon.Domain.Entities.RoadMaps;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Appdoon.Application.Interfaces;

namespace Appdoon.Application.Services.RoadMaps.Query.GetRoadMapService
{
    public interface IGetRoadMapService
    {
		ResultDto<List<IndividualRoadMapDto>> Execute();
	}
    public class GetRoadMapService : IGetRoadMapService
    {
        private readonly IDatabaseContext _context;
        public GetRoadMapService(IDatabaseContext context)
        {
            _context = context;
        }
		public ResultDto<List<IndividualRoadMapDto>> Execute()
		{
			try
			{
				var roadmaps = _context.RoadMaps
					.Include(r => r.Categories)
					.Include(r => r.Steps)
					.Select(r => new IndividualRoadMapDto()
					{
						Id = r.Id,
						Description = r.Description,
						ImageSrc = r.ImageSrc,
						Stars = r.Stars,
						Title = r.Title,
						Categories = r.Categories,
						Steps = r.Steps,
					}).ToList();

				return new ResultDto<List<IndividualRoadMapDto>>()
				{
					IsSuccess = true,
					Message = "رودمپ ها ارسال شد",
					Data = roadmaps,
				};
			}
			catch (Exception e)
			{
				return new ResultDto<List<IndividualRoadMapDto>>()
				{
					IsSuccess = false,
					Message = "ارسال ناموفق!",
					Data = new List<IndividualRoadMapDto>(),
				};
			}
		}
	}
	public class IndividualRoadMapDto
	{
		public int Id { get; set; }
		public string Title { get; set; } = string.Empty;
		public string Description { get; set; }
		public string ImageSrc { get; set; } = string.Empty;
		public int Stars { get; set; }
		public List<Category> Categories { get; set; }
		public List<Step> Steps { get; set; }
	}
}