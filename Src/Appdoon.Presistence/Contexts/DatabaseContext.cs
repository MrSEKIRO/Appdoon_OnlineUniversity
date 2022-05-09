using Appdoon.Application.Interfaces;
using Appdoon.Common.UserRoles;
using Appdoon.Domain.Entities.RoadMaps;
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
	public class DatabaseContext : DbContext, IDatabaseContext
	{
		public DatabaseContext(DbContextOptions options) : base(options)
		{
		}

		public DbSet<User> Users { get; set; }
		public DbSet<Role> Roles { get; set; }
		public DbSet<RoadMap> RoadMaps { get; set; }
		public DbSet<Category> Categories { get; set; }
		public DbSet<Step> Steps { get; set; }
		public DbSet<ChildStep> ChildSteps { get; set; }
		public DbSet<Linker> Linkers { get; set; }
		public DbSet<Lesson> Lessons { get; set; }

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<Role>().HasData(new Role() { Name = UserRole.Admin.ToString(), Id = (int)UserRole.Admin });
			modelBuilder.Entity<Role>().HasData(new Role() { Name = UserRole.Teacher.ToString(), Id = (int)UserRole.Teacher });
			modelBuilder.Entity<Role>().HasData(new Role() { Name = UserRole.User.ToString(), Id = (int)UserRole.User });

			modelBuilder.Entity<User>().HasQueryFilter(u => u.IsRemoved == false);
			modelBuilder.Entity<Role>().HasQueryFilter(u => u.IsRemoved == false);
			modelBuilder.Entity<RoadMap>().HasQueryFilter(u => u.IsRemoved == false);
			modelBuilder.Entity<Category>().HasQueryFilter(u => u.IsRemoved == false);
			modelBuilder.Entity<Step>().HasQueryFilter(u => u.IsRemoved == false);
			modelBuilder.Entity<ChildStep>().HasQueryFilter(u => u.IsRemoved == false);

			// Registerd RoadMaps for User
			modelBuilder.Entity<User>()
				.HasMany<RoadMap>(u => u.SignedRoadMaps)
				.WithMany(r => r.Students);

			// Bookmarked RoadMap for User
			modelBuilder.Entity<User>()
				.HasMany<RoadMap>(u => u.BookmarkedRoadMaps)
				.WithMany(r => r.UsersBookmarked);

			// Creatore of RoadMap (Not Null)
			modelBuilder.Entity<RoadMap>()
				.HasOne(r => r.Creatore)
				.WithMany(u => u.CreatedRoadMaps)
				.HasForeignKey(r => r.CreatoreId)
				.OnDelete(DeleteBehavior.NoAction);
		}
	}
}
