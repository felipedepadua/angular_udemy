import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { LikesService } from './likes.service';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { AccordionbodyDirective } from './accordionbody.directive';


@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    AccordionbodyDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LikesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
