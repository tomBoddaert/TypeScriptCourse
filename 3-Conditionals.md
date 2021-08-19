<!-- Press [Ctrl + Shift + V] to open this in preview mode in VSC -->

# Conditionals

"Conditionals" allow us to run different code depending on a condition.

## Truthiness

"Truthiness" determines if a value should be treated as `true` or `false` when encountered in a Boolean context. By default, values are [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy). The [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) values are:
 - the boolean `false`
 - the number `0`
 - the number `-0`
 - the BigInt `0n`
 - empty strings `""`, `''` or ``` `` ```
 - `null`
 - `undefined`
 - `NaN` (not a number)
 - `document.all`

## [Comparison operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparison_operators)

| Operator | Description                    |
| :------: | :----------------------------- |
| ==       | equal to                       |
| ===      | equal to and equal type        |
| !=       | not equal to                   |
| !==      | not equal to or not equal type |
| \>       | greater than                   |
| \<       | less than                      |
| \>=      | greater than or equal to       |
| \<=      | less than or equal to          |

## [Logical Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators)

| Operator | Description |
| :------: | :---------- |
| &&       | AND         |
| \|\|     | OR          |
| !        | NOT         |

## If

An "if" statement allows us to run a block of code on a condition. If the condition in the brackets is "truthy", the block or expression will run.
For example:

``` typescript
var num = 5;

if ( num === 5 ) {
    console.log('num is 5');
}
```
```
num is 5
```

``` typescript
var num = 7;

if ( num === 5 ) {
    console.log('num is 5');
}
```
```
```

## If ... else

An "if ... else" statement runs the if block if the condition is truthy and the else block if the condition is falsy.
For example:

``` typescript
var num = 7;

if ( num === 5 ) {
    console.log('num is 5');
} else {
    console.log('num is not 5');
}
```
```
num is not 5
```

## If ... else if ... else

An ["if ... else if ... else"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) statement runs the if block if the first condition is truthy and if not, runs else if blocks if their condition is truthy.
For example:

``` typescript
var num = 6;

if ( num === 5 ) {
    console.log('num is 5');
} else if ( num === 6 ) {
    console.log('num is 6');
} else if ( num === 7 ) {
    console.log('num is 7');
} else {
    console.log('num is something else');
}
```
```
num is 6
```

``` typescript
var num = 8;

if ( num === 5 ) {
    console.log('num is 5');
} else if ( num === 6 ) {
    console.log('num is 6');
} else if ( num === 7 ) {
    console.log('num is 7');
} else {
    console.log('num is something else');
}
```
```
num is something else
```

## Switch

[Switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) is another syntax for conditionals and prevents long "if ... else if ... else" chains.
For example:

``` typescript
var num = 7;

switch (num) {
    case 5:
        console.log('num is 5');
        break;

    case 6:
        console.log('num is 6');
        break;

    case 7:
        console.log('num is 7');
        break;

    default:
        console.log('num is something else');
        break;
}
```
```
num is 7
```

## Ternary operator

The "ternary operator" runs one expression if the condition is truthy and another if it is falsy.
For example:

``` typescript
var num = 5;
console.log( num === 5 ? 'num is 5' : 'num is not 5' );

num = 6;
console.log( num === 5 ? 'num is 5' : 'num is not 5' );
```
```
num is 5
num is not 5
```