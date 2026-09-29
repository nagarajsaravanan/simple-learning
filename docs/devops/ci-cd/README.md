# CI/CD Tutorial

A simple step-by-step guide to create a CI/CD pipeline for a Node.js application using GitHub Actions.

---

## 1. Prerequisites

Install:

* Node.js
* Git
* GitHub account

Check:

```bash
node -v
git --version
```

---

## 2. Create a Node.js Project

Create a folder:

```bash
mkdir my-app
cd my-app
```

Initialize Node.js:

```bash
npm init -y
```

Install a testing framework:

```bash
npm install --save-dev jest
```

---

## 3. Create Application Code

Create:

```text
src/
└── app.js
```

Add:

```js
function add(a, b) {
  return a + b;
}

module.exports = add;
```

---

## 4. Create a Test

Create:

```text
src/
└── app.test.js
```

Add:

```js
const add = require("./app");

test("adds two numbers", () => {
  expect(add(2, 3)).toBe(5);
});
```

---

## 5. Configure the Test Command

Open `package.json`.

Change the `scripts` section:

```json
"scripts": {
  "test": "jest"
}
```

Now test locally:

```bash
npm test
```

Expected result:

```text
PASS  src/app.test.js
✓ adds two numbers
```

---

## 6. Create a Git Repository

Initialize Git:

```bash
git init
```

Add the files:

```bash
git add .
```

Create the first commit:

```bash
git commit -m "Initial commit"
```

---

## 7. Create a GitHub Repository

Go to GitHub and create a new repository.

Example:

```text
my-app
```

Then connect your local project:

```bash
git remote add origin <repository-url>
```

Push the code:

```bash
git branch -M main
git push -u origin main
```

---

## 8. Create GitHub Actions Workflow

Inside your project, create:

```text
.github/
└── workflows/
    └── ci.yml
```

---

## 9. Add the CI Configuration

Open `ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [main]

  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v5

      - name: Setup Node.js
        uses: actions/setup-node@v5
        with:
          node-version: 20

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test
```

---

## 10. Push the Workflow

Commit the workflow:

```bash
git add .
git commit -m "Add CI pipeline"
```

Push:

```bash
git push
```

---

## 11. Check GitHub Actions

Open your GitHub repository.

Go to:

```text
Actions
```

You should see:

```text
CI
```

GitHub automatically starts the workflow.

The pipeline performs:

```text
GitHub
   ↓
Checkout Code
   ↓
Setup Node.js
   ↓
npm ci
   ↓
npm test
   ↓
✓ Success
```

---

## 12. Test CI with a Code Change

Change the application:

```js
function add(a, b) {
  return a + b + 1;
}
```

Commit and push:

```bash
git add .
git commit -m "Change application"
git push
```

GitHub Actions automatically runs again.

The test should fail:

```text
✗ Failed
```

This demonstrates the purpose of **Continuous Integration**.

---

## 13. What About CD?

After CI succeeds, we can add a deployment step.

The general flow becomes:

```text
Developer
    ↓
git push
    ↓
GitHub
    ↓
CI
    ↓
Install Dependencies
    ↓
Test
    ↓
Build
    ↓
CD
    ↓
Deploy
    ↓
Production
```

For example:

```yaml
- name: Build
  run: npm run build

- name: Deploy
  run: ./deploy.sh
```

The actual deployment command depends on where the application is hosted.

---

## 14. CI/CD in Simple Words

### CI

Automatically:

```text
Code
 ↓
Build
 ↓
Test
```

### CD

Automatically:

```text
Tested Code
    ↓
Deploy
    ↓
Production
```

### Complete CI/CD

```text
        Developer
            ↓
         git push
            ↓
       GitHub Actions
            ↓
       Install Code
            ↓
          Build
            ↓
           Test
            ↓
      ┌─────┴─────┐
      │           │
    Failed       Pass
      │           │
      ↓           ↓
    Stop        Deploy
                  ↓
              Production
```

---

## 15. Important Files

After completing the tutorial:

```text
my-app/
│
├── src/
│   ├── app.js
│   └── app.test.js
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
├── package.json
└── package-lock.json
```

The important part for CI is:

```text
.github/workflows/ci.yml
```

This file tells GitHub **what to do automatically**.

---

## 16. Key Commands

```bash
npm install
npm test
git add .
git commit
git push
```

The important concept is:

> **Developer writes code → Git push → CI automatically checks the code → CD can automatically deploy it.**
