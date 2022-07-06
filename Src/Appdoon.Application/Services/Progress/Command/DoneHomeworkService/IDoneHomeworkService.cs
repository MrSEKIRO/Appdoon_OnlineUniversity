using Appdoon.Application.Interfaces;
using Appdoon.Application.Services.Progress.Command.DoneChildStep;
using Appdoon.Common.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Progress.Command.DoneHomeworkService
{
    public interface IDoneHomeworkService
    {
        ResultDto Execute(int homeworkId, int userId);
    }
    public class DoneHomeworkService : IDoneHomeworkService
    {
        private readonly IDatabaseContext _context;
        public DoneHomeworkService(IDatabaseContext context)
        {
            _context = context;
        }
        public ResultDto Execute(int homeworkId, int userId)
        {
            try
            {
                var homeworkProgress = _context.HomeworkProgresses
                                        .Where(h => h.HomeworkId == homeworkId && h.UserId == userId)
                                        .FirstOrDefault();

                var homework = _context.Homeworks
                              .Where(h => h.Id == homeworkId)
                              .FirstOrDefault();

                var childstep = _context.ChildSteps
                               .Where(h => h.HomeworkId == homeworkId)
                               .FirstOrDefault();

           
                DoneChildStepService doneChildStepService = new DoneChildStepService(_context);

                if(homework.MinScore <= homeworkProgress.Score)
                {
                    homeworkProgress.IsDone = true;
                    _context.SaveChanges();

                    doneChildStepService.Execute(childstep.Id, userId);
                }
                else
                {
                    return new ResultDto()
                    {
                        IsSuccess = false,
                        Message = "خطا در انجام تکمیل نمودن محتوا برای کاربر!",
                    };
                }
                return new ResultDto()
                {
                    IsSuccess = true,
                    Message = "محتوا با موفقیت تکمیل شد!",
                };
            }
            catch (Exception e)
            {
                return new ResultDto()
                {
                    IsSuccess = false,
                    Message = "خطا در انجام تکمیل نمودن محتوا برای کاربر!",
                };
            }
        }
    }
}
