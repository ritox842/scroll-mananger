import {
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  OnDestroy,
} from '@angular/core';

import { RtxScrollManagerDirective } from './rtx-scroll-manager.directive';

@Directive({
  selector: '[rtxScrollSection]',
})
export class RtxScrollSectionDirective implements OnDestroy {
  #manager = inject(RtxScrollManagerDirective);
  #host = inject(ElementRef<HTMLElement>);

  id = input.required<string | number>({
    alias: 'rtxScrollSection',
  });

  scrollIntoViewOptions = input<Partial<ScrollIntoViewOptions>>({});

  #registerSection = effect(() => {
    // Register the section with the manager
    this.#manager.register(this.id(), this);
  });

  scrollTo() {
    debugger;
    this.#host.nativeElement.scrollIntoView({
      ...this.#manager.scrollIntoViewOptions(),
      ...this.scrollIntoViewOptions(),
    });
  }

  ngOnDestroy(): void {
    this.#manager.unregister(this.id());
  }
}
