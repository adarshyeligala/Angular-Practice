import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
 selector : '[alphaNumeric]'
})
export class CustomDirective {
    @HostListener('keypress',['$event']) onkeypress(event : KeyboardEvent){
        var inp = String.fromCharCode(event.keyCode);
        if (/[a-zA-Z0-9]/.test(inp)) {
            return true;
        }else{
            event.preventDefault();
            return false;
        }
    }
}

@Directive({
    selector : '[number]'
})
export class NumberDirective{
    constructor(private el: ElementRef){}
    @HostListener('input',['$event']) onInputChange(event){
        const initialValue = this.el.nativeElement.value;
        console.log(initialValue);
        this.el.nativeElement.value = initialValue.replace(/[^0-9]*/g,'');
         if(initialValue !== this.el.nativeElement.value){
             return ''
         }
    }
}

@Directive({
  selector: "[alphabet]",
})
export class AlphabetDirective {
  key: any;
  @HostListener("keydown", ["$event"]) onkeydown(event: KeyboardEvent) {
    this.key = event.keyCode;
    console.log(this.key);
    if (
      (this.key >= 15 && this.key <= 64) ||
      this.key >= 123 ||
      (this.key > 96 && this.key <= 105)
    ) {
        event.preventDefault();
    }
  }
}


 