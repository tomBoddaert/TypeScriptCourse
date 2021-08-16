/*
https://www.typescriptlang.org/docs/handbook/2/classes.html

Classes allow us to create "types" of objects

Classes have properties (data) and methods (functions)

We declare a class with the 'class' keyword followed by the name
We can then declare the variables used in the class
Then, we add a 'constructor', which is a function that runs when an
  "instance" of the class is created
The constructor takes the arguments for the instance

*/

class Cubeoid1 {
    static readonly vertices = 8;
            // Static properties are the same for all instances and must
            //   be accessed through the class.staticPropery
            // This property is also readonly, meaning it cannot be
            //   changed
    readonly name: string;
    x1: number;
    y1: number;
    z1: number;
    x2: number;
    y2: number;
    z2: number;

    constructor(name: string, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number) {
        this.name = name;
        this.x1 = x1;
        this.y1 = y1;
        this.z1 = z1;
        this.x2 = x2;
        this.y2 = y2;
        this.z2 = z2;
    }

    getDimentions() {
        return {
            x: this.x2 - this.x1,
            y: this.y2 - this.y1,
            z: this.z2 - this.z1
        }
    }
}

console.log(Cubeoid1.vertices); // Getting the static property
// 8

var cubeoid1 = new Cubeoid1('cube1', 5, 3, -2, 7, 5, 0);

console.log(cubeoid1.name);
// cube1

console.log(cubeoid1.getDimentions());
// { x: 2, y: 2, z: 2 }


/*

The declarations are long and look ugly but TypeScript adds 'public' and
  'private' keywords in the constructor
This automatically assign the values passed into the constructor to
  properties

Properties assigned with public can be accessed from outside of the class
  but properties with private can only be accessed from within the class

*/

class Cubeoid2 {
    static readonly vertices = 8;
    constructor(
        public readonly name: string,
        public x1: number,
        public y1: number,
        public z1: number,
        public x2: number,
        public y2: number,
        public z2: number
    ) { }           // No body needed but one can be added

    getDimentions() {
        return {
            x: this.x2 - this.x1,
            y: this.y2 - this.y1,
            z: this.z2 - this.z1
        }
    }
}

var cubeoid2 = new Cubeoid2('cube2', 7.5, 6.2, 5.0, 10.5, 9.2, 8.0);

console.log(cubeoid2.x1); // Access (public) properties using '.' like
                          //   with objects
// 7.5

console.log(cubeoid2.getDimentions());
// { x: 3, y: 3, z: 3 }