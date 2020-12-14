import { Component, OnInit } from '@angular/core';
import {UserprofileService} from '../userprofile.service';
import { userprofile } from '../model/userprofileModel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  userdetails: any=[];
  username:any;
  massage:string; 
  data = false;
  dataemail = false;
  datacontact = false;
  dataaddress = false;
  submittedemail: boolean;
  submittedcontact: boolean;
  submittedaddress: boolean;

  constructor(private userprofileservice : UserprofileService) { }

  ngOnInit(): void {
    this.username=sessionStorage.getItem('username');
    this.displayuser(this.username);
  }

  displayuser(username)
  {
    this.userdetails = this.userprofileservice.getuser(this.username).subscribe((data) =>
    {this.userdetails = data; console.log(data)})
    console.log(this.userdetails);
  }

  
  

}