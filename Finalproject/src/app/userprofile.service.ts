import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { userprofile } from './model/userprofileModel';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  constructor(private http:HttpClient, private http1:HttpClient) { }

  getuser(username: string): Observable<userprofile>
    {
    //debugger
    return this.http.get<userprofile>("https://localhost:44387/GetUserbyUsername?username=" + username);
    }

    updateemail(EmailId:userprofile,username:string): Observable<userprofile> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.put<userprofile>('https://localhost:44387/api/Customer/UpdateEmail?username='+username, EmailId, httpOptions);  
    }  

    updatecontact(ContactNo:userprofile,username:string): Observable<userprofile> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.put<userprofile>('https://localhost:44387/api/Customer/UpdateContact?username='+username, ContactNo, httpOptions);  
    }  

    updateaddress(Address:userprofile,username:string): Observable<userprofile> {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.put<userprofile>('https://localhost:44387/api/Customer/UpdateAddress?username='+username, Address, httpOptions);  
    }  

}