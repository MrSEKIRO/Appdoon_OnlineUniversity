using Appdoon.Application.Services.Users.EditUserService;
using Appdoon.Application.Services.Users.GetBookMarkRoadMapService;
using Appdoon.Application.Services.Users.GetRoadMapService;
using Appdoon.Application.Services.Users.GetUserService;
using Microsoft.AspNetCore.Mvc;

namespace Appdoon.WebApi.Controllers
{
	[Route("api/[controller]/[action]")]
	[ApiController]
	public class ProfileController : Controller
	{
		private readonly IGetUserService _getUserService;
		private readonly IEditUserService _editUserService;
		private readonly IGetRegisteredRoadMapService _getRegisteredRoadMapService;
		private readonly IGetBookMarkRoadMapService _getBookMarkRoadMapService;

		public ProfileController(IGetUserService getUserService,
			IEditUserService editUserService,
			IGetRegisteredRoadMapService getRegisteredRoadMapService,
			IGetBookMarkRoadMapService getBookMarkRoadMapService)
		{
			_getUserService = getUserService;
			_editUserService = editUserService;
			_getRegisteredRoadMapService = getRegisteredRoadMapService;
			_getBookMarkRoadMapService = getBookMarkRoadMapService;
		}
		[HttpPost]
		public JsonResult Info(int Id)
		{
			var result = _getUserService.Execute(Id);

			return new JsonResult(result);
		}

		[HttpPost]
		public JsonResult Edit(EditUserDto UserDto)
		{
			var result = _editUserService.Execute(UserDto);

			return new JsonResult(result);
		}
		[HttpPost]
		public JsonResult RegisteredRoadMaps(int Id)
		{
			var result = _getRegisteredRoadMapService.Execute(Id);

			return new JsonResult(result);
		}
		[HttpPost]
		public JsonResult BookMarkedRoadMaps(int Id)
		{
			var result = _getBookMarkRoadMapService.Execute(Id);

			return new JsonResult(result);
		}
	}
}
