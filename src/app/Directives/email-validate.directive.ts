import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appEmailValidate]',
  standalone: true
})
export class EmailVailidateDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input') onInput(){
    const value = this.el.nativeElement.value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailPattern.test(value)){
      this.el.nativeElement.style.border =  '2px solid green';
    }else{
      this.el.nativeElement.style.border =  '2px solid red';
    }
  }

}
