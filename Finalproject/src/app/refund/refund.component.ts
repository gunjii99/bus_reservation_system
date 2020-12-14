import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingsService } from '../bookings.service';
import { cancellationbit, refundamount } from '../model/bookingsModel';
import {WalletService} from '../wallet.service';
import { walletdetails } from '../model/walletModel';

@Component({
  selector: 'app-refund',
  templateUrl: './refund.component.html',
  styleUrls: ['./refund.component.css']
})
export class RefundComponent implements OnInit {

  updatebit: FormGroup;
  refunddetails: any=[];
  paymentid: any;
  bookingid= 100;
  massage:string; 
  data = false;
  submitted: boolean;
  number:any;
  username:any;

  //agree: boolean = false;

  constructor(private bookingsservice : BookingsService, private formBuilder : FormBuilder,private walletservice : WalletService) { }

  ngOnInit(): void {
    this.paymentid=sessionStorage.getItem('PaymentId');
    this.username=sessionStorage.getItem('username');
    this.displaybookings(this.paymentid);

    this.updatebit = this.formBuilder.group({
      CancellationBit:['1',[Validators.required]]
  });


  }

  displaybookings(paymentid)
  {
    this.refunddetails = this.bookingsservice.getrefund(paymentid).subscribe((data) =>
    {this.refunddetails = data; console.log(data)})
    //console.log(this.bookingdetails);
  }


  addrefund()
  {
    return this.refunddetails;
  }

  /*getCancellationBit()
  {
    return this.updatebit.get("CancellationBit")
  }*/

  onSubmit()
  {

    this.submitted = true;
    this.number="1";
    // stop here if form is invalid

    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    alert("Amount Added Successfully");

    console.log(this.updatebit.value);
    //const pwd = this.updatebit.value;
    this.UpdateCancel(this.paymentid);

    const pwd =this.refunddetails;
    this.UpdateRefund(this.username,this.refunddetails);
  }


  UpdateCancel(paymentid: string)
  {
    this.bookingsservice.updatecancellation(paymentid).subscribe(    
      ()=>    
      {    
        this.data = true;    
        this.massage = 'Data saved Successfully';    
      });
  }

  UpdateRefund(username:string,refunddetails:number)
  {
    this.walletservice.updaterefund(username,refunddetails).subscribe(    
      ()=>    
      {    
        this.data = true;    
        this.massage = 'Data saved Successfully';   
      });    
  }

}
