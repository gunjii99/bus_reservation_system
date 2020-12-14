import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgetService {

  url : string = "https://localhost:44387/";
  

  constructor(private http : HttpClient ) { }

  sendOTP(email: string) : Observable<any>{
    const httpheader={headers:new HttpHeaders({'Content-Type':'text/html'})};
    //const httpOption = {headers:new HttpHeaders({'Content-Type':'text/html'})}
    console.log(email);
    console.log(this.url+email);
    return this.http.get<any>(this.url+"send-email?to="+email);
  }

  updateUser(email:string, password:string):Observable<any>{
    const httpheader={headers:new HttpHeaders({'Content-Type':'text/html'})};
    console.log(email);
    console.log(password);
    return this.http.put<any>(this.url+"Api/pass/UpdatePassword?EmailId="+email+"&Password_="+password,httpheader);
  }
}