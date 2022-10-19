"use strict";

// Break and Continue Exercises //

// 1. Create a file named break_and_continue.js in the js directory //

// 2. Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.//

let userInput = parseFloat(prompt("Enter odd number between 1 and 50"))
console.log("number to skip is:" ${userInput})
for(let i = 1; i <= 50; i++) {

    if(userInput === i) {
        console.log("Yikes! Skipping number: " + userInput);
    }

    if(i % 2 !== 0) {
        console.log("here is an odd number ${i})
    }

}
---------------------------------------------------------------------------
    //Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.


