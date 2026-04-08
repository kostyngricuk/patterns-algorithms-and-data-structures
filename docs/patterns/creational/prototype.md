# Prototype

Creates new objects by cloning an existing instance instead of building from scratch.

## Description

The Prototype pattern leverages JavaScript's native prototype object to share properties and methods among many objects of the same type. Every object in JavaScript has access to a prototype through the prototype chain — when a property isn't found directly on an object, JavaScript walks down the chain looking for it. This allows multiple instances to share behavior without duplicating methods in memory. Properties can even be added to the prototype after objects are created, making them immediately available to all existing instances. The pattern can be implemented using ES6 classes (where class methods are automatically added to the prototype) or `Object.create()` for explicit prototype-based inheritance.

## Implementation

```js
// Class with methods shared via the prototype
class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    return `Woof!`;
  }
}

const dog1 = new Dog('Daisy');
const dog2 = new Dog('Max');
const dog3 = new Dog('Spot');

// All instances share the same bark method via the prototype
// rather than each having its own copy

// Adding a method to the prototype after creation
Dog.prototype.play = function () {
  return `${this.name} is playing now!`;
};

// Inheritance via extends — SuperDog gets Dog's prototype chain
class SuperDog extends Dog {
  constructor(name) {
    super(name);
  }

  fly() {
    return `${this.name} is flying!`;
  }
}

// Object.create — explicit prototype-based inheritance
const dog = {
  bark() {
    return 'Woof!';
  },
};

const pet1 = Object.create(dog);
```

## When to Use ?

- You want many objects to share methods without duplicating them in memory.
- You need to add or modify shared behavior for all instances at once.
- You want to set up inheritance chains between objects.

## Advantages and Disadvantages

**Advantages:**

- Memory efficient — methods are shared on the prototype rather than duplicated per instance.
- Dynamic — properties added to the prototype are immediately available to all existing instances.
- Native to JavaScript — works naturally with classes, `extends`, and `Object.create()`.

**Disadvantages:**

- Prototype chain lookups can be confusing to debug.
- Modifying a built-in prototype (e.g. `Array.prototype`) can cause unexpected side effects.
- Readability can suffer when properties come from deep prototype chains.
