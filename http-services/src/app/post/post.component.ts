import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../app-error';
import { NotFoundError } from '../not-found-error';
import { BadInput } from '../bad-input';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  posts: any[];

  // [VI] - When we put the keyword 'private', http will be an attribute in the class!! 
  // (no longer just a local/temp variable in the contructor method)
  constructor(private service: PostService){
    // Use https://jsonplaceholder.typicode.com to mock the call to a server that is returning some dynamic data
    // You can replace Jsonplaceholder and use your real web service (with nodejs, .net core, etc.)
    // All the methods of the http class (such as get/post/etc.) return an Observable; therefore, we have
    // to subscribe to the Observable: http.get("url").subscribe(...);
    // http.get(this.url)
    //   .subscribe(response => {
    //     //console.log(response.json());
    //     this.posts = response.json();
    //   });
  }

  // VIDEO 107
  // As a best practice, constructors should be very small and lightweight. Therefore, you should not perform
  // expensive operations like calling the server (ex: http.get) 
  // Components in Angular have lifecycle hooks: special methods that we can add to our components and Angular will
  // automatically call thsese methods at specific times during the lifecycle of a component, for ex, when Angular:
  // Creates a componenet ; renders it ; Creates and renders its children; destroys a component
  // One of these methods is ngOnInit
  // Others: OnChanges, DoCheck, AfterContentInit
  ngOnInit(){
    this.service.getAll()
      .subscribe(posts => {
        //console.log(response.json());
        //this.posts = response.json(); Instead of getting a JSON object, I want an array of objects [which is better]
        this.posts =  posts;
      } 
      //, error => {
      //     alert('an unexpected error occurred!');
      //     // In real world application, we would want to log these errors. Just to simulate, lets use console.log
      //     console.log(error); // In real world, we would have to store this on our server
      // }
      ); // We dont need the error lambda here anymore. Whenever there is an error, it will already call AppErrorHandler
  }


  createPost(input: HTMLInputElement){
    let post: any = { 'title': input.value }; // Solution #1 to line 36: make this variable of type any
    // this allows post.id to be added

    // HERE WE ARE UPDATING THE UI BEFORE THE SERVER OPERATION [OPTIMISTIC APPROACH] - SEE VIDEO 120
    this.posts.splice(0, 0, post); // HOWEVER, IF THE SERVER FAILS, WE HAVE TO ROLL BACK

    input.value = ''; // clear the input field

    // If we dont put the keyword 'private' in the parameter variable in the constructor, we will get an error,
    // because it will not exist anymore (it was just a local variable, not an attribute of the class)
    this.service.create(post)
      .subscribe(newPost => {
        
        console.log(newPost);
        post.id = newPost.id; // but we dont have id in post
        // Solution #2 to line 36: post.['id'] = newPost.id; - we are adding id property to post

        // HERE WE ARE ONLY UPDATING THE UI AFTER THE SERVER OPERATION SUCCEEDED [PESSIMISTIC APPROACH]
        // this.posts.splice(0, 0, post); //add to the beggining of the list (instead of 'push' which adds to the end)
      }, (error: AppError) => {
        // Roll back change in the UI [remove the added item]
        this.posts.splice(0, 1);

        if(error instanceof BadInput){ // 400 - Bad Request
          //this.form.setErrors(error.originalError);
        }
        else throw error; // It will hit our Global error handler (AppErrorHandler)
      });
  }

  // PUT vs PATCH: 
  // Patch: update only a few properties in an object (we only send the properties that we want to modify)
  // Put: We pass the whole object (it will replace the whole previous object)
  // However, most APIs build support for PUT - very few has PATCH available
  updatePost(post){
    // this.http.put(this.url, JSON.stringify(post))
    this.service.update(post)
      .subscribe(
        updatedPost => {
        console.log(updatedPost);
      });
  }

  // PS: do not click DELETE/UPDATE the post(s) you created cuz this will show an error in the console (Remember: you are
  // using a mockup - the item you created do not exist in Jsonplaceholder [it was just a fake/mock response])
  deletePost(post){
    // OPTIMISTIC APPROACH
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id).subscribe( // *** CHANGE post.id TO, SAY, 345 TO TEST THE ERROR
    //   () => {
    //     // PESSIMISTIC APPROACH
    //     //let index = this.posts.indexOf(post);
    //     //this.posts.splice(index, 1);
    // },
     null,
     (error: AppError) => {
        // ROLL BACK CHANGE
        this.posts.splice(index, 0, post);

        if(error instanceof NotFoundError) // Error 404
          alert('this post does not exist or has already been deleted');
        else {
          throw error;
        } 
    });
  }

}
