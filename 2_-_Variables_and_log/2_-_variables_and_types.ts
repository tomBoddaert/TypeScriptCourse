/*
https://www.typescriptlang.org/docs/handbook/variable-declarations.html

Create variables with var and constants with const
Variables can be changed in your code but constants cannot

Here, there are no type annotations because the TypeScript transpiler can
  infer the type from the instatiation of the value


Below, we log each value and its type using typeof

*/

var str = 'Hello world!';

const nbr = 7;

var undef = undefined;

var nul = null;

console.log(str);
// Hello world!
console.log(typeof str);
// string

console.log(nbr);
// 7
console.log(typeof nbr);
// number

console.log(undef);
// undefined
console.log(typeof undef);
// undefined

console.log(nul);
// null
console.log(typeof nul);
// object  <-- ignore this for now