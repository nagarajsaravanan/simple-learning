# Chapter 7: Learning from Negative Feedback

> *"Failure contains the highest signal for growth, yet our ego shuts down the moment something goes wrong."*  
> — **Dr. Ayelet Fishbach**

---

## 1. The "Ego Defense" Mechanism

When your code throws an error or fails a test case during practice, what is your initial reaction?

* You feel irritated or embarrassed.
* You close the tab or look at the answer immediately.
* You tell yourself: *"This question was stupidly phrased anyway."*

Dr. Fishbach’s research discovered that **people remember less than 30% of negative feedback** compared to positive feedback. When you fail, your brain triggers an automatic defense mechanism: **it shuts down attention to protect your self-esteem.**

---

## 2. Low Performers vs. Elite Engineers

```text
❌ LOW PERFORMER:
   Code fails ──▶ Feels stupid ──▶ Copies solution ──▶ Learns zero logic ──▶ Fails live interview

✅ ELITE ENGINEER:
   Code fails ──▶ Curious: "Where did my assumption break?" ──▶ Traces line by line ──▶ Masters the edge case
```

In a Zoho technical interview, the interviewer will **intentionally give you a failing test case or an edge condition** (e.g. empty string, negative coordinates, memory limit) to observe how you react:

* If you get defensive, flustered, or start guessing blindly, you fail the round.
* If you calmly say: *"Ah, my pointer condition didn't account for zero. Let me trace the execution back,"* you win their respect immediately.

---

## 3. The "1-Line Bug Post-Mortem" Rule

Whenever your code fails a problem while practicing, never move to the next question until you write down a **1-line post-mortem note**:

| Question Attempted | What Failed? | The 1-Line Lesson |
| :--- | :--- | :--- |
| String compression | Crashed on single-character input `"a"` | *"Always check array length `<= 1` before accessing `arr[i + 1]`."* |
| Matrix spiral order | Infinite loop on rectangular matrix | *"Keep separate boundary variables for `top`, `bottom`, `left`, and `right`."* |
| Railway cancellation | Negative ticket count allowed | *"Always validate business invariants before executing state updates."* |

> **Pro Tip:** Keep a simple notebook with just your 1-line post-mortems. Reviewing this notebook the morning of your interview is 10x more valuable than skimming 100 solved problems!

---

## 4. Key Takeaways

1. **Errors are GPS reroutes, not insults:** A bug is just data telling you where your mental model was inaccurate.
2. **Never look at the solution immediately:** Sit with the bug for at least 10 minutes. The struggle is where your brain forms new synaptic connections.
3. **Capture your misses:** One recorded mistake that you never repeat is worth 10 easy questions solved correctly.

---

[⬅️ Ch 6: The Middle Problem](./ch6-the-middle-problem.md) | **[Ch 8: Goal Juggling (Balancing Priorities) ➡️](./ch8-goal-juggling.md)**
