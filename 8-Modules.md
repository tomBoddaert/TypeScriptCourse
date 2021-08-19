<!-- Press [Ctrl + Shift + V] to open this in preview mode in VSC -->

# Modules

## Imports

The best way to use modules in TypeScript is with the [`import` keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).

### Importing the whole module

In this example, we will use "fs", the "file system" module. It's built into Node.js and allows us to use files.

``` typescript
import * as fs from 'fs';

fs.readFileSync('./8-Modules.md');
fs.readFile( './8-Modules.md', ( error, data ) => {} );
```

### Importing parts of the module

Importing the whole module is not very efficient, so we can import only the parts we need. You can also rename individual properties and methods using `as`.

``` typescript
import { readFileSync as rFS, readFile } from 'fs';

rFS('./8-Modules.md');
readFile( './8-Modules.md', ( error, data ) => {} );
```

### Importing default exports

Each module can have 1 default export, the "express" module is used as an example.

``` typescript
import express from 'express';
```

## Exports

To create your own module, you need to declare exports that can be imported. You can define these with the [`export` keyword](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export).

### Exporting as you declare values

``` typescript
export function mul2( x: number ) {
    return x * 2;
}

export function mul3( x: number ) {
    return x * 3;
}
```

### Named exports

More often, we export values at the end of the file and you can once again rename exports using `as`.

``` typescript
function mul2( x: number ) {
    return x * 2;
}

function multiplyBy3( x: number ) {
    return x * 3;
}

export {
    mul2,
    multiplyBy3 as mul3
}
```

### Default exports

There are 2 ways to export the default export of a module, both use the `default` keyword:

``` typescript
export default function mul2( x: number ) {
    return x * 2;
}
```

``` typescript
function mul2( x: number ) {
    return x * 2;
}

export {
    mul2 as default
}
```