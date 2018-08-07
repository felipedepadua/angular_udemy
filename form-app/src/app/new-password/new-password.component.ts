import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UsernameValidators } from '../signup-form/username.validators';
import { NewpassValidators } from '../validators/newpass.validators';

// Exercise: ASSIGNMENT 7  

@Component({
  selector: 'new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent {

  form: FormGroup;
  constructor(fb: FormBuilder){
    this.form = fb.group({
      oldPass: ['', Validators.required, NewpassValidators.checkOldPass],
      newPass: ['', [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace
        ]
      ],
      confirmPass: ['', Validators.required]
    },{
      // Just like we can add a validator to each control, we can also apply a validator to a GROUP
      validator: NewpassValidators.confirmPassShouldBeSame
    });
  }

  get oldPass(){ return this.form.get('oldPass'); }

  get newPass(){ return this.form.get('newPass'); }
  
  get confirmPass(){ return this.form.get('confirmPass'); }

}
