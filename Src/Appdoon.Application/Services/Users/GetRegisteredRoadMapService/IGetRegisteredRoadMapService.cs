using Appdoon.Common.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Appdoon.Domain.Entities.Users;
using Appdoon.Application.Interfaces;

namespace Appdoon.Application.Services.Users.GetRoadMapService
{
    public interface IGetRegisteredRoadMapService
    {
        ResultDto<List<RegisteredRoadMapDto>> Execute(int id);
    }
    public class RegisteredRoadMapDto
    {
        public string Title;
        public string ImageSrc;
    }
    public class GetRegisteredRoadMapService : IGetRegisteredRoadMapService
    {
        private readonly IDatabaseContext _context;
        public GetRegisteredRoadMapService(IDatabaseContext context)
        {
            _context = context;
        }
        public ResultDto<List<RegisteredRoadMapDto>> Execute(int id)
        {
            try
            {
                var roadmaps = _context.Users
                    .Where(r => r.Id == id)
                    .Include(r => r.SignedRoadMaps)
                    .FirstOrDefault()
                    .SignedRoadMaps
                .Select(r => new RegisteredRoadMapDto()
                {
                    Title = r.Title,
                    ImageSrc = r.ImageSrc,
                }).ToList();

                return new ResultDto<List<RegisteredRoadMapDto>>()
                {
                    IsSuccess = true,
                    Message = "رودمپ های ثبت نام شده ی یوزر دریافت شد",
                    Data = roadmaps,
                };
            }
            catch (Exception e)
            {
                return new ResultDto<List<RegisteredRoadMapDto>>()
                {
                    IsSuccess = false,
                    Message = "ارسال ناموفق!",
                    Data = new(),
                };
            }
        }
    }
}
