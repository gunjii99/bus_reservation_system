using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BusRes.Models;
namespace BusRes.Controllers
{
    public class BussesController : ApiController
    {
        dbNewBusEntities8 db = new dbNewBusEntities8();


        //GET   
        [Route("Getbus")]
        public HttpResponseMessage Get()
        {
            var bus = db.tblBus.ToList();
            if (bus.Count > 0)
            {
                return Request.CreateResponse(HttpStatusCode.OK, bus);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, "No data found.");
            }
        }




        [Route("Api/Bus/searchdatabymonth")]
        [HttpPost]
        public object search(Search sd)
        {
            var a = db.Betweentwodates(sd.startdate, sd.enddate);
            return a;
        }

        [Route("Api/frequenttravel")]
        [HttpGet]
        public HttpResponseMessage Frequenttravel()
        {
            var a = db.FrequentlyTravel().ToList();
            return Request.CreateResponse(HttpStatusCode.OK, a);
        }

        [Route("Api/showFreq")]
        [HttpGet]
        public object showFreq()
        {
            var a = db.tblBookings.ToList();
            return a;
        }

        [Route("Api/Bus/search")]
        [HttpGet]
        public object showdata()
        {
            var a = db.tblBookings.ToList();
            return a;
        }

        [Route("Api/Buses/createbus")]
        [HttpPost]

        public object createbus(AddBus b)
        {
            try
            {
                dbNewBusEntities8 db = new dbNewBusEntities8();
                tblBu bu = new tblBu();
                if (bu.BusNo == null)
                {
                    bu.BusNo = b.BusNo;
                    bu.NoOfSeats = b.NoOfSeats;
                    bu.Source_ = b.Source_;
                    bu.Destination = b.Destination;
                    bu.ViaStop = b.ViaStop;
                    bu.StartTime = b.StartTime;
                    bu.EndTime = b.EndTime;
                    bu.PerSeatCost = b.PerSeatCost;
                    bu.BusType = b.BusType;
                    bu.BusName = b.BusName;
                    db.tblBus.Add(bu);
                    db.SaveChanges();
                    return new Response
                    { Status = "Success", Message = "SuccessFully Saved." };
                }
            }
            catch (Exception)
            {
                throw;
            }
            return new Response
            {
                Status = "Error",
                Message = "Invalid Data."
            };
        }


        [HttpPut]
        [Route("Api/UpdateBus")]

        public IHttpActionResult UpdateBus(tblBu buss)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            try
            {
                tblBu updBus = new tblBu();
                updBus = db.tblBus.Find("MH 04 JK 1700");
                if (updBus != null)
                {
                    updBus.NoOfSeats = buss.NoOfSeats;
                    updBus.Source_ = buss.Source_;
                    updBus.Destination = buss.Destination;
                    updBus.ViaStop = buss.ViaStop;
                    updBus.StartTime = buss.StartTime;
                    updBus.EndTime = buss.EndTime;
                    updBus.PerSeatCost = buss.PerSeatCost;
                    updBus.BusType = buss.BusType;
                    updBus.BusName = buss.BusName;
                    db.SaveChanges();
                }
                else
                {
                    return NotFound();
                }
            }
            catch (Exception)
            {
                throw;
            }
            return Ok(buss);
        }
    }
}
    

