/*

It is better to import only the things you need from modules becuase it
  can lead to a smaller package size, less memory usage and faster loading
  times

Here, we are writing the contents of 'testFile1.txt' to 'testFile2.txt'

*/

import { readFile, writeFile } from 'fs';

readFile('./6_-_modules/testFile1.txt', (err, data) => {
    if (err) return console.error(err);
    writeFile('./6_-_modules/testFile2.txt', data, (err) => {
        if (err) return console.error(err);
    });
});