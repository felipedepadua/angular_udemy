import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactMethods = [
    { id: 1, name: 'Email'},
    { id: 2, name: 'Phone'}
  ]

  log(x){
    console.log(x);
    // Go to Console and check it.
    // if you expand 'control', you can see it is FormControl object and then you can check many properties:
    // value, valid, invalid, dirty, touched, untouched, etc.
    // in 'errors', if there is any, you will see the validation errors
  }

  submit(f){
    console.log(f);
    // Check form (you can see the controls inside [firstname and comment]) and ngSubmit
    console.log(f.value);
  }

}
