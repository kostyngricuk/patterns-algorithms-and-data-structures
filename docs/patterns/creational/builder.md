# Builder

Separates the construction of a complex object from its representation, allowing the same construction process to create different representations.

## Description

Builder is a creational design pattern that lets you construct complex objects step by step. Instead of using a constructor with dozens of parameters, the Builder pattern extracts the object construction into a separate builder object. Each configuration step returns the builder itself, enabling method chaining (a fluent interface). An optional Director class can encapsulate common build sequences.

## Implementation

```js
class QueryBuilder {
  constructor() {
    this._table = null;
    this._conditions = [];
    this._columns = ['*'];
    this._orderBy = null;
    this._limit = null;
  }

  table(name) {
    this._table = name;
    return this;
  }

  select(...columns) {
    this._columns = columns;
    return this;
  }

  where(condition) {
    this._conditions.push(condition);
    return this;
  }

  orderBy(column, direction = 'ASC') {
    this._orderBy = `${column} ${direction}`;
    return this;
  }

  limit(n) {
    this._limit = n;
    return this;
  }

  build() {
    if (!this._table) {
      throw new Error('Table name is required');
    }

    let query = `SELECT ${this._columns.join(', ')} FROM ${this._table}`;

    if (this._conditions.length > 0) {
      query += ` WHERE ${this._conditions.join(' AND ')}`;
    }

    if (this._orderBy) {
      query += ` ORDER BY ${this._orderBy}`;
    }

    if (this._limit !== null) {
      query += ` LIMIT ${this._limit}`;
    }

    return query;
  }
}
```

### Test cases

```js
const query = new QueryBuilder()
  .table('users')
  .select('id', 'name', 'email')
  .where('age > 18')
  .where('active = true')
  .orderBy('name', 'ASC')
  .limit(10)
  .build();

console.log(query);
// "SELECT id, name, email FROM users WHERE age > 18 AND active = true ORDER BY name ASC LIMIT 10"

const simple = new QueryBuilder()
  .table('products')
  .build();

console.log(simple);
// "SELECT * FROM products"

// Missing table throws an error
try {
  new QueryBuilder().build();
} catch (e) {
  console.log(e.message); // "Table name is required"
}
```

## When to Use ?

- You need to create an object with many optional configuration parameters.
- You want to avoid constructors with long parameter lists ("telescoping constructor").
- The same construction process should be able to produce different representations.

## Advantages and Disadvantages

**Advantages:**

- Constructs objects step by step, deferring steps or running them recursively.
- Reuses the same construction code for different representations of the product.
- Single Responsibility Principle — isolates complex construction logic from business logic.

**Disadvantages:**

- Increases overall code complexity due to additional builder classes.
- The builder must be kept in sync with the product it builds.
- Immutable products require the builder to hold all state until `build()` is called.
