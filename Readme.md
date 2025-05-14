# TypeScript Foundations

This repository provides a comprehensive introduction to TypeScript fundamentals, including variables, types, functions, objects, arrays, interfaces, generics, ES6 features, and object-oriented programming (OOP) concepts. The code is organized into modular files for easy exploration and learning.

## Project Structure

```
src/
  1-variables.ts              # Variable declarations and type inference
  2-special-types.ts          # Special types: never, any, null, undefined, void
  3-objects-arrays.ts         # Objects, arrays, and tuples
  4-type-alliances.ts         # Type aliases and type composition
  5-interfaces.ts             # Interfaces and interface extension
  6-union-intersection.ts     # Union and intersection types
  7-functions.ts              # Functions, parameters, and return types
  8-callbacks.ts              # Callback functions
  9-promises.ts               # Promises and async operations
  10-fetch-data-api.ts        # Fetch API usage example
  11. type-casting.ts         # Type casting in TypeScript
  ES6/                        # ES6 concepts (destructuring, spread/rest, CommonJS)
  generics/                   # Generics in functions and types
  OOP/                        # Object-Oriented Programming concepts
  index.ts                    # Entry point for running demos
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/) (or npm/yarn)

### Installation

```sh
pnpm install
```

### Running the Code

To run the TypeScript examples in watch mode:

```sh
pnpm run dev
```

To build the project:

```sh
pnpm run build
```

To run the compiled code:

```sh
pnpm start
```

## Topics Covered

- **Variables & Types:** Declaration, inference, and special types.
- **Objects & Arrays:** Object literals, arrays, and tuples.
- **Type Aliases & Interfaces:** Creating and extending types.
- **Unions & Intersections:** Combining types for flexibility.
- **Functions:** Declarations, expressions, arrow functions, and callbacks.
- **Promises & Async:** Handling asynchronous operations.
- **Generics:** Writing reusable and type-safe code.
- **ES6 Features:** Destructuring, spread/rest operators, modules.
- **OOP:** Classes, inheritance, polymorphism, encapsulation, access modifiers.

## How to Explore

Uncomment the relevant function calls in `src/index.ts` to run specific demos. Each file is self-contained and demonstrates a particular TypeScript or ES6 concept.

## License

ISC

---

Happy learning TypeScript!