using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using OU_API.Models.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OU_API.Models.Contexts
{



    public class DatabaseContext : DbContext
    {
        private readonly IConfiguration _configuration;
        public DatabaseContext(IConfiguration configuration)
        {
            this._configuration = configuration;
        }

        public DbSet<User> Users { get; set; }



        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            string SqlDataSource = _configuration.GetConnectionString("OUAppCon");
            optionsBuilder.UseSqlServer(SqlDataSource);
        }
    }
}
