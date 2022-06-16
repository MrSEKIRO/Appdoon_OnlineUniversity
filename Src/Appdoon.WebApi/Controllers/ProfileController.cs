using Appdoon.Application.Services.Users.Command.EditPasswordService;
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
		private readonly IEditPasswordService _editPasswordService;


		public ProfileController(IGetUserService getUserService,
								 IEditUserService editUserService,
								 IGetRegisteredRoadMapService getRegisteredRoadMapService,
								 IGetBookMarkRoadMapService getBookMarkRoadMapService,
								 IGetUserFromCookieService getUserFromCookieService,
								 IEditPasswordService editPasswordService)
		{
			_getUserService = getUserService;
			_editUserService = editUserService;
			_getRegisteredRoadMapService = getRegisteredRoadMapService;
			_getBookMarkRoadMapService = getBookMarkRoadMapService;
			_getUserFromCookieService = getUserFromCookieService;
			_editPasswordService = editPasswordService;

		}
		[HttpGet]
		public JsonResult Info()
		{
			int Id = GetIdFromCookie();
			var result = _getUserService.Execute(Id);
			return new JsonResult(result);
		}

		[HttpPut]
		public JsonResult Edit(EditUserDto UserDto)
		{
			int Id = GetIdFromCookie();
			var result = _editUserService.Execute(Id,UserDto);
			return new JsonResult(result);
		}

		[HttpPut]
		public JsonResult EditPassword(EditPasswordDto PasswordDto)
		{
			int Id = GetIdFromCookie();
			var result = _editPasswordService.Execute(Id, PasswordDto);
			return new JsonResult(result);
		}

		[HttpPost]
		public JsonResult RegisteredRoadMaps()
		{
			int Id = GetIdFromCookie();

			var result = _getRegisteredRoadMapService.Execute(Id);

			return new JsonResult(result);
		}
		[HttpPost]
		public JsonResult BookMarkedRoadMaps()
        {
            int Id = GetIdFromCookie();

            var result = _getBookMarkRoadMapService.Execute(Id);

            return new JsonResult(result);
        }



		[HttpGet]
		public JsonResult InfoFromCookie()
		{
			var result = _getUserFromCookieService.Execute(HttpContext);
			return new JsonResult(result);
		}

		private int GetIdFromCookie()
		{
			var IdStr = HttpContext.User.Identities
				.FirstOrDefault()
				.Claims
				//.Where(c => c.Type == "NameIdentifier")
				.FirstOrDefault()
				.Value;

			int Id = int.Parse(IdStr);
			return Id;
		}
    }
}
