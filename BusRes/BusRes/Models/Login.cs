using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BusRes.Models
{
        public class Login
        {
            public string UserName { set; get; }
            public string Password { set; get; }
        }
        public class Registration : tblCustomer { }
        public class AddBus : tblBu { }
    }