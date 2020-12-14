import { Component, OnInit } from '@angular/core';
import {UserprofileService} from '../userprofile.service';
import { userprofile } from '../model/userprofileModel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-emailupdatemodal',
  templateUrl: './emailupdatemodal.component.html',
  styleUrls: ['./emailupdatemodal.component.css']
})
export class EmailupdatemodalComponent implements OnInit {

  updateemail: FormGroup;
  walletdetailsarr: any=[];
  username: any;
  massage:string; 
  data = false;
  submitted: boolean;

  constructor(private userprofileservice : UserprofileService, private formBuilder : FormBuilder) { }

  ngOnInit(): void {

    this.username=sessionStorage.getItem('username');

    this.updateemail = this.formBuilder.group({
      EmailId:['',[Validators.required]]
      
  });
  }

  onSubmitEmail()
  {
    this.submitted = true;

    // stop here if form is invalid

    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    alert("Email Added Successfully");


    console.log(this.updateemail.value);
    const pwd =this.updateemail.value;
    this.UpdateEmail(pwd,this.username);
  }

  UpdateEmail(EmailId:userprofile,username)
  {
    this.userprofileservice.updateemail(EmailId,username).subscribe(    
      ()=>    
      {    
        this.data = true;    
        this.massage = 'Data saved Successfully';    
        this.updateemail.reset();    
      });
  }

}
