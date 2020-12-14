import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {WalletService} from '../wallet.service';
import { walletdetails } from '../model/walletModel';

@Component({
  selector: 'app-walletupdatemodal',
  templateUrl: './walletupdatemodal.component.html',
  styleUrls: ['./walletupdatemodal.component.css']
})
export class WalletupdatemodalComponent implements OnInit {

  walletdetailsarr: any=[];
  username:any;
  massage:string; 
  data = false;
  updatewallet: FormGroup;
  submitted: boolean;

  constructor(private walletservice : WalletService, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.username=sessionStorage.getItem('username');
    this.updatewallet = this.formBuilder.group({
      WalletDetails:['',[Validators.required]]
  });
  }
  

  onSubmit()
  {
    this.submitted = true;

    // stop here if form is invalid

    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    


    console.log(this.updatewallet.value);
    const pwd =this.updatewallet.value;
    this.UpdateWallet(pwd,this.username);
    alert("Amount Added Successfully");
  }

  UpdateWallet(WalletDetails:walletdetails,username)
  {
    console.log(this.updatewallet.value);
    this.walletservice.updatewallet(WalletDetails,username).subscribe(    
      ()=>    
      {    
        this.data = true;    
        this.massage = 'Data saved Successfully';    
        this.updatewallet.reset();    
      });    
  }

}
