using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BusRes.Models;

namespace BusRes.Controllers
{
    [RoutePrefix("Api/Searchdata")]
    public class SearchdataController : ApiController
    {
        dbNewBusEntities8 DB = new dbNewBusEntities8();
        [Route("showdata")]
        [HttpGet]
        public object showdata()
        {
            var a = DB.tblBus.ToList();
            return a;
        }


        [Route("search")]
        [HttpPost]
        public object search(searchdata sd)
        {
            var a = DB.BUS_SEARCH(sd.Source, sd.Destination);
            return a;
        }

    }
}
