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
    using System.Collections.Generic;
    using System.Runtime.Serialization;
    
    [DataContract]
    public partial class tblFeedback
    {
        [DataMember]
        public int Id_ { get; set; }
        [DataMember]
        public Nullable<int> Question1 { get; set; }
        [DataMember]
        public Nullable<int> Question2 { get; set; }
        [DataMember]
        public Nullable<int> Question3 { get; set; }
        [DataMember]
        public Nullable<int> Question4 { get; set; }
        [DataMember]
        public Nullable<int> Question5 { get; set; }
    }
}
