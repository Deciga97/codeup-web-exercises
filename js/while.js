"use strict";


// While Loops Exercises

// 2. Create a While loop that uses console.log() to create the output shown below.

let i = 2;

while(i <= 65536) {
    console.log(i)
    i += i
}
console.log(i)

//Walkthrough Code

let num = 1;

while (num<= 65536) {
    console.log(num *= 2);
}

//---------------------------------------------------------------------------

// Do While Loop
// 1. An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. The below code shows how to get the random numbers for this exercise.

var allCones = Math.floor(Math.random() * 50) + 50;

do {
    let soldCones = Math.floor(Math.random() * 5) + 1
    if(soldCones <= allCones) {
        allCones -= allCones;
        console.log("${soldCones} cones sold...")
        allCones -= soldCones;
        console.log("Cannot sell you " + soldCones + " I got a few left" )
    }
} while(allCones !== 0)
console.log("Yay! I sold them all!")

