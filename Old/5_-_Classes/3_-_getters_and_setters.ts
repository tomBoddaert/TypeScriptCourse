/*

Usually, when 'getting' or 'setting' a class's properties, it is direct
  with no validation or modification
If we want to add some, we can add getters and setters

*/

class Multiples {
    private _mul2!: number; // We use '_' to indicate a private property
    private _mul3!: number; // Using '!' means we don't have to set the
                            //   property in the constructor

    get mul2() {
        return `${this._mul2} is a multiple of 2`;
                        // returns the value plus a description
    }

    set mul2(value: string) {
        let newValue = parseInt(value);
                        // Converts the string input to an int
                        // If it's not a valid int, it returns NaN
        if (newValue === NaN) return;
        if (newValue % 2 === 0) this._mul2 = newValue;
                        // Only sets _mul2 if the value is a multiple of 2
    }

    get mul3() {
        return `${this._mul3} is a multiple of 3`;
    }

    set mul3(value: string) {
        let newValue = parseInt(value);
        if (newValue === NaN) return;
        if (newValue % 3 === 0) this._mul2 = newValue;
    }
}

var mI = new Multiples();

mI.mul2 = '6'; // Sets because 6 is a multiple of 2
console.log(mI.mul2);
// 6 is a multiple of 2

mI.mul2 = '7'; // Does not set because 7 is not a multiple of 2
console.log(mI.mul2);
// 6 is a multiple of 2