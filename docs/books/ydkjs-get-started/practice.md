# Appendix: Deep Dives & Practice Challenges

This section covers critical bonus concepts from **Appendix A** and the hands-on coding exercises from **Appendix B**.

---

## 🔍 Part 1: Deep Dives (Appendix A)

### 1. Value Copy vs. Reference Copy

In JavaScript, how a value is assigned or passed depends strictly on its **type**:

- **Primitives are copied by VALUE**:
  ```javascript
  let name1 = "Kyle";
  let name2 = name1; // Copies the value "Kyle"

  name1 = "Frank";
  console.log(name2); // "Kyle" (Unchanged!)
  ```

- **Objects are copied by REFERENCE**:
  ```javascript
  let user1 = { name: "Kyle" };
  let user2 = user1; // Both point to the SAME object in memory!

  user1.name = "Frank";
  console.log(user2.name); // "Frank" (Changed!)
  ```

---

### 2. Arrow Functions: When to Use Them
Arrow functions (`=>`) are syntactically anonymous and **do not bind their own `this`**—they inherit `this` lexically from their enclosing scope.

```javascript
// Useful for callbacks where you want to keep the outer 'this':
const button = {
  label: "Submit",
  bindClick() {
    setTimeout(() => {
      console.log(this.label); // Correctly references button!
    }, 100);
  }
};
```

---

## 🛠️ Part 2: Practice Exercises & Solutions (Appendix B)

---

### Challenge 1: Meeting Scheduler (Comparisons & Coercion)

#### Problem
Write a function `scheduleMeeting(startTime, durationMinutes)` that checks if a meeting fits inside a workday starting at `07:30` and ending at `17:45`.

#### Solution & Explanation
```javascript
const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {
  // 1. Extract hours and minutes
  const [, startHour, startMin] = startTime.match(/^(\d{1,2}):(\d{2})$/) || [];
  if (!startHour || !startMin) return false;

  // 2. Add duration
  let endHour = Number(startHour) + Math.floor(durationMinutes / 60);
  let endMin = Number(startMin) + (durationMinutes % 60);

  if (endMin >= 60) {
    endHour += 1;
    endMin -= 60;
  }

  // 3. Format into "hh:mm" with padding
  const startStr = `${startHour.padStart(2, "0")}:${startMin.padStart(2, "0")}`;
  const endStr = `${String(endHour).padStart(2, "0")}:${String(endMin).padStart(2, "0")}`;

  // 4. Compare alphabetically (safe because strings are padded)
  return startStr >= dayStart && endStr <= dayEnd;
}

// Tests:
console.log(scheduleMeeting("7:00", 15));  // false (too early)
console.log(scheduleMeeting("7:30", 30));  // true  (07:30 - 08:00)
console.log(scheduleMeeting("11:30", 60)); // true  (11:30 - 12:30)
console.log(scheduleMeeting("17:30", 30)); // false (ends 18:00, past 17:45)
```

---

### Challenge 2: Range Generator (Closures)

#### Problem
Create a `range(start, end)` function:
- If called with `range(3, 8)`, returns `[3, 4, 5, 6, 7, 8]`.
- If called with `range(3)`, returns a function waiting for `end`, e.g., `range(3)(8)`.

#### Solution & Explanation
```javascript
function range(start, end) {
  start = Number(start) || 0;

  // Helper that generates the array
  function getRange(endVal) {
    const result = [];
    for (let i = start; i <= endVal; i++) {
      result.push(i);
    }
    return result;
  }

  // If second argument is missing, return a closure remembering 'start'
  if (end === undefined) {
    return function(nextEnd) {
      return getRange(Number(nextEnd) || 0);
    };
  }

  return getRange(Number(end) || 0);
}

// Tests:
console.log(range(3, 8)); // [3, 4, 5, 6, 7, 8]
console.log(range(3, 3)); // [3]

const start3 = range(3);
console.log(start3(8));   // [3, 4, 5, 6, 7, 8] (Remembers start=3 via closure!)
```

---

### Challenge 3: Slot Machine (Prototypes & Delegation)

#### Problem
Create a slot machine with 3 reels that can spin and display a 3×3 grid of symbols using prototype delegation instead of class inheritance.

#### Solution & Explanation
```javascript
function randMax(max) {
  return Math.trunc(1E9 * Math.random()) % max;
}

const reel = {
  symbols: ["X", "Y", "Z", "W", "$", "*", "<", "@"],
  spin() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    this.position = (this.position + 100 + randMax(100)) % this.symbols.length;
  },
  display() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    return this.symbols[this.position];
  }
};

const slotMachine = {
  // 3 distinct reel objects delegating to 'reel' prototype
  reels: [
    Object.create(reel),
    Object.create(reel),
    Object.create(reel)
  ],
  spin() {
    this.reels.forEach(r => r.spin());
  },
  display() {
    const lines = [];
    // Display 3 rows: above (-1), current (0), below (+1)
    for (let linePos = -1; linePos <= 1; linePos++) {
      const row = this.reels.map(r => {
        // Create temporary object to delegate to the reel
        const slot = Object.create(r);
        slot.position = (r.symbols.length + r.position + linePos) % r.symbols.length;
        return r.display.call(slot);
      });
      lines.push(row.join(" | "));
    }
    return lines.join("\n");
  }
};

slotMachine.spin();
console.log(slotMachine.display());
// Output example:
// < | @ | *
// @ | X | <
// X | Y | @
```

---

## 🏆 Book Completed!
Congratulations, Commander Hari! You have completed the foundational study of **You Don't Know JS Yet: Get Started**.

