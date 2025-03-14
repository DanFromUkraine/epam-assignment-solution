# Sauce Demo Test Automation Framework

This repository contains an automated test suite for the Sauce Demo login functionality using WebDriverIO.

## Test Cases

The test suite covers the following test cases:

### UC-1: Test Login form with empty credentials
- Type credentials into "Username" and "Password" fields
- Clear the inputs
- Hit the "Login" button
- Verify error message: "Username is required"

### UC-2: Test Login form with credentials by passing Username
- Type credentials in username
- Enter password
- Clear the "Password" input
- Hit the "Login" button
- Verify error message: "Password is required"

### UC-3: Test Login form with credentials by passing Username & Password
- Type valid credentials (username from accepted usernames, password as "secret_sauce")
- Click on Login
- Validate the title "Swag Labs" in the dashboard

## Implementation Details

- **Test Automation Tool**: WebDriverIO
- **Browsers**: Chrome, Edge
- **Locators**: XPath
- **Pattern**: Page Object
- **Assertions**: Using WebDriverIO's built-in assertion library
- **Logging**: Using WebDriverIO's built-in logging capabilities
- **Parallel Execution**: Configured for parallel test execution
- **Data Provider**: Implemented for test parameterization

## Setup Instructions

1. Install Node.js and npm
2. Install pnpm with npm
3. Clone this repository
4. Run `pnpm install` to install dependencies
5. Run `pnpm test` to execute the test suite

## Test Execution

Tests can be run in parallel across multiple browsers using the following command:

```
pnpm test
```

This will execute all test cases in both Chrome and Edge browsers simultaneously.