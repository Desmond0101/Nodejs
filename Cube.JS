// Function to calculate the area of a rectangle
function calculateRectangleArea(width, height) {
    return width * height;
}

// Function to calculate the cube of numbers 5, 15, and 20
function calculateCubes() {
    let numbers = [5, 15, 20];
    let cubes = numbers.map(num => num ** 3);
    return cubes;
}

// Example usage:
let area = calculateRectangleArea(10, 5); // Example width: 10, height: 5
console.log("Area of the rectangle:", area);

let cubes = calculateCubes();
console.log("Cubes of 5, 15, and 20:", cubes);