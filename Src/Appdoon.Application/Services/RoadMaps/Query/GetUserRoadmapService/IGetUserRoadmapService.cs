using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using Appdoon.Domain.Entities.RoadMaps;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.RoadMaps.Query.GetUserRoadmapService
{
	public interface IGetUserRoadmapService
	{
		ResultDto<IndividualRoadMapDto> Execute(int RoadmapId, int UserId);
	}
	public class GetUserRoadmapService : IGetUserRoadmapService
	{
		private readonly IDatabaseContext _context;
		public GetUserRoadmapService(IDatabaseContext context)
		{
			_context = context;
		}
		public ResultDto<IndividualRoadMapDto> Execute(int RoadmapId, int UserId)
		{
			try
			{
				// check user exisit ??

				// check User have this roadmap
				bool hasRoadmap = _context.Users
					.Include(u => u.SignedRoadMaps)
					.Where(u => u.Id == UserId)
					.FirstOrDefault()
					.SignedRoadMaps
					.Any(srp => srp.Id == RoadmapId);

				/*
				if(hasRoadmap == false)
				{
					return new ResultDto<IndividualRoadMapDto>()
					{
						IsSuccess = false,
						Message = "شما در این رودمپ ثبت نام نکرده اید",
						Data = new(),
					};
				}
				*/


				var roadmap = _context.RoadMaps
					.Where(x => x.Id == RoadmapId)
					.Include(r => r.Categories)

					//1 .Include("Steps.ChildSteps.Linkers")
					//2 .Include(r => r.Steps)
					//	.ThenInclude(s => s.ChildSteps)
					//		.ThenInclude(cs => cs.Linkers)

					//1 .Include("Steps.ChildSteps.ChildStepProgresses");
					//2 .Include(r => r.Steps)
					//	.ThenInclude(s => s.ChildSteps)
					//		.ThenInclude(cs => cs.ChildStepProgresses)

					.Select(r => new IndividualRoadMapDto()
					{
						Id = r.Id,
						Description = r.Description,
						ImageSrc = r.ImageSrc,
						Stars = r.Stars,
						Title = r.Title,
						Categories = r.Categories,
						Steps = r.Steps.Select(s => new Step()
						{
							Id = s.Id,
							Title = s.Title,
							Description = s.Description,
							Link = s.Link,
							IsRemoved = s.IsRemoved,
							InsertTime = s.InsertTime,
							UpdateTime = s.UpdateTime,
							RemoveTime = s.RemoveTime,
							RoadMapId = s.RoadMapId,
							ChildSteps = s.ChildSteps.Select(c => new ChildStep()
							{
								Id = c.Id,
								Title = c.Title,
								Description = c.Description,
								InsertTime = c.InsertTime,
								UpdateTime = c.UpdateTime,
								RemoveTime = c.RemoveTime,
								IsRemoved = c.IsRemoved,
								Link = c.Link,
								Linkers = c.Linkers,
								ChildStepProgresses = c.ChildStepProgresses.Where(csp => csp.UserId == UserId).ToList(),
							}).ToList(),
							StepProgresses = s.StepProgresses.Where(sp => sp.UserId == UserId).ToList(),
						}).ToList(),
					}).FirstOrDefault();

				if(roadmap == null)
				{
					return new ResultDto<IndividualRoadMapDto>()
					{
						IsSuccess = false,
						Message = "رود مپ یافت نشد!",
						Data = new IndividualRoadMapDto(),
					};
				}

				return new ResultDto<IndividualRoadMapDto>()
				{
					IsSuccess = true,
					Message = "رودمپ ها ارسال شد",
					Data = roadmap,
				};
			}
			catch(Exception e)
			{
				return new ResultDto<IndividualRoadMapDto>()
				{
					IsSuccess = false,
					Message = "ارسال ناموفق!",
					Data = new IndividualRoadMapDto(),
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
