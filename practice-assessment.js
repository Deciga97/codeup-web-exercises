"use strict";

function animal (chicken, cows, pigs) {
    let totalLegs = chicken *2 + cows *4 + pigs *4
    return totalLegs
}

console.log(animal(1, 1, 1))


function findPerimeter(length, width) {
    return (length + width) * 2
}

console.log(findPerimeter(2, 2))


function concatName(firstName, lastName) {
    return firstName + " " + lastName
}

console.log(concatName("Steve", "Deciga"))

function triArea(base, height) {
    let area = base * height / 2
    return area
}
console.log(triArea(2, 4))

function lessThan100(x, y) {
    if(x < 100 && y < 100) {
        return true
    } else {
        return false
    }
}
console.log(lessThan100(900, 7000))


// Not sure if I understand the questions on this one.
function makesTen(a, b) {
    if(a && b === 10 || a + b === 10) {
        return true
    } else {
        return false
    }
}
console.log(makesTen(10, 1))

function points(twoPointers, threePointers) {
    let totalPoints = twoPointers *2 + threePointers *3
    return totalPoints
}

console.log(points(3, 3))

function convert(minutes) {
    return minutes * 60
}

console.log(convert(2))

function remained(x, y) {
    let remainder = x / y
    return remainder

}
console.log(remained(2, 4))

// I might of taken this question one too literally.
let ray = [0, 1, 2,]
function getFirstValue(ray) {
    return ray[0]
}
console.log(ray[0])

