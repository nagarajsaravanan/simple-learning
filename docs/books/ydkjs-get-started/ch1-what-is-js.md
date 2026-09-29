# Chapter 1: What Is JavaScript?

> *"Java is to JavaScript as ham is to hamster."*  
> — **Jeremy Keith**

---

## 🎯 The Big Idea in 30 Seconds
- **JavaScript is NOT Java**: It was named "JavaScript" in 1995 purely as a marketing trick.
- **One Standard**: Managed by the **TC39** committee under the official name **ECMAScript**.
- **Golden Rule**: **"We don't break the web"**—code written in 1995 still runs in modern browsers today.
- **Compiled, Not Just Interpreted**: JavaScript is parsed and compiled before execution, catching syntax errors before any code runs.
- **Babel & Polyfills**: Transpilers convert new syntax to old syntax; polyfills supply missing modern functions.

---

## 1. Why Is It Called JavaScript?

In 1995, Brendan Eich created the language at Netscape in just 10 days:
1. **Mocha** — Original internal code-name.
2. **LiveScript** — Early release name.
3. **JavaScript** — Renamed right before release because Sun's **Java** was the hot buzzword. The marketing team wanted it to look like a simple companion to Java.

> [!NOTE]
> **Who owns the name?**  
> **Oracle** owns the official trademark for "JavaScript". That is why the formal language standard is named **ECMAScript** (ES).

---

## 2. Who Controls JavaScript? (TC39 & ECMA)

JavaScript is not owned by one company. It is governed by **TC39** (Technical Committee 39), made up of browser creators (Google, Apple, Mozilla, Microsoft) and community experts.

### The 5 Stages of a New Feature:
- **Stage 0 (Idea)**: A suggestion championed by a TC39 member.
- **Stage 1 (Proposal)**: A formal problem statement and high-level design.
- **Stage 2 (Draft)**: Precise syntax and rules are written down.
- **Stage 3 (Candidate)**: Browsers begin implementing it for testing.
- **Stage 4 (Finished)**: Included in the next annual release (e.g., ES2020, ES2024).

---

## 3. "We Don't Break the Web"

JavaScript has a permanent commitment to **Backwards Compatibility**:
- A website built in 1995 must continue to work on modern Chrome or Safari.
- Even if a feature from the 90s was poorly designed, TC39 almost never removes it because doing so would break millions of older websites.

### The Famous "Smooshgate" Incident:
TC39 wanted to add a `.flatten()` method to Arrays. However, older websites using an old library called MooTools broke when `.flatten()` was added. Instead of breaking those sites, TC39 renamed the method to **`.flat()`**.

---

## 4. JavaScript vs. Environment APIs

Not everything you write in a `.js` file is native JavaScript:

| Feature | Where it comes from | Part of JS Spec? |
| :--- | :--- | :--- |
| `for`, `if`, `class`, `function` | JavaScript Engine | **Yes** |
| `alert("Hi")`, `prompt()` | Web Browser (DOM) | No (Host Web API) |
| `document.getElementById()` | Web Browser (DOM) | No (Host Web API) |
| `fetch("https://...")` | Web Browser | No (Host Web API) |
| `fs.readFileSync()` | Node.js Runtime | No (Node.js API) |
| `console.log()` | Host Environments | No (Universally agreed standard) |

---

## 5. Is JavaScript Interpreted or Compiled?

A common myth is that JavaScript is a line-by-line "interpreted script".  
**In reality, JavaScript is a COMPILED language.**

```text
Your Code ──▶ [ 1. Parse into AST ] ──▶ [ 2. Bytecode Compilation ] ──▶ [ 3. JIT Optimization ] ──▶ Execution
```

### The Simple Proof: Early Errors
If JavaScript were purely interpreted line-by-line, errors on line 10 would only be caught after lines 1 to 9 already ran.  
In JavaScript, **syntax errors stop the entire program before a single line executes**:

```javascript
console.log("Will this run?"); // ❌ NEVER prints!

function badSyntax(a, a) {
  "use strict"; // Duplicate parameter names fail during compilation!
}
```

---

## 6. How We Bridge Compatibility (Babel & Polyfills)

Because JavaScript is backwards-compatible but **not forwards-compatible** (old browsers cannot understand new syntax), we use two tools:

### 1. Transpilers (e.g., Babel)
Rewrites modern syntax into older syntax:
```javascript
// Modern Code
const add = (a, b) => a + b;

// Transpiled by Babel for older browsers
var add = function(a, b) { return a + b; };
```

### 2. Polyfills (Shims)
Provides code for a missing method if the browser doesn't have it:
```javascript
// If the browser doesn't have Array.includes, we supply it:
if (!Array.prototype.includes) {
  Array.prototype.includes = function(val) {
    return this.indexOf(val) !== -1;
  };
}
```

---

## 7. WebAssembly (WASM): Partner, Not Replacement

- **What is WASM?** A fast, binary format that allows languages like C, C++, Rust, and Go to run in web browsers at near-native speeds.
- **Will WASM replace JavaScript?** No. WASM is designed for heavy computation (3D games, video editors, physics simulations). JavaScript remains the primary language of the web.

---

## 8. Strict Mode (`"use strict"`)

Strict mode makes JavaScript safer by turning silent bad habits into visible errors:
- Prevents accidental global variables (`x = 10;` without `let`/`const` throws an error).
- Disallows duplicate parameter names.
- Makes `this` default to `undefined` instead of the global window.

> [!TIP]
> All **ES6 Modules** (`import` / `export`) and **Classes** automatically run in strict mode by default!

---

## 🚀 Next Chapter
Ready to explore variables, values, and comparisons?  
👉 **[Chapter 2: Surveying JS](./ch2-surveying-js.md)**

