<!-- Press [Ctrl + Shift + V] to open this in preview mode in VSC -->

# Functions and Callbacks

## Functions

[Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions) have arguments (what it takes as inputs), a body (internal code), and a return type (what it outputs). If it does not return anything (or anything useful), its return type is `void`. When a function is "called", it takes parameters, executes the body and returns a value (if there is nothing returned, the return value is `undefined`).

### Types of function

There are 3 types of function in modern JavaScript, named functions, anonymous functions and arrow functions.

### Named functions

These are functions with a name.

``` typescript
function mul2( x: number ) {
    return x * 2;
}
```

### Anonymous functions

These are functions without a name but they can be assigned to a variable.

``` typescript
(function( x: number ) {
    return x * 2;
})
```

### Arrow functions

These are functions declared with the ES6 arrow function syntax. They are anonymous and can be assigned to a variable too. They also preserve the `this` context (which you will learn about later).

``` typescript
( x: number ) => x * 2;
// OR
( x: number ) => {
    return x * 2;
}
```

### Typing

[Function types](https://www.typescriptlang.org/docs/handbook/2/functions.html) in TypeScript look very similar to arrow functions.

A function that takes a string `a`, a number `x` and returns a string would have a type like this:

``` typescript
( a: string, x: number ) => string
```

### Logging example

``` typescript
function customLog( id: number, msg: string ) {
    console.log( `${id}: ${msg}` );
}

customLog( 1, 'First log' );
```
```
1: First log
```

## Callbacks

[Callbacks](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function) are functions you define to be called later by another function or class when something happens or when something is completed.

We usually use anonymous or arrow functions to define callbacks.

For example, here's a function that does something and then, once done, calls the provided callback with the result.
(Yes, this function actually does nothing and `5` is always the result)

``` typescript
function doSomething( callback: ( result: number ) => void ) {
    callback(5);
}

doSomething( res => console.log( res * 2 ) );
doSomething( console.log );
```
```
10
5
```

### Using them with built-in functions

[`setInterval` and `setTimeout`](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals) are two examples of built-in functions that use callbacks. In their simplest form, they take a callback, then a number of milliseconds. `setInterval` will continue to call the callback at set intervals until canceled or the program stopped and `setTimeout` will call the callback once after the set time.

``` typescript
setTimeout( () => console.log('This is setTimeout'), 10_000 );
setInterval( () => console.log('This is setInterval'), 9_000 );
```
```
[  9s ] This is setInterval
[ 10s ] This is setTimeout
[ 18s ] This is setInterval
[ 27s ] This is setInterval
[ 36s ] This is setInterval
```