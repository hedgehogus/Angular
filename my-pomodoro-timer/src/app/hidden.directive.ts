import { Directive, HostListener, Renderer, ElementRef } from '@angular/core';


@Directive({ selector: '[myUnderline]' })

export class HiddenDirective {
    constructor(
        private renderer: Renderer,
        private el: ElementRef
    ){}
  
    @HostListener('mouseenter') onMouseEnter() {
        this.hover(true);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.hover(false);
    }
  
    hover(shouldUnderline: boolean){
        if(shouldUnderline){
            // Mouse enter  
            this.renderer.setElementStyle(this.el.nativeElement, 'text-decoration', 'underline');
        } else {
            // Mouse leave          
            this.renderer.setElementStyle(this.el.nativeElement, 'text-decoration', 'none');
        }
    }
}
