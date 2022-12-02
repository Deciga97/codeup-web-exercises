const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Exercise Questions //

// 2. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array. //
// What does the N stand for //

let lang = users.filter(i => i.languages.length >= 3)
console.log(lang);

// OR //

// let languages;
// users.filter((user) => users.length > 2)
// console.log(languages);


// 3. Use .map to create an array of strings where each element is a user's email address //

let emails = users.map(i => i.email )
console.log(emails);

// OR //

// users.map((user) => user.email)

// 4. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average. //

let years = users.reduce((total, user) => {
    return total + user.yearsOfExperience;
},0 );

console.log(years);

// 5. Use .reduce to get the longest email from the list of users. //
// IDK //
let long = users.reduce((x, y ) => {
    if(x.length > y.length) {
        return x;
    } else {
        return y;
    }

}, 0);

console.log(long)

// 6. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin. //

let kilo = users.reduce((total, user) => {
    return `${total} ${user.name}`
}, "Your instructors are:");

console.log(kilo);

// OR //

let instructors = users.reduce(function (output, user, currentIndex) {
    if(currentIndex === users.length -1 {
        `${output} ${user.name}
    })
    return `${output} ${user.name},`
} , Your instructors are: )