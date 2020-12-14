import { Injectable } from '@angular/core';  
import {HttpClient} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http';  
import { from, Observable } from 'rxjs';  
import { Register } from "../app/register";  
import { TicketComponent } from './ticket/ticket.component';
import { AddBus, UpdateBus } from './model/add-bus';
@Injectable({  
  providedIn: 'root'  
})  
export class LoginService {  
  Url :string;  
  token : string;  
  header : any;  
  usertype:any;
  constructor(private http : HttpClient) {   
  
    this.Url = 'https://localhost:44387/Api/Customer/createcontact';  
  
    const headerSettings: {[name: string]: string | string[]; } = {};  
    this.header = new HttpHeaders(headerSettings);  
  }  

  login(username:string,Password_:string){
    this.usertype=sessionStorage.getItem('usertype');
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }; 
    if(this.usertype=='user')
    {
    return this.http.post<any>("https://localhost:44387/api/Customer/Login?username="+username+"&Password_="+Password_,httpOptions)
    }
    else
    {
      return this.http.post<any>("https://localhost:44387/api/Customer/AdminLogin?username="+username+"&Password_="+Password_,httpOptions)
    }

  }


   CreateUser(register:Register)  
   {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    return this.http.post<Register[]>(this.Url, register, httpOptions)  
   }

   CreateBookings(Source_B:string,Destination_B:string,StartDate:string,StartTime:string,TravelFare:string,CustUsername:string,BusNo:string,SelectedSeats:string,TicketType:string,paymentBy:string)
  {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }; 
    return this.http.post<any>("https://localhost:44387/Api/Bus/createbookings?Source_B="+Source_B+"&Destination_B="+Destination_B+"&StartDate="+StartDate+"&StartTime="+StartTime+"&TravelFare="+TravelFare+"&CustUsername="+CustUsername+"&BusNo="+BusNo+"&SelectedSeats="+SelectedSeats+"&TicketType="+TicketType+"&paymentBy="+paymentBy,httpOptions)
   } 

   UnauthCreateBookings(Source_B:string,Destination_B:string,StartDate:string,StartTime:string,TravelFare:string,EmailId:string,BusNo:string,SelectedSeats:string,TicketType:string,paymentBy:string)
  {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }; 
    return this.http.post<any>("https://localhost:44387/Api/Bus/uncreatebookings?Source_B="+Source_B+"&Destination_B="+Destination_B+"&StartDate="+StartDate+"&StartTime="+StartTime+"&TravelFare="+TravelFare+"&EmailId="+EmailId+"&BusNo="+BusNo+"&SelectedSeats="+SelectedSeats+"&TicketType="+TicketType+"&paymentBy="+paymentBy,httpOptions)
   } 

   createbus(addbus:AddBus)  
   {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };  
    return this.http.post<AddBus[]>('https://localhost:44387/Api/Buses/createbus', addbus, httpOptions)  
   }
   updatebus(updatebus:UpdateBus): Observable<AddBus> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<AddBus>('https://localhost:44387/api/bus/UpdateBus', updatebus, httpOptions);  
  }
  getBusDetails(){
    //debugger;
    return this.http.get<any>("https://localhost:44387/GetBus");
  }
  searhhdata(model:any){  
     
    return this.http.post<any>("https://localhost:44387/Api/Bus/searchdatabymonth",model);    
   }
   showdata(){  
    debugger;    
   return this.http.get<any>('http://localhost:44387/Api/Bus/search');    
  }
  showtravel(){
    return this.http.get<any>("https://localhost:44387/Api/frequenttravel")
  }


  updateseats(BusNo:string,length:number) {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put('https://localhost:44387/Api/Bus/GetAvailableSeats?BusNo='+BusNo+'&length='+length ,httpOptions);  
  }

  }