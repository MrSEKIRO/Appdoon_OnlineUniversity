using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Linkers.Command.DeleteLinkerService
{
	public interface IDeleteLinkerService
	{
		ResultDto Execute(int id);
	}

	public class DeleteLinkerService : IDeleteLinkerService
	{
		private readonly IDatabaseContext _context;

		public DeleteLinkerService(IDatabaseContext context)
		{
			_context = context;
		}
		public ResultDto Execute(int id)
		{
			try
			{
				var lin = _context.Linkers.Where(s => s.Id == id).FirstOrDefault();
				if (lin == null)
				{
					return new ResultDto()
					{
						IsSuccess = false,
						Message = "این آیدی وجود ندارد!",
					};
				}
				lin.IsRemoved = true;
				lin.RemoveTime = DateTime.Now;
				_context.SaveChanges();

				return new ResultDto()
				{
					IsSuccess = true,
					Message = "لینک حدف شد.",
				};
			}
			catch (Exception e)
			{
				return new ResultDto()
				{
					IsSuccess = false,
					Message = "خطا در حذف لینک!",
				};
			}
		}
	}
}
