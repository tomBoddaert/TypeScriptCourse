/*
https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#arrays

Arrays are the simplest data structure
They map a number (an index) to a value

*/

var arr1 = ['a', 'b', 'c', 1, 2, 3];

console.log(arr1); // JavaScript can natively log arrays without
                   //   explicitly casting (converting) to a string
// ['a', 'b', 'c', 1, 2, 3]


console.log(arr1[1]); // Get a value in an array using the index with
                      //   square brackets ('[n]')
                      //   INDEXING STARTS AT 0!


arr1[2] = 'd'; // Set specific indexes just like variables

console.log(arr1);
// ['a', 'b', 'd', 1, 2, 3]


arr1.push(4); // Use push to add to the end of an array

console.log(arr1);
// ['a', 'b', 'd', 1, 2, 3, 4]


console.log(arr1.length) // Use 'Array.prototype.length' to get the length
                         //   of an array
// 7