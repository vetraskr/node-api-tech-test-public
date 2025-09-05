# Overview

Write a new endpoint that checks a string for a palindrome and returns the following:

| Status Code | Value | Description                   |
| ----------- | ----- | ----------------------------- |
| 200         | true  | If string is a palindrome     |
| 200         | false | If string is not a palindrome |
| 400         |       | If value sent is not a string |

[Here](https://examples.yourdictionary.com/palindrome-examples.html) is a list of palindromes to assist.

## Running the app

```bash
npm install
npm start
```

## Running the tests

Follow the steps in [Running the app](#running-the-app) to get the app running, then in a seperate terminal run:

```bash
npm test
```

## Running the tests in "watch mode"

This will run the tests and app in watch mode, so any changes re-run all tests automatically

```bash
npm run test-watch
```
