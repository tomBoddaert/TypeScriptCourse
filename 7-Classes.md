<!-- Press [Ctrl + Shift + V] to open this in preview mode in VSC -->

# Classes

[Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) are reusable, custom object templates. They each have properties, methods and a constructor. The properties are variables or constants in the class, the methods are functions and the constructor is a function that is run when an "instance" of the class is created.

If classes are templates, then instances are like a filled in form. They have their own values, where the class may just define what values it should have. There are also "static" properties and methods, which are associated with the class itself rather than with an instance.

## Basic class

Classes are created using the `class` keyword, static properties and methods are prepended with the `static` keyword and methods do not need the `function` keyword. We can create new instances of the class using the `new` keyword followed by the class name and the constructor arguments, as if it was a function. Properties and methods can then be accessed as if the *instance* was a key-value object. Static properties and methods can be accessed as if the *class* was a key-value object.

Here is a simple class to represent a person. It contains their first name, last name and a method to say a message. There is also a static property `num`, which keeps track of the number of people created.

A new instance is also created, with the name "Dylan Faden" and it is stored to a constant. The `Person.prototype.say()` method is then called to make them say "Hello!".

``` typescript
class Person {
    static num = 0;
    firstName: string;
    lastName: string;

    constructor( firstName: string, lastName: string ) {
        Person.num++;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    say( message: string ) {
        console.log( `${ this.firstName } ${ this.lastName } says "${message}"` );
    }
}

const P6 = new Person( 'Dylan', 'Faden' );
P6.say('Hello!');
```
```
Dylan Faden says "Hello!"
```

## Accessability modifiers

Properties and methods can be "public" (the default), "private" or "protected". Public properties can be accessed from outside of the class. Private properties can only be accessed from within the class. Protected properties can be accessed from within the class and any subclasses. To make something secure, most properties should be private to stop them being accessed from other places.

These keywords can be prepended to properties and methods.

``` typescript
class Person {
    static num = 0;
    private firstName: string;
    private lastName: string;

    constructor( firstName: string, lastName: string ) {
        Person.num++;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    say( message: string ) {
        console.log( `${ this.firstName } ${ this.lastName } says "${message}"` );
    }
}
```

Now, the first and last names cannot be accessed from outside of the class.

They can also be used in the constructor to simplify the code. For example:

``` typescript
class Person {
    static num = 0;

    constructor(
        public firstName: string,
        public lastName: string
    ) {
        Person.num++;
    }

    say( message: string ) {
        console.log( `${ this.firstName } ${ this.lastName } says "${message}"` );
    }
}
```

These, however, are removed when the code is transpiled, so private and protected properties can be accessed outside of the class. It will only give you an error when it is transpiled. There is however, a way of creating actual private properties by prepending the property name with a `#`. For example:

``` typescript
class Person {
    static num = 0;
    #firstName: string;
    #lastName: string;

    constructor( firstName: string, lastName: string ) {
        Person.num++;
        this.#firstName = firstName;
        this.#lastName = lastName;
    }

    say( message: string ) {
        console.log( `${ this.#firstName } ${ this.#lastName } says "${message}"` );
    }
}
```

## Getters and setters

["Getters"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get) and ["Setters"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set) can be defined to format a value before returning it or validate an input before setting it. They mostly act like normal variables but their behaviour on getting and setting can be customised.

Here, I have added a getter and setter for `name`. The name is still stored as a first name and last name but it can be set and accessed as if it were a regular property.

``` typescript
class Person {
    static num = 0;
    #firstName: string;
    #lastName: string;

    constructor( firstName: string, lastName: string ) {
        Person.num++;
        this.#firstName = firstName;
        this.#lastName = lastName;
    }

    get name() {
        return `${ this.#firstName } ${ this.#lastName }`;
    }

    set name( value: string ) {
        [this.#firstName, this.#lastName] = value.split(' ');
    }

    say( message: string ) {
        console.log( `${ this.#firstName } ${ this.#lastName } says "${message}"` );
    }
}

const P6 = new Person( 'Dylan', 'Faden' );
console.log( P6.name );
P6.name = 'Prime Candidate';
console.log( P6.name );
```
```
Dylan Faden
Prime Candidate
```

## Putting it together

For this, we will use the example of a car. The car will have an id, a make, a model, a number plate, an amount of fuel and, optionally, a name. It must also be able to have its number plate changed to a valid number plate, be refuelled, driven and renamed. The only static property is the number of cars (which is used as the id on a new car). The drive property should also return `false` if there is not enough fuel and `true` if there is enough and also take the fuel away.

Use this to validate the number plate:
``` typescript
if ( /^[A-Z]{2}\d{2} [A-Z]{3}$/.exec(value) ); // is valid
if ( !/^[A-Z]{2}\d{2} [A-Z]{3}$/.exec(value) ); // is not valid
```

Have a go and then compare your code to my solution.

<details>
<summary>A solution</summary>

``` typescript
class Car {
    static #number: number;
    readonly #id: number;
    #plate!: string;
    #fuel: number;

    constructor( readonly make: string, readonly model: string, plate: string, public name?: string ) {
        Car.#number ??= 0;
        this.#id = Car.#number++;
        this.plate = plate;
        this.#fuel = 0;
    }

    get id() {
        return this.#id;
    }

    set plate( value: string ) {
        if ( !/^[A-Z]{2}\d{2} [A-Z]{3}$/.exec(value) )
            throw new Error('Number plate is not valid!');
        this.#plate = value;
    }

    get plate() {
        return this.#plate;
    }

    get fuel() {
        return this.#fuel;
    }

    refuel( amount: number ) {
        this.#fuel += amount;
    }

    drive( distance: number ) {
        if ( distance <= this.#fuel ) {
            this.#fuel -= distance;
            return true;
        }
        return false;
    }
}

const c1 = new Car('BMW', 'i8', 'AB01 CDE', 'my8');
console.log( c1.plate );
console.log( c1.id );
console.log( c1.fuel );
console.log( c1.drive(50) );
c1.refuel(100);
console.log( c1.fuel );
console.log( c1.drive(50) );
console.log( c1.drive(50) );
console.log( c1.fuel );
```
```
0
AB01 CDE
0
false
100
true
true
0
```

This is an alright solution, however if you wanted the make and model to be truely readonly, you may want to use a getter without a setter like [this](https://www.typescriptlang.org/play?target=99#code/MYGwhgzhAEDCYCdoG8CwAoaXoQC5lwEthoBiAOwFcBbAIwFMEAuaKuxgbg22gXrAAmAe3IgAnmUICWbBgi6ZsfQSPFlqYANb0WeBIXIBzBT2XDRE0tSED6IXbn1GT2UgAdwuegEIHT49yuAGaUdjI0cgqBWMAiepTAuEIIABTQGtp+BoYANOk2YTiO2XkeBDpF-qWUtCDErGDU9AD8WUbQAJQo0TxwiAB0FBGM0M3NALzQAAwuvdC4ABaEEINS0JPwCIOyjADUu7O9i8uDGfTr6Vr0hzzHK1YFIBfWtiA32Hf9ZV4X39c9tyW9xCdguMx6AF8MD1DPRcNApCkumhFHM+LhKAhyPMgasBIcoegYXDLtokd1Ub10ZjsZ8rFcCdDKbD4S87OSUXMsNSsTiTg9XoyiZSICS-mkAG5gEChNqGToUrkIoLQNLeAD0AD0ANoAQQAtAAtAC6yAATBCADoCc0Q6B6o2mgDMEIAJOr+vQAB70YApKUy+hdDoArmLBBCADurHo0YAoggI6kAOQAOWGSD+CJg5CE8IDUm8yY67ywdKzkwDoSFxPh4uRoe5cJpfPufxrzJJIJAHMbvGbvLp3Y7pno3bSjSElHIuHC7CQDcpgP53egu0mk+nuBH2AE+gl9DSAmW+HIwAqOwXiq5hBVR5PYDP5wAPJMh6EnoulcvgR-oPrJmPPBH3PUsqQHWkEGrPtCSVHlsSCaVRSFQkMFicg8GgYAAEYLnIWM+hTAAhABZAB1ZM8mTQgAA5KOgZNdSIqZcNgAARON6OTagxDoks0Owr5PHOSZkwAMQAcSmM1oAACQASQAKWTNC4iEEB6H6EAhEMNIcKE8pOgUdCIHUzTtN0rDBLWfj0BMsytJ0vTBNXWz7I0xzLP0vdCAPFIAFYpmDYzBL4cdsKmILjLUjyLOc-pXOijCHLiqz+h8vzAuC1Tktipy0oyw8sqMnLTLyryXL-EsgA).
</details>