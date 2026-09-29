# React.js Essentials

React is an open-source, component-based JavaScript library developed by Meta for building dynamic, high-performance user interfaces.

---

## Overview & Core Concepts

React simplifies UI development through a **declarative paradigm**: instead of manually modifying the DOM (imperative style), you describe what the UI should look like for a given state, and React handles DOM updates automatically.

### Key Architectural Pillars

- **Declarative**: Predictable code that is easier to debug. UI = $f(\text{state})$.
- **Component-Based**: Encapsulated components that manage their own state, composed to make complex UIs.
- **Virtual DOM (VDOM)**: A lightweight JavaScript object representation of the real DOM in memory.
- **Reconciliation & Diffing**: When state changes, React creates a new VDOM tree, computes the minimal difference (diffing algorithm), and applies batch updates to the real DOM (Fiber architecture).

> 📘 **In-Depth Guide Available:** Check out the complete [Components & JSX Deep Dive](./components-and-jsx.md) covering everything from basics to advanced patterns, interview traps (`0 && <Component />`), and hands-on practice challenges!

---

## JSX & Rendering

**JSX** (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like markup inside JavaScript code.

### JSX Under the Hood

Browsers cannot execute JSX directly. A transpiler (like Babel or Vite's esbuild) compiles JSX into standard JavaScript function calls:

```jsx
// JSX syntax:
const element = <h1 className="greeting">Hello, world!</h1>;

// Compiled JavaScript (React 17+ JSX Transform):
import { jsx as _jsx } from 'react/jsx-runtime';
const element = _jsx('h1', { className: 'greeting', children: 'Hello, world!' });
```

### Key JSX Rules

1. **Return a single root element**: Wrap multiple adjacent elements in a parent tag or Fragment (`<>...</>`).
2. **Close all tags**: Self-closing elements must end with a slash (`<img />`, `<input />`, `<br />`).
3. **CamelCase attributes**: Use `className` instead of `class`, and `htmlFor` instead of `for`.
4. **Embedded JavaScript expressions**: Wrap any dynamic JS expression inside curly braces `{}`.

---

## Components & Props

> 📘 **In-Depth Guides Available:**  
> - [Components & JSX (Deep Dive)](./components-and-jsx.md)  
> - [Props (Complete Guide)](./props.md)

Components are reusable, independent pieces of UI. Modern React exclusively uses **Functional Components**.

### Props (Properties)

Props are read-only inputs passed from parent components to child components, enforcing a **unidirectional data flow** (top to bottom).

```jsx
// Child Component
function UserBadge({ name, role = "Member" }) {
  return (
    <div className="badge">
      <h3>{name}</h3>
      <span>{role}</span>
    </div>
  );
}

// Parent Component
function App() {
  return (
    <div>
      <UserBadge name="Hari" role="Admin" />
      <UserBadge name="Saravanan" />
    </div>
  );
}
```

> **Immutability Rule:** Props are strictly immutable. A component must never modify its own props.

---

## State & Event Handling

**State** represents dynamic data private to a component that changes over time, usually in response to user actions or network events.

### The `useState` Hook

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // Event handler
  const handleIncrement = () => {
    // Always use updater function when new state depends on previous state
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Current Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
```

### State Updates Are Asynchronous & Batched
React batches state updates inside event handlers to prevent multiple unnecessary re-renders. Setting state does not immediately change the variable in the current execution frame.

---

## Core Hooks

Hooks are built-in functions introduced in React 16.8 that let you use state and lifecycle features in functional components.

### 1. `useState`
Manages local component state.
```js
const [state, setState] = useState(initialValue);
```

### 2. `useEffect`
Performs side effects (data fetching, DOM manipulation, timers, subscriptions).

```jsx
import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let isMounted = true;

    fetch(`https://api.example.com/users/${userId}`)
      .then(res => res.json())
      .then(data => {
        if (isMounted) setUser(data);
      });

    // Cleanup function: runs on unmount or before effect re-runs
    return () => {
      isMounted = false;
    };
  }, [userId]); // Dependency array: effect re-runs ONLY when userId changes

  if (!user) return <p>Loading user...</p>;
  return <div><h2>{user.name}</h2></div>;
}
```

#### Dependency Array Cheat Sheet:
- `useEffect(() => {})` — Runs on **every** render.
- `useEffect(() => {}, [])` — Runs **once** on component mount.
- `useEffect(() => {}, [propA, stateB])` — Runs on mount and whenever `propA` or `stateB` change.

### 3. `useRef`
Stores a mutable value that **persists across renders without causing a re-render** when updated. Also used for direct DOM access.

```jsx
import { useRef } from 'react';

function SearchInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus(); // Access native DOM node
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Type here..." />
      <button onClick={focusInput}>Focus Field</button>
    </div>
  );
}
```

### 4. `useMemo` & `useCallback`
Performance optimization hooks:
- **`useMemo`**: Caches the *result* of an expensive calculation.
  ```js
  const memoizedValue = useMemo(() => expensiveCompute(data), [data]);
  ```
- **`useCallback`**: Caches a *function definition* between renders to prevent unnecessary child re-renders.
  ```js
  const handleClick = useCallback(() => {
    doSomething(id);
  }, [id]);
  ```

---

## Component Lifecycle

In modern React with hooks, lifecycle methods are mapped to `useEffect`:

| Lifecycle Phase | Class Component Equivalent | Functional Component (Hooks) |
| :--- | :--- | :--- |
| **Mounting** | `componentDidMount` | `useEffect(() => {}, [])` |
| **Updating** | `componentDidUpdate` | `useEffect(() => {}, [dependencies])` |
| **Unmounting** | `componentWillUnmount` | `useEffect(() => { return () => cleanup(); }, [])` |

---

## Rules of Hooks

1. **Only call hooks at the top level**: Do not call hooks inside loops, conditions, or nested functions.
2. **Only call hooks from React functions**: Call them from React functional components or custom hooks, never from regular JavaScript functions.

---

## Quick Example: Todo Item Component

```jsx
import { useState } from 'react';

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setTodos(prev => [...prev, { id: Date.now(), text: input.trim(), done: false }]);
    setInput('');
  };

  const toggleTodo = (id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <div style={{ maxWidth: 400, margin: '20px auto' }}>
      <h2>My Tasks</h2>
      <form onSubmit={addTodo}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{ textDecoration: todo.done ? 'line-through' : 'none', cursor: 'pointer' }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
```
