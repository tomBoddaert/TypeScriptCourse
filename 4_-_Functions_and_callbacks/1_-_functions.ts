/*
https://www.typescriptlang.org/docs/handbook/2/functions.html

There are 3 types of function in JavaScript:
* Regular fuctions
  Use the 'function' keyword followed by the name, parameters and then
    body
  This creates a function in the scope with the name provided

* Anonymous functions
  Use the 'function' keyword immediately followed by the parameters and
    then body
  This creates a function without a name
  You can give it a name by assigning it to a variable

* Anonymous arrow functions
  Use the ES6 arrow syntax:
    param => returnValue
    (param1: type1, param2: type2) => { body }
    (param: type): returnType => { body; return returnValue }
  This creates a function without a name
  Arrow functions have no 'this' or 'super', so should not be used as
    class methods!

*/

function func1() {
    console.log("This is in func1");
}

var func2 = function() {
    console.log("This is in func2");
}

var func3 = () => {
    console.log("This is in func3");
}


func1();
// This is in func1

func2();
// This is in func2

func3();
// This is in func3