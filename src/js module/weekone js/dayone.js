// Logic Practice

// 1. Positive or Negative
// Create a program that checks if a number stored in a variable is positive or negative.
// Log "The number is positive" if it's greater than zero, otherwise log "The number is negative."
if (i > 0) {
    console.log("The number is positive");
} else if (i < 0) {
    console.log ("The number is negative")
}
// 2. Minimum Age for Driving
// Write a program that checks a person's age stored in a variable and logs "Can drive" if they are 16 or older.
// If they are under 16, log "Cannot drive."
const legalDrivingAge = 16
const age = 18
if (age >= 16) {
    console.log("Can drive");
} else if (age < 16) {
    console.log ("Cannot drive")
}
// 3. School Grade Levels
// Create a program that categorizes school levels based on a student's grade stored in a variable.
// Use the following categories: "Elementary" for grades 1-5, "Middle" for grades 6-8, and "High" for grades 9-12.
// Log the school level.
if (i = [1,2,3,4,5]) {
    console.log ("Elementary")
}
else if (i = [6,7,8]) {
    console.log ("Middle")
}
else if(i = [9,10,11,12]) {
    console.log ("high")
}

// 4. Basic Discount System
// A shop offers a discount for purchases over $50.
// Write a program where the total purchase amount is stored in a variable.
// If the amount is over $50, calculate the discount and log it. Otherwise, log "No discount available."
// FIZZBUZZ

// Run through all the numbers from 1-100
// Log the number and "FizzBuzz" if the number is divisible by 3 and 5
// Log the number and "Fizz" if the number is divisible by 3
// Log the number and "Buzz" if the number is divisible by 5
// Log the number if none of the above conditions are true
const maxNumber = prompt("Enter a fizzbuzzy number: ");
for (let i = 1; i < 100; i++) {
    const printFIZZBUZZ = i%3 === 0 && i%5 === 0
    const FIZZBUZZ = printFIZZBUZZ ? 'FizzBuzz' : ''
    console.log('${');

}
// EXTRA:

// Modify the FizzBuzz problem to allow the user to choose a max integer.
// (example: the user is prompted for a number, they choose 15, so the problem runs through the numbers 1 to 15)