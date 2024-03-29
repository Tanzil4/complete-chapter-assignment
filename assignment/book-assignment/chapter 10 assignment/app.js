//question 1


let multiArray = [[]]; // Initialize an empty multidimensional array
multiArray.push([]);


//question 2


let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];



//question 3


// Loop to print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i); // Print the current number
}


//question 4


// Taking input from the user for the table number and length
let tableNumber = parseInt(prompt("Enter the number for which you want to print the multiplication table:"));
let tableLength = parseInt(prompt("Enter the length of the multiplication table:"));

// Printing the multiplication table using a for loop
console.log(`Multiplication table of ${tableNumber} up to ${tableLength} terms:`);
for (let i = 1; i <= tableLength; i++) {
    console.log(`${tableNumber} * ${i} = ${tableNumber * i}`);
}



//question 5


// Array of fruits
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// Printing items of the array using a for loop
console.log("Fruits:");
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}



//question 6


// Function to generate and display the series
function generateSeries() {
    // Counting series: 1 to 15
    document.write("<p>Counting: ");
    for (let i = 1; i <= 15; i++) {
        document.write(i + ", ");
    }
    document.write("</p>");

    // Reverse counting series: 10 to 1
    document.write("<p>Reverse counting: ");
    for (let i = 10; i >= 1; i--) {
        document.write(i + ", ");
    }
    document.write("</p>");

    // Even series: 0 to 20
    document.write("<p>Even: ");
    for (let i = 0; i <= 20; i += 2) {
        document.write(i + ", ");
    }
    document.write("</p>");

    // Odd series: 1 to 19
    document.write("<p>Odd: ");
    for (let i = 1; i <= 19; i += 2) {
        document.write(i + ", ");
    }
    document.write("</p>");

    // Series: 2k, 4k, 6k, ... , 20k
    document.write("<p>Series: ");
    for (let i = 2; i <= 20; i += 2) {
        document.write(i + "k, ");
    }
    document.write("</p>");
}

// Call the function to generate and display the series
generateSeries();



//question  7



// Function to generate and display the series
function generateSeries() {
    // Counting series: 1 to 15
    document.write("<p>Counting: ");
    for (let i = 1; i <= 15; i++) {
        document.write(i + ", ");
    }
    document.write("</p>");

    // Reverse counting series: 10 to 1
    document.write("<p>Reverse counting: ");
    for (let i = 10; i >= 1; i--) {
        document.write(i + ", ");
    }
    document.write("</p>");

    // Even series: 0 to 20
    document.write("<p>Even: ");
    for (let i = 0; i <= 20; i += 2) {
        document.write(i + ", ");
    }
    document.write("</p>");

    // Odd series: 1 to 19
    document.write("<p>Odd: ");
    for (let i = 1; i <= 19; i += 2) {
        document.write(i + ", ");
    }
    document.write("</p>");

    // Series: 2k, 4k, 6k, ... , 20k
    document.write("<p>Series: ");
    for (let i = 2; i <= 20; i += 2) {
        document.write(i + "k, ");
    }
    document.write("</p>");
}

// Call the function to generate and display the series
generateSeries();



//question 8


// Given array
let A = [24, 53, 78, 91, 12];

// Initialize a variable to store the largest number, assuming the first element is the largest initially
let largestNumber = A[0];

// Loop through the array to compare each element with the current largest number
for (let i = 1; i < A.length; i++) {
    if (A[i] > largestNumber) {
        largestNumber = A[i]; // Update largestNumber if a larger number is found
    }
}

// Print the largest number
console.log("The largest number in the array is:", largestNumber);



//question 9


// Given array
let b = [24, 53, 78, 91, 12];

// Initialize a variable to store the smallest number, assuming the first element is the smallest initially
let smallestNumber = b[0];

// Loop through the array to compare each element with the current smallest number
for (let i = 1; i < b.length; i++) {
    if (b[i] < smallestNumber) {
        smallestNumber = b[i]; // Update smallestNumber if a smaller number is found
    }
}

// Print the smallest number
console.log("The smallest number in the array is:", smallestNumber);



//question 10


// Loop to print multiples of 5 ranging from 1 to 100
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log(i); // Print the current number if it is a multiple of 5
    }
}



