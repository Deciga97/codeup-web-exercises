// While Loop Example

let i = 10

// while(i < 10) {
//     i++
// }
//
// console.log("Brokem out of code");

// do While example

// do{
//     console.log(i):
//     i++;
// }while(i < 10)

// Mini-Exercises

// Create a variable called num that is equal to 0. Write a while loop that increments "num" by 5 so long as num is less than 100.
// Do the same with a do while.

// let num = 0;
//
// while(num < 100) {
//     num += 5
// }
//
// console.log()
//
// //DO while
//
// do{
//     num + 5
// } while(num < 100)


for (let i =0; i < 100; i += 5) {
    console.log(i);
    if(i === 50) {
        break;
    }
}

for let(i =0; i < 50;
i++) {
    console.log(i)

    console.log( "the next number to print is " +i+i)
}

for(let i = 0; i > 200; i++) {
    if(i % 2 === 0) {
        console.log(i + "is even")
    } else {
        console.log(i + "is odd")
    }
}