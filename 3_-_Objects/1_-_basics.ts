/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects

Objects are a JavaScript data structure made up of key-value pairs
Each key 'maps' to a value
The keys and values can be any type

Objects are denoted by curly brackets ('{ key1: value1, key2: value2 }')

*/

var obj1 = { 'a': 1, 'b': 2 }

var obj2 = { a: 1, b: 2}

// Here, JavaScript assumes the keys are strings, so obj1 is the same as
//   obj2


console.log(obj1.a); // Get a value from a key by using obj.key...
// 1

console.log(obj1['b']); // ...or by using square brackets
// 2