using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CarPool.Models
{
    public class RideDataAccessLayer
    {
        myTestDBContext db = new myTestDBContext();

        public IEnumerable<TblRide> GetAllRides()
        {
            try
            {
                return db.TblRide.ToList();
            }
            catch
            {
                throw;
            }
        }

        //To Add new ride record   
        public int AddRide(TblRide ride)
        {
            try
            {
                db.TblRide.Add(ride);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Update the records of a particluar ride  
        public int UpdateRide(TblRide ride)
        {
            try
            {
                db.Entry(ride).State = EntityState.Modified;
                db.SaveChanges();

                return 1;
            }
            catch
            {
                throw;
            }
        }

        //Get the details of a particular ride  
        public TblRide GetRideData(int id)
        {
            try
            {
                TblRide ride = db.TblRide.Find(id);
                return ride;
            }
            catch
            {
                throw;
            }
        }

        //To Delete the record of a particular ride  
        public int DeleteRide(int id)
        {
            try
            {
                TblRide emp = db.TblRide.Find(id);
                db.TblRide.Remove(emp);
                db.SaveChanges();
                return 1;
            }
            catch
            {
                throw;
            }
        }

        //To Get the list of Cities  
        public List<TblCities> GetCities()
        {
            List<TblCities> lstCity = new List<TblCities>();
            lstCity = (from CityList in db.TblCities select CityList).ToList();

            return lstCity;
        }

    }
}
