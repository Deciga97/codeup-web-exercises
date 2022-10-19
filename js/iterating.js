"use strict";
(function(){

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    // let names = [Steve, Jason, Alex, Jordan];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    // names.forEach(function(name));
    // console.log(name);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    // names.forEach(function(name)) {
    //     console.log(name)
    // }

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    // let names = ['Steve, Alex, Jason, Jordan'];
    //
    //     for(let i = 0; i < names.length; i++) {
    //         console.log(names[i]);
    //     }

    // OR

    // for(let i = 0; i <names.length; i++) {
    //     console.log(names[i])
    // }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    // let names = ['Steve, Alex, Jason, Jordan'];
    //
    // names.forEach(function(name) {
    //     console.log(name);
    // })


    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    // let firstArray = [1, 2, 3, 4, 5]
    // let secondArray = [1, 2, 3, 4, 5]
    // let thirdArray = [1, 2, 3, 4, 5]
    //
    // function arrays(firstArray, secondArray, thirdArray) {
    //
    // }
    // console.log(firstArray[0])
    // console.log(secondArray[1])
    // console.log(thirdArray[4])


    // OR

    function first(arr) {
        return arr[0];
    }
    function second(arr) {
        return arr [1];
    }

    function last (arr) {
        return arr[arr.length - 1];
    }

    let firstIndex = first(names);
    console.log(firstIndex)
    console.log(second(names));
    console.log(last(names));


})();