//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace BusRes.Models
{
    using System;
    
    public partial class BUS_SEARCH_Result
    {
        public string BusNo { get; set; }
        public string BusName { get; set; }
        public string Source_ { get; set; }
        public string Destination { get; set; }
        public int NoOfSeats { get; set; }
        public string StartTime { get; set; }
        public string EndTime { get; set; }
        public string ViaStop { get; set; }
        public float PerSeatCost { get; set; }
        public Nullable<int> Availableseats { get; set; }
    }
}
