import {Component} from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
    <h2> 
        {{ "Title: " + getTitle() }} 
        <ul>
            <li *ngFor="let course of courses">{{ course }}</li>
        </ul>
    </h2>
    <button class="btn btn-primary" [class.active]="isActive">Save</button>
    <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'red' : 'blue' ">Save</button>

    <div (click)="onDivClicked()">
        <button (click)="onSave($event)">Click me</button>
    </div>

    <input #email (keyup.enter)="onKeyUp($event, email.value)" />

    <h4>best solution: TWO-WAY BINDING:</h4>
    <input  [(ngModel)]="email2" (keyup.enter)="onKeyUp2()" />

    <h4>extra: ONE-WAY BINDING (from component to View only):</h4>
    <input [value]="email2" (keyup.enter)="onKeyUp1()" />
    `
})
export class CoursesComponent {
    title = 'List of Courses';

    // Just an example. It is better to have yout functions in a Service
    getTitle(){
        return this.title;
    }

    onSave($event){ // the parameter is not mandatory [we only need it if we need some info data from the DOM event]
        console.log("button was clicked", $event);
        // If you dont want the event to keep propagating upwards [to the upper tree] to the DIV
        $event.stopPropagation();// "DIV was clicked" will not be displayed anymore. 
    }

    onDivClicked(){ // the parameter is not mandatory [we only need it if we need some info data from the DOM event]
        console.log("DIV was clicked");
    }

    // It will be called only if we press the enter
    onKeyUp($event, email){
        console.log("ENTER key was pressed");

        // We can use the event to get the value, but not the best approach (there's an easier way to do this with Angular)
        console.log("content: ", $event.target.value);

        //better way, however this still a best solution: TWO-WAY BINDING   
        console.log(email);
    }

    // best solution: ONE-WAY BINDING
    onKeyUp1(){
        console.log("One-way: ", this.email2);
    }

    // best solution: TWO-WAY BINDING
    email2 = "me@example.com";
    onKeyUp2(){
        console.log("Two-way: ", this.email2);
    }

    courses;
    isActive = true; // Inspect the button: if this is false, the class 'active' will not be present

    constructor(service: CoursesService){ // We added CoursesService as a dependency through the constructor {D. Injection}
        // We also need to add CoursesService as a provider in app.module.ts
        this.courses = service.getCourses();
    }

}
