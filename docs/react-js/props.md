# Props: The Complete Guide

> *"If components are custom HTML elements, props are the custom attributes that bring them to life."*

---

## 1. What are Props? (The Basics)

In JavaScript, you pass **arguments** to a function to change its output:

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
greet("Hari"); // "Hello, Hari!"
greet("Alex"); // "Hello, Alex!"
```

In React, **Props** (short for *properties*) are simply **arguments passed to React components**. They allow a single component template to render different data across your application.

```jsx
// 1. Child Component receives props
function UserBadge(props) {
  return <div className="badge">Welcome, {props.username}!</div>;
}

// 2. Parent Component passes props
function App() {
  return (
    <div>
      <UserBadge username="Hari" />
      <UserBadge username="Nagaraj" />
    </div>
  );
}
```

### The Unidirectional Data Flow Rule

Props flow strictly in **one direction**: from **Parent ➔ Child** (Top-Down). A child component cannot pass props back up to its parent, nor can it pass props sideways to its siblings.

```text
       ┌──────────────┐
       │ Parent (App) │
       └──────┬───────┘
              │ (Props Flow Down)
       ┌──────┴───────┐
       ▼              ▼
┌──────────────┐ ┌──────────────┐
│  UserBadge   │ │  UserBadge   │
│ (name="Hari")│ │ (name="Alex")│
└──────────────┘ └──────────────┘
```

---

## 2. Passing and Receiving Different Data Types

You can pass **any JavaScript value** as a prop by wrapping it in curly braces `{}` (except for strings, which can use quotes `""`):

```jsx
function Profile() {
  const handleFollow = () => alert("Followed!");

  return (
    <UserCard
      // 1. String (quotes or curly braces)
      name="Hari"
      bio={"Software Engineer"}

      // 2. Numbers & Booleans (curly braces)
      age={24}
      isVerified={true}
      
      // 3. Boolean Shorthand (equivalent to hasProBadge={true})
      hasProBadge

      // 4. Arrays
      skills={["React", "Node.js", "System Design"]}

      // 5. Objects
      socialLinks={{ twitter: "@hari", github: "hari" }}

      // 6. Functions / Callbacks
      onFollow={handleFollow}

      // 7. JSX Elements as Props (Slot pattern)
      actionButton={<button>Upgrade to Pro</button>}
    />
  );
}
```

---

## 3. Destructuring Props & Default Values

### Clean Code with Destructuring
Instead of writing `props.name`, `props.age`, `props.role` everywhere, destructure props directly in the function parameter:

```jsx
// ❌ Verbose:
function UserCard(props) {
  return <h2>{props.name} ({props.role})</h2>;
}

// ✅ Clean & Modern (Destructuring):
function UserCard({ name, role }) {
  return <h2>{name} ({role})</h2>;
}
```

### Default Prop Values
Provide fallback values in case the parent doesn't supply a prop:

```jsx
function Avatar({ src, size = 50, shape = "circle" }) {
  return (
    <img
      src={src || "/default-avatar.png"}
      style={{ width: size, height: size, borderRadius: shape === "circle" ? "50%" : "8px" }}
      alt="User Avatar"
    />
  );
}

// Usage:
<Avatar src="/profile.jpg" /> {/* Uses size=50 and shape="circle" */}
<Avatar src="/logo.png" size={100} shape="square" /> {/* Overrides defaults */}
```

> ⚠️ **The `null` vs `undefined` Trap:**  
> Default values only trigger when a prop is **`undefined`** or **omitted entirely**. If the parent explicitly passes `null` (`<Avatar size={null} />`), the default value is **NOT** used, and `size` remains `null`!

---

## 4. The Special `children` Prop (Composition & Slots)

When you nest content inside opening and closing component tags, React automatically packages that nested content into a special prop called **`children`**:

```jsx
// Reusable Card Container Component
function Card({ title, children }) {
  return (
    <div className="card-box">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        {children} {/* Renders whatever was passed inside <Card>...</Card> */}
      </div>
    </div>
  );
}

// Usage:
function Dashboard() {
  return (
    <Card title="Server Statistics">
      <p>CPU Usage: 42%</p>
      <p>Memory: 1.8 GB / 4.0 GB</p>
      <button>Restart Server</button>
    </Card>
  );
}
```

### Why Composition Beats Configuration
Instead of passing 15 different configuration props (`isText`, `buttonText`, `linkUrl`, `hasIcon`), using `children` lets the parent control the layout flexibly without modifying the child component!

---

## 5. Forwarding Props with JSX Spread (`{...props}`)

When creating wrapper components (like custom buttons or input fields), you often want to forward all extra HTML attributes (like `id`, `name`, `disabled`, `tabIndex`, `aria-*`) directly to the underlying element:

```jsx
// Extract specific props, forward the remaining via '...rest'
function CustomInput({ label, error, ...restProps }) {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input className={error ? "input-error" : "input-valid"} {...restProps} />
      {error && <span className="error-text">{error}</span>}
    </div>
  );
}

// Usage: all standard HTML input attributes work automatically!
<CustomInput
  label="Email Address"
  type="email"
  placeholder="name@example.com"
  required
  autoFocus
  error="Invalid email format"
/>
```

> ⚠️ **When NOT to use spread:**  
> Avoid blindly spreading unknown props everywhere (`<div {...props}>`). It can accidentally pollute the DOM with non-standard attributes or override critical internal props.

---

## 6. Props are Read-Only (The Immutability Rule)

In React, **props are strictly immutable**. A component must **never** modify the props it receives:

```jsx
// ❌ ILLEGAL IN REACT:
function BadUserProfile(props) {
  props.name = "New Name"; // Error: Cannot assign to read-only property!
  props.user.age = 30;     // Mutates parent's state directly - causes bugs!
  return <h1>{props.name}</h1>;
}
```

### Why Must Props Be Immutable?
1. **Predictable Architecture**: When a bug occurs, you know child components didn't stealthily alter parent data.
2. **Pure Rendering**: React optimizes performance by skipping re-renders when prop references don't change. Mutating props breaks this caching.

---

## 7. Child-to-Parent Communication (Passing Functions as Props)

If props only flow **down**, how can a child component send data or notify its parent?

👉 **Solution: The Parent passes a callback function down as a prop, and the Child invokes it!**

```jsx
// 1. Child Component
function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query); // Child calls the parent's function with data!
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <button type="submit">Search</button>
    </form>
  );
}

// 2. Parent Component (Owns the State)
function App() {
  const [results, setResults] = useState([]);

  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm);
    // Fetch results based on child's input
  };

  return <SearchBar onSearch={handleSearch} />;
}
```

This pattern is called **Lifting State Up**.

---

## 8. Prop Drilling: The Problem & The Modern Solutions

### What is Prop Drilling?
**Prop Drilling** happens when you pass a prop down through 4, 5, or more intermediate components that **do not need the data themselves**, just so a deeply nested grandchild can use it:

```text
App (owns user)
 └── PageLayout (doesn't care about user)
      └── Header (doesn't care about user)
           └── UserMenu (doesn't care about user)
                └── Avatar (NEEDS user.avatarUrl!)
```

### The 3 Solutions to Prop Drilling:

1. **Component Composition (`children` prop)** *(First Choice)*:  
   Instead of passing `<PageLayout user={user} />`, render the leaf component directly in `App` and pass it down as children:
   ```jsx
   <PageLayout>
     <Header>
       <UserMenu>
         <Avatar src={user.avatarUrl} />
       </UserMenu>
     </Header>
   </PageLayout>
   ```
2. **React Context (`useContext`)**:  
   For truly global data (current user, theme, language), create a Context to let deep children access data without passing props through intermediate layers.
3. **State Management Libraries** (`Zustand`, `Redux Toolkit`):  
   For complex enterprise applications with heavy cross-component state updates.

---

## 9. Top Interview Questions & Follow-ups

### Q1: What is the fundamental difference between State and Props?
* **Answer**:
  - **Props** are external inputs passed into a component by its parent. They are **read-only** and owned by the parent.
  - **State** is internal memory managed privately *inside* the component. It is **mutable** (via its setter function) and owned by the component itself.

---

### Q2: If a parent component re-renders, will all of its child components re-render too, even if their props haven't changed?
* **Answer**: **YES, by default.** In React, whenever a parent component re-renders, React recursively re-renders all of its children, regardless of whether their props changed.
* **Follow-up**: *How do you prevent a child from re-rendering if its props are the same?*  
  **Answer**: Wrap the child component in **`React.memo(ChildComponent)`**. React will perform a shallow comparison of the new props vs old props and skip re-rendering if they are equal.
* **Follow-up 2**: *What breaks `React.memo`?*  
  **Answer**: Passing inline unmemoized functions (`onClick={() => ...}`) or inline objects (`style={{ color: 'red' }}`) because their object references change on every parent render! (Fixed using `useCallback` and `useMemo`).

---

### Q3: Can you pass a React Component as a prop to another component?
* **Answer**: **Yes.** In React, components and JSX elements are first-class citizens. You can pass them as regular props (e.g. `header={<CustomNavbar />}`, `icon={<TrashIcon />}`) or nested inside `children`.

---

### Q4: What happens if you pass a prop with no value, like `<Modal isOpen />`?
* **Answer**: It automatically evaluates to **`true`** (`isOpen={true}`). This mirrors HTML attribute behavior (like `<input disabled />`).

---

## 10. Tricky Scenarios & Edge Cases

### Trap 1: The Default Prop `null` Override
```jsx
function PriceTag({ currency = "USD", amount }) {
  return <span>{amount} {currency}</span>;
}

// Case A: Prop omitted
<PriceTag amount={50} />        // Output: "50 USD" (default used)

// Case B: Prop explicitly passed as null
<PriceTag amount={50} currency={null} /> // Output: "50 " (TRAP! default NOT used!)
```
**Why?** ES6 default parameters only kick in when the value is strictly `undefined`. `null` is an explicit object representing absence of value.

---

### Trap 2: Modifying an Object Prop Directly (The Mutation Glitch)
```jsx
function EditUser({ user }) {
  const handleUpdate = () => {
    // ❌ BUG: Mutating parent's object directly!
    user.name = "Hari"; 
  };
  return <button onClick={handleUpdate}>Save</button>;
}
```
**The Bug:** Since objects in JavaScript are passed by reference, mutating `user.name` mutates the parent's state object in memory without calling `setUser`. React will NOT trigger a re-render because it didn't detect a new state reference!

**The Fix:** Pass a callback function from the parent:
```jsx
// Parent:
const updateUser = (newName) => setUser(prev => ({ ...prev, name: newName }));

// Child:
<EditUser user={user} onUpdateName={updateUser} />
```

---

## 11. Hands-on Practice Challenges

### Challenge 1: The Multi-Variant Button
**Problem:** Build a reusable `Button` component that accepts:
- `variant`: `"primary"` (default), `"secondary"`, or `"danger"`
- `size`: `"sm"`, `"md"` (default), or `"lg"`
- `isLoading`: boolean (if true, disable the button and show `"Loading..."`)
- Forwards all remaining native button attributes (like `onClick`, `type`, `disabled`) using rest props.

```jsx
// Solution:
function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  children,
  ...restProps
}) {
  const classNames = `btn btn-${variant} btn-${size} ${isLoading ? "btn-loading" : ""}`;

  return (
    <button
      className={classNames}
      disabled={isLoading || restProps.disabled}
      {...restProps}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}

// Usage:
<Button variant="danger" size="lg" onClick={() => alert("Deleted!")}>
  Delete Account
</Button>
```

---

### Challenge 2: Child-to-Parent Temperature Converter
**Problem:** Build a `TemperatureInput` component that lets the user type a temperature and notifies the parent whenever the value changes.

```jsx
// Solution:
function TemperatureInput({ temperature, onTemperatureChange }) {
  return (
    <fieldset>
      <legend>Enter temperature in Celsius:</legend>
      <input
        type="number"
        value={temperature}
        onChange={(e) => onTemperatureChange(Number(e.target.value))}
      />
    </fieldset>
  );
}

// Parent:
function Calculator() {
  const [celsius, setCelsius] = useState(0);

  return (
    <div>
      <TemperatureInput
        temperature={celsius}
        onTemperatureChange={setCelsius}
      />
      <p>Fahrenheit: {(celsius * 9/5 + 32).toFixed(1)}°F</p>
    </div>
  );
}
```

---

## 12. Summary Cheat Sheet

| Feature | Key Rule |
| :--- | :--- |
| **Direction** | Strictly Top-Down (Parent ➔ Child). |
| **Mutability** | Props are 100% read-only. Never mutate props. |
| **Passing Non-Strings** | Wrap numbers, booleans, arrays, objects, and functions inside `{}`. |
| **Default Values** | Destructure with defaults (`{ size = 16 }`). Only triggers on `undefined`. |
| **Composition** | Use the `children` prop to nest arbitrary elements. |
| **Rest Forwarding** | Use `...restProps` to pass standard HTML attributes cleanly. |
| **Upward Flow** | Pass callback functions as props (Lifting State Up). |

---

[⬅️ Components & JSX](./components-and-jsx.md) | **[Back to React Overview](./README.md)**
