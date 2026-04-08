# Singleton

Ensures a class has only one instance and provides a global point of access to it.

## Description

Singleton is a creational design pattern that restricts a class to a single instance. On the first call, it creates the instance; every subsequent call returns that same instance. In JavaScript this can be achieved with a class that caches its instance, or simply with a module-level object (since ES modules are evaluated once and cached).

## Implementation

```js
// Class-based Singleton
class Database {
  constructor(host) {
    if (Database._instance) {
      return Database._instance;
    }

    this.host = host;
    this.connection = null;
    Database._instance = this;
  }

  connect() {
    this.connection = `connected to ${this.host}`;
    return this.connection;
  }

  static getInstance(host) {
    if (!Database._instance) {
      new Database(host);
    }
    return Database._instance;
  }
}

// Module-based Singleton (simplest JS approach)
// counter.js
let count = 0;

const counter = {
  increment() {
    return ++count;
  },
  decrement() {
    return --count;
  }
};

Object.freeze(counter);
export { counter };
```

## When to Use ?

- You need exactly one shared instance (e.g., config, logger, database connection).
- Avoid creating multiple objects that should be centralized.
- Maintain shared state across your application.

## Advantages and Disadvantages

**Advantages:**

- Guarantees only one instance exists throughout the application.
- Provides a single global access point to that instance.
- The instance is created only when first requested (lazy initialization).

**Disadvantages:**

- Introduces hidden global state, making code harder to reason about.
- Difficult to unit test — tightly couples consumers to the singleton.
- Can mask design problems by encouraging components to share state instead of passing dependencies explicitly.
