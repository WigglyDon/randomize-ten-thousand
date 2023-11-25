# randomize-ten-thousand

This is a small repository that includes a simple project configured via NPM (Node Package Manager), Git & GitHub, and Jest for testing.

`main.js` includes my solution to solving the following problem:

`Write a program that generates a list of 10,000 numbers in random order each time it is run. Each number in the list must be unique and be between 1 and 10,000 (inclusive).`

My solution was implemented via TDD (Test Driven Development) and can be verified through either setting up this repository locally, or by running the code in `main.js` on it's own.

A: Running via `node` => If node is installed on your system, simply type this command within the repository that contains the file and the console will print an array converted from the set (converted to be readable)

B: If you want to run the tests locally, you will need to clone this repository and install dependencies.

1. Clone using preferred method `git clone <remote url>`
2. Install dependencies via NPM `npm i`
3. Run the jest test runner using `npm test`

This will print the results of the `main.test.js` to the console.

4. (optional) Similarly, method A will also work at this point to compare.
