import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { walletdetails } from './model/walletModel';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private http:HttpClient, private http1:HttpClient) { }

  getwallet(username: string): Observable<walletdetails>
    {
    //debugger
    return this.http.get<walletdetails>("https://localhost:44387/GetWalletbyUsername?username=" + username);
    }

    updatewallet(WalletDetails:walletdetails,username:string): Observable<walletdetails> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.put<walletdetails>('https://localhost:44387/api/Customer/UpdateWallet?username='+username, WalletDetails, httpOptions);  
    }  

    updaterefund(username:string,refunddetails:number) {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.put('https://localhost:44387/api/Customer/RefundWallet?username='+username+'&refunddetails='+refunddetails, httpOptions);  
    }
}
