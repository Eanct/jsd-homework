// The Age Calculator
// let currentYear = prompt("Please enter current year.");
// let birthYear = prompt("Please enter birth year.");

// let posibbleAge = currentYear - birthYear;

// console.log("They are either " + posibbleAge + " or " + (posibbleAge - 1));

// Bonus
// let currentYear = new Date().getFullYear();
// let birthYear = prompt("Please enter birth year.");

// let posibbleAge = currentYear - birthYear;

// console.log("They are either " + posibbleAge + " or " + (posibbleAge - 1));



// The Lifetime Supply Calculator
// let currentAge = prompt("Please enter your current age.");
// let maxAge = prompt("Please enter your maximum age.");
// let amountPerDay = prompt("How many you would eat per day?");

// let total = (amountPerDay * 365) * (maxAge - currentAge);

// console.log("You will need " + total + " to last you until the ripe old age of " + maxAge);



// The Geometrizer
// let radius = prompt("Please enter radius.");

// let circumference = 2 * Math.PI * radius;
// let area = Math.PI * radius * radius;

// console.log("The circumference is " + circumference);
// console.log("The area is " + area);



// The Temperature Converter
let tempCelsius = prompt("Please enter temperature (in celsius).");

let tempCelsiusToFahrenheit = (tempCelsius * (9/5)) + 32;

console.log(tempCelsius + "°C is " + tempCelsiusToFahrenheit + "°F");

let tempFahrenheit = prompt("Please enter temperature (in fahrenheit).");

let tempFahrenheitToCelsius = (tempFahrenheit - 32) * (5/9);

console.log(tempFahrenheit + "°F is " + tempFahrenheitToCelsius + "°C");