import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-view-bus',
  templateUrl: './view-bus.component.html',
  styleUrls: ['./view-bus.component.css']
})
export class ViewBusComponent implements OnInit {
  busdetails:any=[];

  constructor(private router:Router,private busservice:LoginService) { }

  fetchBus(){
    this.busdetails = this.busservice.getBusDetails().subscribe((data)=>
    {this.busdetails=data;console.log(data)})
    console.log(this.busdetails);
  }



  ngOnInit(): void {
    this.fetchBus();
  }

}