/*
https://www.typescriptlang.org/docs/handbook/2/functions.html#function-type-expressions

Functions can be typed with an arrow-function-like syntax, declaring each
  parameter and its return type

If a function does not return anything, its return type can be 'void'

*/

type numberFunction = (n1: number, n2: number) => number;

type noReturn = (value: string) => void;

var multiply: numberFunction = (n1, n2) => n1 * n2;
    // No need for type
    //   annotation in the parameters as they have already been defined by
    //   the 'numberFunction' type

var logError: noReturn = (value) => {
    console.log("-- ERROR --");
    console.log(value);
}                       // No return statement

console.log(multiply(5, 10));
// 50

logError("Buffer overflow detected!");
// -- ERROR --
// Buffer overflow detected!