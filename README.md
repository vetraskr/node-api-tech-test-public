# Overview

**Task 1** - Write a new endpoint that checks a string for a palindrome and returns the following:

| Status Code | Value | Description                   |
| ----------- | ----- | ----------------------------- |
| 200         | true  | If string is a palindrome     |
| 200         | false | If string is not a palindrome |

[Here](https://examples.yourdictionary.com/palindrome-examples.html) is a list of palindromes to assist.

**Task 2** - As an additional task, add an endpoint that returns:

| Status Code | Value | Description                   |
| ----------- | ----- | ----------------------------- |
| 400         |       | If value sent is not a string |

## Running the app

```bash
npm install
npm start
```

## Running the tests

Follow the steps in [Running the app](#running-the-app) to get the app running, then in a separate terminal run:

```bash
npm test
```

## Running the tests in "watch mode"

This will run the tests and app in watch mode, so any changes re-run all tests automatically

```bash
npm run test-watch
```
