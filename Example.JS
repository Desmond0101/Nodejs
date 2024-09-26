Examples of CLASSES 
Basic Class Definition
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

const dog = new Animal('Dog');
dog.speak(); // Output: Dog makes a noise.

EXAMPLES OF ARROW FUNCTION 
Basic Arrow Function
const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8

EXAMPLES OF VARIABLES 
Declaring Variable 
var name = 'Alice';
console.log(name); // Output: Alice

var age = 25;
console.log(age); // Output: 25

EXAMPLE OF ARRAY FUNCTION
Creating an Array
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits); // Output: ['apple', 'banana', 'orange']

EXAMPLE OF DESTRUCTURING 
Array Destructuring
const colors = ['red', 'green', 'blue'];

const [firstColor, secondColor] = colors;

console.log(firstColor); // Output: red
console.log(secondColor); // Output: green

XAMPLES OF MODULES
Basic Module Export and Import
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

EXAMPLES OF TERNARY OPERATION 
condition ? expressionIfTrue : expressionIfFalse;
Basic Example
const age = 18;
const canVote = age >= 18 ? 'Yes' : 'No';
console.log(canVote); // Output: Yes

EXAMPLES OF SPREAD OPERATOR 
Expanding Arrays
const fruits = ['apple', 'banana'];
const moreFruits = ['orange', 'grape'];

const allFruits = [...fruits, ...moreFruits];
console.log(allFruits); // Output: ['apple', 'banana', 'orange', 'grape']



