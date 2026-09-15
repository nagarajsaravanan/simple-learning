<!-- ---
lang: en-US
title: Title of this page
description: Description of this page
--- -->
# CORE JS

## JavaScript Name

- **Java** → Name influenced by Java's popularity.
- **Script** → A scripting language.
- **Mocha** → Original name.
- **LiveScript** → Renamed from Mocha.
- **JavaScript** → Final name in 1995.
- **ECMAScript** → Standard/specification for JavaScript.

## Organizations

- **TC39 Committee** → Committee responsible for developing the ECMAScript standard.
- Members include people from **Google, Mozilla, Apple, Samsung**, etc.
- They meet regularly to discuss and develop JavaScript features.
- New JavaScript features go through **5 proposal stages: Stage 0 → Stage 4**.
- Proposals: [TC39 Proposals](https://github.com/tc39/proposals)

## Specification vs Environment

- **Specification** → Rules that define how JavaScript works.
- **Environment** → Where JavaScript runs.
- **Browser** → JavaScript runs using a JS engine + browser features.
- **Node.js** → JavaScript runs using a JS engine + Node.js features.

### Browser Only

```js
alert("Hello World"); // Show alert message

const name = prompt("Enter your name"); // Get input from user

const result = confirm("Are you sure?"); // Ask for confirmation

document.title = "JavaScript"; // Work with HTML

window.location.href = "https://example.com"; // Access browser window

localStorage.setItem("name", "JS"); // Store data in browser

sessionStorage.setItem("name", "JS"); // Store temporary browser data
```

### Node.js Only

```js
console.log(process.version); // Work with Node.js process

const fs = require("fs"); // Import a module

const data = Buffer.from("Hello"); // Work with binary data

fs.readFileSync("file.txt", "utf8"); // Read a file

const path = require("path"); // Work with file paths

console.log(path.join("src", "app.js")); // Create a file path

const http = require("http"); // Import HTTP module

const server = http.createServer(); // Create an HTTP server
```

## A Multi-Paradigm Language

JavaScript supports multiple programming paradigms.

### 1. Procedural

Code runs step by step.
*Example: C*

### 2. Object-Oriented

Code is organized using objects and classes.
*Examples: C++, Java*

### 3. Functional

Code is organized using functions.
*Example: Haskell*


JavaScript is a **multi-paradigm language**.
It supports **procedural, object-oriented, and functional programming**.

## Backward & Forward Compatibility

Old JavaScript code should continue to work with newer JavaScript engines.
```js
var name = "JS";
console.log(name);
```

New features may not work in older JavaScript engines.

```js
let name = "JS";
console.log(name);
```
## Transpiling & Polyfill

### Transpiling

**Babel** → Transpiles ( translate ) new JavaScript code into older JavaScript syntax.

```js
const add = (a, b) => a + b; // New JavaScript syntax
```

```js
var add = function (a, b) { return a + b; }; // Transpiled old-style code
```

### Polyfill

**Polyfill** → Adds support for a newer feature in an older environment.

```js
Array.prototype.includes = function (value) { // Define a new feature manually
    return this.indexOf(value) !== -1;
};
```

```js
[1, 2, 3].includes(2); // Use the new feature
```

## JavaScript is a Compiled Language

### JavaScript Engine

```text
JavaScript Code
      ↓
    Parse
      ↓
   JIT Compiler
   (Optimize)
      ↓
   JS VM
  (Execute)
      ↓
    Output
```

* **Parse** → Understand the JavaScript code.
* **JIT Compiler** → Compile and optimize code during execution.
* **JS VM** → Execute the compiled code.

> **Note:** Modern JavaScript is not simply interpreted. JavaScript engines use a combination of **interpretation and JIT compilation**.
