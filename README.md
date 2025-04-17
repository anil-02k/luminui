# LuminUI_4bits

LuminUI_4bits is a lightweight, responsive CSS framework that provides a flexible grid system and utility classes for building modern web applications.

## Features

- *Responsive Grid System*: Create layouts for all screen sizes with a 12-column grid
- *Utility Classes*: Quickly style elements with spacing, alignment, and other utility classes
- *No JavaScript Dependencies*: Pure CSS implementation for better performance
- *Customizable*: Easily customize variables to match your design system
- *React Components*: Ready-to-use React components for common UI patterns

## Installation

### CDN

Add the LuminUI_4bits CSS file to your HTML:

html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/luminui_4bits@1.0.0/dist/luminui_4bits.min.css">


### NPM

bash
npm install luminui_4bits


Then import the CSS in your project:

javascript
import 'luminui_4bits/dist/luminui_4bits.min.css';
import 'luminui/dist/index.css';


## Components

LuminUI_4bits provides a set of React components to help you build your UI faster:

### Alert

Display important messages to users.

jsx
import { Alert } from 'luminui_4bits';

function App() {
  return (
    <Alert type="success" message="Operation completed successfully!" />
  );
}


### BentoGrid

Create modern, card-based layouts with the BentoGrid component.

jsx
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


### Button

Versatile button component with multiple variants and sizes.

jsx
import { Button } from 'luminui_4bits';

function App() {
  return (
    <div>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary" size="lg">Large Secondary</Button>
      <Button variant="danger" isLoading>Loading Button</Button>
    </div>
  );
}


### Card

Display content in a contained, well-defined space.

jsx
import { Card } from 'luminui_4bits';

function App() {
  return (
    <Card title="Card Title" footer="Card Footer">
      <p>Card content goes here</p>
    </Card>
  );
}


### Dropdown

Create dropdown menus for navigation or actions.

jsx
import { Dropdown } from 'luminui_4bits';

function App() {
  return (
    <Dropdown label="Options">
      <Dropdown.Item>Option 1</Dropdown.Item>
      <Dropdown.Item>Option 2</Dropdown.Item>
      <Dropdown.Item>Option 3</Dropdown.Item>
    </Dropdown>
  );
}


### Input

Form input components for collecting user data.

jsx
import { Input } from 'luminui_4bits';

function App() {
  return (
    <Input 
      label="Username" 
      placeholder="Enter your username" 
      type="text" 
    />
  );
}


### ProductCard

Display product information in a card format.

jsx
import { ProductCard } from 'luminui_4bits';

function App() {
  return (
    <ProductCard 
      title="Product Name" 
      price="$99.99" 
      image="product-image.jpg" 
      description="Product description goes here" 
    />
  );
}


### ToggleCheckboxRadio

Form controls for user input.

jsx
import { Toggle, Checkbox, Radio } from 'luminui_4bits';

function App() {
  return (
    <div>
      <Toggle label="Toggle me" />
      <Checkbox label="Check me" />
      <Radio name="group" label="Option 1" />
      <Radio name="group" label="Option 2" />
    </div>
  );
}


## Grid System

LuminUI_4bits provides a flexible, responsive grid system that allows you to create layouts for all screen sizes.

### Basic Structure

The grid system consists of three main components:

1. *Grid Container*: The main wrapper for your grid layout
2. *Rows*: Horizontal groups of columns
3. *Columns*: The building blocks of your layout

html
<div class="grid">
  <div class="row">
    <div class="column-xs-6">Half width on extra small screens</div>
    <div class="column-xs-6">Half width on extra small screens</div>
  </div>
</div>


### Responsive Breakpoints

LuminUI_4bits includes five breakpoints for responsive design:

| Breakpoint | Class Prefix | Min Width | Description |
|------------|--------------|-----------|-------------|
| Extra Small | column-xs- | 320px | For mobile devices |
| Small | column-sm- | 576px | For small tablets |
| Medium | column-md- | 768px | For tablets |
| Large | column-lg- | 992px | For desktops |
| Extra Large | column-xl- | 1200px | For large desktops |

Example of responsive columns:

html
<div class="grid">
  <div class="row">
    <div class="column-xs-12 column-md-6 column-lg-4">
      <!-- Full width on mobile, half on tablet, one-third on desktop -->
    </div>
    <div class="column-xs-12 column-md-6 column-lg-4">
      <!-- Full width on mobile, half on tablet, one-third on desktop -->
    </div>
    <div class="column-xs-12 column-md-12 column-lg-4">
      <!-- Full width on mobile and tablet, one-third on desktop -->
    </div>
  </div>
</div>


### Grid Alignment

LuminUI_4bits provides utility classes for aligning grid items:

#### Justify Content

html
<div class="row justify-content-start">...</div>
<div class="row justify-content-end">...</div>
<div class="row justify-content-center">...</div>
<div class="row justify-content-between">...</div>
<div class="row justify-content-around">...</div>


#### Align Items

html
<div class="row align-items-start">...</div>
<div class="row align-items-end">...</div>
<div class="row align-items-center">...</div>
<div class="row align-items-baseline">...</div>
<div class="row align-items-stretch">...</div>


### Spacing Utilities

#### Grid Gutter

Control the spacing between columns:

html
<div class="grid g-0">...</div> <!-- No gutter -->
<div class="grid g-1">...</div> <!-- Small gutter (0.25rem) -->
<div class="grid g-2">...</div> <!-- Medium gutter (0.5rem) -->
<div class="grid g-3">...</div> <!-- Default gutter (1rem) -->
<div class="grid g-4">...</div> <!-- Large gutter (1.5rem) -->
<div class="grid g-5">...</div> <!-- Extra large gutter (3rem) -->


#### Margin Bottom

Control the bottom margin of columns:

html
<div class="column-xs-6 mb-0">...</div> <!-- No margin -->
<div class="column-xs-6 mb-1">...</div> <!-- Small margin (0.25rem) -->
<div class="column-xs-6 mb-2">...</div> <!-- Medium margin (0.5rem) -->
<div class="column-xs-6 mb-3">...</div> <!-- Default margin (1rem) -->
<div class="column-xs-6 mb-4">...</div> <!-- Large margin (1.5rem) -->
<div class="column-xs-6 mb-5">...</div> <!-- Extra large margin (3rem) -->


#### Padding and Margin Utilities

General padding and margin utilities:

html
<div class="p-0">...</div> <!-- No padding -->
<div class="p-1">...</div> <!-- Small padding (0.25rem) -->
<div class="p-2">...</div> <!-- Medium padding (0.5rem) -->
<div class="p-3">...</div> <!-- Default padding (1rem) -->
<div class="p-4">...</div> <!-- Large padding (1.5rem) -->
<div class="p-5">...</div> <!-- Extra large padding (3rem) -->

<div class="m-0">...</div> <!-- No margin -->
<div class="m-1">...</div> <!-- Small margin (0.25rem) -->
<div class="m-2">...</div> <!-- Medium margin (0.5rem) -->
<div class="m-3">...</div> <!-- Default margin (1rem) -->
<div class="m-4">...</div> <!-- Large margin (1.5rem) -->
<div class="m-5">...</div> <!-- Extra large margin (3rem) -->


## Examples

### Basic Two-Column Layout

html
<div class="grid">
  <div class="row">
    <div class="column-xs-12 column-md-6">
      <div class="column">
        <h2>Left Column</h2>
        <p>This column takes full width on mobile and half width on medium screens and up.</p>
      </div>
    </div>
    <div class="column-xs-12 column-md-6">
      <div class="column">
        <h2>Right Column</h2>
        <p>This column takes full width on mobile and half width on medium screens and up.</p>
      </div>
    </div>
  </div>
</div>


### Three-Column Layout with Different Responsive Behavior

html
<div class="grid">
  <div class="row">
    <div class="column-xs-12 column-sm-6 column-lg-4">
      <div class="column">
        <h2>Column 1</h2>
        <p>Full width on mobile, half on small screens, one-third on large screens.</p>
      </div>
    </div>
    <div class="column-xs-12 column-sm-6 column-lg-4">
      <div class="column">
        <h2>Column 2</h2>
        <p>Full width on mobile, half on small screens, one-third on large screens.</p>
      </div>
    </div>
    <div class="column-xs-12 column-sm-12 column-lg-4">
      <div class="column">
        <h2>Column 3</h2>
        <p>Full width on mobile and small screens, one-third on large screens.</p>
      </div>
    </div>
  </div>
</div>


### Button Layout

html
<div class="grid">
  <div class="row">
    <div class="column-xs-12">
      <div class="column">
        <h2>Button Examples</h2>
        <div class="btn-container">
          <button class="btn column-xs-6 column-sm-4 column-md-3">Button 1</button>
          <button class="btn column-xs-6 column-sm-4 column-md-3">Button 2</button>
          <button class="btn column-xs-6 column-sm-4 column-md-3">Button 3</button>
          <button class="btn column-xs-6 column-sm-4 column-md-3">Button 4</button>
        </div>
      </div>
    </div>
  </div>
</div>


## Customization

You can customize the grid system by modifying the CSS variables:

css
:root {
  --grid-gutter: 1rem;
  --container-max-width: 1100px;
  --column-margin: 1rem;
}


## Browser Support

LuminUI_4bits is compatible with all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Documentation

For more detailed documentation, visit our [documentation site](https://luminui_4bits.com/docs).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

LuminUI_4bits is licensed under the MIT License - see the LICENSE file for details.