using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace CarPool.Models
{
    public partial class myTestDBContext : DbContext
    {
        public virtual DbSet<TblCities> TblCities { get; set; }
        public virtual DbSet<TblRide> TblRide { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
// #warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
               optionsBuilder.UseMySQL("server=localhost;database=test_asp.net;user=root;password=root;port=8889;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TblCities>(entity =>
            {
                entity.HasKey(e => e.CityId);

                entity.ToTable("tblCities");

                entity.Property(e => e.CityId).HasColumnName("CityID");

                entity.Property(e => e.CityName)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TblRide>(entity =>
            {
                entity.HasKey(e => e.RideId);

                entity.ToTable("tblRide");

                entity.Property(e => e.RideId).HasColumnName("RideID");

                entity.Property(e => e.Start)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.End)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.UserName)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);

                
            });
        }
    }
}
