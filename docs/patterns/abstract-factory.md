# Abstract Factory

Provides an interface for creating families of related objects without specifying their concrete classes.

## Description

Abstract Factory is a creational design pattern that lets you produce families of related objects (e.g. a chair, sofa, and table that share a style) without coupling your code to their concrete classes. Each factory variant produces a different family of products. The client works only with abstract interfaces, making it easy to swap entire product families at once.

## Implementation

```js
// Abstract Products
class Button {
  render() {
    throw new Error('render() must be implemented');
  }
}

class Checkbox {
  render() {
    throw new Error('render() must be implemented');
  }
}

// Concrete Products — Light theme
class LightButton extends Button {
  render() {
    return 'Rendering a light-themed button';
  }
}

class LightCheckbox extends Checkbox {
  render() {
    return 'Rendering a light-themed checkbox';
  }
}

// Concrete Products — Dark theme
class DarkButton extends Button {
  render() {
    return 'Rendering a dark-themed button';
  }
}

class DarkCheckbox extends Checkbox {
  render() {
    return 'Rendering a dark-themed checkbox';
  }
}

// Abstract Factory
class UIFactory {
  createButton() {
    throw new Error('createButton() must be implemented');
  }

  createCheckbox() {
    throw new Error('createCheckbox() must be implemented');
  }
}

// Concrete Factories
class LightThemeFactory extends UIFactory {
  createButton() {
    return new LightButton();
  }

  createCheckbox() {
    return new LightCheckbox();
  }
}

class DarkThemeFactory extends UIFactory {
  createButton() {
    return new DarkButton();
  }

  createCheckbox() {
    return new DarkCheckbox();
  }
}

// Client code works with any factory
function renderUI(factory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();
  return [button.render(), checkbox.render()];
}
```

## When to Use ?

- Your code needs to work with various families of related products, but you don't want to depend on concrete classes.
- You want to enforce that products from the same family are used together (e.g. don't mix light buttons with dark checkboxes).
- You want to swap product families at runtime (e.g. theming, platform-specific UI).

## Advantages and Disadvantages

**Advantages:**

- Guarantees compatibility between products of the same family.
- Avoids tight coupling between client code and concrete products.
- Single Responsibility Principle — product creation is extracted into dedicated factory classes.

**Disadvantages:**

- Adds complexity with many new interfaces and classes.
- Adding a new product type (e.g. `Slider`) requires changes to every factory.
- Can be overkill when there is only one product family.
