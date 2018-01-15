import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive ({
    selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

    @HostBinding ('class.open') open = false;

    @HostListener('click') openClose(eventData: Event) {
        this.open = !this.open;
    }

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit() {
    }
}
