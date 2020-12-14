import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { bookings } from './model/bookingsModel';
import { startdate } from './model/bookingsModel';
import { refundamount } from './model/bookingsModel';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {

  constructor(private http:HttpClient, private http1:HttpClient) { }

  getbooking(username: string): Observable<bookings>
    {
    //debugger
    return this.http.get<bookings>("https://localhost:44387/GetBookingbyUsername?username=" + username);
    }

    getdate(username: string): Observable<startdate>
    {
      return this.http.get<bookings>("https://localhost:44387/GetDatebyUsername?username=" + username);
    }

    updatecancellation(paymentid: string) {  
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
      return this.http.put("https://localhost:44387/Api/UpdateCancellation?paymentId=" + paymentid, httpOptions);  
    }  

    getrefund(paymentid: string): Observable<refundamount>
    {
      return this.http.get<refundamount>("https://localhost:44387/Api/RefundAmount?paymentId=" + paymentid);
    }


}