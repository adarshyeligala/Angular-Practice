import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
  selector :'[color]'
})
export class ColorDirective{
   constructor(private el:ElementRef){
    el.nativeElement.style.backgroundColor = 'yellow'
   }
      
}