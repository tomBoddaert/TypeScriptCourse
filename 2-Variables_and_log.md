<!-- Press [Ctrl + Shift + V] to open this in preview mode in VSC -->

# Variables and Log

## Logging

To "log" something to the console, we can use the [`console.log`](https://developer.mozilla.org/en-US/docs/Web/API/Console/log) method.

For example:
``` typescript
console.log('Hello world!');
```
```
Hello world!
```

The function takes any number of any type and outputs them to the console, seperated by a space.

## Variables

### Declaring

Variables can be [declared](https://www.typescriptlang.org/docs/handbook/variable-declarations.html) with `var` and `let`. Constants can be declared with `const`. Variables can be changed, constants cannot be. `let` and `const` are relatively new additions to JavaScript.

Now we have `let` and `const`, you shouldn't use `var` unless you have a specific reason to.

``` typescript
let greeting = 'Hello';
const PI = 3.14;
```

### Typing

When we "type" a variable or constant, we specify what type it will hold.
For example:

``` typescript
let str: string = 'This is a string';
const nbr: number = 2.72;
let bool: boolean = true;

let str2: string;
str2 = 'This is another string';
```

In this case, the first set are pointless because TypeScript can infer the type from what we set it to, however, we can declare a variable, type it and then set it later, like with `str2`.

The `any` type allows the variable to be any type.