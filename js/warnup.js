// Thur, OCT 13, Warmup

// function inBetween(min, max, num) {
//     return num < max && num > min
// }
//
// console.log(inBetween(5, 10, 7))
    // Monday OCT 18, Warmup

    /*  Morning Warm-Up:

Create a function named "typePrinter" that accepts an array as an input, and logs the data type of each element to the console.

    let arr = [true, "Icon", 25, "66", false, 0];
white_check_mark
+1
raised_hands
     */

//     let arr = [true, "Icon", 25, "66", false, 0];
// function typePrinter(arr) {
//
//     // Not sure why the code below didn't work, will re-work it later.
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr(i))
//     }
//
// }
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])
// console.log(arr[5])


// WARMUP THUR, OCT 20
// Warm-Up:
//
// Create a function named "average" that takes in an array of numeric values, and returns the average. If any of the elements in the array are non-numeric, the function should return false.
//
// Ex:
// average(["6", 5, 3, 2, 9])                       // returns 5
// average([true, 6, 9, 3, 10])                     // returns false
// average([{name: "Codey the Duck}, 10, 3, false]) // returns false
// average([1, 2, 3, 4, 5])                         // returns 3
// average(["5.5", "five", 3, 6, 7])                // returns false



function average(array) {
    i = 0;
    i = 0;
    while(i < array.length(array[i])) {
        if(isNumeric(array[])) {
            sum += parseFloat(array[i]);

        }
        i++;
    } else {return false

    }
    return sum / array.length;
}
average()