import { Component } from '@angular/core';
import { ILikedEvent } from './like/like.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = [
    { id: 1, name: 'course 1'},
    { id: 2, name: 'course 2'},
    { id: 3, name: 'course 3'}
  ];

  viewMode = 'aaa'; // change it to 'map' or 'list' to start either as either

  title = 'app';
  tweet = {
    body: 'here is the body of this tweet',
    isLiked: false,
    likesCount: 10
  }

  clicked(liked: ILikedEvent){
    console.log("isLiked: ", liked);
  }

  onAdd(){
    this.courses.push({id: 4, name: 'course 4'});
  }

  onRemove(course){
    // first we need to find the index of this course in the array
    let index = this.courses.indexOf(course);
    // We go to that index and delete one object
    this.courses.splice(index, 1);
  }

  onChange(course){
    course.name = 'New course name';
  }

  onReset(){
    this.courses = [
      { id: 1, name: 'course 1'},
      { id: 2, name: 'course 2'},
      { id: 3, name: 'course 3'}
    ];
  }

  trackCourse(index, course){
    // With this, we change how Angular tracks course Objects
    // Instead of tracking them by the Object identity, now it tracks it by the IDs (course.id)
    return course ? course.id : undefined;
  }

}
