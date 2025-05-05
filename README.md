# QA Automation Engineer Assignment

This repository contains a test automation assignment for QA Engineer candidates. The assignment is designed to evaluate your skills with the following technologies:

- Node.js 22+
- TypeScript
- WebdriverIO
- Mocha
- Page Object Model pattern

## Assignment Overview

Your task is to implement automated tests for the [Sauce Demo](https://www.saucedemo.com/) website, which is a sample e-commerce application. The repository contains a basic structure with placeholder files that you need to complete.

### Requirements

1. Implement the page objects in the `src/pages` directory:
   - Complete the `LoginPage` implementation
   - Complete the `InventoryPage` implementation
   - Complete the `CartPage` implementation

2. Implement the test cases in the `test/specs` directory:
   - Login functionality tests
   - Shopping cart functionality tests

3. Make sure all tests pass successfully

4. Follow best practices:
   - Use proper assertions
   - Implement clean, readable code
   - Add comments where necessary
   - Follow the Page Object Model pattern

## Time Limit

This assignment should take approximately 2 hours to complete.

## Getting Started

### Prerequisites

- Node.js 22 or higher
- npm or yarn

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Tests

To run the tests:

```bash
npm test
```

### Generating Reports

This project uses Allure for test reporting. After running the tests, you can generate and open the Allure report with:

```bash
npm run report
```

This will generate the report and automatically open it in your default browser.

## Submission

Please submit your completed assignment by:

1. Creating a new branch with your name
2. Pushing your changes to that branch
3. Creating a pull request

## Evaluation Criteria

Your submission will be evaluated based on:

1. **Functionality**: Do the tests work correctly?
2. **Code Quality**: Is the code well-structured, readable, and maintainable?
3. **Test Coverage**: Do the tests cover the required scenarios?
4. **Best Practices**: Are you following testing best practices?
5. **TypeScript Usage**: Are you using TypeScript features correctly?

## Resources

- [WebdriverIO Documentation](https://webdriver.io/docs/gettingstarted)
- [Mocha Documentation](https://mochajs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Sauce Demo Website](https://www.saucedemo.com/)

Good luck!
