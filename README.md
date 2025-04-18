
```markdown
# LuminUI_4bits

LuminUI_4bits is a lightweight, responsive CSS framework that provides a flexible grid system and utility classes for building modern web applications.

## Features

- **Responsive Grid System**: Create layouts for all screen sizes with a 12-column grid
- **Utility Classes**: Quickly style elements with spacing, alignment, and other utility classes
- **No JavaScript Dependencies**: Pure CSS implementation for better performance
- **Customizable**: Easily customize variables to match your design system
- **React Components**: Ready-to-use React components for common UI patterns

## Installation

### CDN

Add the LuminUI_4bits CSS file to your HTML:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/luminui_4bits@1.0.0/dist/luminui_4bits.min.css">
```

### NPM

```bash
npm install luminui_4bits
```

Then import the CSS in your project:

```javascript
import 'luminui_4bits/dist/luminui_4bits.min.css';
```

Here's the comprehensive **Utility Classes** section for your `README.md` file, based on the provided CSS:

```markdown
## Utility Classes

LuminUI_4bits provides a comprehensive set of utility classes for rapid UI development.

### Spacing Utilities

All spacing utilities are based on a spacing unit of `0.25rem` (4px) with a 5-step scale.

#### Margin

| Class | Property | Value |
|-------|----------|-------|
| `.m-0` to `.m-5` | margin | `0` to `1.25rem` |
| `.mt-0` to `.mt-5` | margin-top | `0` to `1.25rem` |
| `.mr-0` to `.mr-5` | margin-right | `0` to `1.25rem` |
| `.mb-0` to `.mb-5` | margin-bottom | `0` to `1.25rem` |
| `.ml-0` to `.ml-5` | margin-left | `0` to `1.25rem` |
| `.mx-0` to `.mx-5` | margin-left + margin-right | `0` to `1.25rem` |
| `.my-0` to `.my-5` | margin-top + margin-bottom | `0` to `1.25rem` |

**Example:**
```html
<div class="m-4">All margins: 1rem</div>
<div class="mx-2 my-3">Horizontal: 0.5rem, Vertical: 0.75rem</div>
```

#### Padding

| Class | Property | Value |
|-------|----------|-------|
| `.p-0` to `.p-5` | padding | `0` to `1.25rem` |
| `.pt-0` to `.pt-5` | padding-top | `0` to `1.25rem` |
| `.pr-0` to `.pr-5` | padding-right | `0` to `1.25rem` |
| `.pb-0` to `.pb-5` | padding-bottom | `0` to `1.25rem` |
| `.pl-0` to `.pl-5` | padding-left | `0` to `1.25rem` |
| `.px-0` to `.px-5` | padding-left + padding-right | `0` to `1.25rem` |
| `.py-0` to `.py-5` | padding-top + padding-bottom | `0` to `1.25rem` |

**Example:**
```html
<div class="p-3 px-4">Padding: 0.75rem, Horizontal: 1rem</div>
```

### Typography Utilities

#### Font Size

| Class | Font Size |
|-------|-----------|
| `.text-sm` | 0.875rem (14px) |
| `.text-base` | 1rem (16px) |
| `.text-lg` | 1.125rem (18px) |
| `.text-xl` | 1.25rem (20px) |
| `.text-2xl` | 1.5rem (24px) |

#### Font Weight

| Class | Font Weight |
|-------|-------------|
| `.font-normal` | 400 |
| `.font-medium` | 500 |
| `.font-bold` | 700 |

#### Text Alignment

| Class | Alignment |
|-------|-----------|
| `.text-left` | Left |
| `.text-center` | Center |
| `.text-right` | Right |

**Example:**
```html
<h2 class="text-xl font-bold text-center">Centered Bold Heading</h2>
<p class="text-base font-medium">Medium weight text</p>
```

### Flexbox Utilities

#### Flex Container

| Class | Property |
|-------|----------|
| `.flex` | `display: flex` |
| `.flex-col` | `flex-direction: column` |
| `.flex-wrap` | `flex-wrap: wrap` |
| `.flex-nowrap` | `flex-wrap: nowrap` |

#### Justify Content

| Class | Alignment |
|-------|-----------|
| `.justify-start` | `flex-start` |
| `.justify-end` | `flex-end` |
| `.justify-center` | `center` |
| `.justify-between` | `space-between` |
| `.justify-around` | `space-around` |

#### Align Items

| Class | Alignment |
|-------|-----------|
| `.items-start` | `flex-start` |
| `.items-end` | `flex-end` |
| `.items-center` | `center` |
| `.items-baseline` | `baseline` |
| `.items-stretch` | `stretch` |

#### Flex Items

| Class | Property |
|-------|----------|
| `.flex-1` | `flex: 1` |
| `.flex-auto` | `flex: auto` |
| `.flex-initial` | `flex: initial` |
| `.flex-none` | `flex: none` |

**Example:**
```html
<div class="flex justify-between items-center">
  <div class="flex-1">Left Content</div>
  <div class="flex-none">Right Content</div>
</div>
```

## Components

LuminUI_4bits provides a set of React components to help you build your UI faster:

# CSS Grid System 

## Overview

This CSS grid system provides a responsive, mobile-first layout framework with flexible column sizing and spacing utilities. The system includes:

- 12-column responsive grid
- 5 responsive breakpoints (xs, sm, md, lg, xl)
- Flexbox-based layout
- Utility classes for spacing and alignment
- Support for nested grids

## Core Components

### Grid Container
```css
.grid {
  width: 100%;
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--grid-gutter);
}
```
- Centers content with max-width constraint
- Uses CSS variables for flexible gutter spacing

### Row
```css
.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 calc(-1 * var(--grid-gutter));
}
```
- Flexbox-based row container
- Negative margins compensate for column gutters

### Column
```css
[class*="column-"] {
  position: relative;
  width: 100%;
  padding: 0 var(--grid-gutter);
  margin-bottom: var(--column-margin);
}
```
- Base column styles
- Responsive width classes (see breakpoints below)
- Consistent gutter padding

## Breakpoints

| Prefix | Min Width | Description |
|--------|-----------|-------------|
| xs     | 320px     | Extra small devices (phones) |
| sm     | 576px     | Small devices (landscape phones) |
| md     | 768px     | Medium devices (tablets) |
| lg     | 992px     | Large devices (desktops) |
| xl     | 1200px    | Extra large devices (large desktops) |

Each breakpoint supports columns 1-12 (e.g., `.column-md-6` for a half-width column on medium screens).

## Utilities

### Spacing
- Gutter spacing: `.g-0` to `.g-5`
- Margin bottom: `.mb-0` to `.mb-5`
- Padding: `.p-0` to `.p-5`
- Margin: `.m-0` to `.m-5`

### Alignment
- Justify content: `.justify-content-start`, `.justify-content-end`, `.justify-content-center`, `.justify-content-between`, `.justify-content-around`
- Align items: `.align-items-start`, `.align-items-end`, `.align-items-center`, `.align-items-baseline`, `.align-items-stretch`

## Usage Example

```html
<div class="grid">
  <div class="row">
    <div class="column-xs-12 column-md-6">
      <!-- Content -->
    </div>
    <div class="column-xs-12 column-md-6">
      <!-- Content -->
    </div>
  </div>
</div>
```

## Customization

Modify these CSS variables to customize the grid:

```css
:root {
  --grid-gutter: 1rem;         /* Default gutter spacing */
  --container-max-width: 1100px; /* Max width of grid container */
  --column-margin: 1rem;       /* Bottom margin between columns */
}
```




```markdown
### Alert

Display contextual feedback messages with multiple variants and customization options.

#### Basic Usage

```jsx
import { Alert } from 'luminui_4bits';

function App() {
  return (
    <Alert variant="success">
      Operation completed successfully!
    </Alert>
  );
}
```

#### Props

| Prop         | Type                              | Default    | Description |
|--------------|-----------------------------------|------------|-------------|
| `variant`    | `'primary'`, `'secondary'`, `'danger'`, `'warning'`, `'info'`, `'success'` | `'primary'` | Visual style of the alert |
| `size`       | `'sm'`, `'md'`, `'lg'`            | `'md'`     | Size of the alert |
| `dismissible`| `boolean`                         | `false`    | Whether the alert can be dismissed |
| `onDismiss`  | `() => void`                      | -          | Callback when dismiss button is clicked |
| `icon`       | `React.ReactNode`                 | -          | Custom icon to display |
| `className`  | `string`                          | `''`       | Additional CSS classes |

#### Examples

**Different Variants**
```jsx
<Alert variant="primary">Primary alert</Alert>
<Alert variant="secondary">Secondary alert</Alert>
<Alert variant="success">Success alert</Alert>
<Alert variant="danger">Danger alert</Alert>
<Alert variant="warning">Warning alert</Alert>
<Alert variant="info">Info alert</Alert>
```

**Dismissible Alert**
```jsx
function App() {
  const [showAlert, setShowAlert] = useState(true);

  return showAlert ? (
    <Alert 
      variant="warning" 
      dismissible 
      onDismiss={() => setShowAlert(false)}
    >
      This alert can be dismissed
    </Alert>
  ) : null;
}
```

**Alert with Icon**
```jsx
<Alert variant="info" icon={<InfoIcon />}>
  This alert includes a custom icon
</Alert>
```

**Sized Alerts**
```jsx
<Alert size="sm">Small alert</Alert>
<Alert size="md">Medium alert (default)</Alert>
<Alert size="lg">Large alert</Alert>
```

**Custom Styling**
```jsx
<Alert 
  variant="danger" 
  className="custom-alert-class"
  style={{ borderLeft: '4px solid red' }}
>
  Custom styled alert
</Alert>
```

### BentoGrid

Create modern, card-based layouts with the BentoGrid component.

```jsx
import { BentoGrid, BentoCard } from 'luminui_4bits';

function App() {
  return (
    <BentoGrid>
      <BentoCard title="Card 1" description="Description for card 1" />
      <BentoCard title="Card 2" description="Description for card 2" />
      <BentoCard title="Card 3" description="Description for card 3" />
    </BentoGrid>
  );
}
```

Here's the comprehensive `Button` section for your `README.md` file, based on the provided component implementation:

```markdown
### Button

A highly customizable button component with multiple variants, sizes, and shapes.

#### Basic Usage

```jsx
import { Button } from 'luminui_4bits';

function App() {
  return (
    <Button variant="primary" onClick={() => console.log('Clicked!')}>
      Click Me
    </Button>
  );
}
```

#### Props

| Prop         | Type                                      | Default       | Description |
|--------------|-------------------------------------------|---------------|-------------|
| `variant`    | `'primary'`, `'secondary'`, `'danger'`, `'warning'`, `'info'`, `'success'` | `'primary'`   | Visual style variant |
| `size`       | `'sm'`, `'md'`, `'lg'`                   | `'md'`        | Button size |
| `shape`      | `'rectangle'`, `'rounded'`, `'pill'`, `'circle'` | `'rectangle'` | Button shape |
| `outline`    | `boolean`                                | `false`       | Outline style |
| `fullWidth`  | `boolean`                                | `false`       | Full-width button |
| `isLoading`  | `boolean`                                | `false`       | Loading state |
| `className`  | `string`                                 | `''`          | Additional CSS classes |
| All standard button HTML attributes are supported |

#### Examples

**Variants**
```jsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Danger</Button>
<Button variant="warning">Warning</Button>
<Button variant="info">Info</Button>
<Button variant="success">Success</Button>
```

**Outline Buttons**
```jsx
<Button variant="primary" outline>Primary Outline</Button>
<Button variant="danger" outline>Danger Outline</Button>
```

**Sizes**
```jsx
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
```

**Shapes**
```jsx
<Button shape="rectangle">Rectangle</Button>
<Button shape="rounded">Rounded</Button>
<Button shape="pill">Pill</Button>
<Button shape="circle">○</Button>
```

**Loading State**
```jsx
function App() {
  const [loading, setLoading] = useState(false);
  
  return (
    <Button 
      isLoading={loading}
      onClick={() => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
      }}
    >
      Submit
    </Button>
  );
}
```

**Full Width Button**
```jsx
<Button fullWidth>Full Width Button</Button>
```

**Disabled State**
```jsx
<Button disabled>Disabled Button</Button>
```

**Custom Styling**
```jsx
<Button 
  className="custom-btn"
  style={{ 
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
    textTransform: 'uppercase'
  }}
>
  Custom Button
</Button>
```

#### CSS Structure

The button uses these CSS classes that you can override:
- `.btn`: Base button style
- `.btn-{variant}`: Solid variant styles (e.g., `.btn-primary`)
- `.btn-outline-{variant}`: Outline variant styles
- `.btn-{size}`: Size classes (e.g., `.btn-sm`)
- `.btn-{shape}`: Shape classes (e.g., `.btn-pill`)
- `.btn-full`: Full-width modifier
- `.btn-loading`: Loading state modifier
- `.btn-spinner`: Loading spinner element

```

```markdown
### BentoGrid

Create modern, Pinterest-style card layouts with customizable columns and spacing.

#### Basic Usage

```jsx
import { BentoGrid } from 'luminui_4bits';

function App() {
  return (
    <BentoGrid>
      {/* Your grid items here */}
      <div className="bento-item">Item 1</div>
      <div className="bento-item">Item 2</div>
      <div className="bento-item">Item 3</div>
    </BentoGrid>
  );
}
```

#### Props

| Prop        | Type               | Default | Description |
|-------------|--------------------|---------|-------------|
| `columns`   | `number`           | `4`     | Number of columns in the grid |
| `gap`       | `string`           | `'1rem'`| Spacing between grid items |
| `children`  | `React.ReactNode`  | -       | Grid items to display |
| `className` | `string`           | `''`    | Additional CSS classes |

#### Examples

**Custom Columns and Gap**
```jsx
<BentoGrid columns={3} gap="2rem">
  {/* Grid items */}
</BentoGrid>
```

**Responsive Bento Grid**
```jsx
function App() {
  return (
    <BentoGrid 
      columns={window.innerWidth > 768 ? 4 : 2}
      gap={window.innerWidth > 768 ? '1.5rem' : '0.75rem'}
    >
      {/* Responsive grid items */}
    </BentoGrid>
  );
}
```

**With Custom Styling**
```jsx
<BentoGrid 
  className="custom-bento-grid"
  style={{ 
    backgroundColor: '#f5f5f5',
    padding: '1rem'
  }}
>
  {/* Grid items */}
</BentoGrid>
```

#### CSS Variables

The component uses these CSS variables that you can override:

```css
.bento-grid {
  --columns: 4; /* Default number of columns */
  --gap: 1rem;  /* Default gap between items */
}
```

#### Implementation Notes

1. The grid uses CSS Grid layout under the hood
2. Items should use the `bento-item` class for proper styling:
   ```css
   .bento-item {
     break-inside: avoid;
     margin-bottom: var(--gap);
   }
   ```
3. For best results, combine with the `BentoCard` component


# Card 

A reusable Card component with multiple variants and customizable options.

## Features

- Multiple visual variants ('japan', 'spain', 'india', 'default')
- Custom background image support
- Title and description content
- Built-in "Learn More" button
- Customizable click handler

## Props

| Prop | Type | Description | Default |
|------|------|-------------|---------|
| `variant` | `'japan' \| 'spain' \| 'india' \| 'default' \| string` | Visual style variant | `'default'` |
| `title` | `string` | Card title text | **required** |
| `description` | `string` | Card description text | **required** |
| `backgroundImage` | `string` | URL for background image | optional |
| `onClick` | `() => void` | Click handler for the Learn More button | optional |

## Usage

```jsx
import { Card } from './Card';

function App() {
  return (
    <Card
      variant="japan"
      title="Japanese Culture"
      description="Discover the rich traditions of Japan"
      backgroundImage="/path/to/image.jpg"
      onClick={() => console.log('Learn more clicked')}
    />
  );
}
```

## Styling

The component uses CSS classes for styling:
- `.card` - Base card styles
- `.card.default`, `.card.japan`, etc. - Variant-specific styles
- `.card-title` - Styles for the title
- `.card-bottom` - Container for bottom content
- `.card-text` - Description text container
- `.card-line` - Decorative line element
- `.card-button` - Learn More button styles

Customize the appearance by modifying the `Card.css` file.

## Dependencies

- Requires a custom `Button` component (imported from `../Button`)
- React



## Customization

You can customize the grid system by modifying these CSS variables:

```css
:root {
  --grid-gutter: 1rem;
  --container-max-width: 1100px;
  --column-margin: 1rem;
}
```

# Input Component

A customizable Input component with multiple variants, sizes, and additional features like labels and helper text.

## Features

- Multiple visual variants ('default', 'primary', 'secondary', 'success', 'error', 'warning', 'info')
- Three size options ('sm', 'md', 'lg')
- Optional label and helper text
- Full-width option
- Extends native HTML input attributes
- Custom class name support

## Props

| Prop | Type | Description | Default |
|------|------|-------------|---------|
| `variant` | `'default' \| 'primary' \| 'secondary' \| 'success' \| 'error' \| 'warning' \| 'info' \| string` | Visual style variant | `'default'` |
| `size` | `'sm' \| 'md' \| 'lg'` | Input size | `'md'` |
| `label` | `string` | Label text displayed above input | optional |
| `helperText` | `string` | Helper text displayed below input | optional |
| `fullWidth` | `boolean` | Makes input take 100% width | `false` |
| `className` | `string` | Additional CSS class names | `''` |
| `...props` | `React.InputHTMLAttributes<HTMLInputElement>` | All standard input props | - |

## Usage

```jsx
import { Input } from './Input';

function App() {
  return (
    <>
      <Input
        variant="primary"
        size="lg"
        label="Username"
        placeholder="Enter your username"
      />
      
      <Input
        variant="error"
        helperText="Invalid email format"
        type="email"
        fullWidth
      />
    </>
  );
}
```

## Styling

The component uses CSS classes for styling:
- `.input` - Base input styles
- `.input-{variant}` - Variant-specific styles (e.g., `.input-primary`)
- `.input-{size}` - Size-specific styles (e.g., `.input-sm`)
- `.input-full-width` - Full-width modifier
- `.input-container` - Wrapper div styles
- `.input-label` - Label styles
- `.input-helper-text` - Helper text styles

Customize the appearance by modifying the `Input.css` file.


```markdown
### ProductCard

A versatile product display card component with image, description, tags, and call-to-action button.

#### Basic Usage

```jsx
import { ProductCard } from 'luminui_4bits';

function App() {
  return (
    <ProductCard
      imageUrl="/product-image.jpg"
      title="Premium Headphones"
      description="High-quality noise-cancelling headphones with 30hr battery life"
      price="$199.99"
    />
  );
}
```

#### Props

| Prop            | Type               | Default    | Description |
|-----------------|--------------------|------------|-------------|
| `imageUrl`      | `string`           | -          | URL of the product image |
| `altText`       | `string`           | `''`       | Alternative text for the image |
| `title`         | `string`           | -          | Product title |
| `description`   | `string`           | -          | Product description |
| `tags`          | `string[]`         | `[]`       | Array of tags/labels |
| `price`         | `string`           | -          | Formatted price string |
| `isFavorite`    | `boolean`          | `false`    | Whether to show favorite star |

#### Examples

**Basic Product Card**
```jsx
<ProductCard
  imageUrl="headphones.jpg"
  title="Wireless Headphones"
  description="Premium sound quality with Bluetooth 5.0"
  price="$129.99"
/>
```

**With Tags and Favorite**
```jsx
<ProductCard
  imageUrl="smartwatch.jpg"
  title="Smart Watch"
  description="Track your fitness and notifications"
  tags={['New', 'Best Seller', 'Limited']}
  price="$249.99"
  isFavorite={true}
/>
```

**Customized Card**
```jsx
<ProductCard
  imageUrl="camera.jpg"
  altText="Professional DSLR Camera"
  title="DSLR Camera"
  description="24.2MP sensor with 4K video"
  tags={['Sale', 'Popular']}
  price="$599.99"
  className="custom-product-card"
/>
```

**Grid of Products**
```jsx
<div className="product-grid">
  {products.map(product => (
    <ProductCard
      key={product.id}
      imageUrl={product.image}
      title={product.name}
      description={product.description}
      price={product.price}
    />
  ))}
</div>
```

#### CSS Structure

The component uses these CSS classes that you can override:

```css
.product-card {
  /* Base card styling */
}

.product-image-container {
  /* Image wrapper with favorite star */
}

.favorite-star {
  /* Favorite indicator */
}

.favorite-star.active {
  /* Active favorite state */
}

.product-info {
  /* Content area styling */
}

.product-tags {
  /* Tag container */
}

.product-tag {
  /* Individual tag styling */
}

.product-action {
  /* Price and button container */
}

.order-button {
  /* Custom button styling */
}
```

#### Customization Options

1. **Image**: Set custom aspect ratio or hover effects
2. **Favorite Star**: Replace with custom icon
3. **Tags**: Style differently based on content
4. **Button**: Use any Button component props

```jsx
<ProductCard
  // ...other props
  isFavorite={userFavorites.includes(productId)}
  className={isFeatured ? 'featured-product' : ''}
/>
```
# ToggleControls Component

A versatile component that renders toggle switches, checkboxes, or radio buttons with consistent styling and behavior.

## Features

- Supports three control types: toggle switches, checkboxes, and radio buttons
- Multiple visual variants ('default', 'primary', 'secondary', 'success', 'error', 'warning', 'info')
- Three size options ('sm', 'md', 'lg')
- Optional label and helper text
- Full-width option
- Disabled state
- Controlled component support
- Custom class name support
- Radio button group support via `name` prop

## Props

| Prop | Type | Description | Default |
|------|------|-------------|---------|
| `type` | `'toggle' \| 'checkbox' \| 'radio'` | Control type to render | **required** |
| `variant` | `ControlVariant` | Visual style variant | `'default'` |
| `size` | `ControlSize` | Control size | `'md'` |
| `label` | `string` | Label text | optional |
| `helperText` | `string` | Helper text displayed below control | optional |
| `fullWidth` | `boolean` | Makes control take 100% width | `false` |
| `className` | `string` | Additional CSS class names | `''` |
| `disabled` | `boolean` | Disables the control | `false` |
| `checked` | `boolean` | Controlled checked state | `false` |
| `onChange` | `(checked: boolean) => void` | Change handler | optional |
| `name` | `string` | Group name for radio buttons | optional |
| `value` | `string` | Value for radio buttons | optional |

## Usage

### Toggle Switch
```jsx
<ToggleControls
  type="toggle"
  variant="primary"
  label="Dark Mode"
  checked={isDarkMode}
  onChange={setIsDarkMode}
/>
```

### Checkbox
```jsx
<ToggleControls
  type="checkbox"
  label="Accept Terms"
  checked={acceptedTerms}
  onChange={setAcceptedTerms}
  helperText="You must accept the terms to continue"
/>
```

### Radio Button
```jsx
<ToggleControls
  type="radio"
  name="notification-pref"
  value="email"
  label="Email Notifications"
  checked={preference === 'email'}
  onChange={() => setPreference('email')}
/>
```

## Styling

The component uses a comprehensive CSS class system:
- Base classes: `.control`, `.control-toggle`, `.control-checkbox`, `.control-radio`
- Variant classes: `.control-{variant}` (e.g., `.control-primary`)
- Size classes: `.control-{size}` (e.g., `.control-sm`)
- State classes: `.control-checked`, `.control-disabled`
- Layout classes: `.control-full-width`
- Component parts:
  - Toggle: `.toggle-container`, `.toggle-input`, `.toggle-slider`
  - Checkbox: `.checkbox-container`, `.checkbox-input`, `.checkbox-checkmark`, `.checkbox-label`
  - Radio: `.radio-container`, `.radio-input`, `.radio-checkmark`, `.radio-label`
  - Shared: `.control-label`, `.control-helper-text`




## Browser Support

LuminUI_4bits is compatible with all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Documentation

For more detailed documentation, visit our [GitHub repository](https://github.com/anil-02k/luminui).

## License

MIT © 2023 LuminUI_4bits
```
