/*

We can use interfaces to define how a class should be structured
To do this, we use the 'implements' keyword

Interfaces, types, classes and functions can also take a type or variable
  as an argument in '<>'

In this case, we take a number called 'corners'
We also use a union to set the length of the xCoords and yCoords arrays to
  'corners'

*/

interface Shape<corners extends number> {
    xCoords: number[] & { length: corners },
    yCoords: number[] & { length: corners },
    color?: string
}

/*

Here, we have 2 classes that implement the 'Shape' interface
Each has a different value for 'corners'

*/

class Triangle implements Shape<3> {
    static shapeName = "Triangle";
    static sides = 3;

    constructor(
        public xCoords: [number, number, number],
        public yCoords: [number, number, number],
        public color?: string
    ) { }
}

class Square implements Shape<4> {
    static shapeName = "Square";
    static sides = 4;

    constructor(
        public xCoords: [number, number, number, number],
        public yCoords: [number, number, number, number],
        public color?: string
    ) { }
}