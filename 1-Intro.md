<!-- Press [Ctrl + Shift + V] to open this in preview mode in VSC -->

# Typescript Intro

## What is TypeScript?

[TypeScript](https://www.typescriptlang.org/) is a **programming language** developed by **Microsoft**, released in 2012. It is a superset of the **JavaScript** programming language, which was released in 1995. Because it is a superset, any valid JavaScript is also valid TypeScript but it adds optional **static typing**. This means that you can define what **type** a variable, constant or argument should be.

### What are types?

Every value has a [type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures). These types have their own properties (values) and methods (functions).

There are 6 **primative** Javascript types, which are:
 - **undefined** - **no value**
 - **Boolean** - **true** or **false**
 - **Number** - a **number** (fp64)
 - **String** - a **set of characters**
 - **BigInt** - a **large integer**
 - **Symbol** - a **unique** primative value for use as an **object key**
 - **null** - no value and the **root of structural types**

There are also 2 **structural** types, which are:
 - **Object** - a **base** for any kind of constructed object
 - **Function** - a **function**, based on Object

``` typescript
undefined; // Undefined
true; // Boolean
3.14; // Number
'pi'; // String
1189998819991197253n; // BigInt
new Symbol('name'); // Symbol
null; // null

new Object(); // Object
() => {}; // Function
```

Adding types to our code allows our **IDE** and the **TypeScript Compiler** (**TSC**) to check the types of values in our code. This makes sure the code acts as expected and reduces the possibility of errors.

For example, if you have a function that takes a number as an input and you pass a string to it, TypeScript will give you an error before you even try to run it!

``` typescript
function mul2( x: number ) {
    return x * 2;
}

mul2('not a number');
// Argument of type 'string' is not assignable to parameter of type 'number'.
//   ts(2345)
```

## How do we run TypeScript?

Firstly, we cannot run TypeScript directly, as there is no interpreter for it, so we must **transpile** it to JavaScript. This is done with the **TypeScript Compiler** (**TSC**).

### TSC

The [TypeScript Compiler](https://www.typescriptlang.org/docs/handbook/compiler-options.html) transpiles (translates) TypeScript to JavaScript.

Once installed, it can be used in the console by either using `npx tsc <path to ts file>` to transpile a single file, or `npx tsc` to transpile everything sourced in the [`tsconfig.json` file](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

### In the browser

JavaScript was originally designed to be used on the web. It is supported by pretty much every browser and is used on almost every modern web-page. It can be sourced in HTML like this:

``` html
<script src="path/to/file.js"></script>
```

### As a program

More recently, JavaScript has become very popular for desktop or server applications too. The two most popular desktop/server JavaScript runtimes are [Node.js](https://nodejs.org/) and [Deno](https://deno.land/).

We are going to be using Node.js.

## Node.js

"Node.js® is a JavaScript runtime built on [Chrome's V8 JavaScript engine](https://v8.dev/)."

### Running JavaScript with Node.js

To run programs with Node.js, you can either use `node <path to js file>` to run a specific JavaScript file or `node .` to run whichever file has been set as "main" in the [`package.json` file](https://docs.npmjs.com/cli/v7/configuring-npm/package-json) or `index.js` by default.
To change directory in the terminal, you can use `cd <directory>`.

### The Node Package Manager (NPM)

The Node Package Manager manages JavaScript packages for Node.js. Packages can be installed with `npm install <package name>` or `npm i <package name>`. This also adds them to the list of "dependancies" in `package.json`.

To install the TypeScript tools (including TSC), use `npm i --save-dev typescript`, this will install tsc as a "dev dependancy".

For this course, the dependencies are already in `package.json`, so you can install them simply by running `npm i`.