import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable'; // we need this to return an Observable - line 27
import 'rxjs/add/operator/catch'; // Reactive Extensions
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

import { AppError } from '../app-error';
import { NotFoundError } from '../not-found-error';
import { BadInput } from '../bad-input';

// (*) WATCH VIDEO 118 - Making this Service REUSABLE
// Instead of CRUD for only Posts, it will now accept any data
// Now if we have, say, a course, we can reuse this service for all CRUD for the course web service
@Injectable()
export class DataService {

  constructor(private url: string, private http: Http) { }

  getAll(){
    return this.http.get(this.url)
      .map(response => response.json())
      .catch(this.handleError);
      // the Obervable operator MAP transforms items in an Oservable
      // Here we are mapping/transforming this response object to an Array of Javascript objects
  }

  create(resource){
    //return Observable.throw(new AppError); // Uncomment this to Test when you need to get an error

    return this.http.post(this.url, resource)
      .map(reponse => reponse.json())
      .catch( (error: Response) => {
        if(error.status === 400)
          return Observable.throw(new BadInput(error.json()));

        return Observable.throw(new AppError(error.json()));
      });
  }

  delete(id){
    //return Observable.throw(new AppError()); // ucomment this to simulate a failed scenario
    // To use catch, you have to import it from rxjs (it doesnt come as default like 'subscribe')
    return this.http.delete(this.url + '/' + id)
      .map(reponse => reponse.json())
      .catch(this.handleError);
  }

  update(resource){
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
      .map(reponse => reponse.json())
      .catch(this.handleError);
  }

  private handleError(error: Response){
    // You can also add the error handling for createPost here as well (SEE THE END OF  VIDEO 117)
    // Jus add line 28 and 29 here and change to .catch(this.handleError) on createPost
    if(error.status === 404)
      return Observable.throw(new NotFoundError()); // expected error (no need to log error on the server)

    return Observable.throw(new AppError(error.json())); // unexepected type of error - log on the server
  }

}
