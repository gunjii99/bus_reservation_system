import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';

@Component({
  selector: 'app-resetconfirmpg',
  templateUrl: './resetconfirmpg.component.html',
  styleUrls: ['./resetconfirmpg.component.css']
})
export class ResetconfirmpgComponent implements OnInit {
  registerForm: FormGroup;
  submitted: boolean;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
  }, {
      validator: MustMatch('password', 'confirmPassword')
  });

  }

  get f() { return this.registerForm.controls; }


    onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }

}
