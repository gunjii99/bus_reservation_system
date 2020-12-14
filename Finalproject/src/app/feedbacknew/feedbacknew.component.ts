import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Feedback} from '../model/feedbacknew';
import {FeedbackService} from '../feedback.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedbacknew',
  templateUrl: './feedbacknew.component.html',
  styleUrls: ['./feedbacknew.component.css']
})
export class FeedbacknewComponent {
  isSubmitted = false;
  massage:string; 
  data = false;     
  

  constructor(public fb: FormBuilder,
    private feedbackService:FeedbackService,private router:Router) { }

  
    registrationForm = this.fb.group({
    Question1:['', [Validators.required]],
    Question2:['', [Validators.required]],
    Question3:['', [Validators.required]],
    Question4:['', [Validators.required]],
    Question5:['', [Validators.required]]
  })

  // Getter method to access form control
  // get myForm() {
  //   return this.registrationForm.get('gender');
  // }

  get myFormQ1() {
    return this.registrationForm.get('Question1');
  }

  get myFormQ2() {
    return this.registrationForm.get('Question2');
  }

  get myFormQ3() {
    return this.registrationForm.get('Question3');
  }
  get myFormQ4() {
    return this.registrationForm.get('Question4');
  }
  get myFormQ5() {
    return this.registrationForm.get('Question5');
  }
  get f() { return this.registrationForm.controls; }
  // Submit Registration Form
  onSubmit() {
    this.isSubmitted = true;
    if(!this.registrationForm.valid) {
      return false;
    } else {
      //alert(JSON.stringify(this.registrationForm.value))
      alert("Feedback Successfully Submitted!!")
    }
    console.log(this.registrationForm.value);
    const fk = this.registrationForm.value;
    this.createfeedback1(fk);
    this.router.navigate(['/home']);
  }  
   createfeedback1(fbk:Feedback) {
      this.feedbackService.CreateFeedback(fbk).subscribe(    //CreateFeedback is from feedback.service.ts
        ()=>    
       {    
          this.data = true;    
          this.massage = 'Data saved Successfully';    
          this.registrationForm.reset();    
        });
   }

}