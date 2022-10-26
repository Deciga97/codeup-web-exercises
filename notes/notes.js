"use strict";

/*QUESTIONS NEEDING ANSWERS:
    1. WHAT ARE CONTROL STRUCTURES, LOOPS, AND FUNCTIONS.
    2. WHATS THE DIFFERENCE BETWEEN EXPRESSIONS AND STATEMENTS
    3.WHAT ARE ALL THE PRIMITIVE TYPES IN JS.
    4. WHATS THE DIFFERENCE BETWEEN ARRAYS AND FUNCTIONS.
    5. RESEARCH INTO BOM/DOM
    6. WHAT ASYNCHRONOUS MEANS
    7. HOW TO CONCANTATE A STRING AND PARAMETER/ARGUMENT

PRIMITIVE TYPES:

    1. BOOLEAN: A LOGICAL ENTITY THAT CAN HAVE 2 VALUES, TRUE OR FALSE. IN GENERAL, BOOLEAN VALUES CAN BE USED TO REPRESENT THE ANSWERS TO YES OR NO QUESTIONS.

    2. NUMBERS: ANY NUMERICAL VALUE IN JS.

    3. STRINGS: A SEQUENCE OF CHARACTERS ENCASED IN SINGLE OR DOUBLE QUOTES, (" " ,  ' ') THAT MAY CONTAIN LETTERS, NUMBERS, AND SYMBOLS.

    3-1. ESCAPING CHARACTERS: TO USE A SPECIAL CHARACTER WITHIN A STRING, SUCH AS A SINGLE OR DOUBLE QUOTE. PREPEND THE CHARACTER WITH A BACKSLASH, ( \ ).

    4.
--------------------------------------------------------------------------

OPERATORS:

    IN JS, AN OPERATOR IS A SPECIAL SYMBOL USED TO PERFORM OPERATIONS ON OPERANDS (VALUES AND VARIABLES). COMBINED WITH PRIMITIVE TYPES WE CAN PRODUCE EXPRESSIONS. IN JS, THEY'RE ARE FOUR CATEGORIES OF OPERATORS. ARITHMETIC, COMPARISON, ASSIGNMENT, AND LOGICAL.

    1. TYPEOF: TYPEOF OPERATOR IS USED FOR TYPE CHECKING AND RETURNS THE DATA TYPE IN A STRING OF THE OPERAND PASSED TO IT. BASICALLY...A DATA TYPE IDENTIFIER/CHECKER.

    1-1. TYPEOF CAN ALSO RETURN BOOLEAN VALUES.

    ARITHMETIC OPERATOR:
        IN JS, THE ARITHMETIC OPERATOR TAKES NUMERICAL VALUES, (EITHER LITERALS OR VARIABLES) AS THEIR OPERANDS AND RETURNS A SINGLE NUMERICAL VALUE. BASICALLY...ARITHMETIC OPERATORS ARE USED TO PERFORM MATHEMATICS ON NUMBERS.

        THERE ARE FIVE BASIC ARITHMETIC OPERATORS IN JS:
         1. +
         2. -
         3. *
         4. / --> DIVISION
         5.%  --> MODULUS


           UNARY OPERATORS: A SINGLE OPERAND IN AN OPERATION. USUALLY A SINGLE VARIABLE OR VALUE.
            1. + --> PLUS (ADDS ONE)
            2. - --> NEGATION (MINUS ONE)
                THE PLUS AND NEGATIVE OPERATORS UP ABOVE CONVERT THEIR OPERANDS TO A NUMBER, USING THE NEGATION WILL COVERT IT TO A NEGATIVE...IM ASSUMING?

            3. ++ INCREMENT (ADDS ONE)
            4. -- DECREMENT (TAKES ONE AWAY)
                THE INCREMENT/DECREMENT WILL BASICALLY...ADD OR SUBTRACT 1 TO A VALUE THAT'S STORED IN A VARIABLE. REMEMBER THOUGH, ABOUT PRE/POST -CREMENTS. ONLY DIFFERENCE IS PUTTING IT BEFORE THE VALUE WILL RE-EVALUATE THE EXPRESSION...I THINK.

            NOTE THAT ANY ARITHMETIC OPERATOR CAN BE GROUPED WITH PARENTHESES "( )".

        USING THE + OPERATOR, WE CAN CONCATENATE (FANCY WORD FOR COMBINE) STRINGS. BEING CONSIDERED AN OVERLOADED OPERATOR, THE + OPERATOR WILL PERFORM ADDITION IF THE OPERANDS (VALUES) ON THE LEFT AND RIGHT ARE NUMBERS. OTHERWISE IT WILL PERFORM STRING CONCATENATION.

        ASSIGNMENT OPERATORS: An assignment operator assigns a value to its left operand based on the value of its right operand.

        SHORT HAND ASSIGNMENT OPERATORS: The assignment operator ,=, can be combined with certain arithmetic operators to create shorthand assignments.

        1. += --> ADD THEN REASSIGN
        2. -= --> SUBTRACT THEN REASSIGN
        3. *= --> MULTIPLY THEN REASSIGN
        4. /= --> DIVIDES THEN REASSIGN
        5. %= --> MODULUS THEN REASSIGN

    TERNARY OPERATORS: A CONDITIONAL OPERATOR IN JS THAT TAKES THREE OPERANDS, A CONDITION, FOLLOWED BY A QUESTION MARK ( ? ), THEN an expression to execute if the condition is truthy followed by a colon ( : ), and finally the expression to execute if the condition is falsy.Sep 13, 2022

         SHORTHAND IF/ELSE:
         var message;

if (success) {
    message = "Operation was successful.";
} else {
    message = "Oops, something went wrong.";
}

// the above if/else can be re-written as:
var message = (success) ? "Operation was successful." : "Oops, something went wrong.";


    LOGICAL OPERATORS:
        LOGICAL OPERATORS ARE USED TO DETERMINE THE LOGIC BETWEEN VARIABLES AND VALUES BY COMBINING BOOLEAN VALUES. THUS, RETURNING A TRUE OR FALSE STATEMENT.

     LOGICAL BOOLEANS:
        1. && --> true if both operands are true, false otherwise.
        2. || --> true if either operand is true, false otherwise.
        3. ! --> evaluates the boolean and returns the opposite result.
            NOTE THAT JUST LIKE ARITHMETIC OPERATORS, LOGICAL OPERATIONS CAN BE GROUPED WITH PARENTHESES.

      COMPARISON OPERATORS: Comparison operators are used in logical statements to determine equality or difference between variables or values.

        1. == --> EQUAL IN VALUE
        2. === --> EQUAL IN TYPE AND VALUE
        3. != --> NOT EQUAL IN VALUE
        4. !== --> NOT EQUAL IN TYPE AND VALUE
        5. > GREATER THAN
        6. >= GREATER THAN OR EQUAL TO
        7. < LESS THAN
        8. <= LESS THAN OR EQUAL TO


        VARIABLES: A VARIABLE IS A DATA CONTAINER CONTAINING DATA VALUE.
            let myName = "steve";
            VARIABLES ARE DECLARED USING "LET" OR "VAR", FOLLOWED BY THE "=" OPERATOR FOR ASSIGNMENT. YOU CAN ALSO USE THE COMMA TO DECLARE MULTIPLE VARIABLES IN THE A SINGLE STATEMENT. ADDITIONALLY, STATEMENTS SHOULD ALL END WITH A SEMICOLON ( ; ).

              let myName; --> THIS VARIABLE WILL ALWAYS RETURN UNDEFINED BECAUSE NO VALUE IS ASSIGNED.

                CONST: BASICALLY...A VARIABLE YOU CAN'T RE-ASSIGN.
                const myName = "steve";

                BRO, VARIABLES CAN HAVE AND WILL MORE THAN LIKELY HAVE COMPLEX EXPRESSIONS, INCLUDING REFERENCES TO OTHER VARIABLES.



         CONVERTING STRINGS TO NUMBERS (VICE VERSE):
         USING THE " to.string()" on a variable, at least in this example. Will convert a number literal to a string literal.
         EX: let x = 3.14;
             x.toString(); --> will convert to "3.14"
             DO FURTHER RESEARCH.


           VICE VERSA WITH "NUMBER()"
           AGAIN...DO MORE RESEARCH.

           NaN/isNaN: SPECIAL VALUE MEANING NOT A NUMBER. THIS VALUE CAN BE PRODUCED BY CONVERTING NUMBERS INTO STRINGS/ STRINGS INTO NUMBERS. BUT WE CAN ALSO USED IT TO PRODUCE A BOOLEAN VALUE BY EVALUATING WHATEVER WE PASS THROUGH IT, LIKE THIS EXAMPLE BELOW.
                    isNaN('123') // false
                    isNaN('abc') // true

             A PREFER METHOD THAT WERE GOING TO USE AS OF RIGHT NOW IS "parseInt" and "parseFloat". ALONG WITH ADDITIONAL FUNCTIONS WE CAN USE WHEN WE WORK WITH STRINGS.

             parseInt: ATTEMPTS TO CONVERT A STRING TO A NUMBER VALUE.
             parseFloat: ATTEMPTS TO CONVERT A STRING TO A FLOATING POINT (DECIMAL) VALUE.

             ADDITIONAL FUNCTIONS FOR STRINGS:
             1 .length --> property that describes the number of characters in the string
             2 .indexOf(character) --> returns the index of the specified character in the string.
             3. .replace(find, replace): returns a copy of the string after performing a substitution.
             4. .substring(fromIndex, toIndex): returns a subset of the original string based on the provided indices.

             5. .toUpperCase(): returns a copy of the string in all upper case.
             6. .toLowerCase(): returns a copy of the string in all lower case.
             7. .trim(): returns a copy of the string with whitespace at the beginning and end removed.

-------------------------------------------------------------------------
JAVASCRIPT WITH HTML: CREATE A SCRIPT TAG AT THE BOTTOM OF THE BODY OF THE HTML FILE FOR RENDERING PURPOSES.

INLINE JAVASCRIPT IS EMBEDDED WITHIN AN HTML DOCUMENT.

EXTERNAL JAVASCRIPT IS IN THE SCRIPT TAG AND SOURCED FROM A INDEPENDENT JAVASCRIPT FILE. (THIS IS WHAT I WILL BE DOING) HERE IS AN EXAMPLE:
<script src="js/external.js"></script>

NOTE: TO CHECK IF JAVASCRIPT IS LINKED TO HTML DOCUMENT, GO TO THE LIVE BROWSER WITHIN THE HTML DOC AND CONSOLE.LOG SOMETHING.

USE STRICT: USE STRICT ALLOWS JS SILENT ERRORS TO BE SHOWN. SO MOVING FOWARD ON ALL PROJECTS WILL BE USING ("use strict";). at the very top of js code above all else.

USER INTERACTIONS: DISPLAYING MESSAGES TO USER

1. alert("Message goes here.");
2. var confirmed = confirm('Are you sure you want to do XYZ?');
console.log(confirmed); // will be either true or false --> clicking ok or cancle will be return a boolean value, (true, false).

3.prompt("prompt here") --> returns a string value from the user input.

FUNCTIONS: A function is a reusable block of code that performs a specified task, usually taking an input and producing an output.
EX: function myFunction(input) {
    var output =
    return output;
    }

FUNCTION TERMS:
ARGUMENT: the value that a function is called with
PARAMETER: is part of the function's definition

If a function is defined with zero parameters, all arguments passed to the function will be ignored.

FUNCTION DECLARATION: The function declaration (function statement) defines a function with the specified parameters. You can also define functions using the Function constructor and a function expression.

FUNCTION EXPRESSION: Function Expression allows us to create an anonymous function which doesn't have any function name which is the main difference between Function Expression and Function Declaration.

ALSO: A FUNCTION EXPRESSION CAN BE USED AS AN IIFE. (Immediately Invoked Function Expression) which runs as soon as it is defined.

NOTE: When a return statement is encountered, the function will immediately return to where it was called, and no more statements will be executed. Similarly, if a function does not have a return statement, the return value will be undefined.

ANONYMOUS FUNCTIONS: A FUNCTION WITHOUT A NAME.
EX: let increment = function(x) {
    return x + 1;
};

var two = increment(1);

FUNCTION SCOPE: A TERM USED TO DESCRIBE WHERE A VARIABLE CAN BE ACCESSED. IN SCOPE MEANS THAT IT CAN BE ACCESSED FROM THAT LOCATION IN THE CODE.

OUT OF SCOPE MEANS ITS NOT ACCESSIABLE.

Any variables declared in that scope are accessible by that scope and any sub-scopes.

GLOBAL VARIABLES: VARIABLES DECLARED OUTSIDE OF A FUNCTION. GLOBAL VARIABLES ARE ACCESSIBLE BY ANY SCRIPTS OR FUNCTIONS.

LOCAL VARIABLES: VARIABLES DELCARED WITHIN A FUNCTION. Local variables can be accessed within the scope they are declared in, or in any nested function scopes. LOCAL VARIABLES TAKE PRECEDENCE OVER GLOBAL VARIABLES WITH THE SAME NAME.

IMMEDIATELY-INVOKED FUNCTION EXPRESSION: A TOOL USED TO KEEP OUR VARIABLES ISOLATED. GLOBAL SCOPE VARIABLES CAN CONTAMINATE VARIABLES AND CAUSE SCRIPT NOT TO FUNCTION PROPERLY. SO WE WILL BE USING THIS TOOL IN OUR CODE WITH USE STRICT IN EVERY PROJECT MOVING FORWARD. // define a function and immediately invoke (i.e. call) it
(function () {
    var iffeVar = "I'm local to the IIFE.";
})();

alert(iffeVar); // undefined
--------------------------------------------------------------------------
CONDITIONALS: A WAY FOR COMPUTERS TO MAKE DECISIONS BASED ON CONDITIONS, THEY CONTROL BEHAVIOR AND DETERMINE WHETHER OR NOT PIECES OF CODE CAN RUN.

NOTE: KEEP IN MIND THESE NEXT METHODS AND STATEMENTS WILL TYPICALLY BE USED WITH BOOLEAN TYPES/OPERATORS.

1. if(condition) {
    // code gets executed here if evaluates to true.
    } else {
    code gets ex if false
    }

2. if(condition) {
    // code gets executed here if evaluates to true.
    } else if (condition) {
    code gets ex if condition 1 is false but condition 2 is true.
    } else {
    code gets ex if neither condition 1 or condition 2 is true.
    }

SWITCH STATEMENTS: ALTERNATIVE TO WRITING A BUNCH OF IF STATEMENTS

    1. var pizzaPreference = prompt("What kind of pizza do you like?");

switch(pizzaPreference) {
    case "pineapple and hot sauce":
        alert("What a coincidence, that's my favorite!");
        break;
    case "cheese":
        alert("Just plain cheese? Okay...");
        break;
    default:
        alert(pizzaPreference + " isn't my favorite, but let's order some!");
        break;
}

REFER BACK TO CONDITIONALS CHAPTER FOR MORE INFO ON SWITCH.
--------------------------------------------------------------------------

LOOPS: Loops are used in JavaScript to perform repeated tasks based on a condition. Conditions typically return true or false . A loop will continue running until the defined condition returns false.

1. while(condition) {
block of code
}

2. do {
block of code
} while (condition)

3. for(initialization, condition, increment) {
block of code
}

IMPORTANT PIECE OF INFO IMO: In general, we will use for loops when we know ahead of time how many times the loop needs to run, and while or do-while loops when we cannot know how many times the loop needs to run.

BREAK AND CONTINUE:
1. BREAK --> HELPS BREAK OUT OF A LOOP IF A CONDITION IS MET.
        var numberToStopAt = 5;

for (var i = 1; i < 100; i++) {

    console.log('Loop counter is: ' + i);

    if (i === numberToStopAt) {
        console.log('We have reached the stopping point: break!');
        // use the break keyword to exit from the while loop
        break;
        // nothing after the break will get processed
        console.log('You will never see this line.');
    }
}

2. CONTINUE --> SKIPS OVER A LOOP ITERATION AND CONTINUES LOOPING.
        'use strict';

for (var i = 1; i < 100; i++) {

    if (i % 2 !== 0) {
        // number isn't even
        // odd numbers aren't as cool
        // skip the rest of the loop and continue with the next iteration
        continue;
    }

    console.log('Here is a lovely even number: ' + i);
}
--------------------------------------------------------------------------

ARRAYS: A DATA STRUCTURE THAT HOLDS AN ORDERED LIST OF ITEMS OF ANY TYPE OF DATA.

1. [ELEMENT1, ELEMENT2] --> ARRAY LITERAL

NOTE: ARRAYS CAN BE STORED IN VARIABLES
      ARRAYS ARE ZEROED INDEXED. SO THE FIRST ELEMENT IS ALWAYS 0.
      ARRAY ELEMENTS ARE ACCESSED BY USING SQUARE BRACKETS FOLLOWED BY THE INDEX NUMBER. EX: ARRAY[0]


COUNTING ARRAY ITEMS: .LENGTH --> WILL PROVIDE A NUMBER VALUE.

ITERATE ARRAYS: cycling through indexes/elements of the array, using for loops/ for each

1. for loop method:

var shapes = ['square', 'rectangle', 'circle', 'triangle'];

// loop through the array and log the values
for (var i = 0; i < shapes.length; i++) {
    console.log('The shape at index ' + i + ' is: ' + shapes[i]);
}

2. for each:
var shapes = ['square', 'rectangle', 'circle', 'triangle'];

// loop through the array and log the values
shapes.forEach(function(shape) {
    console.log('Here is a lovely shape: ' + shape + '.');
});
-----------------------------------------------------------------------------------
OBJECTS: A COLLECTION OF PROPERTIES. (IN JS, THESE WILL BE REFERED TO AS KEYS.)

EX: let car = new Object();
    let cup = new Object();

ABOVE WE HAVE USED "new Object()" TO DECLARE A OBJECT USING A VARIABLE.

OBJECT LITERAL NOTATION --> let car = {};

USING THE CURLY BRACES WILL DECLARE AN OBJECT, IN OTHER WORDS. IT SIMPLIFIES AND SHOERTENS THE CODE.

ADDING OR SETTING PROPERTIES ON AN OBJECT.

let book = {};
book.title = "Berserk";
book.author = "Kentaro Miura"
book.title = "Berserk Deluxe vol.4"

WE CAN ALSO USE SQUARE BRACKETS ( [] ) TO DECLARE PROPERTIES WITHIN OBJECTS.

EX: book[title] = "Berserk";

WE CAN ALSO ASSIGN PROPERTIES TO OBJECTS RIGHT AFTER WE CREATE IT:

var car = {
    make: "Toyota",
    model: "Camry"],
    year: "1800 B.C."
};

PROPERTIES CAN ALSO CONTAIN VARIABLES WE CAN DECLARE ELSE WHERE.

ACCESSING PROPERTIES ON AN OBJECT: Object properties are accessed in the same way they are set, either via dot notation or array notation.

EX: .model
        car["make"]

NESTED OBJECTS: OBJECTS CAN BE STORED INTO AN ARRAY, VICE VERSA.
NOTE: DO FR ON NESTED OBJECTS

EX: var cars = [
    {
        make: "Toyota",
        model: "Camry",
        features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
        owner: {
            name: "Jane Doe",
            age: 30
        }
    },
    {
        make: "Honda",
        model: "Accord",
        features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
        owner: {
            name: "John Doe",
            age: 31
        }
    }
];

console.log("The first car is a " + cars[0].make + " " + cars[0].model + ".");
console.log("The owner of the second car is " + cars[1].owner.name + ".");

console.log("Here are all the features of all the cars:");
cars.forEach(function(car) {
    car.features.forEach(function(feature) {
        console.log(feature);
    });
});

STUDYING THIS ARRAY CONTAINS MULTIPLE OBJECTS AND OBJECTS WITHIN OBJECTS.

ASSIGNING






 */