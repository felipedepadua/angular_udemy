import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable'; // we need this to return an Observable - line 27
import 'rxjs/add/operator/catch'; // Reactive Extensions
import 'rxjs/add/observable/throw';

import { AppError } from '../app-error';
import { NotFoundError } from '../not-found-error';
import { BadInput } from '../bad-input';
import { DataService } from './data.service';

// (*) WATCH VIDEO 108 AND 109
@Injectable()
export class PostService extends DataService{

  constructor(http: Http){

    // In order to create PostService class, first, we need to create an instance of DataService 
    // (That is how inheritance works) and we have http: Http as a dependency in DataService constructor
    // Therefore we need to call the constructor of the the base class:
    super('https://jsonplaceholder.typicode.com/posts',http);
  }

 /*  REMOVE THIS AND EXTENDS DATASERVICE - SEE VIDEO 118
  private url = 'https://jsonplaceholder.typicode.com/posts';
  // *** Change this to an invalid URL to see an unexpected Error

  constructor(private http: Http) { }

 
  getPosts(){
    return this.http.get(this.url)
      .catch(this.handleError);
  }

  createPost(post){
    return this.http.post(this.url, post)
      .catch( (error: Response) => {
        if(error.status === 400)
          return Observable.throw(new BadInput(error.json()));

        return Observable.throw(new AppError(error.json()));
      });
  }

  deletePost(id){
    // To use catch, you have to import it from rxjs (it doesnt come as default like 'subscribe')
    return this.http.delete(this.url + '/' + id)
      .catch(this.handleError);
  }

  updatePost(post){
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
      .catch(this.handleError);
  }

  private handleError(error: Response){
    // You can also add the error handling for createPost here as well (SEE THE END OF  VIDEO 117)
    // Jus add line 28 and 29 here and change to .catch(this.handleError) on createPost
    if(error.status === 404)
      return Observable.throw(new NotFoundError()); // expected error (no need to log error on the server)

    return Observable.throw(new AppError(error.json())); // unexepected type of error - log on the server
  }
*/
}
