// // functions declaration
// calculateAge(1965);

// function calculateAge(year) {
//     console.log(2022 - year); //
// }
// // this is hoisting



// // function expression
// // retirement(1956);
// var retirement = function (year) {
//     console.log(65 - (2016 - year));
// } // Error occured: Type Error, 끌올이 안된다.

// // hoisting only works for function declaration


// // variables

// console.log(age);
// var age = 23; // how hoisting works in Variables => undefined
// // this age is stored as global execution context


// foo();
// function foo() {
//     console.log(age);
//     var age = 65; // this age is function execution context, so it s different with 'age' up there
//     console.log(age);
// }

// console.log(age);




// ///////////////////////////////////
// //Lecture: Scoping
// // Scoping answers the question 'where can we access a certain variable' ?
// // Each new function creates a scope: the space / environment, in which the variables it defines are accessible


// // First scoping example
// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     //console.log(c) // Uncaught ReferenceError
//     second();
//     //var b = 'Hi!'; // if it stays in this location, it appears to be undefined at line 61
//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }


// // // Example to show the differece between execution stack and scope chain
// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         third() // it works by hoisting(function declaration)
//     }
// }

// function third() {
//     var d = 'Lim';
//     //console.log(c); // c is not defined which means func third's scope is different to stack execution
//     console.log(a + d); // this means, fun third()'s scope is a & d
// }
// /////////////////////////////////////
// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         third = function () {
//             var d = 'Lim';
//             //console.log(c); // c is not defined which means func third's scope is different to stack execution
//             console.log(c + b + a + d); // this means, fun third()'s scope is a & d

//         } // it works by hoisting(function declaration)
//         third()
//     }
// }
// ///////////////////////////////////
// // Lecture: The this keyword


// //console.log(this); // window object

// //calculateAge(1993); // hoisting
// function calculateAge(year) {
//     console.log(2020 - year);
//     console.log(this); // this function is attatched to global objects
// }
var place = 'Ulsan'

var name = 'this is glballl name'
// object john
var john = {
    name: 'Bongju',
    yearOfBirth: 1993,
    place: 'busssan',
    // function expression
    calculateAge: function () {
        console.log(this);
        console.log(2020 - this.yearOfBirth); // 여기 this가 없으면 referencError 발생

        // altho this function is inside of method, 
        // basically it is regular function
        // so that's the reason why 'this'keyword is pointing at window object
        function innerFunction() {
            var name = 'limhoo';
            console.log(this.name);
            console.log(name);
            console.log(this)
            // var place 가 calculateAge() 내에 위치하면 값이 할당되지 않은 것으로 나온다.
            // 즉 여기서 this가 가리키는 것은 window.object이다.

        }
        innerFunction();
    }
}

john.calculateAge(); //parenthesis is calling a function
var mike = {
    name: 'Mike',
    yearOfBirth: 2000
};

// method borrow
mike.calculateAge = john.calculateAge;
mike.calculateAge();