/*
https://www.typescriptlang.org/docs/handbook/2/objects.html

*/

var obj3 = { a: 1, b: 2 };

//obj1.c = 3;

/*

This line causes this error:
"Property 'c' does not exist on type '{ a: number; b: number; }'.ts(2339)"

This is beacuse TypeScript automatically assigns obj1 the type
  '{ a: number; b: number; }' on creation

This means that only 'a' and 'b' are valid keys in this object and that
  their values must be numbers

We can give an object a generic type by assigning it the type
  '{ [key: string]: any }' for string keys or '{ [key: number]: any }' for
  number keys this means that the key can be any type and it canpoint to a
  value of any type
  -- Note that it is not recommended to use string and number keys in one
       object anymore

You can also set the value type for objects by switching out 'any' for
  another type

*/

var obj4: { [key: string]: any } = { a: 1, b: 2 };

obj4.c = 3;
// Works this time!

console.log(obj4);
// { a: 1, b: 2, c: 3 }

obj4['d'] = 4;

console.log(obj4);
// { a: 1, b: 2, c: 3, d: 4 }

console.log(obj4.e); // 'e' does not exist on 'obj4' but this is still
                     //   valid
// undefined