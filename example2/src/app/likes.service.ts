import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class LikesService {

  getLikes(): number{
    return 0;
  }

  checkLiked(): boolean{
    return false;
  }

  getEmitter(){
    return new EventEmitter();
  }

}
