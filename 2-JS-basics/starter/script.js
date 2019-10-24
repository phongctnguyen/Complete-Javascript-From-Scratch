/* Start Coding */ 

// console.log('Hello Wordl!!!');

/* ********************************************** */
/* Variables and Data Types */ 

/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;
console.log(lastName);

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);
job = 'instructor';
console.log(job);
*/

/* ********************************************** */
/* Variable mutation and type coersion */
// var firstName = 'John';
// var age = 28;

// Type coersion
// console.log(firstName + ' ' + age);
/*
var job, isMarried;
job = 'instructor';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);
*/

// Variable mutation
/*
age = 'twenty eight';
job = 'driver';
isMarried = false;

alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried);
*/

/*
var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/* ********************************************** */
/* Basic Operator */

// var now, yearJohn, yearMark, ageJohn, ageMark;
// now = 2019;
// ageJohn = 28;
// ageMark = 33;

// Math operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;

// console.log(yearJohn, yearMark);

// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);

// Logical operators
// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);

// typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Hello');

/* ********************************************** */
/* Operator Precedence */
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence 
// var now = 2019;
// var yearJohn = 1989; 
// var fullAge = 18;

// Multiple operators
// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 33;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6;
// console.log(x, y); 

// More operators
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// x++;
// console.log(x);

/* ********************************************** */
/* CODING CHALLENGE 1 */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

// var markMass = 68, markHeight = 1.69;
// var johnMass = 92, johnHeight = 1.95;

// var markBMI = markMass / (markHeight * markHeight);
// var johnBMI = johnMass / (johnHeight * johnHeight);
// var markHigherBMI = markBMI > johnBMI;

// console.log(markBMI, johnBMI);
// console.log("Is Mark's BMI higher than John's? " + markHigherBMI);

/* ********************************************** */
/* If/Else Statements */

// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon :)');
// }

// var isMarried = true;
// if (isMarried) {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon :)');
// }

// var massMark = 78; // kg
// var heightMark = 1.69; // meters

// var massJohn = 92;
// var heightJohn = 1.95;

// var BMIMark = massMark / (heightMark * heightMark);
// var BMIJohn = massJohn / (heightJohn * heightJohn);

// if (BMIMark > BMIJohn) {
//     console.log('Mark\'s BMI is higher than John\'s.');
// } else {
//     console.log('John\'s BMI is higher than Marks\'s.');
// }

/* ********************************************** */
/* Boolean Logic */

// var firstName = 'John';
// var age = 22;

// if (age < 13) {
//     console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenagers.');
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man.');
// } else {
//    console.log(firstName + ' is a man.');
// }

/* ********************************************** */
/* The Ternary Operator and Switch Statements */

// var firstName = 'John';
// var age = 16;

// Ternary operator
// age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// Switch statement
// var job = 'instructor';
// switch (job) {
//     case 'instructor':
//         console.log(firstName + ' teaches kids how to code.');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an Uber in Lisbon.');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs beautiful websites.');
//         break;
//     default:
//         console.log(firstName + ' does something else.');
// }

// var age = 56;
// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy.');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager.');
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young man.');
//         break;
//     default:
//         console.log(firstName + ' is a man.');
// }


/* ********************************************** */
/* Truthy and Falsy values and equality operators */

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

// var height;

// height = 23;

// if (height || height === 0) {
//     console.log('Variable is defined');
// } else {
//     console.log('Variable has NOT been defined');
// }

// Equality operators
// if (height === '23') {
//     console.log('The == operator does type coercion!');
// }

/* ********************************************** */
/* CODING CHALLENGE 2 */

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

// var firstPointJohn = 89, secondPointJohn = 120, thirdPointJohn = 103;
// var firstPointMike = 116, secondPointMike = 94, thirdPointMike = 123;
// var firstPointMary = 97, secondPointMary = 134, thirdPointMary = 105;

// var averagePointJohn = (firstPointJohn + secondPointJohn + thirdPointJohn) / 3;
// var averagePointMike = (firstPointMike + secondPointMike + thirdPointMike) / 3;
// var averagePointMary = (firstPointMary + secondPointMary + thirdPointMary) / 3;

// console.log(averagePointJohn, averagePointMike, averagePointMary);

// if (averagePointJohn > averagePointMike) {
//     console.log('John win with ' + averagePointJohn + ' average points');
// } else if (averagePointJohn < averagePointMike) {
//     console.log('Mike win with ' + averagePointMike + ' average points');
// } else {
//     console.log('Draw!');
// }

// if (averagePointJohn > averagePointMike && averagePointJohn > averagePointMary) {
//     console.log('John win with ' + averagePointJohn + ' average points');
// } else if (averagePointMike > averagePointJohn && averagePointMike > averagePointMary) {
//     console.log('Mike win with ' + averagePointMike + ' average points');
// } else if (averagePointMary > averagePointJohn && averagePointMary > averagePointMike) {
//     console.log('Mary win with ' + averagePointMary + ' average points');
// } else if (averagePointJohn === averagePointMike && averagePointJohn > averagePointMary) {
//     console.log('John and Mike win with ' + averagePointJohn + ' average points');
// } else if (averagePointJohn === averagePointMary && averagePointJohn > averagePointMike) {
//     console.log('John and Mary win with ' + averagePointJohn + ' average points');
// } else if (averagePointMike === averagePointMary && averagePointMike > averagePointJohn) {
//     console.log('Mike and Mary win with ' + averagePointMike + ' average points');
// } else {
//     console.log('DRAW!');
// }

/* ********************************************** */
/* Functions */

// function calculateAge(birthYear) {
//     return 2019 - birthYear;
// }

// var ageJohn = calculateAge(1994);
// var ageMike = calculateAge(1990);
// var ageJane = calculateAge(1972);

// console.log(ageJohn, ageMike, ageJane);

// function yearsUntilRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;

//     if (retirement > 0) {
//         console.log(firstName + ' retires in ' + retirement + ' years.');
//     } else {
//         console.log(firstName + ' is already retired');
//     }
    
// }

// yearsUntilRetirement(1990, 'John');

/* ********************************************** */
/* Function Statements and Expressions */

// Function declaration
// function whatDoYouDo(job, firstName) {}

// Function expression
// var whatDoYouDo = function (job, firstName) {
//     switch (job) {
//         case 'teacher':
//             return firstName + ' teaches kids how to code';
//         case 'driver':
//             return firstName + ' drives a car in Lisbon';
//         case 'designer':
//             return firstName + ' design beautiful websites';
//         default:
//             return firstName + ' does something else';
//     }
// }

// console.log(whatDoYouDo('teacher', 'John'));
// console.log(whatDoYouDo('designer', 'Jane'));
// console.log(whatDoYouDo('retired', 'Mark'));

/* ********************************************** */
/* Arrays */

// Initialize new array
// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1972, 1968);

// console.log(names);
// console.log(names.length);
// console.log(names[0]);

// Mutate array data
// names[1] = 'Ben';
// names[names.length] = 'Mary';
// console.log(names);

// Different data types
// var john = ['John', 'Smith', 1990, 'designer', false];

// john.push('blue');
// john.unshift('Mr.')
// console.log(john);

// john.pop();
// john.shift();
// console.log(john);

// console.log(john.indexOf(1990));
// console.log(john.indexOf(23));

// var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
// console.log(isDesigner);

/* ********************************************** */
/* CODING CHALLENGE 3 */

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

// var bills = [124, 48, 268];
// var tips = [];
// var finalPaid = [];
// var tipCalculator = function(bill) {
//     if (bill < 50) {
//         return bill * 0.2;
//     } else if (bill >= 50 && bill <= 200) {
//         return bill * 0.15;
//     } else {
//         return bill * 0.1;
//     }
// }

// var tips = [tipCalculator(bills[0]),
//             tipCalculator(bills[1]),
//             tipCalculator(bills[2])];

// var finalValues = [bills[0] + tips[0],
//                    bills[1] + tips[1],
//                    bills[2] + tips[2]];
// console.log(tips);
// console.log(finalPaid);

/* ********************************************** */
/* Objects & properties */

// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false
// }

// console.log(john.firstName);
// console.log(john['lastName']);
// var x = 'birthYear';
// console.log(john[x]);

// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);

// new Object syntax
// var jane = new Object();
// jane.firstName = 'Jane';
// jane.birthYear = 1972;
// jane['lastName'] = 'Smith';
// console.log(jane);

/* ********************************************** */
/* Objects & methods */

// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function () {
//         this.age = 2019 - this.birthYear;
//     }
// }

// john.calcAge();
// console.log(john);


/* ********************************************** */
/* CODING CHALLENGE 4 */

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

// var mark = {
//     name: 'Mark',
//     mass: 67,
//     height: 1.76,
//     calcBMI: function() {
//         return this.mass / (this.height * this.height);
//     }
// }

// var john = {
//     name: 'John',
//     mass: 75,
//     height: 1.90,
//     calcBMI: function() {
//         return this.mass / (this.height * this.height);
//     }
// }
// console.log(mark.calcBMI(), john.calcBMI());

// if (mark.calcBMI() > john.calcBMI()) {
//     console.log('Mark has the highest BMI ' + mark.calcBMI());
// } else if (mark.calcBMI() < john.calcBMI()) {
//     console.log('John has the highest BMI ' + john.calcBMI());
// } else {
//     console.log('They have the same BMI');
// }


/* ********************************************** */
/* Loops and iteration */

// For loop
// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }

// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

// for (var i = 0; i < john.length; i++) {
//     console.log(john[i]);
// }

// While loop
// var i = 0;
// while (i < john.length) {
//     console.log(john[i]);
//     i++;
// }

// continue and break statements
// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') continue;
//     console.log(john[i]);
// }

// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') break;
//     console.log(john[i]);
// }

// Looping backwards
// for (var i = john.length - 1; i >= 0; i--) {
//     console.log(john[i]);
// }

/* ********************************************** */
/* CODING CHALLENGE 5 */

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

// var john = {
//     bills: [124, 48, 268, 180, 42],
//     tips: [],
//     finalPaid: [],
//     calc: function() {
//         for(var i = 0; i < this.bills.length; i++) {
//             if (this.bills[i] < 50) {
//                 this.tips.push(this.bills[i] * 0.2);
//                 this.finalPaid.push(this.bills[i] + this.bills[i] * 0.2);
//             } else if (this.bills[i] >= 50 && this.bills[i] <= 200) {
//                 this.tips.push(this.bills[i] * 0.15);
//                 this.finalPaid.push(this.bills[i] + this.bills[i] * 0.15);
//             } else {
//                 this.tips.push(this.bills[i] * 0.1);
//                 this.finalPaid.push(this.bills[i] + this.bills[i] * 0.1);
//             }
//         }
//     }
// }

// john.calc();
// console.log(john);

// var mark = {
//     bills: [77, 375, 110, 45],
//     tips: [],
//     finalPaid: [],
//     calc: function() {
//         for(var i = 0; i < this.bills.length; i++) {
//             if (this.bills[i] < 100) {
//                 this.tips.push(this.bills[i] * 0.2);
//                 this.finalPaid.push(this.bills[i] + this.bills[i] * 0.2);
//             } else if (this.bills[i] >= 100 && this.bills[i] <= 300) {
//                 this.tips.push(this.bills[i] * 0.1);
//                 this.finalPaid.push(this.bills[i] + this.bills[i] * 0.1);
//             } else {
//                 this.tips.push(this.bills[i] * 0.25);
//                 this.finalPaid.push(this.bills[i] + this.bills[i] * 0.25);
//             }
//         }
//     }
// }

// mark.calc();
// console.log(mark);

// var tipAverage = function(object) {
//     var sumTips = 0;
//     for(var i = 0; i < object.tips.length; i ++) {
//         sumTips += object.tips[i];
//     }
//     return sumTips / object.tips.length;
// }

// console.log(tipAverage(john), tipAverage(mark));

// if (tipAverage(john) > tipAverage(mark)) {
//     console.log('John has the highest tip ' + tipAverage(john))
// } else if (tipAverage(john) < tipAverage(mark)) {
//     console.log('Mark has the highest tip ' + tipAverage(mark))
// } else {
//     console.log('They have the same tip');
// }


