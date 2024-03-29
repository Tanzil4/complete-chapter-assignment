//question  1


// Prompt the user to enter a city name
let cityName = prompt("Please enter the name of your city:");

// Check if the entered city is "Karachi"
if (cityName.toLowerCase() === "karachi") {
    // If the city is Karachi, display the welcome message
    console.log("Welcome to the city of lights");
} else {
    // If the city is not Karachi, display a generic welcome message
    console.log("Welcome!");
}


//question 2



// Prompt the user to enter their gender
let gender = prompt("Please enter your gender (male/female):");

// Convert the input to lowercase for case-insensitive comparison
gender = gender.toLowerCase();

// Check the gender and display the appropriate message
if (gender === "male") {
    console.log("Good Morning Sir.");
} else if (gender === "female") {
    console.log("Good Morning Ma'am.");
} else {
    console.log("Invalid input. Please enter either 'male' or 'female'.");
}



//question 3



// Prompt the user to enter the color of the road traffic signal
let color = prompt("Enter the color of the road traffic signal (red, yellow, green):");

// Convert the input to lowercase for case-insensitive comparison
color = color.toLowerCase();

// Display message based on the color of the signal
switch (color) {
    case "red":
        console.log("Vehicles must stop.");
        break;
    case "yellow":
        console.log("Vehicles should get ready to move.");
        break;
    case "green":
        console.log("Vehicles can move now.");
        break;
    default:
        console.log("Invalid color. Please enter 'red', 'yellow', or 'green'.");
}


//question 4



// Prompt the user to enter the remaining fuel in liters
let remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in liters):"));

// Check if the remaining fuel is less than 0.25 liters
if (remainingFuel < 0.25) {
    console.log("Please refill the fuel in your car.");
} else {
    console.log("You have enough fuel.");
}



//question 5


// Section a
let a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}

// Section b
let b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}

// Section c
let c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}

// Section d
let materialCost = 20000;
let laborCost = 2000;
let totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}

// Section e
if (true){
    alert("True");
}
if (false){
    alert("False");
}


//question 6


// Function to calculate grade
function calculateGrade() {
    // Retrieve marks and total marks
    let subject1Marks = parseFloat(document.getElementById('subject1').value);
    let subject2Marks = parseFloat(document.getElementById('subject2').value);
    let subject3Marks = parseFloat(document.getElementById('subject3').value);
    let totalMarks = parseFloat(document.getElementById('totalMarks').value);
    
    // Calculate percentage
    let totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;
    let percentage = (totalObtainedMarks / totalMarks) * 100;

    // Calculate grade and remarks based on percentage
    let grade, remarks;
    if (percentage >= 90) {
        grade = 'A+';
        remarks = 'Excellent';
    } else if (percentage >= 80) {
        grade = 'A';
        remarks = 'Very Good';
    } else if (percentage >= 70) {
        grade = 'B';
        remarks = 'Good';
    } else if (percentage >= 60) {
        grade = 'C';
        remarks = 'Satisfactory';
    } else if (percentage >= 50) {
        grade = 'D';
        remarks = 'Average';
    } else {
        grade = 'F';
        remarks = 'Fail';
    }

    // Display results
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Result</h2>
        <p>Total Marks: ${totalMarks}</p>
        <p>Marks Obtained: ${totalObtainedMarks}</p>
        <p>Percentage: ${percentage.toFixed(2)}%</p>
        <p>Grade: ${grade}</p>
        <p>Remarks: ${remarks}</p>
    `;
}

//question 7



// Store secret number
let secretNumber = Math.floor(Math.random() * 10) + 1; // Generates a random number between 1 and 10

// Prompt user to guess the secret number
let userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// Check if the user's guess is correct or close enough
if (userGuess === secretNumber) {
    console.log("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
    console.log("Close enough to the correct answer");
} else {
    console.log("Sorry, wrong guess. The secret number was " + secretNumber);
}



//question 8


// Prompt the user to enter a number
let number = parseInt(prompt("Enter a number:"));

// Check if the number is divisible by 3
if (number % 3 === 0) {
    console.log(number + " is divisible by 3.");
} else {
    console.log(number + " is not divisible by 3.");
}


//question 9


// Prompt the user to enter a number
let number2 = parseInt(prompt("Enter a number:"));

// Check if the number is even or odd
if (number2 % 2 === 0) {
    console.log(number + " is an even number.");
} else {
    console.log(number2 + " is an odd number.");
}



//question 10



// Prompt the user to enter the temperature
let temperature = parseInt(prompt("Enter the temperature:"));

// Check the temperature and display a message based on the criteria
if (temperature > 40) {
    console.log("It is too hot outside.");
} else if (temperature > 30) {
    console.log("The Weather today is Normal.");
} else if (temperature > 20) {
    console.log("Today’s Weather is cool.");
} else if (temperature > 10) {
    console.log("OMG! Today’s weather is so Cool.");
} else {
    console.log("It's freezing outside!");
}


//question 11



// Prompt the user to enter the first number
let num1 = parseFloat(prompt("Enter the first number:"));

// Prompt the user to enter the second number
let num2 = parseFloat(prompt("Enter the second number:"));

// Prompt the user to enter the operation
let operation = prompt("Enter the operation (+, -, *, /, %):");

// Variable to store the result
let result;

// Perform the calculation based on the operation
if (operation === '+') {
    result = num1 + num2;
} else if (operation === '-') {
    result = num1 - num2;
} else if (operation === '*') {
    result = num1 * num2;
} else if (operation === '/') {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        console.log("Error: Division by zero is not allowed.");
    }
} else if (operation === '%') {
    result = num1 % num2;
} else {
    console.log("Error: Invalid operation.");
}

// Display the result to the user
if (result !== undefined) {
    console.log("Result: " + result);
}
