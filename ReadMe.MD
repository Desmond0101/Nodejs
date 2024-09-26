CLASSES 
In JavaScript, classes are a way to create objects and manage their behavior. They provide a more structured and clear syntax for object-oriented programming compared to traditional constructor functions. Introduced in ECMAScript 2015 (ES6), classes help encapsulate data and methods related to that data.

ARRAY FUNCTION 
In JavaScript, arrow functions are a more concise way to write function expressions. They were introduced in ECMAScript 6 (ES6) and provide a shorter syntax, especially when writing small, anonymous functions. However, arrow functions also come with some behavioral differences compared to traditional functions, particularly in how they handle the this keyword

DESTRUCTURING
Destructuring is a convenient way to extract values from arrays or properties from objects into distinct variables.the syntax for extracting values from an object property and assigning them to a variable. The destructuring is also possible for JavaScript Arrays. By default, the object key name becomes the variable that holds the respective value

MODULES
Modules allow you to break your code into multiple files for better organization and reuse. You can use the export statement to make functions, objects, or variables available to other files, and the import statement to bring them into the current file
Also a file containing related code. In JavaScript, we use the import and export keywords to share and receive functionalities respectively across different modules. The export keyword is used to make a variable, function, class or object accessible to other modules.

TERNARY OPERATOR
The ternary operator is a compact way to write a conditional expression. It takes three operands: a condition, a result if the condition is true, and a result if the condition is false.
The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark ( ? ), then an expression to execute if the condition is truthy followed by a colon ( : ), and finally the expression to execute if the condition is falsy

Variables 
In JavaScript, variables are used to store data values. There are three main ways to declare variables:

1. var`
   - Scope: Function-scoped.
   - Hoisting: Variables declared with var are hoisted to the top of their scope and initialized with undefined.
   - Re-declaration: You can redeclare var variables within the same scope.
   - Example:
     javascript
     var x = 5;
     console.log(x); // Output: 5
     

2. `let
   - Scope: Block-scoped (only accessible within the nearest enclosing { }).
   - Hoisting: let variables are hoisted but are not initialized until the code execution reaches them. Accessing them before initialization results in a ReferenceError.
   - Re-declaration: You cannot redeclare let variables within the same scope.
   - Example:
     javascript
     let y = 10;
     console.log(y); // Output: 10
     

3. const`
   - Scope: Block-scoped (same as let).
   - Hoisting: Similar to let, const variables are hoisted but uninitialized.
   - Re-declaration: You cannot reassign or redeclare a const variable.
   - Immutability: You can't change the value of a const after it's assigned, but if the value is an object or array, its contents can still be modified.
   - Example:
     javascript
     const z = 15;
     console.log(z); // Output: 15
     
     SPREAD OPERATOR 
     The spread operator (...) allows you to expand arrays or objects into individual elements. It's useful for merging, copying, or passing elements in a function call.
     const arr = [1, 2, 31];
console.log(...arr); // Output: 1 2 3