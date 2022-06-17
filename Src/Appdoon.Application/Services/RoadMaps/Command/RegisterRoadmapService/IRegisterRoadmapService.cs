using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using Appdoon.Domain.Entities.Progress;
using Appdoon.Domain.Entities.RoadMaps;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.RoadMaps.Command.RegisterRoadmapService
{
	public interface IRegisterRoadmapService
	{
		ResultDto Execute(int RoadmapId, int UserId);
	}

	public class RegisterRoadmapService : IRegisterRoadmapService
	{
		private readonly IDatabaseContext _context;

		public RegisterRoadmapService(IDatabaseContext context)
		{
			_context = context;
		}
		public ResultDto Execute(int RoadmapId, int UserId)
		{
			try
			{
				// check user existance ??
				var user = _context.Users.Find(UserId);

				if(user == null)
				{
					return new ResultDto()
					{
						IsSuccess = false,
						Message = "کاربر یافت نشد!",
					};
				}

				var roadmap = _context.RoadMaps
					//.Include(r => r.Steps)
					//	.ThenInclude(s=>s.ChildSteps)
					.Select(r=>new RoadMap()
					{
						Id = r.Id,
							//Title = r.Title,
							//Categories = r.Categories,
							//Description = r.Description,
							//ImageSrc = r.ImageSrc,
							//InsertTime = r.InsertTime,
							//UpdateTime = r.UpdateTime,
							//RemoveTime = r.RemoveTime,
							//IsRemoved = r.IsRemoved,
							//Stars = r.Stars,
							Steps = r.Steps.Select(s => new Step()
							{
								Id = s.Id,
								//Title = s.Title,
								//Description = s.Description,
								//Link = s.Link,
								//InsertTime = s.InsertTime,
								//UpdateTime = s.UpdateTime,
								//RemoveTime = s.RemoveTime,
								//IsRemoved = s.IsRemoved,
								IsRequired = s.IsRequired,
								ChildSteps = s.ChildSteps.Select(cs => new ChildStep()
								{
									Id = cs.Id,
									//Title = cs.Title,
									//Description = cs.Description,
									//Link = cs.Link,
									//InsertTime = cs.InsertTime,
									//UpdateTime = cs.UpdateTime,
									//RemoveTime = cs.RemoveTime,
									//IsRemoved = cs.IsRemoved,
									IsRequired = cs.IsRequired,
								}).ToList(),
							}).ToList(),
						})
					.Where(r => r.Id == RoadmapId)
					.FirstOrDefault();

				if(roadmap == null)
				{
					return new ResultDto()
					{
						IsSuccess = false,
						Message = "رودمپ یافت نشد!",
					};
				}

				foreach(var step in roadmap.Steps)
				{
					var stepProgress = new StepProgress()
					{
						IsRequired = step.IsRequired,
					};
					
					user.StepProgresses.Add(stepProgress);
					stepProgress.Step = step;
					_context.SaveChanges();
					foreach(var childStep in step.ChildSteps)
					{
						var childStepProgress = new ChildStepProgress()
						{
							IsRequired = childStep.IsRequired,
						};

						user.ChildStepProgresses.Add(childStepProgress);
						childStepProgress.ChildStep = childStep;
						_context.SaveChanges();

					}
				}

				user.SignedRoadMaps ??= new List<RoadMap>();

				user.SignedRoadMaps.Add(roadmap);
				_context.SaveChanges();

				return new ResultDto()
				{
					IsSuccess = true,
					Message = "ثبت نام موفق!",
				};
			}
			catch(Exception e)
			{
				return new ResultDto()
				{
					IsSuccess = false,
					Message = "خطا در ثبت نام رودمپ!",
				};
			}
		}
	}
}
