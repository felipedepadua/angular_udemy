import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors;
  imageUrl = "https://angular.io/assets/images/logos/angular/angular.svg";
  imageUrl2 = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1000px-React-icon.svg.png";

  // Colspan Not available in the DOM directly (like [src] for src=""), then we have to use attr.colspan with Angular 
  // This is some exception, most attributes work like [src],[class], etc.
  colSpan = 2;
  

  constructor(service: AuthorService) {
    this.authors = service.getAuthors();
  }

  ngOnInit() {
  }

}
