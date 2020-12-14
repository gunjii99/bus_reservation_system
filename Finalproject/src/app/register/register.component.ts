import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';
import {Register} from '../register';
import { LoginService } from '../login.service'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  UserForm: FormGroup;
  submitted = false;
  date = new Date;
  data = false;       
  err: string;
  massage:string; 
  
  constructor(private formBuilder: FormBuilder,private loginService:LoginService) { }

  ngOnInit() {
      this.UserForm = this.formBuilder.group({
          Fname: ['', Validators.required],
          Address: ['', Validators.required],
          Lname: ['', Validators.required],
          EmailId: ['', [Validators.required, Validators.email]],
          Password_: ['', [Validators.required, Validators.minLength(6)]],
          confirmPassword: ['', Validators.required],
          ContactNo:['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
          DOB:['',Validators.required,],
          Gender:['',Validators.required],
          username:['',Validators.required],
      }, {
          validator: MustMatch('Password_', 'confirmPassword')
      });
  }
  get Fname(){
    return this.UserForm.get("Fname");
  }

  get Lname(){
    return this.UserForm.get("Lname");
  }

  get Address(){
    return this.UserForm.get("Address");
  }
  get EmailId(){
    return this.UserForm.get("EmailId");
  }

  get Password_(){
    return this.UserForm.get("Password_");
  }

  get ContactNo(){
    return this.UserForm.get("ContactNo");
  }
  get DOB(){
    return this.UserForm.get("DOB");
  } 
  get Gender(){
    return this.UserForm.get("Gender");
  } 

  get username()
  {
      return this.UserForm.get("username");
  }

  get confirmPassword()
  {
      return this.UserForm.get("confirmPassword");
  }


      // convenience getter for easy access to form fields
      get f() { return this.UserForm.controls; }



   onFormSubmit()    
  {    
    if(this.UserForm.valid)
     {
       this.err="User " + this.Fname.value + " registered sucessfully"; 
     }
     else
     {
       this.err="Please Enter all the Details"
     }
    
     console.log(this.UserForm.value);
    const user = this.UserForm.value;    
    this.Createemployee(user); 
  }    
  Createemployee(register:Register)    
  {    
  this.loginService.CreateUser(register).subscribe(    
    ()=>    
    {    
      this.data = true;    
      this.massage = 'Data saved Successfully';    
      this.UserForm.reset();    
    });    
  }   




  }
  
