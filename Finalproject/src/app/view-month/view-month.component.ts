import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-view-month',
  templateUrl: './view-month.component.html',
  styleUrls: ['./view-month.component.css']
})
export class ViewMonthComponent implements OnInit {
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
  searchdata() {  
    //debugger;  
     this.monthservice.searhhdata(this.model).subscribe((res: any) => {  
             
         this.emp=res;
         console.log(this.emp);     
     })  
   }

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
    this.monthservice.showdata().subscribe((res: any) => {  
      this.emp=res;   
      console.log(this.emp);   
  })  
  } 

  onSubmit()
  {
    console.log(this.model);
    
  }

}