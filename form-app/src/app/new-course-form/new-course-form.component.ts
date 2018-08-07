import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
  form = new FormGroup({
    topics: new FormArray([]),
    name: new FormControl('', Validators.required),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl()
    })
  });

  /*
  Video 99: An alternative to creating the form above (line 10 to 17) is using FormBuilder in the constructor
            It is a little bit cleaner than the above, but not much big difference.
            It is up to you to decide which approach you like better

  form;
  constructor(fb: FormBuilder){
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        email: [],
        phone: []
      }),
      topics: fb.array([])
    });
  }
  */

  addTopic(topic: HTMLInputElement){
    // you could push a formGroup as well
    //(this.form.get('topics') as FormArray).push(new FormControl(topic.value)); one alternative
    this.topics.push(new FormControl(topic.value)); // A simpler with the getter
    topic.value = ''; // to clear the input
  }

  removeTopic(topic: FormControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics(){
    return this.form.get('topics')  as FormArray;
  }
  
}
