import { Directive, HostListener, ElementRef, Input } from '@angular/core';
// From video 71: Creating a custom directive

// The selector has [], which means that any element that has this attribute, it will apply this directive to that element
@Directive({
  selector: '[appInputFormat]'
  // [like for Components]: It is a good practice to prefix with 'app' to avoid clashing with standard HTML 
  // attributes or other directives declared in 3rd party libraries 
})
export class InputFormatDirective {

  @Input('appInputFormat') format;

  // We need to inject an element reference object
  constructor(private el: ElementRef) { }

  @HostListener('focus') onFocus(){ // the arg is the name of the DOM event (focus)
    console.log('focus');
  }

  @HostListener('blur') onBlur(){ // the arg is the name of the DOM event (focus)
    console.log('blur');
    let value: string = this.el.nativeElement.value;

    if(this.format == 'lowercase')
      this.el.nativeElement.value = value.toLowerCase();
    else
      this.el.nativeElement.value = value.toUpperCase();  
  }

}
