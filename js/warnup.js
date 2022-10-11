"use strict";

(function()) {
    // Write a function that takes in a number and returns the number passed multiplied by the number 5. If we pass anything other than a number into the function, the function should return the number 0.

    function multiplyBy5(inputNum) {
        if(typeof (inputNum)) {
            console.log("This is not a number");
            return 0;
        } else {
            inputNum = parseInt(inputNum);
            return inputNum * 5;


        }
    }
}
