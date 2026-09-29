# Node.js Essentials

Node.js is an open-source, cross-platform JavaScript runtime environment built on Chrome's V8 engine that executes JavaScript code outside a web browser.

---

## Overview & Architecture

Node.js operates on a single-threaded event-driven architecture, enabling high throughput and scalability via non-blocking I/O operations.

### Key Components

- **V8 Engine** — Developed by Google for Chromium; converts JS directly into native machine code.
- **Libuv** — Multi-platform C library providing asynchronous I/O, thread pooling, and the event loop.
- **Bindings & Add-ons** — Low-level C/C++ bridges connecting JavaScript to operating system APIs.

---

## Architecture & Event Loop

The **Event Loop** is what allows Node.js to perform non-blocking operations despite JavaScript being single-threaded:

1. **Timers Phase** — Executes callbacks scheduled by `setTimeout()` and `setInterval()`.
2. **Pending Callbacks Phase** — Executes I/O callbacks deferred to the next loop iteration.
3. **Idle, Prepare Phase** — Internal system use only.
4. **Poll Phase** — Retrieves new I/O events; executes I/O-related callbacks.
5. **Check Phase** — Executes `setImmediate()` callbacks.
6. **Close Callbacks Phase** — Handles socket/stream close events (e.g. `socket.on('close', ...)`).

---

## Core Modules

Node.js includes essential built-in modules out of the box:

- **`fs`** — File system interactions (synchronous, asynchronous, and streaming APIs).
- **`path`** — Utilities for resolving and parsing file system paths.
- **`http` & `https`** — Native primitives to create HTTP servers and clients.
- **`events`** — `EventEmitter` class for managing decoupled publish-subscribe events.
- **`buffer`** — Handling raw binary memory streams.
- **`crypto`** — Cryptographic functionality for hashing, ciphering, and keys.

---

## Creating an HTTP Server

Here is a standard example of creating an HTTP web server in Node.js:

```js
const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    JSON.stringify({
      status: 'success',
      message: 'Hello from Node.js runtime!',
      timestamp: new Date().toISOString(),
    })
  );
});

server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
```