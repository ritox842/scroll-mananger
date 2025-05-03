import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { rtxScrollManagerImports } from '../../projects/scroll-manager-lib/src/lib';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        FormsModule,
        CommonModule,
        ...rtxScrollManagerImports
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Scroll Options', () => {
    it('should initialize with default scroll options', () => {
      const defaultOptions: ScrollIntoViewOptions = {
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      };
      expect(component.scrollOptions()).toEqual(defaultOptions);
    });

    it('should update behavior option', () => {
      component.updateScrollOptions({ behavior: 'auto' as ScrollBehavior });
      expect(component.scrollOptions().behavior).toBe('auto');
    });

    it('should update block option', () => {
      component.updateScrollOptions({ block: 'center' as ScrollLogicalPosition });
      expect(component.scrollOptions().block).toBe('center');
    });

    it('should update inline option', () => {
      component.updateScrollOptions({ inline: 'end' as ScrollLogicalPosition });
      expect(component.scrollOptions().inline).toBe('end');
    });

    it('should preserve other options when updating a single option', () => {
      const initialOptions = component.scrollOptions();
      component.updateScrollOptions({ behavior: 'auto' as ScrollBehavior });
      expect(component.scrollOptions().block).toBe(initialOptions.block);
      expect(component.scrollOptions().inline).toBe(initialOptions.inline);
    });
  });

  describe('Sections', () => {
    it('should initialize with 50 sections', () => {
      expect(component.sections.length).toBe(50);
    });

    it('should have correct section IDs', () => {
      component.sections.forEach((section, index) => {
        expect(section.id).toBe(`section${index + 1}`);
      });
    });

    it('should have correct section titles', () => {
      component.sections.forEach((section, index) => {
        expect(section.title).toBe(`Section ${index + 1}`);
      });
    });
  });

  describe('Template', () => {
    it('should render all sections', () => {
      const compiled = fixture.nativeElement;
      const sections = compiled.querySelectorAll('.section');
      expect(sections.length).toBe(50);
    });

    it('should render scroll options controls', () => {
      const compiled = fixture.nativeElement;
      const optionGroups = compiled.querySelectorAll('.option-group');
      expect(optionGroups.length).toBe(3); // behavior, block, inline
    });

    it('should render navigation buttons', () => {
      const compiled = fixture.nativeElement;
      const navButtons = compiled.querySelectorAll('.nav-buttons button');
      expect(navButtons.length).toBe(50);
    });

    it('should have documentation links', () => {
      const compiled = fixture.nativeElement;
      const docLinks = compiled.querySelectorAll('.docs-link');
      expect(docLinks.length).toBe(3); // one for each option
    });

    it('should update selected section when clicking navigation button', () => {
      const compiled = fixture.nativeElement;
      const secondButton = compiled.querySelectorAll('.nav-buttons button')[1];
      secondButton.click();
      fixture.detectChanges();
      expect(component.selectedSection).toBe('section2');
    });

    it('should have correct documentation URLs', () => {
      const compiled = fixture.nativeElement;
      const docLinks = compiled.querySelectorAll('.docs-link');
      const baseUrl = 'https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView#';
      
      expect(docLinks[0].href).toContain(baseUrl + 'block');
      expect(docLinks[1].href).toContain(baseUrl + 'block');
      expect(docLinks[2].href).toContain(baseUrl + 'inline');
    });
  });

  describe('Two-way binding', () => {
    it('should update scroll options through updateScrollOptions method', () => {
      // Test behavior update
      component.updateScrollOptions({ behavior: 'auto' as ScrollBehavior });
      fixture.detectChanges();
      expect(component.scrollOptions().behavior).toBe('auto');

      // Test block update
      component.updateScrollOptions({ block: 'center' as ScrollLogicalPosition });
      fixture.detectChanges();
      expect(component.scrollOptions().block).toBe('center');

      // Test inline update
      component.updateScrollOptions({ inline: 'end' as ScrollLogicalPosition });
      fixture.detectChanges();
      expect(component.scrollOptions().inline).toBe('end');
    });

    it('should render select elements with correct initial values', () => {
      const compiled = fixture.nativeElement;
      const selects = compiled.querySelectorAll('select');
      
      expect(selects[0].value).toBe('smooth');
      expect(selects[1].value).toBe('start');
      expect(selects[2].value).toBe('nearest');
    });
  });
});
