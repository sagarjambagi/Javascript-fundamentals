///////////////////////////////////////
// Functions
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice); //Output - Juice with 5 apples and 0 oranges.

///////////////////////////////////////
// Function Declarations vs. Expressions
// Function declaration
function calcAge1(birthYeah) {
  return 2024 - birthYeah;
}
// Function expression
const calcAge2 = function (birthYeah) {
  return 2024 - birthYeah;
};
const age1 = calcAge1(1999);
const age2 = calcAge2(1999);

///////////////////////////////////////
// Arrow functions
const calcAge3 = birthYeah => 2024 - birthYeah;
const age3 = calcAge3(1999);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2024 - birthYeah;
  return `${firstName} is ${age} years old`;
};
console.log(yearsUntilRetirement(1999, 'Jonas')); //Output - Jonas is 40 years old

///////////////////////////////////////
// Introduction to Arrays
const friends = ['Michael', 'Steven', 'Peter'];
const year = new Array(1991, 1984, 2008, 2020);

console.log(friends[2]); //Output - Peter
console.log(friends.length); //Output - 3
console.log(friends[friends.length - 1]); //Output - Peter

///////////////////////////////////////
// Basic Array Operations (Methods)
const friendsArray = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friendsArray.push('Jay');
console.log(friendsArray); //Output -  ['Michael', 'Steven', 'Peter', 'Jay']
console.log(newLength); //Output - 4

const newLength1 = friendsArray.unshift('John');
console.log(friendsArray); // Output: ['John', 'Michael', 'Steven', 'Peter']
console.log(newLength); //Output - 4

// Remove elements
const popped = friendsArray.pop();
console.log(friendsArray); // Output: ['John', 'Michael', 'Steven']
console.log(popped); // Output: 'Peter'

const popped2 = friends.shift(); // First
console.log(friendsArray); // Output: ['Michael', 'Steven', 'Peter']
console.log(popped2); // Output: 'John'

console.log(friendsArray.indexOf('Steven')); // Output: 1
console.log(friendsArray.indexOf('Bob')); // Output: -1

console.log(friendsArray.includes('Steven')); // Output: true
console.log(friendsArray.includes('Bob')); // Output: false

///////////////////////////////////////
// Introduction to Objects
const jonasArray = ['Jonas', ['Michael', 'Peter', 'Steven']];

const jonas = {
  firstName: 'Jonas',
  friends: ['Michael', 'Peter', 'Steven'],
};

///////////////////////////////////////
// Dot vs. Bracket Notation
const jonasNotation = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
};

console.log(jonasNotation.lastName); // Output: 'Schmedtmann'
console.log(jonasNotation['lastName']); // Output: 'Schmedtmann'

jonasNotation.location = 'Portugal'; // Output:  location: 'Portugal',
jonasNotation['twitter'] = '@jonasschmedtman'; // Output: twitter: '@jonasschmedtman'

///////////////////////////////////////
// Object Methods
const jonasObject = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYeah: 1991,

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },
};

console.log(jonasObject.calcAge()); // Output: 46
console.log(jonasObject.age); // Output: 46

///////////////////////////////////////
// Iteration: The for Loop
// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

///////////////////////////////////////
// Looping Arrays, Breaking and Continuing
const jonasLooping = ['Jonas', 'Schmedtmann', ['Michael', 'Peter', 'Steven']];
const types = [];

for (let i = 0; i < jonasLooping.length; i++) {
  types.push(typeof jonasLooping[i]);
}
console.log(types); //string, string, object

// continue and break
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < jonasLooping.length; i++) {
  if (typeof jonasLooping[i] !== 'string') continue;
  console.log(jonasLooping[i], typeof jonasLooping[i]);
}

console.log('--- BREAK WITH NUMBER ---');
for (let i = 0; i < jonasLooping.length; i++) {
  if (typeof jonasLooping[i] === 'number') break;
  console.log(jonasLooping[i], typeof jonasLooping[i]);
}

///////////////////////////////////////
// Looping Backwards and Loops in Loops
const jonasBackwards = ['Jonas', 'Schmedtmann', ['Michael', 'Peter', 'Steven']];
for (let i = jonasBackwards.length - 1; i >= 0; i--) {
  console.log(i, jonasBackwards[i]);
}
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}

///////////////////////////////////////
// The while Loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}
