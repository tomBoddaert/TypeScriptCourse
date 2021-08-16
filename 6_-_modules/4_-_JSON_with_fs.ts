/*

One way to read JSON (JavaScript Object Notation) files in TypeScript is
  using fs to read the file and then "parsing" the data using
  'JSON.parse(text: string)'

We can also write JSON to a file using fs by first converting it to a
  string using 'JSON.stringify(value: any)', then writing that to a file

*/

import { readFile, writeFile } from 'fs';

readFile('./6_-_modules/testFile3.json', (err, data) => {   // Open the file
    if (err) return console.error(err);         // Handle errors
    let jsonData = JSON.parse(data.toString()); // Parse the json string
    doSomethingWithJSON(jsonData);              // Send it to a function
})

function doSomethingWithJSON(jsonData: { [key: string]: any }) {
    jsonData.n++;                  // Increment the 'n' property
    jsonData.rand = Math.random(); // Set the 'rand' property to a random
                                   //   float
    writeJSONBack(jsonData);       // Send it to be written back
}

function writeJSONBack(jsonData: { [key: string]: any }) {
    writeFile('./6_-_modules/testFile3.json', JSON.stringify(jsonData), (err) => {
                                     // Write to file
        if (err) console.error(err); // Handle errors
    });
}