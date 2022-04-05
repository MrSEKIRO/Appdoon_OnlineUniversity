using Appdoon.Application.Interfaces;
using Appdoon.Domain.Entities.Users;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Appdoon.Presistence.Contexts
{
    public class DatabaseContext : DbContext,IDatabaseContext
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
