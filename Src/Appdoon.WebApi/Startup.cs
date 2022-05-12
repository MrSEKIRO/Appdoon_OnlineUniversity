using Appdoon.Application.Interfaces;
using Appdoon.Application.Services.Categories.Command.ICreateCategoryService;
using Appdoon.Application.Services.RoadMaps.Command.ICreateRoadMapIndividualService;
using Appdoon.Application.Services.RoadMaps.Query.GetRoadMapService;
using Appdoon.Application.Validatores.UserValidatore;
using Appdoon.Presistence.Contexts;
using FluentValidation;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.IO;
using Microsoft.Extensions.FileProviders;
using Appdoon.Application.Services.Categories.Query.GetCategoriesService;
using Appdoon.Application.Services.Steps.Command.CreateStepService;
using Appdoon.Application.Services.Steps.Query.GetAllStepService;
using Appdoon.Application.Services.Lessons.Query.GetLessonService;
using Appdoon.Application.Services.Lessons.Command.CreateLessonService;
using Appdoon.Application.Services.Lessons.Query.GetAllLessonsService;
using Appdoon.Application.Services.ChildSteps.Command.CreateChildStepService;
using Appdoon.Application.Services.Categories.Query.GetIndividualCategoryService;
using Appdoon.Application.Services.Categories.Command.DeleteCategoryService;
using Appdoon.Application.Services.Categories.Command.UpdateCategoryService;
using Appdoon.Application.Services.Users.Command.EditUserService;
using Appdoon.Application.Services.Users.Command.LoginUserService;
using Appdoon.Application.Services.Users.Command.RegisterUserService;
using Appdoon.Application.Services.Users.Query.GetBookMarkRoadMapService;
using Appdoon.Application.Services.Users.Query.GetRegisteredRoadMapService;
using Appdoon.Application.Services.Users.Query.GetUserService;

namespace OU_API
{
	public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            //Enable CORS
            services.AddCors(c =>
            {
                c.AddPolicy("AllowOrigin", options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
            });


            //JSON Serializer
            services.AddControllersWithViews().
                AddNewtonsoftJson(options =>
                options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore)
                .AddNewtonsoftJson(options =>
                options.SerializerSettings.ContractResolver = new Newtonsoft.Json.Serialization.DefaultContractResolver());



            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "OU_API", Version = "v1" });
            });

            // Inject Register User service
            services.AddScoped<IRegisterUserService, RegisterUserService>();

            // Inject Login User service
            services.AddScoped<ILoginUserService, LoginUserService>();

            // Dependency Injection for Database Context
            services.AddScoped<IDatabaseContext, DatabaseContext>();

            // Dependency Injection for Get All RoadMap Service
            services.AddScoped<IGetAllRoadMapService, GetAllRoadMapService>();

            //Dependency Injection for Get RoadMap Service
            services.AddScoped<IGetIndivdualRoadMapService, GetIndividualRoadMapService>();

            //Dependency Injection for create RoadMap individual Service
            services.AddScoped<ICreateRoadMapIndividualService, CreateRoadMapIndividualService>();

            //Dependency Injection for create category Service
            

            //Dependency Injection for get category Service
            

            //Dependency Injection for create step Service
            services.AddScoped<ICreateStepService, CreateStepService>();

            //Dependency Injection for create child step Service
            services.AddScoped<ICreateChildStepService, CreateChildStepService>();

            //Dependency Injection for get all steps Service
            services.AddScoped<IGetAllStepService, GetAllStepService>();

            //Dependency Injection for get one lesson Service
            services.AddScoped<IGetLessonService, GetLessonService>();

            //Dependency Injection for create lesson Service
            services.AddScoped<ICreateLessonService, CreateLessonService>();

            //Dependency Injection for get all lesson Service
            services.AddScoped<IGetAllLessonsService, GetAllLessonsService>();

            // 
            services.AddScoped<IGetUserService, GetUserService>();

            //Dependency Injecton Edit user info in profile page
            services.AddScoped<IEditUserService,EditUserService>();

            //
            services.AddScoped<IGetRegisteredRoadMapService, GetRegisteredRoadMapService>();

            //
            services.AddScoped<IGetBookMarkRoadMapService, GetBookMarkRoadMapService>();









            //Dependency Injecton For Category
            services.AddScoped<IGetIndividualCategoryService,GetIndividualCategoryService>();
            services.AddScoped<IGetCategoriesService, GetCategoriesService>();
            services.AddScoped<ICreateCategoryService, CreateCategoryService>();
            services.AddScoped<IDeleteCategoryService,DeleteCategoryService>();
            services.AddScoped<IUpdateCategoryService, UpdateCategoryService>();

















            // Injection for user validatore
            // Be aware of UserValidatore class in Asp.Net
            services.AddScoped<IValidator<RequestRegisterUserDto>, UserValidatore>();

            // Add EF Core
            services.AddEntityFrameworkSqlServer()
                .AddDbContext<DatabaseContext>(option => option.UseSqlServer(Configuration["ConnectionStrings:OUAppCon"]));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseCors(options => options.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "OU_API v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(),
                "Photos")),
                RequestPath = "/Photos"
            });
        }
    }
}
