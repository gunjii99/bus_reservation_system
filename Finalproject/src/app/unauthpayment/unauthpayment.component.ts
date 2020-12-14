import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service'; 

@Component({
  selector: 'app-unauthpayment',
  templateUrl: './unauthpayment.component.html',
  styleUrls: ['./unauthpayment.component.css']
})
export class  UnauthpaymentComponent implements OnInit {
  PaymentForm:FormGroup
  seat:any;
  count:any;
  paymentid:any;
  BusNo:string;
  BusName:string;
  Source_:string;
  Destination:string;
  NoOfSeats:string;
  StartTime:string;
  EndTime:string;
  ViaStop:string;
  PerSeatCost:string;
  total:number;
  dateoftravel:string;
  username:string;
  date = new Date;
  data = false;       
  err: string;
  massage:string; 
  TicketType:string;
  length:number;
  
  constructor(private formBuilder:FormBuilder,private router:Router,private loginservice:LoginService) { }

  ngOnInit(): void {
    this.PaymentForm = this.formBuilder.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      EmailId:['',Validators.required],
      Paymentby:['',Validators.required]
  }, 
  );
    this.seat=sessionStorage.getItem('seats');
    this.count=sessionStorage.getItem('count');
    this.BusNo = sessionStorage.getItem('BusNo');
    this.BusName=sessionStorage.getItem('BusName');
    this.Source_=sessionStorage.getItem('Source_');
    this.Destination=sessionStorage.getItem('Destination');
    this.NoOfSeats=sessionStorage.getItem('NoOfSeats');
    this.StartTime=sessionStorage.getItem('StartTime');
    this.EndTime=sessionStorage.getItem('EndTime');
    this.ViaStop=sessionStorage.getItem('ViaStop');
    this.PerSeatCost=sessionStorage.getItem('PerSeatCost');
    this.dateoftravel=sessionStorage.getItem('DOT');
    //this.username=sessionStorage.getItem('username');
    this.TicketType=sessionStorage.getItem('TicketType');
    this.length=this.NoOfSeats.length;
  }

  UnauthCreateBookings(Source,Destination,dateoftravel,StartTime,count,EmailId,BusNo,seat,TicketType,Paymentby)    
{    
this.loginservice.UnauthCreateBookings(Source,Destination,dateoftravel,StartTime,count,EmailId,BusNo,seat,TicketType,Paymentby).subscribe(    
  ()=>    
  {    
    this.data = true;    
    this.massage = 'Data saved Successfully';    
    this.PaymentForm.reset();    
  });    
}   

get fname()
{
  return this.PaymentForm.get("fname");
}
get lname()
{
  return this.PaymentForm.get("lname");
}

get EmailId()
{
  return this.PaymentForm.get("EmailId");
}

get Paymentby()
{
  return this.PaymentForm.get("Paymentby");
}
updateseats(BusNo:string,length:number)
{
 // console.log(this.updatewallet.value);
  this.loginservice.updateseats(BusNo,length).subscribe(    
    ()=>    
    {    
      this.data = true;    
      this.massage = 'Data saved Successfully';       
    });    
}

Payment(){
      sessionStorage.setItem('EmailId',this.EmailId.value);
      sessionStorage.setItem('fname',this.fname.value);
      sessionStorage.setItem('lname',this.lname.value);
      this.UnauthCreateBookings(this.Source_,this.Destination,this.dateoftravel,this.StartTime,this.count,this.EmailId.value,this.BusNo,this.seat,this.TicketType,this.Paymentby.value)
      this.updateseats(this.BusNo,this.length);
      this.router.navigate(['/unauthticket']);

}








}
