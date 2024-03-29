//question 1


let studentNames = []; // Empty array to store student names
studentNames.push("John");
studentNames.push("Emma");
// Add more student names as needed



//question 2


let studentNames1 = { names: [] }; // Empty object with an array property to store student names
studentNames1.names.push("John");
studentNames1.names.push("Emma");
// Add more student names as needed



//question 3


let stringsArray = ["apple", "banana", "orange", "grape"]; // Initializing a strings array with values
console.log(stringsArray[0]); // Output: "apple"
console.log(stringsArray[1]); // Output: "banana"


//question 4


let numbersArray = [10, 20, 30, 40, 50]; // Declaration and initialization of a numbers array
console.log(numbersArray[0]); // Output: 10
console.log(numbersArray[1]); // Output: 20



//question 5


let booleanArray = [true, false, true, false]; // Declaration and initialization of a boolean array
console.log(booleanArray[0]); // Output: true
console.log(booleanArray[1]); // Output: false



//question 6


let mixedArray = ["apple", 10, true, "banana", false]; // Declaration and initialization of a mixed array
console.log(mixedArray[0]); // Output: "apple"
console.log(mixedArray[1]); // Output: 10
console.log(mixedArray[2]); // Output: true



//question 7


// Declare and initialize the array with education qualifications
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// Create a function to display the qualifications in the browser
function displayQualifications() {
    // Access the <div> element in which the qualifications will be displayed
    let qualificationsDiv = document.getElementById("qualifications");

    // Create a <ul> element to hold the list of qualifications
    let list = document.createElement("ul");

    // Iterate over the qualifications array and create <li> elements for each qualification
    qualifications.forEach(function(qualification) {
        let listItem = document.createElement("li");
        listItem.textContent = qualification;
        list.appendChild(listItem);
    });

    // Append the <ul> element to the <div> element
    qualificationsDiv.appendChild(list);
}

// Call the displayQualifications function to display the qualifications in the browser
displayQualifications();



//question  8


// Declare arrays to store student names and scores
let studentNames2 = ["John", "Emma", "Michael"];
let studentScores = [400, 450, 480]; // Assuming scores out of 500

// Function to calculate percentages
function calculatePercentage(score) {
    return (score / 500) * 100;
}

// Display scores and percentages
for (let i = 0; i < studentNames2.length; i++) {
    let percentage = calculatePercentage(studentScores[i]);
    console.log(`${studentNames2[i]} scored ${studentScores[i]} out of 500. Percentage: ${percentage}%`);
}
 


//question  9


// Initialize an array with color names
let colors = ["red", "green", "blue"];

// Display the array elements in the browser
console.log("Initial array:", colors);

// Ask the user what color to add to the beginning
let colorToAddStart = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddStart); // Add the color to the beginning
console.log("Array after adding color to the beginning:", colors);

// Ask the user what color to add to the end
let colorToAddEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddEnd); // Add the color to the end
console.log("Array after adding color to the end:", colors);

// Add two more colors to the beginning
colors.unshift("yellow", "orange");
console.log("Array after adding two more colors to the beginning:", colors);

// Delete the first color in the array
colors.shift();
console.log("Array after deleting the first color:", colors);

// Delete the last color in the array
colors.pop();
console.log("Array after deleting the last color:", colors);

// Ask the user at which index to add a color and the color name
let indexToAdd = parseInt(prompt("Enter the index where you want to add a color:"));
let colorToAdd = prompt("Enter the color to add:");
colors.splice(indexToAdd, 0, colorToAdd);
console.log("Array after adding a color at the desired position:", colors);

// Ask the user at which index to delete color(s) and how many colors to delete
let indexToDelete = parseInt(prompt("Enter the index from where you want to delete color(s):"));
let deleteCount = parseInt(prompt("How many colors do you want to delete?"));
colors.splice(indexToDelete, deleteCount);
console.log("Array after deleting color(s) from the user-defined position:", colors);




//question 10


// Initialize an array with student scores
let studentScores3 = [85, 72, 93, 65, 78];

// Display the initial array
console.log("Initial array:", studentScores3);

// Sort the array in ascending order
studentScores3.sort(function(a, b) {
    return a - b;
});

// Display the sorted array
console.log("Sorted array in ascending order:", studentScores3);


//question 11



    // Initialize an array with city names
let cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];

// Initialize an empty array to store selected cities
let selectedCities = [];

// Copy three array elements from cities array to selectedCities array
selectedCities = cities.slice(0, 3);

// Display the arrays
console.log("Cities array:", cities);
console.log("Selected cities array:", selectedCities);



//question 12



var arr = ["This", "is", "my", "cat"];
var singleString = arr.join(" "); // Join the elements with a space

console.log(singleString); // Output: "This is my cat"



//question 13


// Initialize an empty array to act as a FIFO queue
let fifoQueue = [];

// Function to add an element to the FIFO queue
function enqueue(value) {
    fifoQueue.push(value); // Add the value to the end of the array
}

// Function to remove the first element from the FIFO queue
function dequeue() {
    return fifoQueue.shift(); // Remove and return the first element from the array
}

// Adding values to the FIFO queue
enqueue("A");
enqueue("B");
enqueue("C");

// Accessing the values in the order they were stored
console.log(dequeue()); // Output: "A"
console.log(dequeue()); // Output: "B"
console.log(dequeue()); // Output: "C"



//question 14


// Initialize an empty array to act as a LIFO stack
let lifoStack = [];

// Function to push an element onto the LIFO stack
function push(value) {
    lifoStack.push(value); // Add the value to the end of the array
}

// Function to pop the last element from the LIFO stack
function pop() {
    return lifoStack.pop(); // Remove and return the last element from the array
}

// Pushing values onto the LIFO stack
push("A");
push("B");
push("C");

// Accessing the values in reverse order
console.log(pop()); // Output: "C"
console.log(pop()); // Output: "B"
console.log(pop()); // Output: "A"



//question 15



// Array containing phone manufacturers
let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Generating the dropdown/select menu using document.write()
document.write('<select>');
for (let i = 0; i < phoneManufacturers.length; i++) {
    document.write('<option value="' + phoneManufacturers[i] + '">' + phoneManufacturers[i] + '</option>');
}
document.write('</select>');


