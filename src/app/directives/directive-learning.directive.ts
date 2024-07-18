import { Directive, ElementRef, asNativeElements } from '@angular/core';

@Directive({
  selector: '[appDirectiveLearning]'
})
export class DirectiveLearningDirective {

 constructor(el: ElementRef) {
  el.nativeElement.style.color = 'red';
  if(el.nativeElement.tagName === "H2"){
    el.nativeElement.style.color = 'blue';
  }
console.log(el);
  }

 value?:string="blue";
 ngStyle:any;
}
