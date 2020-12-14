using BusRes.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;


namespace BusRes.Controllers
{
    public class AdminController : ApiController
    {
        dbNewBusEntities8 db = new dbNewBusEntities8();

        [Route("api/Customer/AdminLogin")]
        [HttpPost]
        public HttpResponseMessage PostLogin(string username, string Password_)
        {
            bool Exists = false;
            tblAdmin admin= new tblAdmin();
            List<tblAdmin> admins = db.tblAdmins.ToList();
            foreach (var item in admins)
            {
                if (item.username == username)
                {
                    Exists = true;
                    admin = item;
                    break;
                }
            }

            if (Exists)
            {
                if (admin.Password_ == Password_)
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
    }
}
