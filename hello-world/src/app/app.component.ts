import { Component } from '@angular/core';

// You dont have to use this. This was just a solution to make it less error-prone and by having compile-time 
// type-checking in the argument for onCommentChange() and IntelliSense
// interface eventObj{
//   newValue: boolean
// }
// However, the best way is to have this interface in the course and make it exportable (export keyword prefix) 
// and the import it here
import { eventObj } from './course/course.component'; // This will make this interface reusable


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  post ={
    title : 'My Angular app',
    comment: false //switch to true and see the change [it will show the comment instead of the apple] 
    // This will be used to the course.component to check which icon it needs to initially show (comment or apple)
  }

  // If you dont wanna use interface, but you want type checking, you can do the following (though it's more verbose):
  // onCommentChange(eventObj: { newValue: boolean }){
  onCommentChange(myEventArgs: eventObj){
    console.log("Comment/Apple changed: ", myEventArgs); // Args as in arguments
  }

}
