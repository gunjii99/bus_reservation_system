import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service'; 

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
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
  currentwallet:any;
  length:number;
  
  constructor(private formBuilder:FormBuilder,private router:Router,private loginservice:LoginService) { }

  ngOnInit(): void {
    this.PaymentForm = this.formBuilder.group({
      fullname: ['', [Validators.required]],
      email:['',Validators.required],
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
    this.username=sessionStorage.getItem('username');
    this.TicketType=sessionStorage.getItem('TicketType');
    this.length=this.NoOfSeats.length;
  }

  CreateBookings(Source,Destination,dateoftravel,StartTime,count,username,BusNo,seat,TicketType,Paymentby)    
{    
this.loginservice.CreateBookings(Source,Destination,dateoftravel,StartTime,count,username,BusNo,seat,TicketType,Paymentby).subscribe(    
  ()=>    
  {    
    this.data = true;    
    this.massage = 'Data saved Successfully';    
    this.PaymentForm.reset();    
  });    
}   

get fullname()
{
  return this.PaymentForm.get("fullname");
}

get Paymentby()
{
  return this.PaymentForm.get("Paymentby");
}




Payment(){
      sessionStorage.setItem('fullname',this.fullname.value);
      this.CreateBookings(this.Source_,this.Destination,this.dateoftravel,this.StartTime,this.count,this.username,this.BusNo,this.seat,this.TicketType,this.Paymentby.value)
      this.updateseats(this.BusNo,this.length);
      this.router.navigate(['/ticket']);

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







}
