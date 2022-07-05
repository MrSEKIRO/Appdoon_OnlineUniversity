using Appdoon.Application.Interfaces;
using Appdoon.Common.Dtos;
using Appdoon.Domain.Entities.Homeworks;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Application.Services.Homeworks.Command.UpdateHomeworkService
{
    public interface IUpdateHomeworkService
    {
        ResultDto Execute(int id, HttpRequest httpRequest);
    }
    public class UpdateHomeworkService : IUpdateHomeworkService
    {
        private readonly IDatabaseContext _context;

        public UpdateHomeworkService(IDatabaseContext context)
        {
            _context = context;
        }
        public ResultDto Execute(int id, HttpRequest httpRequest)
        {
            try
            {
                var homework = _context.Homeworks
                    .Where(h => h.Id == id)
                    .Include(h => h.Questions)
                    .FirstOrDefault();

                List<string> data = new List<string>();

                foreach (var key in httpRequest.Form.Keys)
                {
                    var val = httpRequest.Form[key];
                    data.Add(val);
                }
                int minScore = int.Parse(data[0]);
                int childStepId = int.Parse(data[1]);
                var childStep = _context.ChildSteps
                    .Where(x => x.Id == childStepId)
                    .FirstOrDefault();

                List<string> Questionsdesc = new List<string>();

                for (int i = 2; i < data.Count; i+=6)
                {
                    for (int j = i; j < data.Count && j < (i + 6); j++)
                    {
                        Questionsdesc.Add(data[j]);
                    }
                }

                List<Question> questions = new List<Question>();
                if (Questionsdesc.Count != 0)
                {
                    for (int i = 0; i < Questionsdesc.Count; i+=6)
                    {
                        Question question = new Question();
                        question.QuestionDescription = Questionsdesc[i];
                        question.Option1 = Questionsdesc[i + 1];
                        question.Option2 = Questionsdesc[i + 2];
                        question.Option3 = Questionsdesc[i + 3];
                        question.Option4 = Questionsdesc[i + 4];
                        question.Answer = int.Parse(Questionsdesc[i + 5]);

                        questions.Add(question);
                    }
                }

                homework.UpdateTime = DateTime.Now;
                homework.Questions = questions;
                homework.MinScore = minScore;
                homework.ChildStepId = childStepId;
                homework.ChildStep = childStep;

                _context.SaveChanges();

                return new ResultDto()
                {
                    IsSuccess = true,
                    Message = "تمرین بروزرسانی شد.",
                };
            }
            catch (Exception e)
            {
                return new ResultDto()
                {
                    IsSuccess = false,
                    Message = "خطا در بروزرسانی تمرین!",
                };
            }
        }
    }
}
