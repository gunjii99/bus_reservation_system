using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BusRes.Models;

namespace BusRes.Controllers
{
    public class CustomerController : ApiController
    {
        dbNewBusEntities8 db = new dbNewBusEntities8();


        [Route("Getcustomer")]
        public HttpResponseMessage Get()
        {
            var cust = db.tblCustomers.ToList();
            if (cust.Count > 0)
            {
                return Request.CreateResponse(HttpStatusCode.OK, cust);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, "No data found.");
            }
        }
        //userprofile get method
        [Route("GetUserbyUsername")]
        public IHttpActionResult GetUserbyUsername(string username)
        {
            //username = "abc";
            var cust = db.tblCustomers.Where(p => p.username == username).Select(p => new { p.username, p.Fname, p.Lname, p.EmailId, p.ContactNo, p.Address, p.DOB, p.Gender });
            return Ok(cust);
        }

        //GET USER WALLET DETAILS
        [Route("GetWalletbyUsername")]
        public object GetWalletbyUsername(string username)
        {
            var cust = db.tblCustomers.Where(p => p.username == username).Select(p => new { p.username, p.WalletDetails });
            return Ok(cust);
        }

        //for change password
        [Route("GetUserPassbyUsername")]
        public IHttpActionResult GetUserPassbyUsername(string username)
        {
            var cust = db.tblCustomers.Where(p => p.username == username).Select(p => new { p.username, p.Password_ });
            return Ok(cust);
        }
        //refund wallet
        [HttpPut]
        [Route("api/Customer/RefundWallet")]
        public IHttpActionResult RefundWallet(string username,float refunddetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                tblCustomer newcustomer = new tblCustomer();
                newcustomer = db.tblCustomers.Find(username);
                if (newcustomer != null)
                {

                    newcustomer.WalletDetails += refunddetails;

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

        //UPDATE PASSWORD
        [HttpPut]
        [Route("api/Customer/ResetPassword")]
        public IHttpActionResult ResetPassword(string username,tblCustomer customer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                tblCustomer newcustomer = new tblCustomer();
                newcustomer = db.tblCustomers.Find(username);
                if (newcustomer != null)
                {
                    newcustomer.Password_ = customer.Password_;

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
            return Ok(customer);
        }

        //UPDATE EMAIL
        [HttpPut]
        [Route("api/Customer/UpdateEmail")]
        public IHttpActionResult UpdateEmail(string username,tblCustomer customer)
        {
            /*if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }*/

            try
            {
                tblCustomer newcustomer = new tblCustomer();
                newcustomer = db.tblCustomers.Find(username);
                if (newcustomer != null)
                {
                    newcustomer.EmailId = customer.EmailId;

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
            return Ok(customer);
        }

        //UPDATE CONTACT
        [HttpPut]
        [Route("api/Customer/UpdateContact")]
        public IHttpActionResult UpdateContact(string username,tblCustomer customer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                tblCustomer newcustomer = new tblCustomer();
                newcustomer = db.tblCustomers.Find(username);
                if (newcustomer != null)
                {
                    newcustomer.ContactNo = customer.ContactNo;

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
            return Ok(customer);
        }

        //UPDATE ADDRESS
        [HttpPut]
        [Route("api/Customer/UpdateAddress")]
        public IHttpActionResult UpdateAddress(string username,tblCustomer customer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                tblCustomer newcustomer = new tblCustomer();
                newcustomer = db.tblCustomers.Find(username);
                if (newcustomer != null)
                {
                    newcustomer.Address = customer.Address;

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
            return Ok(customer);
        }

        //UPDATE WALLET
        [HttpPut]
        [Route("api/Customer/UpdateWallet")]
        public IHttpActionResult UpdateWallet(string username,tblCustomer customer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                tblCustomer newcustomer = new tblCustomer();
                newcustomer = db.tblCustomers.Find(username);
                if (newcustomer != null)
                {

                    newcustomer.WalletDetails += customer.WalletDetails;

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
            return Ok(customer);
        }


        //post method registration
        [Route("Api/Customer/createcontact")]
        [HttpPost]
        public object createcontact(Registration rvm)
        {
            try
            {

                dbNewBusEntities8 db = new dbNewBusEntities8();
                tblCustomer customer = new tblCustomer();
                if (customer.EmailId == null)
                {
                    customer.username = rvm.username;
                    customer.Fname = rvm.Fname;
                    customer.Lname = rvm.Lname;
                    customer.Password_ = rvm.Password_;
                    customer.EmailId = rvm.EmailId;
                    customer.ContactNo = rvm.ContactNo;
                    customer.Address = rvm.Address;
                    customer.DOB = rvm.DOB;
                    customer.Gender = rvm.Gender;
                    // customer.WalletDetails = wallet;
                    db.tblCustomers.Add(customer);
                    db.SaveChanges();
                    return new Response
                    {
                        Status = "Success",
                        Message = "SuccessFully Saved."
                    };
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

        [Route("api/Customer/Login")]
        [HttpPost]
        public HttpResponseMessage PostLogin(string username, string Password_)
        {
            bool Exists = false;
            tblCustomer login = new tblCustomer();
            List<tblCustomer> admins = db.tblCustomers.ToList();
            foreach (var item in admins)
            {
                if (item.username == username)
                {
                    Exists = true;
                    login = item;
                    break;
                }
            }

            if (Exists)
            {
                if (login.Password_ == Password_)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, "Success");
                }
                else return Request.CreateResponse(HttpStatusCode.OK, "Wrong Password");
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.OK, "Invalid User");
            }
        }

        /* public void Post([FromUri] string username, string Fname, string Lname, string password, string email, string contact, string address, DateTime dob,string gender,float wallet)
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
