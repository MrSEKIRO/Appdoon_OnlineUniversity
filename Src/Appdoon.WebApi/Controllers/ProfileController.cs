using Appdoon.Application.Services.Users.Command.EditUserService;
using Appdoon.Application.Services.Users.Query.GetBookMarkRoadMapService;
using Appdoon.Application.Services.Users.Query.GetRegisteredRoadMapService;
using Appdoon.Application.Services.Users.Query.GetUserFromCookieService;
using Appdoon.Application.Services.Users.Query.GetUserService;
using Appdoon.Common.UserRoles;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace Appdoon.WebApi.Controllers
{
	[Authorize(policy: "User")]
	[Route("api/[controller]/[action]")]
	[ApiController]
	public class ProfileController : Controller
	{
		private readonly IGetUserService _getUserService;
		private readonly IEditUserService _editUserService;
		private readonly IGetRegisteredRoadMapService _getRegisteredRoadMapService;
		private readonly IGetBookMarkRoadMapService _getBookMarkRoadMapService;
		private readonly IGetUserFromCookieService _getUserFromCookieService;


		public ProfileController(IGetUserService getUserService,
								 IEditUserService editUserService,
								 IGetRegisteredRoadMapService getRegisteredRoadMapService,
								 IGetBookMarkRoadMapService getBookMarkRoadMapService,
								 IGetUserFromCookieService getUserFromCookieService)
		{
			_getUserService = getUserService;
			_editUserService = editUserService;
			_getRegisteredRoadMapService = getRegisteredRoadMapService;
			_getBookMarkRoadMapService = getBookMarkRoadMapService;
			_getUserFromCookieService = getUserFromCookieService;
		}
		[HttpPost]
		public JsonResult Info()
		{
			var IdClaim = HttpContext.User.Identities
				.FirstOrDefault()
				.Claims
				//.Where(c => c.Type == "NameIdentifier")
				.FirstOrDefault();

			//if(IdClaim == null)
			//{
			//	return Unauthorized();
			//}

			int Id = int.Parse(IdClaim.Value);

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
		public JsonResult RegisteredRoadMaps()
		{
			var IdStr = HttpContext.User.Identities
				.FirstOrDefault()
				.Claims
				//.Where(c => c.Type == "NameIdentifier")
				.FirstOrDefault()
				.Value;

			int Id = int.Parse(IdStr);

			var result = _getRegisteredRoadMapService.Execute(Id);

			return new JsonResult(result);
		}
		[HttpPost]
		public JsonResult BookMarkedRoadMaps()
		{
			var IdStr = HttpContext.User.Identities
				.FirstOrDefault()
				.Claims
				//.Where(c => c.Type == "NameIdentifier")
				.FirstOrDefault()
				.Value;

			int Id = int.Parse(IdStr);

			var result = _getBookMarkRoadMapService.Execute(Id);

			return new JsonResult(result);
		}

		[HttpGet]
		public JsonResult InfoFromCookie()
		{
			var result = _getUserFromCookieService.Execute(HttpContext);
			return new JsonResult(result);
		}
	}
}
