"use strict";

//  Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry about the real operations to get the values, the goal of these exercises is to understand how real world conditions can be represented with code.

// Use the alert function to show a message that says 'Welcome to my Website!'

alert("Welcome to my website!");

// Use a prompt to ask for the user's favorite color. Use the user's response to alert a message that says that the color entered is your favorite color too.

// For example, if the user enters "blue", your code should alert a message that says:

// "Great, blue is my favorite color too!"

let color = prompt("Whats your favorite color?");
alert("Woah! "+  color  +" is my favorite color too!");

// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?

alert("Blockbuster called and wants there movies back");
let mermaid = prompt("How many days did you rent out The Little mermaid?");
let brotherBear = prompt("Okay...what about brother bear?");
let hercules = prompt("And hercules?");
alert("At $3 a day, your total will be " + (mermaid*3 + brotherBear*3 + hercules*3));

// Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

let google = prompt("how much is google paying you per hour?");
let amazon = prompt("what about amazon?");
let facebook = prompt("what about facebook?");

let facebookPerHr = prompt("how many hours at facebook");
let googlePerHr = prompt("google?");
let amazonPerHr = prompt("what about amazon?");

alert("so you made a total of " + (facebook*facebookPerHr + google*googlePerHr + amazon*amazonPerHr));

// A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.

let isFull = confirm("Is the class full?");
let hasConflict = confirm("Do you have a conlfict with your schedule?");
if(!isFull && !hasConflict) {
    prompt("Okay, you can enroll.")
} else {
    prompt("Sorry no room")
}

//A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

let itemsBought = prompt("How many items did you buy?");
let offer = confirm ("Has the offer expired?");
let isPremium = confirm("Are you a premium member?");

alert((parseFloat(itemsBought) > 2 || isPremium) && !offer);