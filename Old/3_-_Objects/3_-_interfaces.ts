/*
https://www.typescriptlang.org/docs/handbook/2/objects.html

Interfaces allow us to define how we want an object (or class) to be
  structured

*/

interface Person1 {              // Created with the 'interface' keyword
    name: string,               // name of type string
    gender: 'm' | 'f' | 'o',    // Enumerations
    age: number,
    projects: string[],         // Array of strings
    email?: string              // Optional property (denoted by '?')
}

var person1: Person1 = {
    name: 'Matthias',
    gender: 'm',
    age: 45,
    projects: [
        'Intro to TS',
        'Virtual banking system'
    ]    
}

/*

The exact same thing can also be done with types, so you can decorate an
  object with it without giving it a name

*/


type Person2 = {    // This time, created with the 'type' keyword
    name: string,
    gender: 'm' | 'f' | 'o',
    age: number,
    projects: string[],
    email?: string
}

var person2: Person2 = {
    name: 'Bella',
    gender: 'f',
    age: 24,
    projects: []    // Arrays can be empty
}                   // Optional parameter omitted