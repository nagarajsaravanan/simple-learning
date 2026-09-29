# Chapter 2: Surveying JS

> *"The best way to learn JS is to start writing JS."*  
> — **Kyle Simpson**

---

## 🎯 The Big Idea in 30 Seconds
- **Each File is a Program**: If file A crashes, file B can still execute.
- **Two Kinds of Values**: **Primitives** (strings, numbers, booleans, etc.) and **Objects** (arrays, objects, functions).
- **`const` Does NOT Mean Immutable**: `const` only prevents re-assignment; object properties inside a `const` can still be changed!
- **Equality**: `===` checks value without converting types; `==` converts types first if they differ.
- **Object Comparisons**: Objects compare by **memory reference**, never by their contents.

---

## 1. Each File is Its Own Program

In JavaScript, standalone `.js` files are treated as independent mini-programs:
- If `file1.js` crashes during execution, `file2.js` will still attempt to run.
- They communicate by sharing variables in the **Global Scope** or through explicit **ES Modules** (`import` / `export`).

---

## 2. Values & Types Made Simple

Everything in JavaScript is either a **Primitive** or an **Object**:

### The 7 Primitive Types
| Type | Example | What it is |
| :--- | :--- | :--- |
| `string` | `"hello"`, `'world'`, `` `Hi ${name}` `` | Text |
| `number` | `42`, `3.14` | Numbers & decimals |
| `bigint` | `9007199254740991n` | Extra-large integers |
| `boolean` | `true`, `false` | Yes / No switches |
| `undefined` | `undefined` | Variable declared, but has no value yet |
| `null` | `null` | Intentionally empty value |
| `symbol` | `Symbol("id")` | Hidden, unique keys |

### The Object Types
- **Array**: Ordered list indexed by number: `["apple", "banana"]`
- **Object**: Key-value pairs indexed by names: `{ name: "Kyle", age: 39 }`
- **Function**: Code that can be called: `function greet() { ... }`

### The `typeof` Operator
```javascript
typeof 42;             // "number"
typeof "hello";        // "string"
typeof true;           // "boolean"
typeof undefined;      // "undefined"
typeof { a: 1 };       // "object"
typeof [1, 2, 3];      // "object" (Arrays are a sub-type of object!)
typeof function() {};  // "function"

// ⚠️ Famous JS Bug:
typeof null;           // "object" (Old bug from 1995, never fixed to preserve backwards compatibility)
```

---

## 3. Variables: `var`, `let`, and `const`

```text
               Scope             Can Reassign?   Can Mutate Contents?
var    ──▶   Function Scope           YES                YES
let    ──▶   Block Scope { }          YES                YES
const  ──▶   Block Scope { }          NO                 YES (if object/array!)
```

### The `const` Trap:
`const` stops you from assigning a new value to the variable name, but it **does not freeze** the contents:

```javascript
const user = { name: "Kyle" };

user = { name: "Sarah" }; // ❌ Error! Cannot reassign a const variable.
user.name = "Sarah";      // ✅ Perfectly legal! The object was mutated.
```

> [!TIP]
> **Rule of thumb**: Use `const` only for simple primitive values (`const MAX_USERS = 100`). If you have values that change, use `let`.

---

## 4. Comparisons: `===` vs `==`

### Strict Equality (`===`)
Checks values **without converting types**:
```javascript
3 === 3.0;       // true
"yes" === "yes"; // true
42 === "42";     // false (number vs string)
```

#### Two Special Gotchas with `===`:
1. `NaN === NaN` is **`false`**! (Use `Number.isNaN(x)` instead).
2. `0 === -0` is **`true`**! (Use `Object.is(0, -0)` if you care about the sign).

---

### Coercive Equality (`==`)
Allows type conversion first. If types are different, it converts them (usually to numbers) and then compares:
```javascript
42 == "42";   // true ("42" is converted to 42)
1 == true;    // true (true is converted to 1)
```

---

### Object Comparisons (Reference vs Value)
In JavaScript, **objects are never compared by their contents**:
```javascript
[1, 2, 3] === [1, 2, 3]; // false!
{ a: 1 } === { a: 1 };   // false!
```
They are only equal if they point to the exact same spot in computer memory:
```javascript
let a = [1, 2, 3];
let b = a; // b points to the same array as a

a === b;   // true!
```

---

## 5. Organizing Code: Classes vs Modules

JavaScript gives you two major ways to group data and methods:

### 1. Classes (Object-Oriented)
Use blueprints that you stamp out with `new`:
```javascript
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  print() {
    console.log(`${this.title} by ${this.author}`);
  }
}

const myBook = new Book("YDKJS", "Kyle Simpson");
myBook.print(); // "YDKJS by Kyle Simpson"
```

### 2. Modules (Factory Functions & Closures)
Use functions that keep secrets (private data) and return public tools:
```javascript
function createBook(title, author) {
  // 'title' and 'author' are private variables!
  return {
    print() {
      console.log(`${title} by ${author}`);
    }
  };
}

const myBook = createBook("YDKJS", "Kyle Simpson");
myBook.print();
```

---

## 🚀 Next Chapter
Dive into Closures, Iteration, `this`, and Prototypes:  
👉 **[Chapter 3: Digging to the Roots of JS](./ch3-roots-of-js.md)**

