/*

We can also import JSON files using the 'import' keyword
  (this does require 'resolveJsonModule' to be set to true in
  'tsconfig.json')

*/

import * as jsonData from './testFile3.json';

console.log(jsonData.n);
// [an integer]

console.log(jsonData.rand);
// [a random float]


import { n } from './testFile3.json'; // We can also import properties of
                                      //   JSON

console.log(n);
// [the same int]