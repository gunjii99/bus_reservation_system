import { Component, OnInit } from '@angular/core';
import {BookingsService} from '../bookings.service';
import { DatePipe } from '@angular/common';
import { cancellationbit } from '../model/bookingsModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
})
export class BookingsComponent implements OnInit {

  bookingdetails: any=[];
  date: any=[];
  username:any;
  massage:string; 
  data = false;
  submitted: boolean;
  number:string;

  //updatecancel: FormGroup;

  constructor(private bookingsservice : BookingsService, private datePipe: DatePipe,private router:Router) { }

  

  ngOnInit(): void {
    this.username=sessionStorage.getItem('username');
    this.displaybookings(this.username); 
  }

  displaybookings(username)
  {
    this.bookingdetails = this.bookingsservice.getbooking(this.username).subscribe((data) =>
    {this.bookingdetails = data; console.log(data)})
    //console.log(this.bookingdetails);
  }

  currentdate()
  {
    var currdate = new Date();
    return this.datePipe.transform(currdate,"yyyy-MM-dd");
  }

  submit(paymentId)
  {
    sessionStorage.setItem('PaymentId',paymentId);
    this.router.navigate(['/userdashboard/refund']);
  }

  
  
}