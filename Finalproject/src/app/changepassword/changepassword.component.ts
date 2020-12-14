import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';
import {changepassword} from '../model/changePasswordModel';
import {ChangepasswordsService} from '../changepasswords.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  username:string;
  massage:string; 
  data = false;
  registerForm: FormGroup;
  submitted: boolean;
  constructor(private formBuilder: FormBuilder, private changepwdService:ChangepasswordsService) { }

  ngOnInit(): void {
    this.username=sessionStorage.getItem('username');
    this.registerForm = this.formBuilder.group({
      oldpassword:['',[Validators.required, Validators.minLength(6)]],
      
      Password_: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid

    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    alert("Password Reset Successfully");


    console.log(this.registerForm.value);
    const pwd =this.registerForm.value;
    this.createpwd(pwd,this.username);
  }




 

  createpwd(Password_:changepassword,username)    
  {    
  this.changepwdService.ResetPassword(Password_,this.username).subscribe(    
    ()=>    
    {    
      this.data = true;    
      this.massage = 'Data saved Successfully';    
      this.registerForm.reset();    
    });    
  } 

}