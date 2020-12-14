import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seatsselect',
  templateUrl: './seatsselect.component.html',
  styleUrls: ['./seatsselect.component.css']
})
export class SeatsselectComponent implements OnInit {
  myForm: FormGroup;
  sn=[];
  i=0;
  BusNo:string;
  BusName:string;
  Source_:string;
  Destination:string;
  NoOfSeats:string;
  StartTime:string;
  EndTime:string;
  ViaStop:string;
  PerSeatCost:string;
  count:number;
  total:number;
  username:string;

  constructor(private fb: FormBuilder,private router:Router){ }
  ngOnInit() {
    this.myForm = this.fb.group({
      useremail: this.fb.array([])
    });


    this.BusNo = sessionStorage.getItem('BusNo');
    this.BusName=sessionStorage.getItem('BusName');
    this.Source_=sessionStorage.getItem('Source_');
    this.Destination=sessionStorage.getItem('Destination');
    this.NoOfSeats=sessionStorage.getItem('NoOfSeats');
    this.StartTime=sessionStorage.getItem('StartTime');
    this.EndTime=sessionStorage.getItem('EndTime');
    this.ViaStop=sessionStorage.getItem('ViaStop');
    this.PerSeatCost=sessionStorage.getItem('PerSeatCost');
    this.username=sessionStorage.getItem('username');
    
} 
onCheckboxChange(e,value) {
  const website: FormArray = this.myForm.get('website') as FormArray;

  if (e.target.checked) {
    console.log(value);
    // this.sn.fill(value);
    this.sn.push(value);
    // website.push(new FormControl(e.target.value));
  } else {
    const index: number = this.sn.indexOf(value);
    if (index !== -1) {
        this.sn.splice(index, 1);
    }  

    //  const index = website.controls.findIndex(x => x.value === e.target.value);
    //  website.removeAt(index);
  }
  console.log(this.sn);
  this.count=this.sn.length;
  this.total=this.count*Number(this.PerSeatCost);




}
    
seat()

{
  sessionStorage.setItem('seats',JSON.stringify(this.sn));
  sessionStorage.setItem('count',JSON.stringify(this.total));
  if(this.username==null)
  {
    this.router.navigate(['/unauthpayment'])
  }
  else
  {
  this.router.navigate(['/payment']);
  }
}


submit(){
  console.log(this.myForm.value);
}
}
