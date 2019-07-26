using System;
using System.Collections.Generic;
using carPool.Context;
using System.Linq;
using Microsoft.EntityFrameworkCore;
// using carPool.Context;

namespace carPool
{
    public static class CarPoolData
    {
        public static void CreateQuiz(List<Profile> quiz)
        {
            using (var db = new CarPoolContext())
            {                   
                db.Database.ExecuteSqlCommand("TRUNCATE TABLE Profile");
                foreach(Profile profilee in quiz) {
                    db.Profile.Add(profile);
                }
                db.SaveChanges();
            }
        }

        public static List<Profile> GetQuiz()
        {
            using (var db = new CarPoolContext())
            {
                return db.Profile.ToList();
            }
        }
    }
}