import {Directive, input, OnDestroy} from '@angular/core';

import {RtxScrollSectionDirective} from './rtx-scroll-section-directive';

@Directive({
  selector: '[rtxScrollManager]',
})
export class RtxScrollManagerDirective implements OnDestroy {
  readonly #defaultScrollViewOptions: ScrollIntoViewOptions = {
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  };

  scrollIntoViewOptions = input<
    ScrollIntoViewOptions,
    ScrollIntoViewOptions | string
  >(this.#defaultScrollViewOptions, {
    alias: 'rtxScrollManager',
    transform: (value: Partial<ScrollIntoViewOptions> | string) => {
      return {
        ...this.#defaultScrollViewOptions,
        ...(typeof value === 'string' ? {} : value),
      };
    },
  });

  #sections: Map<string | number, RtxScrollSectionDirective> = new Map<
    string | number,
    RtxScrollSectionDirective
  >();

  register(anchorId: string | number, anchor: RtxScrollSectionDirective) {
    this.#sections.set(anchorId, anchor);
  }

  scrollTo(id: string | number) {
    this.#sections.get(id)?.scrollTo?.();
  }

  unregister(id: string | number) {
    this.#sections.delete(id);
  }

  ngOnDestroy(): void {
    this.#sections.clear();
  }
}
