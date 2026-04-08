# Prototype

Creates new objects by cloning an existing instance instead of building from scratch.

## Description

Prototype is a creational design pattern that lets you copy existing objects without making your code dependent on their classes. The original object exposes a `clone()` method that produces a duplicate. This is especially useful when object creation is expensive (e.g. involves complex setup, API calls, or deep nesting) and you need many similar instances with small variations.

## Implementation

```js
class Shape {
  constructor({ type, x = 0, y = 0, color = 'black' } = {}) {
    this.type = type;
    this.x = x;
    this.y = y;
    this.color = color;
  }

  clone() {
    // Creates a new instance with the same property values
    return new Shape({
      type: this.type,
      x: this.x,
      y: this.y,
      color: this.color,
    });
  }

  toString() {
    return `${this.color} ${this.type} at (${this.x}, ${this.y})`;
  }
}

// Registry that stores pre-configured prototypes
class ShapeRegistry {
  constructor() {
    this._prototypes = {};
  }

  register(name, prototype) {
    this._prototypes[name] = prototype;
  }

  get(name) {
    const proto = this._prototypes[name];
    if (!proto) {
      throw new Error(`Prototype "${name}" not found`);
    }
    return proto.clone();
  }
}
```

## When to Use ?

- Object creation is expensive and you want to avoid repeating the setup cost.
- You need many objects that differ only slightly from a common template.
- You want to decouple your code from the concrete classes of objects it copies.

## Advantages and Disadvantages

**Advantages:**

- Clones objects without coupling to their concrete classes.
- Avoids repeated expensive initialization — clone a pre-built prototype instead.
- Simplifies creation of complex objects with pre-configured defaults via a prototype registry.

**Disadvantages:**

- Cloning objects with circular references can be tricky.
- Deep cloning nested objects requires extra care to avoid shared references.
- Each class must implement its own `clone()` method.
