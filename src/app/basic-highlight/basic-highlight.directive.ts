import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  @Input('appBasicHighlight') defaultColor: string
  @Input() defaultBgColor: string = 'transparent'

  @HostBinding('style.color') color: string
  @HostBinding('style.backgroundColor') bgColor: string

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.color = this.defaultColor
    this.bgColor = this.defaultBgColor
  }

  @HostListener('mouseenter') mouseenter() {
    this.bgColor = "#aa2233"
    this.color = "#fff"
  }

  @HostListener('mouseleave') mouseleave() {
    this.color = this.defaultColor
    this.bgColor = this.defaultBgColor
  }
}
