using System;
using System.Collections.Generic;

namespace CarPool.Models
{
    public partial class TblRide
    {
        public int RideId { get; set; }
        public string Start { get; set; }
        public string End { get; set; }
        public string UserName { get; set; }
    }
}
