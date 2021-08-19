<!-- Press [Ctrl + Shift + V] to open this in preview mode in VSC -->

# Arrays and Objects

## Arrays

Arrays allow us to store multiple values in one place

### Declaring

``` typescript
const arry = [ 0, 0.5, 1, 1.5 ];
let arry2 = [ 'a', 'b', 'c', 'd' ];
```

### Typing

``` typescript
const arry: number[] = [];
let arry2: string[] = [];
```

### Referencing

To reference an "element" in an array, we use square brackets with the "index". Indexes start at 0. The value of any unset elements is `undefined`.

``` typescript
const arr = [ 'a', 'b', 'c' ];
console.log( arr[1] );
arr[2] = 'z';
console.log( arr[2] );
console.log( arr[3] );
```
```
b
z
undefined
```

### Adding values

To add values to an array, we use [`Array.prototype.push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) method, which takes any number of the same type of value as the array it is called on.

``` typescript
const arr = [ 'a', 'b', 'c' ];
console.log( arr[3] );
arr.push('d');
console.log( arr[3] );
```
```
undefined
d
```

### Length

The length of an array can be found at `Array.prototype.length`

``` typescript
const arry = [ 'a', 'b', 'c' ];
console.log( arry.length );
arry.push('d');
console.log( arry.length );
```
```
3
4
```

## Tuples

Tuples allow us to store a set of values in a specific order. In JavaScript, these just become arrays.

For example, you could define a 3d vector with a name like this:

``` typescript
const vector: [ string, number, number, number ] = [ 'v1', 2.5, -4.1, 5.7 ];
```

## Objects

[Objects](https://www.typescriptlang.org/docs/handbook/2/objects.html) are a JavaScript data structure made up of "key-value pairs", where each unique key "maps" to a value.

### Declaring

The easiest way to create an Object is to use curly brackets. The keys can be strings or numbers and the values can be any type.

``` typescript
const obj = { 'zero': 0, 'one': 1, 'e': 2.72, 'pi': 3.14 };
let obj2 = { zero: 0, one: 1, e: 2.72, pi: 3.14 };
```

If the key is not a number or a string, it will default to a string (as seen in `obj2`).

### Referencing

Objects are referenced by their keys, using a `.` for most string keys, or square brackets for either.

``` typescript
const obj = { zero: 0, one: 1, e: 2.72, pi: 3.14 };
console.log( obj.zero );
console.log( obj['one'] );
```
```
0
1
```

### Typing

By default, each object is typed with its initial keys mapped to their value's initial type.

For example, here is a person with the types explicitly defined (although omitting them wouldn't change anyting):

``` typescript
const person: {
    id: number,
    name: string,
    age: number
} = { id: 0, name: 'Serafina', age: 27 };
```

To add optional values, we can use `?`.

``` typescript
const person: {
    id: number,
    name: string,
    age: number,
    hobby?: string
} = { id: 0, name: 'Serafina', age: 27 };

console.log( person.hobby );
person.hobby = 'programming';
console.log( person.hobby );
```
```
undefined
programming
```

You can define an object with a generic type to allow it to take any (string or number) key.

``` typescript
const obj: { [ key: string ]: number } = {};
obj.a = 1;
obj['b'] = 2;
```