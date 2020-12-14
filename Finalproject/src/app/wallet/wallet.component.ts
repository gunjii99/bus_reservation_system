import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {WalletService} from '../wallet.service';
import { walletdetails } from '../model/walletModel';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  walletdetailsarr:any=[];
  username:string;
  massage:string; 
  data = false;
  data1:string;
  updatewallet: FormGroup;
  submitted: boolean;

  constructor(private walletservice : WalletService) { }

  ngOnInit(): void {
    this.username=sessionStorage.getItem('username');
    this.displaywallet(this.username);
  }

  displaywallet(username)
  {
    this.walletdetailsarr = this.walletservice.getwallet(this.username).subscribe((data) =>
    {this.walletdetailsarr = data; 
    })
  }

}
