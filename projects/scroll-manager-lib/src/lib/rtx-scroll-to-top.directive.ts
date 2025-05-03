import { Directive, inject, input } from '@angular/core';

import { RtxScrollManagerDirective } from './rtx-scroll-manager.directive';

@Directive({
  selector: '[rtxScrollToTop]',
  host: {
    '(click)': 'scrollToTop()',
  },
})
export class RtxScrollToTopDirective {
  #manager = inject(RtxScrollManagerDirective, { optional: true });

  target = input.required<HTMLElement>({
    alias: 'rtxScrollToTop',
  });
  scrollBehavior = input<ScrollIntoViewOptions['behavior']>();

  scrollToTop() {
    this.target().scrollTo({
      top: 0,
      left: 0,
      behavior:
        this.scrollBehavior() ||
        this.#manager?.scrollIntoViewOptions().behavior ||
        'smooth',
    });
  }
}
