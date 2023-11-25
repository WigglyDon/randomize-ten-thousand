# randomize-ten-thousand

This is a small repository that includes a simple project configured via NPM (Node Package Manager), Git & GitHub, and Jest for testing.

`main.js` includes my solution to solving the following problem:

`Write a program that generates a list of 10,000 numbers in random order each time it is run. Each number in the list must be unique and be between 1 and 10,000 (inclusive).`

My solution was implemented via TDD (Test Driven Development) and can be verified through either setting up this repository locally, or by running the code in `main.js` on its own.

### Running the Code

1. **Node:**
   - If Node is installed on your system, run the following command within the repository:
     ```
     node main.js
     ```
   - This will print an array converted from the set.

2. **Testing:**
   - Clone the repository: `git clone <remote url>`
   - Change into newly created directory: `cd randomize-ten-thousand/`
   - Install dependencies: `npm i`
   - Run Jest test runner: `npm test`
   - This will print the results of the `main.test.js` to the console.

### Additional Reading

Two notable things about the implementation:

1. **CommonJS Syntax:**
   - I used CommonJS syntax for ease of setup and compatibility across local configurations.

2. **Use of Set:**
   - I opted for a `Set` instead of an array in `generateRandomSet` to ensure unique values. The conversion to an array in `main.js` is for better console output readability.



