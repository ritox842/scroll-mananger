import { Directive, inject, input } from '@angular/core';

import { RtxScrollManagerDirective } from './rtx-scroll-manager.directive';

@Directive({
  selector: '[rtxScrollAnchor]',
  host: {
    '(click)': 'scrollTo()',
  },
})
export class RtxScrollAnchorDirective {
  #manager = inject(RtxScrollManagerDirective);
  id = input.required<string | number>({
    alias: 'rtxScrollAnchor',
  });

  scrollTo() {
    this.#manager.scrollTo(this.id());
  }
}
