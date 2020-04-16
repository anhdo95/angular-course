import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
  }

  @HostListener('mouseenter') mouseenter() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#d2d2e3')
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', '#333')
  }

  @HostListener('mouseleave') mouseleave() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent')
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'inherit')
  }
}
