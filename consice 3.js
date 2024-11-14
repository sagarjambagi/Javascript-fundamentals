const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
};

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

////////////////////////////////////
const restaurant = {
  name: 'Classico Italiano',
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

console.log(restaurant.order(2, 0)); // Output: ['Garlic Bread', 'Pizza']
console.log(restaurant.orderPizza('Focaccia', 'Pizza'));

///////////////////////////////////////
// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const splitFlights = flights.split('+'); //Output - ['_Delayed_Departure;fao93766109;txl2133758440;11:25' , '_Arrival;bru0943384722;fao93766109;11:45']
const [type, from, to, time] = splitFlights[0].split(';'); //Output - _Delayed_Departure fao93766109 txl2133758440 11:25
const isStartwith = type.startsWith('_Delayed'); //Output - true
const replaceAlldash = type.replaceAll('_', ' '); //Output - Delayed Departure
const upparCaseCity = from.slice(0, 3).toUpperCase(); //Output - FAO
const timeFormat = time.replace(':', 'h').padStart(36); //Output - "                              11h25"

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
  console.log(output);
}

// ///////////////////////////////////////
// // Working With Strings - Part 2

// // Split and join
console.log('a+very+nice+string'.split('+')); //Output - [ 'a', 'very', 'nice', 'string' ]
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' '); //Output - 'Jonas' 'Schmedtmann'

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' '); // Output: 'Mr. Jonas SCHMEDTMANN'

// // Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = 64637836;
const last = maskCreditCard.slice(-4);
console.log(last.padStart(maskCreditCard.length, '*')); // Output should be: '****7836'

///////////////////////////////////////
// Working With Strings - Part 2
const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase()); // Output: 'tap air portugal'
console.log(airline.toUpperCase()); // Output: 'TAP AIR PORTUGAL'

// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas
console.log(
  passenger.toLowerCase().replace(passenger[0], passenger[0].toUpperCase()) // Output: 'Jonas'
);

const passengerLower = passenger.toLowerCase(); // Output: 'jonas'
const passengerFirstLatter = passenger[0].toUpperCase(); // Output: 'J'
const passengerRest = passenger.slice(1); // Output: 'onas'

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';
const lowercaseEmail = loginEmail.toLowerCase().trim(); // Output: 'hello@jonas.io'

// replacing
const priceGB = '288,97£';
const usPrice = priceGB.replace('£', '$').replace(',', '.'); // Output: '$1234.56'

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
const correctStr = announcement.replaceAll('door', 'gate'); // Output: 'All passengers come to boarding gate 23. Boarding gate 23!'
console.log(announcement.replace('door', 'gate')); // Output: 'All passengers come to boarding gate 23. Boarding door 23!'
console.log(announcement.replace(/door/g, 'gate')); // Output: 'All passengers come to boarding gate 23. Boarding gate 23!'

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); // Output: true
console.log(plane.startsWith('Airb')); // Output: true
console.log(plane.endsWith('neo')); // Output: true

// working with strings - part 1
const airlinestrings = 'TAP Air Portugal';
const planestrings = 'A320';

console.log(planestrings[0]); // Output: A
console.log(airlinestrings.length); // Output: 16

console.log(airlinestrings.indexOf('r')); // Output: 6
console.log(airlinestrings.lastIndexOf('r')); // Output: 13
console.log(airlinestrings.indexOf('portugal')); // Output: -1

console.log(airline.slice(4)); // Output: 'Air Portugal'
console.log(airline.slice(4, 7)); // Output: 'Air'

console.log(airline.slice(0, airline.indexOf(' '))); // Output: 'TAP'
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Output: 'Portugal'

console.log(airline.slice(-2)); // Output: 'al'
console.log(airline.slice(1, -1)); // Output: 'AP Air Portuga'

// ///////////////////////////////////////
// Maps: Iteration
const question = new Map([
  ['question', 'what is the best programming languange in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try Again'],
]);
console.log(question);

// Quiz app
console.log(question.get('question')); // Output: 'what is the best programming language in the world?'
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt('Enter your answer'));
console.log(question.get(answer === question.get('correct'))); // Output: 'Correct'
console.log(question.get(question.get('correct') === answer)); // Output: 'JavaScript'

// Convert map to array
console.log([...question]);
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);

// ///////////////////////////////////////
// Maps: Fundamentals
const rest = new Map();
rest.set('name', 'classico italino'); // Output: 'name' => 'classico italino'
console.log(rest.get('name')); // Output: 'classico italino'

console.log(rest.has('name')); // Output: true
rest.delete('name');
rest.clear(); // Output: Map(0) {}

const arr = [1, 2];
rest.set(arr, 'Test'); // Output: Map(1) { [ 1, 2 ] => 'Test' }
console.log(rest.size); // Output: 1

///////////////////////////////////////
// Sets
const orderSet = new Set([
  'pasta',
  'pizza',
  'pizza',
  'Risotto',
  'Pasta',
  'pizza',
]);
console.log(orderSet); // Output: Set(3) { 'pasta', 'pizza', 'Risotto' }
console.log(new Set('jonas')); // Output: Set(5) { 'j', 'o', 'n', 'a', 's' }

console.log(orderSet.size); // Output: 3
console.log(orderSet.has('pizza')); // Output: true
console.log(orderSet.add('Garlic Bread')); // Output: Set(4)
console.log(orderSet.delete('Risotto')); // Output: true
console.log(orderSet); // Output: Set(3) { 'pasta', 'pizza', 'Garlic Bread' }
orderSet.clear();
console.log(orderSet); // Output: Set(0) {}

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)]; // Output: ['Waiter', 'Chef', 'Manager']

///////////////////////////////////////
// Looping Objects: Object Keys, Values, and Entries
// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties); // Output: ['monday', 'tuesday', 'wednesday', ...]

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

// [key, value]
for (const [day, { open, close }] of entries) {
  console.log(`on ${day} we open at ${open} and close at ${close}`);
}

///////////////////////////////////////
// Optional Chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// WITH optional chaining
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist'); // Output: 'Method does not exist'

// // Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
console.log(users[9]?.name ?? 'user arry empty'); // Output: 'user array empty'

if (users.length > 0) console.log(users[0].name); // Output: 'Jonas'
else console.log('user array empty');

// The for-of Loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}:${el}`);
}
console.log([...menu.entries()]);
console.log(...menu.entries());

// ///////////////////////////////////////
// Logical Assignment Operators
const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

// OR assignment operator
rest1.numGuests = rest1.numGuests || 10;
rest1.numGuests ||= 10;
console.log(rest1.numGuest);

// nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest1.numGuest ??= 10;

// AND assignment operator
rest1.owner = rest1.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>';
rest1.owner &&= 'anonomous';
console.log(rest1);
