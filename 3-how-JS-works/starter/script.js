///////////////////////////////////////
// Lecture: Hoisting

// functions 
// calculateAge(1965);

// function calculateAge(year) {
//         console.log(2019 - year);
// }

// calculateAge(1992);

// var retirement = function(year) {
//     console.log(65 - (2019 - year));
// }

// retirement(1990);

// variables

// console.log(age);
// var age = 23;

// function foo() {
//     var age = 65;
//     console.log(age);
// }

// foo();
// console.log(age);

///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

// calculateAge(1972);

// function calculateAge(year) {
//     console.log(2019 - year);
//     console.log(this);
// }

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(this.yearOfBirth);

        /*
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
        */
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1978
}

// Method Borrowing
mike.calculateAge = john.calculateAge;
mike.calculateAge();




