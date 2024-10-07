// Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/
const greet = (name) => {
  return `hello, ${name}!`;
};

// Write a simple arrow function that takes two parameters and returns their sum.

const sum = (a, b) => {
  return a + b;
};

// Write a simple arrow function that squares a number.
const square = (n) => {
  return n * n;
};

// [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.
// not sure about the answers
const squared = squareNumbers([2, 4, 6]);
console.log(squared);

const result = squareNum([1, 2, 3, 4]);
console.log(result);
