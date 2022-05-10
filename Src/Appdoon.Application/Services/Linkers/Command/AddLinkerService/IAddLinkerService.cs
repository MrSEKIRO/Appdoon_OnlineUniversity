using Appdoon.Application.Interfaces;
using Appdoon.Application.Validatores.LinkerValidatore;
using Appdoon.Common.Dtos;
using Appdoon.Domain.Entities.RoadMaps;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Linkers.Command.AddLinkerService
{
	public interface IAddLinkerService
	{
		ResultDto Execute(AddLinkerDto addLinkerDto);
	}
	public class AddLinkerService : IAddLinkerService
	{
		private readonly IDatabaseContext _context;
		public AddLinkerService(IDatabaseContext context)
		{
			_context = context;
		}

		public ResultDto Execute(AddLinkerDto addLinkerDto)
		{
			try
			{
				//validate
				LinkerValidatore validationRules = new LinkerValidatore();
				var result=validationRules.Validate(addLinkerDto);

				if(result.IsValid == false)
				{
					return new ResultDto()
					{
						IsSuccess = false,
						Message = result.Errors[0].ErrorMessage,
					};
				}

				var linker = new Linker()
				{
					Title = addLinkerDto.Title,
					Link = addLinkerDto.Link,
				};

				var childStep = _context.ChildSteps.Find(addLinkerDto.ChildStepId);

				// trash???
				childStep.Linkers ??= new List<Linker>();

				childStep.Linkers.Add(linker);

				_context.SaveChanges();

				return new ResultDto()
				{
					IsSuccess = true,
					Message = $"اضافه شد! {childStep.Title}لینک با موفقیت به محتوای",
				};
			}
			catch(Exception e)
			{
				return new ResultDto()
				{
					IsSuccess = false,
					Message = "خطا در اضافه کردن لینک به زیرقدم!",
				};
			}
		}
	}

	public class AddLinkerDto
	{
		public string Title { get; set; } = string.Empty;
		public string Link { get; set; } = string.Empty;
		public int ChildStepId { get; set; }
	}
}
