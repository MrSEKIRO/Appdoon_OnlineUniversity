﻿using Appdoon.Application.Services.Users.Command.EditUserService;
using Appdoon.Application.Services.Users.Query.GetBookMarkRoadMapService;
using Appdoon.Application.Services.Users.Query.GetRegisteredRoadMapService;
using Appdoon.Application.Services.Users.Query.GetUserService;
using Appdoon.Common.UserRoles;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace Appdoon.WebApi.Controllers
{
	//[Authorize(policy : "User")]
	[Authorize(policy: "Profile")]
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
		public JsonResult Info()
		{
			var IdStr = HttpContext.User.Identities
				.FirstOrDefault()
				.Claims
				//.Where(c => c.Type == "NameIdentifier")
				.FirstOrDefault()
				.Value;

			int Id = int.Parse(IdStr);

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
	}
}
