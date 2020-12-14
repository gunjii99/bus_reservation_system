import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-travel-frequent',
  templateUrl: './travel-frequent.component.html',
  styleUrls: ['./travel-frequent.component.css']
})
export class TravelFrequentComponent implements OnInit {

  emp:any;
  model : any={};
  UserForm:FormGroup;
monthdetails:any=[];
  constructor(private router:Router,private monthservice:LoginService) { 
     
  }

  /*fetchmonth(startdate,enddate){
     this.monthservice.getMonthDetails().subscribe((data)=>
    {this.monthdetails=data;console.log(data)})
    console.log(this.monthdetails);
  }*/
  // searchdata() {  
  //   //debugger;  
  //    this.monthservice.searhhdata(this.model).subscribe((res: any) => {  
             
  //        this.emp=res;
  //        console.log(this.emp);     
  //    })  
  //  }

  //  get startdate()
  //  {
  //    return this.UserForm.get("startdate");
  //  }

  //  get enddate()
  //  {
  //    return this.UserForm.get("enddate");
  //  }

  ngOnInit(): void {
    // this.UserForm=new FormGroup({
    //   startdate:new FormControl(null,[Validators.required]),
    //   enddate:new FormControl(null,[Validators.required])
    // })
    this.showdata;
    // this.fetchmonth;

  }

  showdata()  
  {  
    this.monthservice.showtravel().subscribe((res: any) => {  
      this.emp=res;   
      console.log(this.emp);   
  })  
  } 


 

}