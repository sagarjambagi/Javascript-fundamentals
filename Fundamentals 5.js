//////////////////////////////////////////////////////////////////////////////
//Reverse a String: Write a function to reverse a given string.
//1.Reverse a String:
function reverseString(str) {
  //INPUT: "SAGAR" OUTPUT:"RAGAS"
  return str.split("").reverse().join(""); //str.split("") output:[s,t,r,i,g]
}

//Palindrome Check: Check if a given string is a palindrome.
//2.Palindrome Check:
function isPalindrome(str) {
  //INPUT: "EYE" OUTPUT:"EYE"
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

//Factorial Calculation: Compute the factorial of a number using recursion.
//3.Factorial Calculation:
function factorial(n) {
  //INPUT: 5 OUTPUT:5x4x3x2x1
  return n <= 1 ? 1 : n * factorial(n - 1);
}

//Fibonacci Sequence: Generate the Fibonacci sequence up to n terms.
//4.Fibonacci Sequence:
function fibonacci(n) {
  //INPUT: 6 OUTPUT:[0,1,1,2,4,6]
  const sequence = [0, 1];
  while (sequence.length < n) {
    const next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
    sequence.push(next);
  }
  return sequence;
}

//Array Sum: Find the sum of all elements in an array.
//5.Array Sum:
function arraySum(arr) {
  //INPUT: [1,1,1,1,1] OUTPUT:5
  return arr.reduce((sum, num) => sum + num, 0);
}

//Find Maximum Element: Return the largest element in an array.
//6.Find Maximum Element:
function findMax(arr) {
  //INPUT: [1,2,3,4,5] OUTPUT:5
  return Math.max(...arr);
}

//Find Minimum Element: Return the smallest element in an array.
//7.Find Minimum Element:
function findMin(arr) {
  //INPUT: [1,2,3,4,5] OUTPUT:1
  return Math.min(...arr);
}

//Array Average: Calculate the average of numbers in an array.
//8.Array Average:
function arrayAverage(arr) {
  //INPUT: [2,2,2,2,2] OUTPUT:2
  return arraySum(arr) / arr.length;
}

//Remove Duplicates: Remove duplicate values from an array.
//9.Remove Duplicates:
function removeDuplicates(arr) {
  //INPUT: [1,1,2,2,3] OUTPUT:[1,2,3]
  return [...new Set(arr)];
}

//Check Prime Number: Determine if a number is prime.
//10.Check Prime Number:
function isPrime(num) {
  //INPUT: 7 OUTPUT:true
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

//Bubble Sort: Implement the bubble sort algorithm.
//11.Bubble Sort:
function bubbleSort(arr) {
  // Outer loop iterates over the entire array
  for (let i = 0; i < arr.length; i++) {
    // Inner loop goes through the array and compares adjacent elements
    for (let j = 0; j < arr.length - 1; j++) {
      // If the current element is greater than the next element, swap them
      if (arr[j] > arr[j + 1]) {
        // Swap the elements using destructuring assignment
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  // Return the sorted array
  return arr;
}
//SUMMARY
// function bubblesort(arr){
//   for(i,arr.length,i++){
//     for(j,arr.length-1,j++){
//       if(j>j+1){
//         [j,j+1]=[j+1,j]
//       }
//     }
//   }
//   ret arr
// }

//Merge Sort: Implement the merge sort algorithm.
function mergeSort(arr) {
  // Base case: if the array has 1 or 0 elements, it is already sorted.
  if (arr.length <= 1) return arr;

  // Find the middle index of the array.
  const mid = Math.floor(arr.length / 2);

  // Recursively split the array into two halves: left and right.
  const left = mergeSort(arr.slice(0, mid)); // left half
  const right = mergeSort(arr.slice(mid)); // right half

  // Merge the two sorted halves into a single sorted array.
  return merge(left, right);
}

function merge(left, right) {
  let result = []; // Initialize an empty array to hold the merged result.

  // Continue looping until either left or right array is empty.
  while (left.length && right.length) {
    // Compare the first elements of left and right arrays.
    if (left[0] < right[0]) {
      // If the first element of left is smaller, push it to the result array.
      result.push(left.shift()); // Shift removes the first element from the array.
    } else {
      // Otherwise, push the first element of right to the result array.
      result.push(right.shift());
    }
  }

  // Concatenate any remaining elements from left or right arrays to the result.
  // Since one of them could still have elements after the loop, we need to add them.
  return result.concat(left, right);
}

//SUMMARY
// function mergesort(arr){
//   arr<= 1 ret
//   mid = arr.length/2
//   left = mergesort(slice(0,mid))
//   right = mergesort(slice(mid))
//   ret merge(left,right)
// }

// function merge(left,right){
//  merged = []
//  while(left.legnth && right.length){
//   if(left<right){
//     result.push(left)
//   }else{
//     result.push(right)
//   }
//  }
// }

//Binary Search: Implement binary search in a sorted array.
function binarySearch(arr, target) {
  // Initialize the left and right pointers
  let left = 0,
    right = arr.length - 1;

  // Continue searching while the left pointer is less than or equal to the right pointer
  while (left <= right) {
    // Calculate the middle index by taking the average of left and right pointers
    const mid = Math.floor((left + right) / 2);

    // Check if the middle element is equal to the target
    if (arr[mid] === target) {
      return mid; // If found, return the index of the target
    }

    // If the middle element is less than the target,
    // discard the left half by moving the left pointer to mid + 1
    if (arr[mid] < target) {
      left = mid + 1;
    }
    // If the middle element is greater than the target,
    // discard the right half by moving the right pointer to mid - 1
    else {
      right = mid - 1;
    }
  }

  // If the target is not found, return -1
  return -1;
}

//SUMMARY
// function binarySearch(arr, target) {
//   var left 0, right arr-1

//   while(left>right){
//     var mid = left+right/2
//     if(arr[mid]=target){
//       ret mid
//     }

//     if(arr[mid]<target){
//       left = m+1
//     }else{
//       right = m-1
//     }
//   }
// }

//Find Missing Number: Given an array of numbers from 1 to n, find the missing number.
function findMissingNumber(arr) {
  // Calculate the length of the array and determine the total number of elements (n) expected
  const n = arr.length + 1;

  // Calculate the sum of all numbers from 1 to n using the formula for the sum of the first n natural numbers
  // The formula is n * (n + 1) / 2
  const expectedSum = (n * (n + 1)) / 2;

  // Calculate the actual sum of the numbers present in the array
  // We assume there is a helper function `arraySum` that computes the sum of elements in the array
  const actualSum = arraySum(arr);

  // The missing number is the difference between the expected sum and the actual sum
  return expectedSum - actualSum;
}
//SUMMARY
// function missingNumber(arr) {
//   exp = formula;
//   act = reduce;
//   return exp - act;
// }
//Two Sum: Find two numbers in an array that add up to a specific target.
function twoSum(arr, target) {
  // Create a Map to store the numbers and their indices.
  const map = new Map();

  // Iterate through the array.
  for (let i = 0; i < arr.length; i++) {
    // Calculate the complement number needed to reach the target sum.
    const complement = target - arr[i];

    // Check if the complement number exists in the Map.
    if (map.has(complement)) {
      // If it exists, return the indices of the complement and the current number.
      return [map.get(complement), i];
    }

    // If the complement does not exist, store the current number and its index in the Map.
    map.set(arr[i], i);
  }

  // If no such pair is found, return an empty array.
  return [];
}
//Summary
// function twosum(){
//   map=new
//   for(i,i<arr.length,i++){
//     com = target-arr[i]
//     if(map.has(com)){
//       ret [map.get(com),i]
//     }
//     map.set(arr[i],i)
//   }
//   return []
// }
//Find Common Elements: Find common elements between two arrays.
function findCommonElements(arr1, arr2) {
  // Use the filter method on arr1 to create a new array.
  // The filter method will include only those elements in the new array
  // that pass the test implemented by the provided function.
  return arr1.filter((value) =>
    // For each element in arr1, check if it is included in arr2.
    // The includes method returns true if arr2 contains the element; otherwise, false.
    arr2.includes(value)
  );
}
//Summary
function findComm(arr1, arr2) {
  return arr1.filter((value) => arr2.includes(value));
}
//Flatten Nested Arrays: Flatten a nested array into a single-level array.
function flattenArray(arr) {
  return arr.flat(Infinity);
}
//Longest Substring Without Repeating Characters: Find the length of the longest substring without repeating characters.
function longestSubstring(s) {
  // Create a Map to store the most recent index of each character
  const map = new Map();
  // Initialize left pointer of the sliding window and maxLength to keep track of the longest substring found
  let left = 0,
    maxLength = 0;

  // Iterate through the string with the right pointer
  for (let right = 0; right < s.length; right++) {
    // Check if the current character has been seen before and is within the current window
    if (map.has(s[right])) {
      // Move the left pointer to the right of the last occurrence of the current character
      // This ensures the window does not contain repeating characters
      left = Math.max(map.get(s[right]) + 1, left);
    }

    // Update the Map with the current character and its index
    map.set(s[right], right);

    // Calculate the length of the current window and update maxLength if it's the longest found so far
    maxLength = Math.max(maxLength, right - left + 1);
  }

  // Return the length of the longest substring without repeating characters
  return maxLength;
}
//Summary
// function longestSubString(str) {
//   map=new

//   var left max
//   for(right=0,right<str.length,right++){
//     if(map.has[right]){
//       left = Math.max(map.get(right+1,left))
//     }
//     map.set(str[right],right)
//     max = math.max(max,right-left+1)
//   }
//   return max
// }
//Rotate Array: Rotate an array k steps to the right.
function rotateArray(arr, k) {
  // Reduce k to within the bounds of the array length
  // For example, if k is larger than arr.length, we don't need to rotate more than necessary.
  k = k % arr.length;

  // Step 1: Take the last 'k' elements from the array using slice(-k)
  // This returns the last 'k' elements as a new array.
  // Example: if arr = [1, 2, 3, 4, 5] and k = 2, arr.slice(-k) will return [4, 5].
  const lastKElements = arr.slice(-k);

  // Step 2: Take the first part of the array, excluding the last 'k' elements, using slice(0, -k)
  // This returns the remaining elements before the last 'k' elements.
  // Example: if arr = [1, 2, 3, 4, 5] and k = 2, arr.slice(0, -k) will return [1, 2, 3].
  const firstPart = arr.slice(0, -k);

  // Step 3: Concatenate the two arrays (last 'k' elements + first part)
  // This creates the rotated array.
  // Example: [4, 5].concat([1, 2, 3]) will return [4, 5, 1, 2, 3].
  return lastKElements.concat(firstPart);
}
//SUMMARY
// function rotate(arr,k){
//   last=arr.slice(-k)
//   first=arr.slice(0,-k)
//   return last.contact(first)
// }
//String Anagram: Check if two strings are anagrams of each other.
function areAnagrams(str1, str2) {
  // Helper function to normalize the strings
  // This function does the following:
  // 1. Converts the string to lowercase to ensure case-insensitivity.
  // 2. Removes any characters that are not alphabetic (like spaces, punctuation, etc.).
  // 3. Splits the string into an array of characters.
  // 4. Sorts the array of characters alphabetically.
  // 5. Joins the sorted characters back into a string.
  const normalize = (str) =>
    str
      .toLowerCase() // Convert to lowercase
      .replace(/[^a-z]/g, "") // Remove non-alphabetic characters
      .split("") // Split into an array of characters
      .sort() // Sort the array
      .join(""); // Join the array back into a string

  // Compare the normalized versions of the two strings
  // If they are equal, the strings are anagrams
  return normalize(str1) === normalize(str2);
}
//Summary

//Deep Clone Object: Create a deep clone of an object.
function deepClone(obj) {
  // Convert the object into a JSON string representation.
  // This process serializes the object, including its nested properties, into a string.
  const jsonString = JSON.stringify(obj);

  // Parse the JSON string back into an object.
  // This process creates a new object that is a deep clone of the original object.
  // Since the original object was serialized into a string, the resulting object is independent of the original.
  const clonedObj = JSON.parse(jsonString);

  // Return the newly created object, which is a deep clone of the input object.
  return clonedObj;
}

//Debounce Function: Implement a debounce function.
function debounce(func, wait) {
  // 'timeout' will hold the reference to the timeout that is set
  let timeout;

  // Return a new function that wraps the original function (func)
  return function (...args) {
    // Clear any existing timeout to reset the debounce period
    clearTimeout(timeout);

    // Set a new timeout to call the func after the specified wait time
    timeout = setTimeout(() => {
      // Call the original function (func) with the context of 'this' and pass any arguments
      func.apply(this, args);
    }, wait);
  };
}
//Throttle Function: Implement a throttle function.
function throttle(func, limit) {
  // Variables to keep track of the last time the function was executed and
  // the last scheduled function call.
  let lastFunc;
  let lastRan;

  // Return a new function that wraps the original `func`.
  return function (...args) {
    // `context` holds the `this` value to be used when calling `func`.
    const context = this;

    // If the function has never been run before, run it immediately.
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now(); // Update `lastRan` to the current time.
    } else {
      // Clear any previously scheduled function calls to avoid multiple calls within the limit period.
      clearTimeout(lastFunc);

      // Schedule a new function call after the remaining time until the `limit` period expires.
      lastFunc = setTimeout(() => {
        // Check if the `limit` period has passed since the last execution.
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args); // Call the original function with the correct context and arguments.
          lastRan = Date.now(); // Update `lastRan` to the current time.
        }
      }, limit - (Date.now() - lastRan)); // Calculate the remaining time to wait.
    }
  };
}
//Event Delegation: Implement event delegation for dynamic elements.
// Add an event listener to the entire document
document.addEventListener("click", function (event) {
  // Check if the clicked element matches the selector '.dynamic-element'
  if (event.target.matches(".dynamic-element")) {
    // If it matches, log a message to the console
    console.log("Dynamic element clicked:", event.target);
  }
});

//Promise All: Implement a function similar to Promise.all.
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    // Create an array to store results of the resolved promises
    let result = [];
    // Variable to keep track of how many promises have been resolved
    let completed = 0;

    // Iterate over each promise
    for (let i = 0; i < promises.length; i++) {
      // Ensure the input is treated as a promise using Promise.resolve
      Promise.resolve(promises[i])
        .then((value) => {
          // Store the resolved value in the result array at the corresponding index
          result[i] = value;
          // Increment the count of completed promises
          completed++;
          // Check if all promises have been resolved
          if (completed === promises.length) {
            // If so, resolve the outer promise with the result array
            resolve(result);
          }
        })
        .catch(reject); // If any promise is rejected, reject the outer promise with the error
    }
  });
}

//Custom Bind Function: Implement a custom bind function.
// Adding a new method 'myBind' to Function's prototype
Function.prototype.myBind = function (context, ...args) {
  // 'this' refers to the function that 'myBind' is being called on
  const fn = this;

  // Return a new function that, when called, will execute 'fn' with the provided 'context' and arguments
  return function (...newArgs) {
    // Apply 'fn' with the specified 'context' and the combination of initial and new arguments
    return fn.apply(context, args.concat(newArgs));
  };
};

//Custom Map Function: Implement a custom map function.
// Adding a custom `myMap` function to the Array prototype
Array.prototype.myMap = function (callback) {
  // Create an empty array to store the results
  const result = [];

  // Iterate through each element of the array
  for (let i = 0; i < this.length; i++) {
    // Call the callback function with the current element, its index, and the original array
    // Push the result of the callback function into the `result` array
    result.push(callback(this[i], i, this));
  }

  // Return the `result` array which contains the transformed elements
  return result;
};
//Custom Reduce Function: Implement a custom reduce function.
Array.prototype.myReduce = function (callback, initialValue) {
  // If an initial value is provided, use it; otherwise, use the first element of the array.
  let accumulator = initialValue !== undefined ? initialValue : this[0];

  // If no initial value is provided, start iterating from the second element of the array.
  // Otherwise, start from the first element.
  for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
    // Apply the callback function to the accumulator and the current element.
    // Update the accumulator with the result.
    accumulator = callback(accumulator, this[i], i, this);
  }

  // Return the final value of the accumulator.
  return accumulator;
};
//Find Intersection of Two Arrays: Find the intersection of two arrays.
// Function to find the intersection of two arrays
function intersection(arr1, arr2) {
  // Filter the elements of arr1
  return arr1.filter((value) =>
    // For each element in arr1, check if it is included in arr2
    arr2.includes(value)
  );
}
//Find the Kth Largest Element: Find the Kth largest element in an unsorted array.
function findKthLargest(arr, k) {
  // Sort the array in descending order.
  // The sort function compares two elements `a` and `b` and sorts them based on the result of `b - a`.
  // This ensures that the largest numbers come first in the array.
  arr.sort((a, b) => b - a);

  // After sorting, the Kth largest element will be at index `k - 1` because array indexing is zero-based.
  // For example, the 1st largest element is at index 0, the 2nd largest at index 1, and so on.
  return arr[k - 1];
}

//JavaScript Closures: Explain and implement JavaScript closures.
// Define the createCounter function
function createCounter() {
  // Initialize a variable count to keep track of the number
  let count = 0;

  // Return an inner function that has access to count
  return function () {
    // Each time the inner function is called, increment the count
    // and return the current value of count before incrementing it
    return count++;
  };
}
//Event Loop and Asynchronous Programming: Explain the event loop and how asynchronous programming works in JavaScript.
//Prototype Inheritance: Explain and implement prototype-based inheritance.
// Define the Animal constructor function
function Animal(name) {
  // Assign the name property to the Animal instance
  this.name = name;
}

// Add a method to the Animal prototype
Animal.prototype.sayHello = function () {
  // Method to log a greeting that includes the animal's name
  console.log(`Hello, my name is ${this.name}`);
};

// Define the Dog constructor function
function Dog(name) {
  // Call the Animal constructor function within the context of Dog
  // This ensures that Dog instances are initialized with the same properties as Animal
  Animal.call(this, name);
}

// Set the prototype of Dog to an object created from Animal.prototype
Dog.prototype = Object.create(Animal.prototype);

// Restore the constructor property on Dog's prototype to point to Dog
// This is necessary because the previous line overwrites Dog's prototype,
// which would otherwise point back to Animal
Dog.prototype.constructor = Dog;

// Example usage:
const myDog = new Dog("Buddy");

myDog.sayHello(); // Output: Hello, my name is Buddy

//Memory Leaks: Identify and fix memory leaks in JavaScript applications.
// Example of a memory leak:
function createLeak() {
  // Create a large array with 1,000,000 elements, each filled with the string 'leak'.
  const largeArray = new Array(1000000).fill("leak");

  // Return an inner function that logs the first element of the array.
  // This function has a closure over the `largeArray` variable.
  return function () {
    console.log(largeArray[0]);
  };
}

// Call `createLeak` to create the `leak` function.
// `largeArray` is still referenced by the closure inside `leak`.
const leak = createLeak();

//Currying: Implement a currying function in JavaScript.
// Define a function 'curry' that takes a function 'fn' as an argument
function curry(fn) {
  // Return a new function 'curried' that accepts any number of arguments using the spread operator (...args)
  return function curried(...args) {
    // Check if the number of arguments passed to 'curried' is equal to or greater than the number of parameters expected by 'fn'
    if (args.length >= fn.length) {
      // If so, call 'fn' with all the accumulated arguments and return the result
      return fn(...args);
    }
    // If not enough arguments have been passed, return a new function that takes more arguments
    return function (...args2) {
      // Call 'curried' recursively with the previously collected arguments ('args') and the new ones ('args2')
      // This process continues until the total number of arguments meets or exceeds the number of parameters expected by 'fn'
      return curried(...args, ...args2);
    };
  };
}

//Partial Application: Implement partial application in JavaScript.
// Define the 'partial' function, which takes a function 'fn' and some arguments 'partialArgs'.
function partial(fn, ...partialArgs) {
  // The function returns a new function that takes the remaining arguments 'args'.
  return function (...args) {
    // The new function calls the original function 'fn' with the 'partialArgs' followed by the remaining 'args'.
    // This combines the partially applied arguments with the remaining arguments.
    return fn(...partialArgs, ...args);
  };
}

//Memoization: Implement a memoization function to optimize recursive calls.
function memoize(fn) {
  // Create a cache to store the results of previous function calls.
  const cache = new Map();

  // Return a new function that will be the memoized version of 'fn'.
  return function (...args) {
    // Convert the arguments passed to the function into a string key.
    // JSON.stringify is used to handle complex argument types.
    const key = JSON.stringify(args);

    // Check if the result for these arguments already exists in the cache.
    if (cache.has(key)) {
      // If it does, return the cached result to avoid recomputing it.
      return cache.get(key);
    }

    // If the result is not in the cache, call the original function 'fn'
    // with the provided arguments and store the result.
    const result = fn(...args);

    // Save the result in the cache for future use.
    cache.set(key, result);

    // Return the newly computed result.
    return result;
  };
}

//Async/Await: Convert promise-based code to use async/await.
// It allows the use of 'await' within the function to wait for promises to resolve.
async function fetchData(url) {
  try {
    // The 'await' keyword pauses the execution of the function until the promise is resolved.
    // 'fetch(url)' is an asynchronous operation that returns a promise.
    // The promise resolves with a Response object after the data has been fetched from the given URL.
    const response = await fetch(url);

    // 'await response.json()' waits for the promise returned by 'response.json()' to resolve.
    // This promise resolves with the data parsed as JSON.
    const data = await response.json();

    // The data is returned from the function.
    // Since the function is async, it returns a promise that resolves with this data.
    return data;
  } catch (error) {
    // If any error occurs during the fetch or the parsing of the JSON, it is caught here.
    // The error is logged to the console.
    console.error("Error fetching data:", error);
  }
}

//Custom Iterator: Implement a custom iterator for an object.
//Reactive Programming: Implement basic reactive programming concepts in JavaScript.
// Define a class named Reactive to handle reactive data.
class Reactive {
  // The constructor initializes the object with an initial value and an empty array of listeners.
  constructor(value) {
    this.value = value; // Store the initial value.
    this.listeners = []; // Initialize an empty array to hold listener functions.
  }

  // Method to set a new value and notify all subscribed listeners.
  set(value) {
    this.value = value; // Update the value stored in the object.
    // Loop through each listener and call it with the updated value.
    this.listeners.forEach((listener) => listener(value));
  }

  // Method to retrieve the current value.
  get() {
    return this.value; // Return the current value stored in the object.
  }

  // Method to subscribe a listener function that will be called when the value changes.
  subscribe(listener) {
    this.listeners.push(listener); // Add the listener function to the array of listeners.
  }
}
