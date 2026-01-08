Playwright Automation – SauceDemo

## Overview

- This repository contains an end-to-end (E2E) automated testing project for the SauceDemo web application, built using Playwright and TypeScript, with GitHub Actions used for Continuous Integration (CI).

- The goal of this project is to demonstrate:

- A clean and maintainable test architecture

- Best practices in Playwright automation

- A realistic E2E checkout flow

- CI integration with test reporting

## Test Scenarios Covered

### 1. Successful Checkout Flow (E2E)

**Why this test was chosen:**
This test covers the main business flow of the application. Completing a purchase successfully is the most critical functionality, as it validates that a user can navigate through the entire buying process without errors.

**Validations included:**
- User can add a product to the cart
- Cart badge updates correctly
- Product details (name, quantity, price) are correct
- Checkout form accepts user information
- Subtotal, tax, and total amounts are calculated correctly
- Order is completed successfully and confirmation message is displayed

---

### 2. Remove Product from Cart

**Why this test was chosen:**
This test validates cart behavior and state management. Removing items from the cart is a common user action and ensures the UI and cart state are updated correctly.

**Validations included:**
- Product is successfully removed from the cart
- Cart badge is removed when no items remain
- Removed product is no longer visible in the cart
- Cart page remains accessible and stable

---

### 3. Login with Invalid Credentials

**Why this test was chosen:**
Authentication is the main entry point of the application. This test ensures that invalid credentials are correctly rejected and that the user receives proper feedback.

**Validations included:**
- Login is denied when invalid credentials are used
- Error message is displayed and visible to the user
- User remains on the login page
- No session is created and no navigation occurs

## Tech Stack

- Playwright – E2E testing framework

- TypeScript – Type safety and better maintainability

- Node.js

- GitHub Actions – Continuous Integration

- HTML Reporter – Test execution reports

## Project Structure

├── page/
│   ├── CheckoutPage.ts   # Page Object for checkout flow
│   └── LoginPage.ts      # Page Object for login page
│
├── tests/
│   └── ui/
│       ├── checkout.spec.ts  # Checkout E2E tests
│       └── login.spec.ts     # Login validation tests
│
├── utils/
│   └── login.ts          # Reusable login helper
│
├── .github/workflows/
│   └── playwright.yml    # CI pipeline
│
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md

## Design Decisions

- Page Object Model (POM) is used to encapsulate UI interactions and improve maintainability.

- Reusable login logic is implemented via a utility function and executed in beforeEach.

- Assertions are centralized when useful to reduce duplication and improve readability.

- CI configuration is optimized for stability (headless mode, retries, single worker).

## How to Run the Tests Locally

## Prerequisites

- Node.js (v18 recommended)

- npm

## Clone the repository

- Clone the repository from GitHub: git clone https://github.com/leosouto26620-rgb/playwright-e2e-automation.git

## Navigate to the project directory

- cd automation_test_saucedemo

## Install dependencies

- npm install

## Install Playwright browsers

- npx playwright install

## Run all tests

- npx playwright test

## Open HTML report locally

- npx playwright show-report

## Continuous Integration (GitHub Actions)

This project uses GitHub Actions to automatically run tests on:

- Every push to main

- Every pull request to main

CI Features

- Headless execution

- Retry logic enabled in CI

- HTML report generated on every run

- Report uploaded as a GitHub Actions artifact, even if tests fail

- You can download and inspect the Playwright HTML report directly from the workflow run.

## Known Limitations & Improvements

- Some steps are duplicated across tests and could be further encapsulated into higher-level Page Object methods.

- Login is currently performed via UI on each test for simplicity and stability. Session reuse (storageState) could be introduced to improve execution time.

- Test data is static and could be externalized or randomized in future iterations.

- Additional tagging (@smoke, @regression) and multi-browser execution could be added if the test suite grows.

## Problems, Errors & Observations

- During the invalid login validation, the error message UI appears visually misaligned within the red error container, suggesting a potential CSS layout issue.

- The error message starts with the text “Epic sad face”, which may not be suitable for a production environment. The message feels informal and could be confusing or unprofessional for end users.

- No functional blockers were encountered while automating the test cases. All scenarios were automatable using Playwright without workarounds.

