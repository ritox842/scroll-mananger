# RTX Scroll Manager

A powerful and flexible Angular library for managing scroll behavior in your applications. RTX Scroll Manager provides an intuitive way to handle scroll operations with customizable options and smooth animations.

## Features

- 🎯 **Precise Control**: Fine-tune scroll behavior with customizable options
- 🎨 **Smooth Animations**: Built-in support for smooth scrolling
- 🔄 **Two-way Binding**: Seamless integration with Angular's form controls
- 📱 **Responsive**: Works across all modern browsers and devices
- 🛠 **TypeScript Support**: Full type safety and autocompletion
- 📚 **Well Documented**: Comprehensive documentation and examples

## Installation

```bash
npm install rtx-scroll-manager
```

## Quick Start

1. Import the module in your `app.module.ts`:

```typescript
import { RtxScrollManagerModule } from 'rtx-scroll-manager';

@NgModule({
  imports: [
    RtxScrollManagerModule
  ]
})
export class AppModule { }
```

2. Use the directive in your template:

```html
<div [rtxScrollManager]="scrollOptions">
  <div [rtxScrollSection]="'section1'">
    <!-- Your content here -->
  </div>
  <div [rtxScrollSection]="'section2'">
    <!-- More content -->
  </div>
</div>
```

3. Configure scroll options in your component:

```typescript
import { Component, signal } from '@angular/core';
import { ScrollIntoViewOptions } from 'rtx-scroll-manager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  scrollOptions = signal<ScrollIntoViewOptions>({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  });
}
```

## Scroll Options

The library supports all standard `ScrollIntoViewOptions`:

- `behavior`: 'auto' | 'smooth' | 'instant'
- `block`: 'start' | 'center' | 'end' | 'nearest'
- `inline`: 'start' | 'center' | 'end' | 'nearest'

## Advanced Usage

### Dynamic Scroll Options

```typescript
@Component({
  selector: 'app-root',
  template: `
    <div [rtxScrollManager]="scrollOptions()">
      <div class="controls">
        <select [(ngModel)]="behavior" (ngModelChange)="updateBehavior($event)">
          <option value="smooth">Smooth</option>
          <option value="auto">Auto</option>
          <option value="instant">Instant</option>
        </select>
      </div>
      <div [rtxScrollSection]="'section1'">
        <!-- Content -->
      </div>
    </div>
  `
})
export class AppComponent {
  scrollOptions = signal<ScrollIntoViewOptions>({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  });

  updateBehavior(behavior: ScrollBehavior) {
    this.scrollOptions.update(options => ({
      ...options,
      behavior
    }));
  }
}
```

### Navigation with Scroll Anchors

```html
<div [rtxScrollManager]="scrollOptions()">
  <nav>
    <button [rtxScrollAnchor]="'section1'">Section 1</button>
    <button [rtxScrollAnchor]="'section2'">Section 2</button>
  </nav>
  
  <div [rtxScrollSection]="'section1'">
    <h2>Section 1</h2>
    <!-- Content -->
  </div>
  
  <div [rtxScrollSection]="'section2'">
    <h2>Section 2</h2>
    <!-- Content -->
  </div>
</div>
```

## Benefits

1. **Simplified Scroll Management**
   - No need to manually handle scroll events
   - Clean, declarative syntax
   - Automatic scroll position calculations

2. **Enhanced User Experience**
   - Smooth animations out of the box
   - Consistent behavior across browsers
   - Accessible navigation patterns

3. **Developer Friendly**
   - TypeScript support
   - Angular integration
   - Minimal configuration required

4. **Performance Optimized**
   - Efficient scroll handling
   - Minimal DOM operations
   - Smooth animations

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this library in your projects.

## Support

If you encounter any issues or have questions, please open an issue on GitHub.
