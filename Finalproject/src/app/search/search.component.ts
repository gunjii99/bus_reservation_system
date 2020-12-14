import { Component,EventEmitter, Input, OnInit,Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  UserForm:FormGroup
  Error;
  date = new Date;
  username:string;

  constructor(private router:Router) {
    this.UserForm=new FormGroup({
      Source_:new FormControl(null,[Validators.required]),
      Destination:new FormControl(null,[Validators.required]),
      DOB:new FormControl(null,[Validators.required]),
      TicketType:new FormControl(null,[Validators.required])
    })
  }



  get Source_(){
    return this.UserForm.get("Source_");
  }

  get Destination(){
    return this.UserForm.get("Destination");
  }

  get DOB()
  {
    return this.UserForm.get("DOB");
  }

  get TicketType()
  {
    return this.UserForm.get("TicketType");
  }

  onSubmit(){
      sessionStorage.setItem('Source',this.Source_.value)
       sessionStorage.setItem('Destination',this.Destination.value)
       sessionStorage.setItem('DOT',this.DOB.value);
       sessionStorage.setItem('TicketType',this.TicketType.value)
      this.router.navigate(['/searchdata'])
    }

  ngOnInit() {

    this.username = sessionStorage.getItem('username');

  }

  logout()
  {
    sessionStorage.removeItem('username');
  }



}
