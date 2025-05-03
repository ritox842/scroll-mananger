import {Component, signal} from '@angular/core';
import {rtxScrollManagerImports} from '../../projects/scroll-manager-lib/src/lib';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [...rtxScrollManagerImports, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly defaultScrollOptions: ScrollIntoViewOptions = {
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  };

  scrollOptions = signal<ScrollIntoViewOptions>(this.defaultScrollOptions);

  sections = Array.from({length: 50}, (_, i) => ({
    id: `section${i + 1}`,
    title: `Section ${i + 1}`
  }));

  updateScrollOptions(scrollOptions: Partial<ScrollIntoViewOptions>) {
    this.scrollOptions.update(current => ({
      ...current,
      ...scrollOptions
    }));
  }

  selectedSection = 'section1';
}
