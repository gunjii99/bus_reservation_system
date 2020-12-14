using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BusRes.Models;
using System.Net.Mail;
using System.Threading.Tasks;

namespace BusRes.Controllers
{
    public class PassController : ApiController
    {
        dbNewBusEntities8 db = new dbNewBusEntities8();
        public bool CheckEmail(string email)
        {
            var isValidEmail = db.tblCustomers.Where(w => w.EmailId == email).FirstOrDefault();
            if (isValidEmail != null)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        [Route("send-email")]
        [HttpGet]

        public async Task<int> SendEmail(string to)
        {
            if (CheckEmail(to) == true)
            {
                string from = "bookbus864@gmail.com";
                string subject = "Welcome to BusBook";
                Random generator = new Random();
                int r = generator.Next(1000, 10000);
                string body = "Hello , Your otp is " + r;

                SmtpClient smtp = new SmtpClient();

                MailMessage mm = new MailMessage();
                mm.From = new MailAddress(from);
                mm.To.Add(to);
                mm.Subject = subject;
                mm.Body = body;
                await Task.Run(() => smtp.SendAsync(mm, null));
                return r;
            }
            else
            {
                return 0;
            }
        }

        [Route("Api/pass/UpdatePassword")]
        [HttpPut]
        public dynamic UpdatePassword(string EmailId, string Password_)
        {
            List<tblCustomer> cus = db.tblCustomers.ToList();

            foreach (var item in cus)
            {

                if (item.EmailId == EmailId)
                {

                    item.Password_ = Password_;
                    db.Entry(item).State = System.Data.Entity.EntityState.Modified;
                    db.SaveChanges();
                    return Request.CreateResponse(HttpStatusCode.OK, "Valid");
                }
            }
            return Request.CreateResponse(HttpStatusCode.NotFound, "NotFound");
        }



    }
}