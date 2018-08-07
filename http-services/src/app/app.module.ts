import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './app-error-handler';
import { FollowerComponent } from './follower/follower.component';
import { FollowerService } from './services/follower.service';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    FollowerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    PostService,
    FollowerService,
    { provide: ErrorHandler, useClass: AppErrorHandler }
    // We are telling Angular, wherever you are using ErrorHandler, use this new class (AppErrorHandler)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
