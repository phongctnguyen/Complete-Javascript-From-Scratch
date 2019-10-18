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
job = 'Teacher';
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
job = 'teacher';
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

var now, yearJohn, yearMark, ageJohn, ageMark;
now = 2019;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn, yearMark);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Hello');

