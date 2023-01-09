

// Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made. Reference the github api documentation to achieve this. //
function makeRequestForLastCommit(username) {
    fetch(`https://api.github.com/users/${username}/events/public` , {headers: {'Authorization': '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'}}).then(resp => {
        resp.json().then(data => {
            console.log(data)
            let commit = data.filter(event => event.type === "PushEvent");
            console.log(commit);
            console.log(commit[0].created_at);

        })
    })
}

makeRequestForLastCommit("Bacanator")


// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds. //

function wait(miliSec){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!isNaN(parseInt(miliSec))){
                resolve(`You'll see this after ${miliSec/1000} second(s)`)
            } else {
                reject(`${miliSec} is not a numeric input`)
            }
        })
    })
}

wait(1000).then(() => console.log("You'll see this after 1 second"))

wait(3000).then(() => console.log("You'll see this after 3 second"))

wait("Happy Friday").then(() => console.log("This isn't a number"))