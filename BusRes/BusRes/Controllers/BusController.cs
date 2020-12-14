using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BusRes.Models;

namespace BusRes.Controllers
{
    [RoutePrefix("Api/Bus")]
    public class BusController : ApiController
    {
        dbNewBusEntities8 db = new dbNewBusEntities8();

        //GET
        [Route("Getbuses")]
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


        [Route("searchbuses")]
        [HttpPost]
        public object search(string Source, string Destination)
        {
            var a = db.BUS_SEARCH(Source, Destination);
            return a;
        }

        [Route("searchdata")]
        [HttpPost]
        public object searchdata(string CustUsername)
        {
            var a = db.fetchpaymentid(CustUsername);
            return a;
        }

        [Route("unauthsearchdata")]
        [HttpPost]
        public object unauthsearchdata(string Source_B, string Destination_B, string StartDate, string StartTime, float TravelFare,string EmailId )
        {
            var a = db.fetchpaymentbyemail1(Source_B,Destination_B,StartDate,StartTime,TravelFare,EmailId);
            return a;
        }

        //get available seats
        [Route("GetAvailableSeats")]
        [HttpPut]
        public void updateseats(string BusNo,int length )
        {
            dbNewBusEntities8 db = new dbNewBusEntities8();
            
            tblBu f = (from p in db.tblBus 
                 where p.BusNo == BusNo
                 select p).SingleOrDefault();
            f.Availableseats = f.Availableseats - length;
            db.SaveChanges();
        }




        [Route("createbookings")]
        [HttpPost]
         public IHttpActionResult  createbookings( string Source_B, string Destination_B, string StartDate, string StartTime, float TravelFare, string CustUsername, string BusNo, string SelectedSeats,string TicketType,string paymentBy)
         {
             dbNewBusEntities8 db = new dbNewBusEntities8();
             tblBooking customer = new tblBooking();
             customer.Source_B = Source_B;
             customer.Destination_B = Destination_B;
             customer.StartDate = StartDate;
             customer.StartTime = StartTime;
             customer.TravelFare = TravelFare;
             customer.CustUsername = CustUsername;
             customer.BusNo = BusNo;
             customer.SelectedSeats = SelectedSeats;
             customer.paymentBy = paymentBy;
            // customer.WalletDetails = wallet;
             customer.TicketType = TicketType;
            customer.CancellationBit = "0";
            db.tblBookings.Add(customer);
             db.SaveChanges();
             return Ok();
         }
        [Route("uncreatebookings")]
        [HttpPost]
        public IHttpActionResult uncreatebookings(string Source_B, string Destination_B, string StartDate, string StartTime, float TravelFare, string EmailId, string BusNo, string SelectedSeats, string TicketType, string paymentBy)
        {
            dbNewBusEntities8 db = new dbNewBusEntities8();
            tblBooking customer = new tblBooking();
            customer.Source_B = Source_B;
            customer.Destination_B = Destination_B;
            customer.StartDate = StartDate;
            customer.StartTime = StartTime;
            customer.TravelFare = TravelFare;
            customer.EmailId = EmailId;
            customer.BusNo = BusNo;
            customer.SelectedSeats = SelectedSeats;
            customer.paymentBy = paymentBy;
            // customer.WalletDetails = wallet;
            customer.TicketType = TicketType;
            customer.CancellationBit = "0";
            db.tblBookings.Add(customer);
            db.SaveChanges();
            return Ok();
        }
        /*public void Post([FromUri] string Source_B, string Destination_B, string StartDate, string StartTime, string TicketType, string contact, string address, DateTime dob, string gender, float wallet)
        {
            tblCustomer customer = new tblCustomer();
            customer.username = username;
            customer.Fname = Fname;
            customer.Lname = Lname;
            customer.Password_ = password;
            customer.EmailId = email;
            customer.ContactNo = contact;
            customer.Address = address;
            customer.DOB = dob;
            customer.Gender = gender;
            customer.WalletDetails = wallet;
            db.tblCustomers.Add(customer);
            db.SaveChanges();
        }*/



    }


}

