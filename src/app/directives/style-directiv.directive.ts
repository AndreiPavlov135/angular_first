import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appStyleDirectiv]',
})
export class StyleDirectivDirective implements OnChanges {
  @Input() appStyleDirectiv!: string;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnChanges(): void {
    let cssClass = '';
    const myDate = Math.ceil(
      (new Date().getTime() - Date.parse(this.appStyleDirectiv)) /
        (1000 * 3600 * 24)
    );

    if (myDate < 750) cssClass = 'blueClass';
    if (myDate > 750 && myDate < 1000) cssClass = 'redClass';
    if (myDate > 1000) cssClass = 'yellowClass';
    this.renderer.addClass(this.el.nativeElement, cssClass);
  }
}
