import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';    
import {HttpHeaders} from '@angular/common/http';    
import { Observable } from 'rxjs'; 
import {Feedback} from './model/feedbacknew';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  Url :string;  
  token : string;  
  header : any;  
  constructor(private http : HttpClient) {   
  
    this.Url = 'https://localhost:44387/api/Feedback/CreateFbk';  
  
    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings);  
  }  

  // login(username:string,Password_:string){
  //   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }; 
  //   return this.http.post<any>("https://localhost:44387/api/Customer/Login?username="+username+"&Password_="+Password_,httpOptions)

  // }


   CreateFeedback(feedback:Feedback)  
   {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    return this.http.post<Feedback[]>(this.Url, feedback, httpOptions)  
   }  
  }