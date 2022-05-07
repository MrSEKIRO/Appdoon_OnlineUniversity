using Appdoon.Common.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Appdoon.Domain.Entities.Users;
using Appdoon.Application.Interfaces;

namespace Appdoon.Application.Services.Users.GetBookMarkRoadMapService
{
    public interface IGetBookMarkRoadMapService
    {
        ResultDto<List<BookMarkRoadMapDto>> Execute(int id);
    }
    public class BookMarkRoadMapDto
    {
        public string Title;
        public string ImageSrc;
    }
    public class GetBookMarkRoadMapService : IGetBookMarkRoadMapService
    {
        private readonly IDatabaseContext _context;
        public GetBookMarkRoadMapService(IDatabaseContext context)
        {
            _context = context;
        }
        public ResultDto<List<BookMarkRoadMapDto>> Execute(int id)
        {
            try
            {
                var roadmaps = _context.Users
                    .Where(r => r.Id == id)
                    .Include(r => r.BookmarkedRoadMaps)
                    .FirstOrDefault()
                    .BookmarkedRoadMaps
                .Select(r => new BookMarkRoadMapDto()
                {
                    Title = r.Title,
                    ImageSrc = r.ImageSrc,
                }).ToList();

                return new ResultDto<List<BookMarkRoadMapDto>>()
                {
                    IsSuccess = true,
                    Message = "رودمپ های مورد علاقه ی یوزر دریافت شد",
                    Data = roadmaps,
                };
            }
            catch (Exception e)
            {
                return new ResultDto<List<BookMarkRoadMapDto>>()
                {
                    IsSuccess = false,
                    Message = "ارسال ناموفق!",
                    Data = new(),
                };
            }
        }
    }
}
