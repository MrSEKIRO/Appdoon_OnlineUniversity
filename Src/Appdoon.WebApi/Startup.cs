using Appdoon.Application.Interfaces;
using Appdoon.Application.Services.Categories.Command.ICreateCategoryService;
using Appdoon.Application.Services.RoadMaps.Command.ICreateRoadMapIndividualService;
using Appdoon.Application.Services.RoadMaps.Query.GetRoadMapService;
using Appdoon.Application.Services.Users.LoginUserService;
using Appdoon.Application.Services.Users.RegisterUserService;
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
            services.AddScoped<ICreateCategoryService, CreateCategoryService>();

            //Dependency Injection for create category Service
            services.AddScoped<IGetCategoriesService, GetCategoriesService>();


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
