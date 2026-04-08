# Factory Method

Defines an interface for creating an object, but lets subclasses decide which class to instantiate.

## Description

Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created. Instead of calling a constructor directly, a "factory" method is called to create the object. This decouples the client code from the concrete classes it needs to instantiate.

## Implementation

```js
// Product interface
class Transport {
  deliver() {
    throw new Error('deliver() must be implemented');
  }
}

// Concrete Products
class Truck extends Transport {
  deliver() {
    return 'Delivering by land in a truck';
  }
}

class Ship extends Transport {
  deliver() {
    return 'Delivering by sea in a ship';
  }
}

// Creator
class Logistics {
  createTransport() {
    throw new Error('createTransport() must be implemented');
  }

  planDelivery() {
    const transport = this.createTransport();
    return transport.deliver();
  }
}

// Concrete Creators
class RoadLogistics extends Logistics {
  createTransport() {
    return new Truck();
  }
}

class SeaLogistics extends Logistics {
  createTransport() {
    return new Ship();
  }
}
```

## When to Use ?

- You don't know ahead of time the exact types of objects your code will need to work with.
- You want to provide a way for users of your library or framework to extend its internal components.
- You want to reuse existing objects instead of rebuilding them each time.

## Advantages and Disadvantages

**Advantages:**

- Avoids tight coupling between the creator and concrete products.
- Single Responsibility Principle — product creation is moved into one place.
- Open/Closed Principle — new product types can be introduced without breaking existing code.

**Disadvantages:**

- Code may become more complicated since you need to introduce many new subclasses.
- Requires a parallel class hierarchy (one creator per product type).
- Can be overkill for simple object creation scenarios.
