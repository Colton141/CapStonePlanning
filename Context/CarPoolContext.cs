using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace carPool.Context
{

    public class carPoolContext : DbContext
    {
        public DbSet<Ride> Ride { get; set; }        
        public DbSet<Profile> Profile { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			optionsBuilder.UseMySQL("server=localhost;database=carPool;user=root;password=root;port=8889;");
		}

    }

    public class Ride
    {
        public int Id { get; set; }
        public string Start { get; set; }
        public string End { get; set; }
        public int Date { get; set; }
        public int Time {get; set; }
        public string User {get; set; }
    }

    public class Profile
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public int Join { get; set; }
    }



}