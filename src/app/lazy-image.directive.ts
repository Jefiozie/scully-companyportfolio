import { Directive, ElementRef } from '@angular/core';

// tslint:disable-next-line: directive-selector
@Directive({ selector: 'lazy-load' })
export class LazyImageDirective {
  constructor({ nativeElement }: ElementRef<HTMLImageElement>) {
    const supports = 'loading' in HTMLImageElement.prototype;

    if (supports) {
      nativeElement.setAttribute('loading', 'lazy');
    }
  }
}
