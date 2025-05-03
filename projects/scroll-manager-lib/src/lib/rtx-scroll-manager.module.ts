import { RtxScrollAnchorDirective } from './rtx-scroll-anchor.directive';
import { RtxScrollSectionDirective } from './rtx-scroll-section-directive';
import { RtxScrollToTopDirective } from './rtx-scroll-to-top.directive';
import { RtxScrollManagerDirective } from './rtx-scroll-manager.directive';

export const rtxScrollManagerImports = [
  RtxScrollManagerDirective,
  RtxScrollAnchorDirective,
  RtxScrollSectionDirective,
  RtxScrollToTopDirective,
] as const;
