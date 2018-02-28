import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[numberInteger]',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: NumberDirective,
        multi: true
    }]
})
export class NumberDirective {
    onTouched: any;
    onChange: any;
    @Input('numberInteger') numberInteger: string;
    private regex: RegExp = new RegExp(/[0-9]+/g);
    constructor(private el: ElementRef) { }
    writeValue(value: any): void {
        this.numberInteger = value;
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
    @HostListener('keyup', ['$event'])
    onkeyUp(event: any) {
        console.log(event.key);
        event.preventDefault();
        if (event.key.match(/[^\d]+|^[0]+/ig)) {
          console.log(event.key);
          event.target.value = event.target.value.replace(/[^\d]+|^[0]+/ig, '');
          this.registerOnChange(event.target.value);
          this.el.nativeElement.value = event.target.value;
        }
    }
}

