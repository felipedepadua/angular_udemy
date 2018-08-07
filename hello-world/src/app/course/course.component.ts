import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
  //inputs: ['comment'] another approach instead of using @Input() - for this you dont need to import 'Input'

})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  course = {
    title: "Angular course",
    rating: 4.87,
    students: 30150 ,
    price: 190.9567,
    releaseDate: new Date(2018, 3,1)
  }

  text = `Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum 
          Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum 
          Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum 
          Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum 
          Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum 
          Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum Lore Ipsum   
  `;

  @Output() change =  new EventEmitter(); // The name should the same as the Event (which it is 'change')
  // PS: You can also use ALIAS for Output - ex: @Output('aliasYouChoose')

  @Input() isComment: boolean; //2nd approach [need to add Input in the Import] - Mosh thinks this approach is better
 //@Input('comment') renamed_filed: boolean; the code would still work because of the ALIAS = 'comment'

  onClickComment(){
    this.isComment = !this.isComment;
    this.change.emit({newValue: this.isComment}); // to raise an event
  }

}

export interface eventObj{
  newValue: boolean
}
