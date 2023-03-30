import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[only-numbers]'
})
export class OnlyNumbersDirective {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: any) {
    this.el.nativeElement.querySelectorAll("input[type='text']").forEach((input: any) => {
      if (/\D/.test(input.value)) {
        input.value = 0;
        event.stopPropagation();
      }
    });
  }
}
