import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import {AddBus} from '../model/add-bus'


@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent implements OnInit {
  addBusForm: FormGroup;
  Error: string;
  data= false;
  login = false;
  user
  massage: string;
  updatebusForm: any;
  

  constructor(private router:Router,private loginService: LoginService) {
    this.addBusForm = new FormGroup({
      BusNo:new FormControl(null,[Validators.required]),
      NoOfSeats:new FormControl(null, [Validators.required]),
      Source_:new FormControl(null,[Validators.required]),
      Destination:new FormControl(null,[Validators.required]),
      ViaStop:new FormControl(null,[Validators.required]),
      StartTime:new FormControl(null,[Validators.required]),
      EndTime:new FormControl(null,[Validators.required]),
      PerSeatCost:new FormControl(null,[Validators.required]),
      BusName:new FormControl(null,[Validators.required])
    })
   }

   get BusNo(){
     return this.addBusForm.get("BusNo")
   }

   get NoOfSeats(){
     return this.addBusForm.get("NoOfSeats")
   }

   get Source_(){
     return this.addBusForm.get("Source_")
   }

   get Destination(){
    return this.addBusForm.get("Destination")
   }

   get ViaStop(){
    return this.addBusForm.get("ViaStop")
   }

   get StartTime(){
    return this.addBusForm.get("StartTime")
   }

   get EndTime(){
    return this.addBusForm.get("EndTime")
   }

   get PerSeatCost(){
    return this.addBusForm.get("PerSeatCost")
   }

   

   get BusName(){
    return this.addBusForm.get("BusName")
   }

   onFormSubmit()    
  {    
    if(this.addBusForm.valid)
     {
       this.Error="Bus Added sucessfully"; 
     }
     else
     {
       this.Error="Please Enter all the Details"
     }
     console.log(this.addBusForm.value);
    const bus = this.addBusForm.value;    
    this.AddBus(bus); 
  }    
  AddBus(addbus:AddBus) {    
    this.loginService.createbus(addbus).subscribe(    
      ()=>    
      {    
        this.data = true;    
        //this.massage = 'Data saved Successfully'; 
        // this.router.navigateByUrl('/class-details');
        window.alert("Bus Added Successfully");
        this.addBusForm.reset();    
      });    
    } 

    createpwd(addbus:AddBus) 
    
    
  {    
  this.loginService.updatebus(addbus).subscribe(    
    ()=>    
    {    
      this.data = true;    
      this.massage = 'Data saved Successfully';    
      this.updatebusForm.reset();    
    });    
  }

    ngOnInit():void{
    }

    
  

 
}