////////////////////////////////////
// Values and Variables
let string = "Matilda";
let number = 27;

////////////////////////////////////
// Data Types
let boolean = true;
boolean = "YES!";
let year;
year = 1991;
console.log(typeof year);

////////////////////////////////////
// let, const and var
let age = 30;
age = 31;
const birthYear = 1991;
// birthYear = 1990;
var job = "programmer";
job = "teacher";

////////////////////////////////////
////////////////////////////////////
// Basic Operators
// Math operators
const now = 2037;
const ageSarah = now - 2018;
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=

////////////////////////////////////
// Operator Precedence
console.log(now - 1991 > now - 2018);
let x1, y;
x1 = y = 25 - 10 - 5; // x = y = 10, x = 10

////////////////////////////////////
// Strings and Template Literals
const firstNameStrings = "Jonas";
const birthYearStrings = 1991;

const jonas = "Im " + firstNameStrings + " a " + birthYear;
const jonasNew = `Im ${firstNameStrings}, a ${birthYear}`;

////////////////////////////////////
// Type Conversion and Coercion

// type conversion
const inputYear = "1991";
console.log(Number(inputYear) + 18); //output:2009

console.log(Number("Jonas")); //output-NaN
console.log(typeof NaN); //output-number

console.log(String(23), 23);

// type coercion
console.log("I am " + 23 + " years old"); //output - I am 23 years old
console.log("23" - "10" - 3); //output - 10
console.log("23" / "2"); //output - 11.5

let n = "1" + 1; //output - '11'
n = n - 1; //output - 10

////////////////////////////////////
// Truthy and Falsy Values
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean("Jonas"));
console.log(Boolean({}));

////////////////////////////////////
// Equality Operators: == vs. ===
const ageEquality = "18";
ageEquality === 18; //output - false
ageEquality == 18; //output - true

////////////////////////////////////
// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); //output - true
console.log(hasDriversLicense || hasGoodVision); //output - true
console.log(!hasDriversLicense); //output - false

////////////////////////////////////
// The switch Statement
const day = "friday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  default:
    console.log("Not a valid day!");
}

////////////////////////////////////
// Statements and Expressions
3 + 4;
1991;
true && false && !false;

if (23 > 10) {
  const str = "23 is bigger";
}
const me = "Jonas";
console.log(`I'm ${2037 - 1991} years old ${me}`);

////////////////////////////////////
// The Conditional (Ternary) Operator
const ageConditional = 23;
const drink = ageConditional >= 18 ? "wine 🍷" : "water 💧"; //output - true
