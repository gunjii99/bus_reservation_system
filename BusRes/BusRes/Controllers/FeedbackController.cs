using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BusRes.Models;

namespace BusRes.Controllers
{
    public class FeedbackController : ApiController
    {
        dbNewBusEntities8 db = new dbNewBusEntities8();
        [Route("GetFeedback")]

        public HttpResponseMessage Get()
        {
            var feedback = db.tblFeedbacks.ToList();
            if (feedback.Count > 0)
            {
                return Request.CreateResponse(HttpStatusCode.OK, feedback);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, "No data found.");
            }
        }

        [Route("api/Feedback/CreateFbk")]
        [HttpPost]

        public object CreateFbk(Feedback feedbk)
        {
            try
            {

                tblBooking tblBooking = new tblBooking();
                tblFeedback fb = new tblFeedback();
                fb.Question1 = feedbk.Question1;
                fb.Question2 = feedbk.Question2;
                fb.Question3 = feedbk.Question3;
                fb.Question4 = feedbk.Question4;
                fb.Question5 = feedbk.Question5;
                db.tblFeedbacks.Add(fb);
                db.SaveChanges();
                return new Response
                {
                    Status = "Success",
                    Message = "SuccessFully Saved."
                };


            }
            catch (Exception)
            {

                throw;

            }

        }

    }
}