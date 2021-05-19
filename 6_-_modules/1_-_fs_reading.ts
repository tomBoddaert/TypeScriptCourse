/*

In TypeScript, the best way to import a module is using the 'import'
  keyword

The easiest way to import a module is to import the whole thing using the
  '*' wildcard, meaning everything
We then add it to an object called 'fs' using the 'as' keyword

readFileSync reads files synchronously (stops execution to do it), its
  most simple form takes the file path (in this case relative) as its only
  argument

readFile does the fileRead "asyncronously", so the most basic form takes
  the file path and a callback as its arguments
The callback takes a potential error ('err') and the data ('data')

*/

import * as fs from 'fs';

console.log(fs.readFileSync('./6_-_modules/readFile.txt'));
// This is the contents of testFile1.txt...
// 🙂

fs.readFile('./6_-_modules/readFile.txt', (err, data) => { 
    if (err) return console.error(err);
    console.log(data);
});

console.log('This is after the readFile queue but will be executed first');
// This is after the readFile queue but will be executed first

// This is the contents of testFile1.txt...
// 🙂