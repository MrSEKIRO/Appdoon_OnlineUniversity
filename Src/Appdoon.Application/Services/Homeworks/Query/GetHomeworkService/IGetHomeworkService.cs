using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using Appdoon.Domain.Entities.Homeworks;
using Appdoon.Domain.Entities.Progress;
using Appdoon.Domain.Entities.RoadMaps;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Homeworks.Query.GetHomeworkService
{
    public class HomeworkDto
    {
        public int Id { get; set; }
        public List<Question> Questions { get; set; } = new();
        public int MinScore { get; set; }
        public List<HomeworkProgress> HomeworkProgresses { get; set; } = new();
        public ChildStep? ChildStep { get; set; }
        public int ChildStepId { get; set; }
    }
    public interface IGetHomeworkService
    {
        ResultDto<HomeworkDto> Execute(int id);
    }
    public class GetHomeworkService : IGetHomeworkService
    {
        private readonly IDatabaseContext _context;
        public GetHomeworkService(IDatabaseContext context)
        {
            _context = context;
        }
        public ResultDto<HomeworkDto> Execute(int id)
        {
            try
            {
                var homework = _context.Homeworks
                    .Where(x => x.Id == id)
                    .Include(h => h.Questions)
                    .Include(h => h.HomeworkProgresses)
                    .Select(h => new HomeworkDto()
                    {
                        Id = h.Id,
                        Questions = h.Questions,
                        MinScore = h.MinScore,
                        HomeworkProgresses = h.HomeworkProgresses,
                        ChildStep = h.ChildStep,
                        ChildStepId = h.ChildStepId
                    }).FirstOrDefault();

                if (homework == null)
                {
                    return new ResultDto<HomeworkDto>()
                    {
                        IsSuccess = false,
                        Message = "تمرین یافت نشد!",
                        Data = new HomeworkDto(),
                    };
                }

                return new ResultDto<HomeworkDto>()
                {
                    IsSuccess = true,
                    Message = "تمرین ارسال شد",
                    Data = homework,
                };
            }
            catch (Exception e)
            {
                return new ResultDto<HomeworkDto>()
                {
                    IsSuccess = false,
                    Message = "ارسال ناموفق!",
                    Data = new HomeworkDto(),
                };
            }
        }
    }
}
