<!-- Press [Ctrl + Shift + V] to open this in preview mode in VSC -->

# Iteration

[Iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration) is for doing something repeatedly.

## Definate iteration
Definate iteration is when we know in advance how many times the loop will run.

### Simple for loops

If we wanted to count from 0 to 4 (inclusive), a [`for` loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for) like this is the easiest way. First, we use the `for` keyword, followed by brackets. In the brackets are the "initialization" expression, which is run when the loop starts, the "condition", which is checked before each iteration and the "final-expression", which is run at the end of each iteration. To initialise, we create a variable called `i`, the test is if `i < 5` and the final expression is to increment `i`.

``` typescript
for ( let i = 0; i < 5; i++ )
    console.log(i);
```
```
0
1
2
3
4
```

For multiple expressions we use curly brackets.

``` typescript
for ( let i = 0; i < 5 ; i++ ) {
    console.log('Another iteration');
    console.log(i);
}
```

### Array iteration with `for`

We can also use `for` for array iteration (or any other "iterable").

``` typescript
const primes = [ 2, 3, 5, 7, 11, 13 ];

for ( let prime of primes )
    console.log(prime);
```
```
2
3
5
7
11
13
```

### Array iteration with `Array.prototype.forEach()`

[`Array.prototype.forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) is a method on arrays that takes a callback and passes its values to it one by one.

``` typescript
const primes = [ 2, 3, 5, 7, 11, 13 ];

primes.forEach( prime => console.log(prime) );
```

## Indefinate iteration

Indefinate iteration is when we don't know how many times it will run, we instead have a condition that it will test before every iteration.

### While loops

If we want to divide a number by 2 to get an integer until it cannot be anymore, we could use a "while loop". First, we define the number, then we test to see if it can be divided by `2` to get a whole number. `%` is the remainder operator (similar to modulo), so if a positive number `n` is divisible by `2`, then `n % 2 === 0` (`((n % 2) + 2) % 2 === 0` includes negative numbers).

``` typescript
let n = 12;

while ( n % 2 === 0 ) {
    console.log('Divided by 2');
    n /= 2;
}

console.log(n);
```
```
Divided by 2
Divided by 2
3
```

### Do while loops

If we wanted indefinate iteration but also to run it at least once, the easy way to do it is a "do ... while loop". For example, if we wanted to generate a random number between `0` and `0.1` inclusive, we could do it like this (although this is not a good way of doing it):

``` typescript
let n: number;

do {
    n = Math.random();
} while ( n > 0.1 );

console.log(n);
```
```
0.05974180974850474
```