using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BusRes.Models;

namespace BusRes.Controllers
{
    public class BookingController : ApiController
    {
        dbNewBusEntities8 db = new dbNewBusEntities8();

        [Route("Booking/GetBookings")]
        public HttpResponseMessage Get()
        {
            var cust = db.tblBookings.ToList();
            if (cust.Count > 0)
            {
                return Request.CreateResponse(HttpStatusCode.OK, cust);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, "No data found.");
            }
        }

        //Get for user dashboard bookings
        [Route("GetBookingbyUsername")]
        public IHttpActionResult GetBookingbyUsername(string username)
        {
            var bookings = db.tblBookings.Where(p => p.CustUsername == username).Select(p => new { p.bookingID, p.Source_B, p.Destination_B, p.StartDate, p.TravelFare, p.paymentId, p.BusNo, p.SelectedSeats, p.CancellationBit });
            return Ok(bookings);
        }

        //upadting cancellation bit

        [HttpPut]
        [Route("UpdateCancellation")]
       
        public IHttpActionResult UpdateCancellation(string username,string bit)
        {
            /*if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }*/

            try
            {
                tblBooking newbooking = new tblBooking();
                newbooking = db.tblBookings.Find(username);
                if (newbooking != null)
                {
                    newbooking.CancellationBit = bit;

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
            return Ok();
        }

        [Route("Api/RefundAmount")]
        [HttpGet]
        public object RefundAmount(string paymentid) //Refund rf
        {
            var a = db.RefundNew(paymentid);  //rf.BookingID
            return a;
        }

        [HttpPut]
        [Route("Api/UpdateCancellation")]
        ///[ResponseType(typeof(tblBooking))]
        public IHttpActionResult UpdateCancellation(string paymentid)
        {
            /*if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }*/

            try
            {

                tblBooking newbooking = new tblBooking();
                //newbooking = db.tblBookings.Find(paymentid);
                newbooking = db.tblBookings.Where(q => q.paymentId == paymentid).FirstOrDefault();
                if (newbooking != null)
                {
                    newbooking.CancellationBit = "1";

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
            return Ok();
        }

    }
}
