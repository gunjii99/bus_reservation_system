import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  submitted = false;
  errorMessage:string;  
  constructor(private router:Router,private formBuilder: FormBuilder,private LoginService:LoginService) { }

  ngOnInit() {
      this.LoginForm = this.formBuilder.group({
          Password_: ['', [Validators.required, Validators.minLength(6)]],
          username:['',Validators.required],
          usertype:['',Validators.required]
      }, 
      );
     // sessionStorage.setItem('usertype',this.usertype.value);
  }

  // convenience getter for easy access to form fields
  get f() { return this.LoginForm.controls; }

 /* doLogin() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.LoginForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.LoginForm.value))
  }*/

  get username()
   {
     return this.LoginForm.get("username");
   }
   get Password_()
   {
     return this.LoginForm.get("Password_");
   }

   get usertype()
   {
     return this.LoginForm.get("usertype");
   }

   
   
   sendDetails(username:string,Password_:string){
    this.LoginService.login(username,Password_).subscribe(
      data=>{
       if(this.usertype.value=="admin"){
        alert("Hello Admin!");
        this.router.navigate(['/adminhome'])
        sessionStorage.setItem('username',this.username.value);
        sessionStorage.setItem('usertype',this.usertype.value);
       }
       else if(this.usertype.value=="user"){
         alert("Hello User!");
         this.router.navigate(['/search']);
         sessionStorage.setItem('username',this.username.value);
         sessionStorage.setItem('usertype',this.usertype.value);
         window.alert("LOGIN SUCCESSFUL !!");       
       }
       else if(data =="Wrong Password"){
        this.errorMessage="Wrong Password";
        window.alert("Wrong Password !!");
      }
      else if(data =="Invalid User"){
        this.errorMessage="Invalid User";
        window.alert("Invalid User !!");
      }
      }
    );
  }
  
  Login(){
    if(this.LoginForm.valid){
      
      this.sendDetails(this.username.value,this.Password_.value);

    }else{
      alert("error");
    }
  }





}