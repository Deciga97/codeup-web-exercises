"use strict";

// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

function showMultiplicatonTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(num + 'x' + i + '=' + num * i)
    }
}
    console.log(showMultiplicatonTable(1))


//--------------------------------------------------------------------

// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:

for(let i = 1; i <= 10; i++) { var random = Math.floor((Math.random() * 200) + 20);
    if(random % 2 === 0) {
        console.log(random + " " +  "is even")
    } else if (random % 2 === 1)
        console.log(random + " " + "is odd")
}


//---------------------------------------------------------------------

// Create a for loop that uses console.log to create the output shown below.


for(let i = 1; i < 10; i++) {
    console.log(i.toString().repeat(i));
}

//-----------------------------------------------------------------------

// Create a for loop that uses console.log to create the output shown below.

for(let i = 100; i >= 5; i -= 5) {
     console.log(i.toString().repeat(i));

}

//-------------------------------------------------------------------------

