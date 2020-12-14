import { Component, OnInit } from '@angular/core';
import {UserprofileService} from '../userprofile.service';
import { userprofile } from '../model/userprofileModel';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addressupdatemodal',
  templateUrl: './addressupdatemodal.component.html',
  styleUrls: ['./addressupdatemodal.component.css']
})
export class AddressupdatemodalComponent implements OnInit {

  updateaddress: FormGroup;
  walletdetailsarr: any=[];
  username: string;
  massage:string; 
  data = false;
  submitted: boolean;

  constructor(private userprofileservice : UserprofileService, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.username=sessionStorage.getItem('username');
    this.updateaddress = this.formBuilder.group({
      Address:['',[Validators.required]]
  });
  }

  onSubmitAddress()
  {
    this.submitted = true;

    // stop here if form is invalid

    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    alert("Address Added Successfully");


    console.log(this.updateaddress.value);
    const pwd =this.updateaddress.value;
    this.UpdateAddress(pwd,this.username);
  }

  UpdateAddress(Address:userprofile,username)
  {
    this.userprofileservice.updateaddress(Address,this.username).subscribe(    
      ()=>    
      {    
        this.data = true;    
        this.massage = 'Data saved Successfully';    
        this.updateaddress.reset();    
      });
  }

}
