using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.ChildSteps.Command.DeleteChildStepService
{
	public interface IDeleteChildStepService
	{
		ResultDto Execute(int id);
	}

	public class DeleteChildStepService : IDeleteChildStepService
	{
		private readonly IDatabaseContext _context;

		public DeleteChildStepService(IDatabaseContext context)
		{
			_context = context;
		}
		public ResultDto Execute(int id)
		{
			try
			{

				var childstep = _context.ChildSteps.Where(s => s.Id == id).FirstOrDefault();

				if(childstep == null)
                {
					return new ResultDto()
					{
						IsSuccess = false,
						Message = "این آیدی وجود ندارد!",
					};
				}

				childstep.IsRemoved = true;
				childstep.RemoveTime = DateTime.Now;
				_context.SaveChanges();

				return new ResultDto()
				{
					IsSuccess = true,
					Message = "محتوا حدف شد.",
				};
			}
			catch (Exception e)
			{
				return new ResultDto()
				{
					IsSuccess = false,
					Message = "خطا در حذف محتوا!",
				};
			}
		}
	}
}
