using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CarPool.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CarPool.Controllers
{
    public class RideController : Controller
    {
        RideDataAccessLayer objride = new RideDataAccessLayer();

        [HttpGet]
        [Route("api/Ride/Index")]
        public IEnumerable<TblRide> Index()
        {
            return objride.GetAllRides();
        }

        [HttpPost]
        [Route("api/Ride/Create")]
        public int Create(TblRide ride)
        {
            return objride.AddRide(ride);
        }

        [HttpGet]
        [Route("api/Ride/Details/{id}")]
        public TblRide Details(int id)
        {
            return objride.GetRideData(id);
        }

        [HttpPut]
        [Route("api/Ride/Edit")]
        public int Edit(TblRide ride)
        {
            return objride.UpdateRide(ride);
        }

        [HttpDelete]
        [Route("api/Ride/Delete/{id}")]
        public int Delete(int id)
        {
            return objride.DeleteRide(id);
        }

        [HttpGet]
        [Route("api/Ride/GetCityList")]
        public IEnumerable<TblCities> Details()
        {
            return objride.GetCities();
        }
    }
}
