/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

// TODO: fill in your name and email and add some programming languages you know
// to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable
// declared as `const`

// Replaced the var with const //
const name = 'Steve';
const email = 'steve.deciga@gmail.com';
const languages = ['HTML', 'CSS', 'Javascript'];

// TODO: rewrite the object literal using object property shorthand
users.push({
  name: name,
  email: email,
  languages: languages
});

// Object Literal Code //
users.push({
  name,
  email,
  languages
})

// TODO: replace `var` with `let` in the following variable declarations

// Let Code //
let emails = [];
let names = [];

// TODO: rewrite the following using arrow functions


users.forEach(function(user) {
  return emails.push(user.email);
});
users.forEach(function(user) {
  return names.push(user.name);
});

// Arrow Function Code //

users.forEach((user) => emails.push(user.email));

// Same As //

users.forEach((user) => {
  return names.push(user.name);
});


// TODO: replace `var` with `let` in the following declaration

// Let Code //
let developers = [];

users.forEach(function(user) {
  // TODO: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition
  const name = user.name;
  const email = user.email;
  const languages = user.languages;

  // Object Deconstruct Code //

  const { name, email, languages } = developers;

  // TODO: rewrite the assignment below to use template strings
  developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
});

// Template String Code //
// P.S. I'm not sure if i added the .join to the template string correctly, or if I was supposed to remove the .join to begin. //
developers.push(`${name}'s email is ${email}. ${name} knows ${languages.join(', ')}`);



// TODO: Use `let` for the following variable

// Let Code //
let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
developers.forEach(function (developer) {

  // TODO: rewrite the assignment below to use template strings
  list += '<li>' + developer + '</li>';
});
list += '</ul>';

// For..of Loop & Template String Code //
// Not sure how to code this part. Will refer to walk-through. //

for (let developer of developers) {
  list += `<li> ${developer} </li>`;
}
list += '</ul>';
