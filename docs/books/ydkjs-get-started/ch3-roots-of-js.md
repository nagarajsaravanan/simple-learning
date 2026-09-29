# Chapter 3: Digging to the Roots of JS

> *"Closure, `this`, and Prototypes are the core engine of JavaScript."*

---

## 🎯 The Big Idea in 30 Seconds
- **Iteration**: Iterables (arrays, strings, maps) can be stepped through one item at a time using `for..of` or `...`.
- **Closure**: A function carries a "backpack" of variables from where it was born, keeping them alive wherever it is called.
- **`this` Keyword**: Is **NOT** the function and **NOT** the scope. It is determined **at the moment the function is called**.
- **Prototypes**: Objects don't copy methods; they **delegate** property lookups to another object up the prototype chain.

---

## 1. Iterators & Iterables

Think of an **Iterable** as a book, and an **Iterator** as a bookmark that tracks what page you are on.

- **Iterable**: Any data structure that can be stepped through (Arrays, Strings, Maps, Sets).
- **Iterator**: An object with a `.next()` method that gives you `{ value: ..., done: false }` until finished (`done: true`).

### How We Consume Iterables:

1. **`for..of` Loop**:
   ```javascript
   const letters = ["A", "B", "C"];
   for (let char of letters) {
     console.log(char); // "A", "B", "C"
   }
   ```

2. **Spread Operator (`...`)**:
   ```javascript
   const chars = [..."Hello"]; // ["H", "e", "l", "l", "o"]
   ```

3. **Maps and Key-Value Destructuring**:
   ```javascript
   const userRoles = new Map();
   userRoles.set("Hari", "Commander");
   userRoles.set("Ghost", "AI Assistant");

   for (let [user, role] of userRoles) {
     console.log(`${user} is ${role}`);
   }
   ```

---

## 2. Closure Made Crystal Clear

> [!IMPORTANT]
> **Simple Definition**: A closure is when an inner function remembers and accesses variables from an outer function, even **after the outer function has finished running**.

Think of closure as a **backpack**: when an inner function is created, it packs the outer variables into its backpack and carries them with it wherever it travels.

### Visual Example: Counter Factory
```javascript
function makeCounter(step) {
  let count = 0; // Lives inside makeCounter

  return function() {
    count += step; // Remembers and updates 'count'!
    return count;
  };
}

const countBy1 = makeCounter(1);
countBy1(); // 1
countBy1(); // 2

const countBy5 = makeCounter(5);
countBy5(); // 5
countBy5(); // 10
```

### Why Does This Matter?
- **Live Link, Not a Copy**: Closure does not take a frozen screenshot of a value; it keeps a live connection to the variable itself.
- **Real-World Uses**: Event listeners, timers, private variables, and API callbacks all rely on closures.

---

## 3. The `this` Keyword (Demystified)

The `this` keyword confuses almost every beginner because they assume it refers to the function itself. **It does not.**

> **Golden Rule of `this`**:  
> `this` is **not** determined by where a function is written.  
> `this` is determined **by how the function is CALLED**.

### The 3 Common Ways `this` is Decided:

#### 1. Default Binding (Alone)
If you call a plain function with no dot before it:
```javascript
function showTopic() {
  console.log(this.topic);
}

showTopic(); // undefined (or Error in strict mode)
```

#### 2. Implicit Binding (Object Context)
When there is a dot `.` before the function call, `this` is whatever is left of the dot:
```javascript
const jsBook = {
  topic: "JavaScript",
  showTopic: showTopic
};

jsBook.showTopic(); // "JavaScript" (this is jsBook)
```

#### 3. Explicit Binding (`.call` or `.apply`)
You can force a function to use any object you choose as its `this`:
```javascript
const mathBook = { topic: "Mathematics" };

showTopic.call(mathBook); // "Mathematics" (this is explicitly mathBook)
```

---

## 4. Prototypes & Delegation

In classical languages (like C++ or Java), creating an instance **copies** all methods from the class into the instance.  
**JavaScript does NOT copy.** It uses **Delegation**.

```text
[ Object.prototype ]  ──▶ Contains toString(), valueOf()
         ▲
         │ (linked via prototype)
    [ Book ]          ──▶ Contains read()
         ▲
         │ (linked via prototype)
  [ myJavascript ]    ──▶ Contains title: "YDKJS"
```

### How Property Delegation Works:
When you ask an object for a property or method:
1. Does `myJavascript` have `read()`? **No.**
2. Check its prototype `Book`. Does it have `read()`? **Yes! Run it!**

```javascript
const bookTemplate = {
  read() {
    console.log(`Reading: ${this.title}`);
  }
};

// Create a new object linked to bookTemplate
const myBook = Object.create(bookTemplate);
myBook.title = "You Don't Know JS Yet";

// myBook delegates the read() call to bookTemplate!
myBook.read(); // "Reading: You Don't Know JS Yet"
```

> [!TIP]
> Notice how **Prototypes** and **`this`** work together:  
> When `myBook.read()` is called, the method is found on `bookTemplate`, but `this` points to `myBook`. That is why `this.title` prints `"You Don't Know JS Yet"`.

---

## 🚀 Next Chapter
Discover the 3 Pillars that tie all of JavaScript together:  
👉 **[Chapter 4: The Bigger Picture](./ch4-bigger-picture.md)**

