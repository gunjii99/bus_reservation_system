import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { changepassword } from './model/changePasswordModel';

@Injectable({
  providedIn: 'root'
})
export class ChangepasswordsService {

    
    constructor(private http: HttpClient) { }  
    
   
   ResetPassword(changepwd:changepassword,username:string): Observable<changepassword> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.put<changepassword>('https://localhost:44387/api/Customer/ResetPassword?username='+username, changepwd, httpOptions);  
  }  
}
