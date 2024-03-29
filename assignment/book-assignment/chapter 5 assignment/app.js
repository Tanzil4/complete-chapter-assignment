// question 1

function addNumbers() {
   let num1 = parseFloat(prompt("Enter first number: "));
   let num2 = parseFloat(prompt("Enter second number: "));
   let sum = num1 + num2;
   alert("The sum of " + num1 + " and " + num2 + " is: " + sum);
}

addNumbers();

//question 2
let firstNumber = parseInt(prompt("Enter First Number : "))
let secondNumber = parseInt(prompt("Enter Second Number : "))
let subtract = firstNumber - secondNumber
document.write(" Subtraction of " + firstNumber + " and " + secondNumber + " is " + subtract)
document.write("<br>")

// question 3
var ticketPrice = 600;
var totalCost = ticketPrice * 5;
document.write("The cost of buying 5 movie tickets is: " + totalCost + " PKR.");

//question 5
function generateMultiplicationTable(number) {
   let table = "Multiplication Table of " + number + ":\n";
   for (var i = 1; i <= 10; i++) {
       table += number + " * " + i + " = " + (number * i) + "\n";
   }
   return table;
}
let number = 7; 
let multiplicationTable = generateMultiplicationTable(number);
console.log(multiplicationTable);

// question 6
function celsiusToFahrenheit(celsius) {
   let fahrenheit = (celsius * 9 / 5) + 32;
   return fahrenheit;
}
function fahrenheitToCelsius(fahrenheit) {
   let celsius = (fahrenheit - 32) * 5 / 9;
   return celsius;
}
let celsiusTemperature = 30;
let fahrenheitTemperature = celsiusToFahrenheit(celsiusTemperature);
console.log(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F");

fahrenheitTemperature = 86;
celsiusTemperature = fahrenheitToCelsius(fahrenheitTemperature);
console.log(fahrenheitTemperature + "°F is " + celsiusTemperature + "°C");


// question 7
let priceItem1 = 25;
let priceItem2 = 30; 
let quantityItem1 = 2; 
let quantityItem2 = 1;

let shippingCharges = 10;

let totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

document.write("<h2>Receipt</h2>");
document.write("<p>Price of Item 1: $" + priceItem1 + "</p>");
document.write("<p>Price of Item 2: $" + priceItem2 + "</p>");
document.write("<p>Quantity of Item 1: " + quantityItem1 + "</p>");
document.write("<p>Quantity of Item 2: " + quantityItem2 + "</p>");
document.write("<p>Shipping Charges: $" + shippingCharges + "</p>");
document.write("<h3>Total Cost: $" + totalCost + "</h3>");


// question 8
let totalMarks = 500;
let marksObtained = 420;

let percentage = (marksObtained / totalMarks) * 100;

document.write("<h2>Percentage Calculation</h2>");
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Marks Obtained: " + marksObtained + "</p>");
document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");


// question 9
// Given amounts
let usDollars = 10;
let saudiRiyals = 25;

// Exchange rates
let usdToPkrRate = 104.80;
let sarToPkrRate = 28;

// Convert amounts to Pakistani Rupees in a single expression
let totalPkr = (usDollars * usdToPkrRate) + (saudiRiyals * sarToPkrRate);

// Display the total amount in Pakistani Rupees
console.log("Total amount in Pakistani Rupees: " + totalPkr.toFixed(2));

// question 10
// Initialize the variable with some number
let number6 = 10;

// Perform arithmetic operations in a single expression
let result = ((number6 + 5) * 10) / 2;

// Display the result
console.log("Result: " + result);


// question 10
// Store the current year in a variable
let currentYear = new Date().getFullYear();

// Store their birth year in a variable
let birthYear = 1990; // You can change this to the person's actual birth year

// Calculate their possible ages based on the stored values
let age1 = currentYear - birthYear;
let age2 = age1 - 1; // If their birthday hasn't occurred yet
// Output the ages to the screen
console.log("They are either " + age1 + " or " + age2 + " years old.");

// question 12
// Store the radius into a variable
let radius = parseFloat(prompt("Enter the radius of the circle:"));

// Calculate the circumference
let circumference = 2 * Math.PI * radius;

// Calculate the area
let area = Math.PI * Math.pow(radius, 2);

// Output the results
console.log("The circumference is", circumference);
console.log("The area is", area);

// question 13

// Store your favorite snack into a variable
let favoriteSnack = prompt("Enter your favorite snack: ");

// Store your current age into a variable
let currentAge = parseInt(prompt("Enter your current age: "));

// Store a maximum age into a variable
let maxAge = parseInt(prompt("Enter your maximum age: "));

// Store an estimated amount per day (as a number)
let amountPerDay = parseFloat(prompt("Enter the estimated amount of snacks you eat per day: "));

// Calculate the remaining years
let remainingYears = maxAge - currentAge;

// Calculate the total amount needed
let totalAmountNeeded = remainingYears * 365 * amountPerDay;

// Output the result
console.log("You will need " + totalAmountNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");


