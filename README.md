# TypeScript Fundamentals

Code samples from the TypeScript Fundamentals course on [Pluralsight.com](https://pluralsight.com). Samples for each module from the course can be found in the `src` directory.

## Typescript
TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

### Key Features
Strong typed
Classes
Interfaces
Generics
Compiles to JS
Functions

### Compile ts
* tsc => typescript compiler

`npx --package typescript tsc --help`

`--outDir` Specify an output folder for all emitted files.

`npx --package typescript tsc --outDir dist index.ts`

###  Create tsconfig.json
```json
"scripts": {
    "tsc": "tsc"
},
```
`yarn tsc -- --init` or `npm run tsc -- --init`

### Setting `tsconfig.json`
```json
"target": "ES2017",            // Having last features js caniuse.com => resources validate support browser
"sourceMap": true,             // Better debbuger into the broswer
"outDir": "./dist",	           // Specify an output folder for all emitted files	
"moduleResolution": "node",    // Specify how TypeScript looks up a file from a given module specifier
```

## Running the Project

1. Install Node.js LTS ([https://nodejs.org](https://nodejs.org))
1. Open a command window at the root of this project
1. Run `yarn`
1. Run `yarn start` to start the web server and run the app

**NOTE:**

Running `yarn start` compiles your TypeScript and loads the JavaScript bundle into memory (you won't see a `dist` folder created in this case).
If you want to compile your TypeScript and create a bundle in the `dist` folder you can run `yarn webpack` or
`yarn webpack:w` (if you want webpack to watch for changes to files).

## Credits

Font Awesome Free icons are being used as per the kit guidelines https://fontawesome.com/kits

## Key Built-in Types

1. string
1. number
1. booelan
1. array

## Defining types

variableName: type
```typescript
let firtName: string;
function add(x: number, y:number) {}
```

## Additional Built-in Types

1. undefined
1. null
1. any
1. void

Variables can hold any value
```typescript
let product: any;
```

Define "union type"

```typescript
let firstName: string | undefined | null;
```

Function return no value
```typescript
function log(msg: string): void {};
```

## Using Enums => Magic string
an enums represent a set of name contanst.
Enums minimize "magic strings" in code

```typescript
enum ProductType {
  Sports,
  HomeGoods,
  Groceries
}
```
Select from a set of values
```typescript
let productType = ProductType.Sports;
```

## Buildings Apps with Functions

1. Typed parameters
1. Defining functions
1. Return values
1. Async/Await
1. Optional parameters
1. Arrow functions
1. Default parameters
1. Rest parameters
1. Parameter destructuring

## Interface

#### What is Interface?
An interface is a code contract.
An interface defines the "shape" of data.

### Use interfaces to define the shape of data
 - Type of a variable
 - Data returned from a function
 - Data passed into a function

### Interface vs Types

|                     Interface                   |                        Type                   |
|-------------------------------------------------|-----------------------------------------------|
| Interface definitions can be used to respresent | Type alias can be used to represent primitive |
| the shape of an object-like data sctructure     | types and object-like data structure          |
| ```typescript                                   | ```typescript                                 |
| interface Product {                             | type Product | string {                       |
|   id: number;                                   |   id: number;                                 |
|   name: string;                                 |   name: string;                               |
|   icon: string;                                 |   icon: string;                               |
| }                                               | }                                             |
| ```                                             | ```                                           |
|-------------------------------------------------|-----------------------------------------------|

### Extending interfaces
```typescript
interface Shape {
  color: string;
}
 
interface PenStroke {
  penWidth: number;
}
 
interface Square extends Shape, PenStroke {
  sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
```
## Clases
A class encapsulates data and code.
It acts a template that can be used to create object instances.

### The role of Classes
The classes encapsulate functionality such as:
1. Contructor
1. Properties
1. Functiion

```typescript
  class Product {
    // properties
    // constructor
    // functions
  }
```

constructor
```typescript
  constructor(id: number, name: string, icon: string) {
    this.id = id;
    this.name = name;
    this.icon = icon;
  }
```

constructor (auto implemented properties)
```typescript
  constructor(public id: number, public name: string, public icon: string) { }
```

Multiple instances of an object can be created
Classes can be extended, marked as abstract, and implement one or more interfaces


## Generics
Clearer types and reusable code

#### Resusable code and generics
1. Functions
1. Interfaces
1. Classes
1. Contraints

