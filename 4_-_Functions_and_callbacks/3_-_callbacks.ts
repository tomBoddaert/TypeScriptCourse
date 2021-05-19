/*
https://developer.mozilla.org/en-US/docs/Glossary/Callback_function

"Callback" functions are very common in JavaScript
They allow us to create a function which is called by another
We usually use anonymous functions or arrow functions to create callbacks
  and they are passed into a function as an argument like any other
  variable or value

*/

function callCallback(callback: (n: number) => any) {
    callback(5);
}

callCallback(n => console.log(n + 4)); // No type annotation on n as it is
                                       //   inferred from 'callCallback'
// 9

/*

Many functions in JavaScript take callbacks including 'setTimeout' and
  'setInterval'

'setTimeout' will run your callback once after a specified number of
  milliseconds

'setInterval' will keep running your callback at a specified interval
  in milliseconds

*/

setTimeout(() => console.log("This is being called by the setTimeout"), 3000);
// The code execution does not stop to wait for the 3s
// Instead, the code is 'scheduled' to execute in 3s

setInterval(() => console.log("This is being called by the setInterval"), 2000);
// This then gets scheduled at the same time
// But because it has a shorter wait, it will execute first

// [After 2s] This is being called by the setInterval
// [After 3s] This is being called by the setTimeout
// [After 4s] This is being called by the setInterval
// [After 6s] This is being called by the setInterval
// ...