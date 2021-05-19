/*

You can write files with writeFileSync or writeFile
Arguments for writeFileSync: file path, data
Arguments for writeFile: file path, data, callback called with an error if
  there is one or 'null' if completed sucessfully

In this example, we are writing a random number to 'testFile2.txt'
'Math.random()' generates a random number between 0 and 1
'Math.random().toString()' converts this random number to a string, so it
  can be writtern to the file

*/

import * as fs from 'fs';

fs.writeFileSync('./6_-_modules/testFile2.txt', Math.random().toString());

fs.writeFile('./6_-_modules/testFile2.txt', Math.random().toString(), err => {
    if (err) console.error(err);
});