import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

// From Section 8: Reactive Forms

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  // We will explicitly cretae Form groups and form control objects [in template-driven, it was created for us implicitly]
  form = new FormGroup({
    username: new FormControl('initialValue', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace // Here we added our custom validator
    ], // See explanation of these parameters in video 90
      UsernameValidators.shouldBeUnique ), // Asysnc validator

    password: new FormControl('', Validators.required),
    // we can also add FormGroup(s) if we have (name : new FormGroup() )
    account: new FormGroup({
      email: new FormControl('', Validators.required)
      // you can add more formControls here
    })
  });

  // We use this form validating password field (line 19) - a shorter alternative to line 10 used for username
  // we create a getter for password
  get password(){
    return this.form.get('password');
  }

  get username(){
    return this.form.get('username');
  }

  get email(){
    return this.form.get('account.email');
  }

  login(){
    // right now, we are simplyfing the things. We are not really calling the server
    const isValid = false; // here we could make a call to a server to check credentials

    if(!isValid){
      // set the error at the form level
      this.form.setErrors({
        invalidLogin: true
      });
      // We can also set an error to a field: this.username.setErrors
    }
  }

}


