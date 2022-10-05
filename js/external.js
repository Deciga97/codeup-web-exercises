alert("Welcome to my website!")
let color = prompt("Whats your favorite color?")
console.log(color)
alert("Woah! "+  color  +" is my favorite color too!")
alert("Blockbuster called and wants there movies back")
let mermaid = prompt("How many days did you rent out The Little mermaid?")
let brotherBear = prompt("What about brother bear?")
let hercules = prompt("And hercules?")

alert("Your total will be " + (mermaid*3 + brotherBear*3 + hercules*3))

let google = prompt("how much is google paying you per hour?")
    let amazon = prompt("what about amazon?")
let facebook = prompt("what about facebook?")

let facebookPerHr = prompt("how many hours at facebook")
let googlePerHr = prompt("google?")
let amazonPerHr = prompt("what about amazon?")

alert("so you made a total of " + (facebook*facebookPerHr + google*googlePerHr + amazon*amazonPerHr))

let isFull = confirm("Is the class full?")
let hasConflict = confirm("Do you have a conlfict with your schedule?")
alert(!isFull && !hasConflict)

let itemsBought = prompt("How many items did you buy?")
let offer = conifrm("Has the offer expired?")
let isPremium = confirm("Are you a premium member?")

alert((parseFloat(itemsBought) > 2 || isPremium) && !offer)
