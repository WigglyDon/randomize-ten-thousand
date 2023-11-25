# randomize-ten-thousand

This is a small repository that includes a simple project configured via NPM (Node Package Manager), Git & GitHub, and Jest for testing.

`main.js` includes my solution to solving the following problem:

`Write a program that generates a list of 10,000 numbers in random order each time it is run. Each number in the list must be unique and be between 1 and 10,000 (inclusive).`

My solution was implemented via TDD (Test Driven Development) and can be verified through either setting up this repository locally, or by running the code in `main.js` on its own.

a) Running via `node`: If node is installed on your system, simply type `node main.js` within the repository that contains the file and the console will print an array converted from the set.

b) If you want to run the tests locally, you will need to clone this repository and install dependencies.

1. Clone using preferred method `git clone <remote url>`
2. Install dependencies via NPM `npm i`
3. Run the jest test runner using `npm test`

This will print the results of the `main.test.js` to the console.

4. (optional) Similarly, method A will also work at this point to compare.

# Additional Reading!

There are two notable things I'd like to point out about how I've done this that are worth consideration.

The first thing is the use of CommonJS syntax as opposed to a more modern ECMAScript. The only reason I chose to use this syntax is because I think that it is easier to set up and run the code on a wider variety of local configurations, and because I am intending to share this with potential employers, I would ideally like it to be easy for them to verify this on their own.

The second thing I would like to point out is the usage of a [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) instead of simply using an array, and also why I am converting the `Set` to an array when calling it in `main.js`.

A `Set` is a data set in Javascript which unlike an array, will only hold unique values. I found this more appropriate for the main method `generateRandomSet` because it ensures that there are no duplicates added into the result by mistake.

The reason why the `Array.from()` method is being called on `generateRandomSet()` is to console log a more readable result when individually running the `main.js` file using `node main.js`. Without doing this, the terminal will not concatenate the result, printing each number of the `Set` on a new line and flood the console.
