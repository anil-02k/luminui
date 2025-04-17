# LuminUI

A modern, lightweight, and customizable CSS framework with React components.

## Features

- 🎨 12-column grid system with responsive breakpoints
- 🛠️ Utility-first classes for spacing, typography, and flexbox
- 🌓 Dark mode support (automatic and manual)
- ⚛️ React components with TypeScript
- 📦 Modern build setup with Rollup and PostCSS
- 🔄 Automatic CSS loading via the "style" field

## Installation

```bash
npm install luminui
# or
yarn add luminui
```

## Usage

### Automatic CSS Loading

LuminUI includes the `style` field in its package.json, which means bundlers like Webpack, Vite, Create React App, and others will automatically include the CSS when you import the JavaScript:

```jsx
import { Button } from 'luminui';
// CSS is automatically loaded - no need for a separate import!
```

### Grid System

LuminUI provides a 12-column grid system with responsive breakpoints:

- Extra Small (xs): < 576px
- Small (sm): ≥ 576px
- Medium (md): ≥ 768px
- Large (lg): ≥ 992px
- Extra Large (xl): ≥ 1200px

Example:

```jsx
import 'luminui/dist/index.css';

function App() {
  return (
    <div className="grid">
      <div className="row">
        <div className="column-xs-12 column-sm-6 column-md-4 column-lg-3 column-xl-2">
          Content 1
        </div>
        <div className="column-xs-12 column-sm-6 column-md-4 column-lg-3 column-xl-2">
          Content 2
        </div>
        <div className="column-xs-12 column-sm-12 column-md-4 column-lg-3 column-xl-2">
          Content 3
        </div>
        <div className="column-xs-12 column-sm-12 column-md-12 column-lg-3 column-xl-6">
          Content 4
        </div>
      </div>
    </div>
  );
}
```

### Utility Classes

LuminUI includes utility classes for:

- Spacing (margin, padding)
- Colors (text, background)
- Typography (font size, weight, alignment)
- Flexbox and Grid
- Display and Position

Example:

```jsx
// Spacing
<div className="m-2 p-3">Margin and padding</div>

// Typography
<h1 className="text-2xl font-bold text-center">Large Bold Title</h1>

// Flexbox
<div className="flex justify-between items-center">
  <div>Left content</div>
  <div>Right content</div>
</div>
```

### Button Component

```jsx
import { Button } from 'luminui';

function App() {
  return (
    <div>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary" size="lg">Large Secondary</Button>
      <Button variant="danger" isLoading>Loading Button</Button>
      <Button variant="info" shape="pill">Pill Button</Button>
      <Button variant="success" shape="circle">+</Button>
      <Button variant="primary" outline>Outline Primary</Button>
      <Button variant="danger" outline shape="rounded">Outline Danger</Button>
    </div>
  );
}
```

The Button component supports the following props:

- `variant`: 'primary' | 'secondary' | 'danger' | 'warning' | 'info' | 'success'
- `size`: 'sm' | 'md' | 'lg'
- `shape`: 'rectangle' | 'rounded' | 'pill' | 'circle'
- `outline`: boolean - Creates a button with transparent background and colored border
- `fullWidth`: boolean
- `isLoading`: boolean

### Dark Mode

LuminUI supports both automatic and manual dark mode toggling:

#### Automatic Dark Mode

The framework automatically switches to dark mode based on the user's system preferences using the `prefers-color-scheme` media query.

#### Manual Dark Mode

To manually toggle dark mode, add the `dark-mode` class to the `<html>` or any parent element:

```jsx
function App() {
  return (
    <div className="dark-mode">
      {/* Your app content */}
    </div>
  );
}
```

## Customization

### CSS Variables

You can override the default theme by setting CSS variables:

```css
:root {
  --primary: #your-color;
  --secondary: #your-color;
  /* ... other variables */
}
```

### Breakpoints

Default breakpoints:
- Extra small (xs): ≥320px
- Small (sm): ≥576px
- Medium (md): ≥768px
- Large (lg): ≥992px
- Extra large (xl): ≥1200px

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © [Your Name] 