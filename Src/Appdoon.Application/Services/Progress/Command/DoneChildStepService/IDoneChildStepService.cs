using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using Appdoon.Domain.Entities.RoadMaps;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Progress.Command.DoneChildStepService
{
	public interface IDoneChildStepService
	{
		ResultDto Execute(int ChildStepId, int UserId);
	}

	public class DoneChildStepService : IDoneChildStepService
	{
		private readonly IDatabaseContext _context;

		public DoneChildStepService(IDatabaseContext context)
		{
			_context = context;
		}
		public ResultDto Execute(int ChildStepId, int UserId)
		{
			try
			{
				var childstepProgress = _context.ChildStepProgresses
					.Where(csp => csp.ChildStepId == ChildStepId && csp.UserId == UserId)
					.FirstOrDefault();

				if(childstepProgress == null)
				{
					return new ResultDto()
					{
						IsSuccess = false,
						Message = "کاربر یا محتوا یافت نشد!",
					};
				}

				// Done childstep
				childstepProgress.IsDone = true;
				_context.SaveChanges();

				// check is step is completed or not
				var stepId = _context.ChildSteps
					//.Include(cs => cs.StepId)
					.Select(cs => new ChildStep()
					{
						Id = cs.Id,
						StepId = cs.StepId
					})
					.Where(cs => cs.Id == ChildStepId)
					.FirstOrDefault()
					.StepId;

				var childStepIdsOfStep = _context.ChildSteps
					//.Include(cs => cs.StepId)
					.Select(cs => new ChildStep()
					{
						Id = cs.Id,
						StepId = cs.StepId
					})
					.Where(cs => cs.StepId == stepId)
					.Select(cs => cs.Id)
					.ToList();



				bool isStepCompleted = _context.ChildStepProgresses
					.Include(csp => csp.ChildStep)
					.Include(csp => csp.User)
					.Where(csp => childStepIdsOfStep.Contains(csp.ChildStepId) && csp.UserId == UserId)
					.Select(csp => new { IsDone = csp.IsDone, IsRequired = csp.IsRequired })
					.All(csp => csp.IsDone == true || csp.IsRequired == false);

				if(isStepCompleted == true)
				{
					var stepProgress = _context.StepProgresses
						.Where(sp => sp.StepId == stepId && sp.UserId==UserId)
						.FirstOrDefault();

					if(stepProgress == null)
					{
						return new ResultDto()
						{
							IsSuccess = false,
							Message = "قدم یا کاربر برای تکمیل قدم یافت نشد!",
						};
					}

					stepProgress.IsDone = true;
					_context.SaveChanges();
				}

				return new ResultDto()
				{
					IsSuccess = true,
					Message = "محتوا با موفقیت تکمیل شد!",
				};
			}
			catch(Exception e)
			{
				return new ResultDto()
				{
					IsSuccess = false,
					Message = "خطا در انجام تکمیل نمودن محتوا برای کاربر!",
				};
			}
		}
	}
}
