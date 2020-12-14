import { Component, OnInit } from '@angular/core';
import {UserprofileService} from '../userprofile.service';
import { userprofile } from '../model/userprofileModel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactupdatemodal',
  templateUrl: './contactupdatemodal.component.html',
  styleUrls: ['./contactupdatemodal.component.css']
})
export class ContactupdatemodalComponent implements OnInit {

  updatecontact: FormGroup;
  walletdetailsarr: any=[];
  username:string;
  massage:string; 
  data = false;
  submitted: boolean;

  constructor(private userprofileservice : UserprofileService, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.username=sessionStorage.getItem('username');
    this.updatecontact = this.formBuilder.group({
      ContactNo:['',[Validators.required]]
  });
  }

  onSubmitContact()
  {
    this.submitted = true;

    // stop here if form is invalid

    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    alert("Contact Added Successfully");


    console.log(this.updatecontact.value);
    const pwd =this.updatecontact.value;
    this.UpdateContact(pwd,this.username);
  }


  UpdateContact(ContactNo:userprofile,username)
  {
    this.userprofileservice.updatecontact(ContactNo,username).subscribe(    
      ()=>    
      {    
        this.data = true;    
        this.massage = 'Data saved Successfully';    
        this.updatecontact.reset();    
      });
  }

}
