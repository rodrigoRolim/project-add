import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[numberInteger]'
})
export class NumberDirective {
    private regex: RegExp = new RegExp(/[0-9]+/g);
    constructor(private el: ElementRef) { }
    @HostListener('keyup', ['$event'])
    onkeyUp(event: KeyboardEvent) {
        console.log(event.key);
        if (event.key.match(/[^\d]+|^[0]+/ig)) {
          event.preventDefault();
          console.log(event.key);
          event.key.replace(/[^\d]+|^[0]+/ig, '');
        }
    }
}

