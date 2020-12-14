import { Injectable } from '@angular/core';  
import {HttpClient} from '@angular/common/http';    
import {HttpHeaders} from '@angular/common/http'; 
import {of, BehaviorSubject, Observable} from 'rxjs'   
@Injectable({  
  providedIn: 'root'  
})  
export class SearchdataService {  
  Url: string;  
  constructor(private http : HttpClient) {  
   }  
    
  searhhdata(Source:string,Destination:string){  
    debugger;    
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }; 
   return this.http.post<any>("https://localhost:44387/Api/Bus/searchbuses?Source="+Source+"&Destination="+Destination,httpOptions);    
  }  


    
  searchdata(CustUsername:string){  
    debugger;    
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }; 
   return this.http.post<any>("https://localhost:44387/Api/Bus/searchdata?CustUsername="+CustUsername,httpOptions);    
  }  


  unauthsearchdata(Source_B,Destination_B,StartDate,StartTime,TravelFare,EmailId){  
    debugger;    
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }; 
   return this.http.post<any>("https://localhost:44387/Api/Bus/unauthsearchdata?Source_B="+Source_B+"&Destination_B="+Destination_B+"&StartDate="+StartDate+"&StartTime="+StartTime+"&TravelFare="+TravelFare+"&EmailId="+EmailId,httpOptions);    
  } 


  showdata(){  
    debugger;    
   return this.http.get<any>('https://localhost:44387/Api/Bus/showdata');    
  }  
 

  getuser(username: string)
    {
    //debugger
    return this.http.get<string>("https://localhost:44387/GetUserbyUsername?username=" + username);
    }
} 