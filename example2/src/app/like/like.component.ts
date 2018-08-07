import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LikesService } from '../likes.service';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input() isLiked: boolean;
  @Input() likesCount: number;
  @Input() body: string;

  @Output() changed;

  constructor(service: LikesService) { 
    //this.isLiked = service.checkLiked();
    //this.likesCount = service.getLikes();

    // I have done this to have loose coupling
    this.changed = service.getEmitter();
   }

  ngOnInit() {
  }

  onClickLike(){
    this.isLiked = !this.isLiked;
    this.likesCount = (this.isLiked) ? this.likesCount+1 : this.likesCount-1;
    console.log(this.likesCount);
    this.changed.emit({isLiked : this.isLiked, likesCount : this.likesCount}); // to raise an event
  }

  // For video 70
  task = {
    title: 'Task 1',
    assignee: {
      name: null // Change this to, say, 'Felipe' to see the change
    }
  }

}

export interface ILikedEvent{
  isLiked: boolean,
  likesCount: number
}
