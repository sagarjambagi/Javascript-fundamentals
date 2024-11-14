let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2)); // Output: ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // Output: ['c', 'd']
console.log(arr.slice(-2)); // Output: ['d', 'e']
console.log(arr.slice(-1)); // Output: ['e']
console.log(arr.slice(1, -2)); // Output: ['b', 'c']
console.log(arr.slice()); // Output: ['a', 'b', 'c', 'd', 'e']
console.log([...arr]); // Output: ['a', 'b', 'c', 'd', 'e']

// SPLICE
console.log(arr.splice(2)); //Output: ['a', 'b']
arr.splice(-1); //Output: ['a']
arr.splice(1, 2); // Output: ['a', 'd', 'e']

// REVERSE
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // Output: ['f', 'g', 'h', 'i', 'j']

// CONCAT
const letters = arr.concat(arr2);
console.log(letters); // Output: ['a', 'b', 'c', 'd', 'e', 'j', 'i', 'h', 'g', 'f']
console.log([...arr, ...arr2]); // Output: ['a', 'b', 'c', 'd', 'e', 'j', 'i', 'h', 'g', 'f']

// JOIN
console.log(letters.join(' - ')); // Output: "a - b - c - d - e - j - i - h - g - f"

///////////////////////////////////////
// The new at Method
const num = [23, 11, 64];
console.log(num[0]); // Output: 23
console.log(num.at(0)); // Output: 23

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);

///////////////////////////////////////
// Looping Arrays: forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`movements ${i + 1} : you deposited ${movement}`);
  } else {
    console.log(`movements ${i + 1} : you withdraw ${Math.abs(movement)}`);
  }
}

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

///////////////////////////////////////
// forEach With Maps and Sets
// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

/////////////////////////////////////
// The Map Method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});
const movementsUSDArrow = movements.map(mov => mov * eurToUsd);

console.log(movementsUSD); // Output: [ 220, 495, -440, 3300, -715, -143, 77, 1430 ]
console.log(movementsUSDArrow); // Output: [ 220, 495, -440, 3300, -715, -143, 77, 1430 ]

const movementUSDfor = [];
for (const mov of movements) {
  movementUSDfor.push(mov * eurToUsd);
}
console.log(movementUSDfor); // Output: [ 220, 495, -440, 3300, -715, -143, 77, 1430 ]

///////////////////////////////////////
// The filter Method
const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log(deposits); // Output: [ 200, 450, 3000, 70, 1300 ]

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor); // Output: [ 200, 450, 3000, 70, 1300 ]

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals); // Output: [ -400, -650, -130 ]

const withdraw = movements.filter(function (mov, i, arr) {
  return mov < 0;
});
console.log(withdraw); // Output: [ -400, -650, -130 ]

///////////////////////////////////////
// The reduce Method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// accumulator -> SNOWBALL
const balanceaAcc = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
const balanceaAccArrow = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balanceaAcc); // Output: 3640

let balancefor = 0;
for (const mov of movements) balance2 += mov;
console.log(balancefor); // Output: 3640

// Maximum value
const maxArrow = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);

const maxReguar = movements.reduce(function (acc, curr, i, arr) {
  if (curr > acc) return curr;
  else return acc;
}, movements[0]);
console.log(max); // Output: 3000

///////////////////////////////////////
// The Magic of Chaining Methods
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const eurToUsd = 1.1;

// PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => mov * eurToUsd)
  .reduce((acc, curr, i, arr) => (acc += curr), 0);
console.log(totalDepositsUSD);

///////////////////////////////////////
// The find Method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawal = movements.find(mov => mov < 0); // Output: -400
const account = accounts.find(acc => acc.owner === 'Jessica Davis'); // Output: { owner: 'Jessica Davis', balance: 5000 }

///////////////////////////////////////
// some and every
// EQUALITY
console.log(movements.includes(-130)); // Output: true
console.log(movements.includes(1300)); // Output: true

// SOME: CONDITION
console.log(movements.some(mov => mov === -130)); // Output: true

const anyDeposits = movements.some(mov => mov > 0); // Output: true

// EVERY
console.log(movements.every(mov => mov > 0)); // Output: false
// deposits: [400, 650, 130, 2000],
console.log(account4.movements.every(mov => mov > 0)); // Output: true

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit)); // Output: true
console.log(movements.every(deposit)); // Output: false
console.log(movements.filter(deposit)); // Output: [200, 450, 3000, 70, 1300]

///////////////////////////////////////
// flat and flatMap
const arrFlat = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat()); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2)); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

// flat
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance); // Output: 5350

// flatMap
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2); // Output: 5350

///////////////////////////////////////
// Sorting Arrays
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
}); // Output: [-650, -400, -130, 70, 200, 450, 1300, 3000]

movements.sort((a, b) => a - b);
console.log(movements); // Output: [-650, -400, -130, 70, 200, 450, 1300, 3000]

movements.sort((a, b) => b - a);
console.log(movements); // Output: [3000, 1300, 450, 200, 70, -130, -400, -650]

///////////////////////////////////////
// More Ways of Creating and Filling Arrays
const arrFilling = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Emprty arrays + fill method
const xEmprty = new Array(7); // Output: [ <7 empty items> ]
xEmprty.fill(1, 3, 5); // Output: [ <3 empty items>, 1, 1, <2 empty items> ]
xEmprty.fill(1); // Output: [1, 1, 1, 1, 1, 1, 1]

arrFilling.fill(23, 2, 6); // Output: [1, 2, 23, 23, 23, 23, 7]

// Array.from
const y = Array.from({ length: 7 }, () => 1); // Output: [1, 1, 1, 1, 1, 1, 1]
const z = Array.from({ length: 7 }, (_, i) => i + 1); // Output: [1, 2, 3, 4, 5, 6, 7]

///////////////////////////////////////
// Array Methods Practice
// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSome); // Output: 4320

const numDeposits1000Filter = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov >= 1000).length; // Output: 2

const numDeposits1000Reduce = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0); // Output: 2

const { depositsReduce, withdrawalsReduce } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  ); // Output: 3210 -1130

// 4.
// this is a nice title -> This Is a Nice Title
const convertTitleCaseString = function (title) {
  const capitzalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitzalize(word)))
    .join(' ');

  return capitzalize(titleCase);
};
console.log(convertTitleCase('this is a nice title')); // Output: This is a Nice Title
