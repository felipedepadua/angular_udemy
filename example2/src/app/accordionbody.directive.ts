import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appAccordionbody]'
})
export class AccordionbodyDirective {

  @Input('appAccordionbody') body;

  constructor(private el: ElementRef) { }

  // subscribes to the click event
  @HostListener('click') onCLick(){
    console.log("The accordion body was clicked!",this.el.nativeElement); 
  }

}
