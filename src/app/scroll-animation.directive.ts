import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]'
})
export class ScrollAnimationDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.el.nativeElement, 'in-view');
        } else {
          this.renderer.removeClass(this.el.nativeElement, 'in-view');
        }
      });
    }, { threshold: 0.5 }); // Element must be fully in view

    observer.observe(this.el.nativeElement);
  }
}
