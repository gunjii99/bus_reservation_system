import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Finalproject';

  loginsessionuser=false;
  usertype=null;
  username=null;

  constructor(private router:Router) { 
  }

  ngDoCheck(){
    this.username=sessionStorage.getItem("username");
    if(this.username!=null){
      this.loginsessionuser=true;
      this.usertype=sessionStorage.getItem("usertype");
    }
    else{
      this.loginsessionuser=false;
      this.usertype=null;
    }
  }

  logout(){
    sessionStorage.clear();
    this.loginsessionuser=false;
    this.router.navigate(['home']);
  }
  
  ngOnInit(){
    this.username=sessionStorage.getItem("username");
    if(this.username!=null){
      this.usertype=sessionStorage.getItem("usertype");
      if(this.usertype=="admin") this.router.navigate(['adminhome']);
      else if(this.usertype=="user") this.router.navigate(['search']);
    }
    else this.router.navigate(['home']);
  }

  
  
  
}

