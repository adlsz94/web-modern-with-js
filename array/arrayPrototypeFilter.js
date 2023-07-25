/**
 *? Array.prototype.filter()
 * 
 * The filter() method creates a shallow copy of a portion of a given array, filtered down to 
 * just the elements from the given array that pass the test implemented by the provided function.
 * 
 * TODO: See the links:
 * 
 ** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Filter
 * 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Filter
 * 
 ** https://www.w3schools.com/jsref/jsref_filter.asp 
 * 
 ** https://262.ecma-international.org/5.1/#sec-15.4.4.20
 * 
 *? Description
 * 
 * The filter() method creates a new array filled with elements that pass a test provided by a function.
 * The filter() method does not execute the function for empty elements.
 * The filter() method does not change the original array.
 * 
 */

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result); // Expected output: Array ["exuberant", "destruction", "present"]

/**
 *? Syntax
 * 
 * filter(callback)
 * filter(callback, thisArg)
 * 
 *? Parameters:
 * 
 ** callbackFn
 * 
 * A function to execute for each element in the array. It should return a truthy value to keep
 * the element in the resulting array, and a falsy value otherwise. The function is called with 
 * the following arguments:
 * 
 ** element
 * The current element being processed in the array.
 * 
 ** index
 * The index of the current element being processed in the array.
 * 
 ** array
 * The array filter() was called upon.
 * 
 ** thisArg Optional
 * A value to use as this when executing callbackFn. See iterative methods.
 * 
 ** Return value
 * A shallow copy of a portion of the given array, filtered down to just the elements 
 * from the given array that pass the test implemented by the provided function. 
 * If no elements pass the test, an empty array will be returned.
 * 
 *? Description
 * 
 * The filter() method is an iterative method. 
 * It calls a provided callbackFn function once for each element in an array, and constructs 
 * a new array of all the values for which callbackFn returns a truthy value. 
 * Array elements which do not pass the callbackFn test are not included in the new array.
 * 
 * callbackFn is invoked only for array indexes which have assigned values. 
 * It is not invoked for empty slots in sparse arrays.
 * 
 * The filter() method is a copying method. It does not alter this but instead returns a shallow copy 
 * that contains the same elements as the ones from the original array (with some filtered out). 
 * However, the function provided as callbackFn can mutate the array. 
 * Note, however, that the length of the array is saved before the first invocation of callbackFn. Therefore:
 * 
 * - callbackFn will not visit any elements added beyond the array's initial length when the call to 
 * filter() began.
 * - Changes to already-visited indexes do not cause callbackFn to be invoked on them again.
 * - If an existing, yet-unvisited element of the array is changed by callbackFn, its value passed to 
 * the callbackFn will be the value at the time that element gets visited. Deleted elements are not visited.
 * 
 * The filter() method is generic. It only expects the this value to have a length property and integer-keyed properties.
 */

//? Examples

// The following example uses filter() to create a filtered array that has all elements with values less than 10 removed.
function isBigEnough(value) {
    return value >= 10;
}
  
const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
console.log(filtered)  // filtered is [12, 130, 44]

// The following example returns all prime numbers in the array:
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

// The following example uses filter() to create a filtered JSON of all elements with non-zero, numeric id.
const arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: "undefined" },
];
  
let invalidEntries = 0;
let invalidEntries1 = 0;  
function filterByID(item) {
    if (Number.isFinite(item.id) && item.id !== 0) {
      return true;
    }
    invalidEntries++;
    return false;
}
  
const arrByID = arr.filter(filterByID);
  
console.log("Filtered Array\n", arrByID);
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]
  
  console.log("Number of Invalid Entries =", invalidEntries);
  // Number of Invalid Entries = 5
 
// Another example like before
function filterByID1(obj) {
  if ('id' in obj && typeof(obj.id) === 'number' && !isNaN(obj.id)) {
    return true;
  } else {
    invalidEntries1 ++;
    return false;
  }
}

const arrByID1 = arr.filter(filterByID1);

console.log('Filtered Array\n', arrByID1);
// [{ id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }]

console.log('Number of Invalid Entries = ', invalidEntries1);
// Number of Invalid Entries = 4

/**
 * Searching in array
 * Following example uses filter() to filter array content based on search criteria.
 * @param fruits array of
 */
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/**
 * Filter array items based on search criteria (query)
 * @param arr1 Array
 * @param query String
 */
function filterItems(arr1, query) {
  return arr1.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "ap")); // ['apple', 'grapes'] returns words that has the characters following this order ("ap")
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange'] returns words that has the characters following this order ("an")

/**
 * Array filters items based on search criteria (query)
 */
function filterItems1(query) {
  return fruits.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}

console.log(filterItems1('ap')); // ['apple', 'grapes'] returns words that has the characters following this order ("ap")
console.log(filterItems1('an')); // ['banana', 'mango', 'orange'] returns words that has the characters following this order ("an")

//* Implementação ES2015
const fruits2 = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Array filters items based on search criteria (query)
 */
const filterItems2 = (query) => {   // Arrow function
  return fruits2.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) > -1);
};

console.log(filterItems2('ap')); // ['apple', 'grapes'] returns words that has the characters following this order ("ap")
console.log(filterItems2('an')); // ['banana', 'mango', 'orange'] returns words that has the characters following this order ("an")

// Using filter() on sparse arrays
// filter() will skip empty slots.
console.log([1, , undefined].filter((x) => x === undefined)); // [undefined]
console.log([1, , undefined].filter((x) => x !== 2)); // [1, undefined]

/**
 * Calling filter() on non-array objects
 * The filter() method reads the length property of this and then accesses each
 * property whose key is a nonnegative integer less than length.
 * 
 */
const arrayLike = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: "a", // ignored by filter() since length is 3
};
console.log(Array.prototype.filter.call(arrayLike, (x) => x <= "b")); // [ 'a', 'b' ]

/* 
Affecting Initial Array (modifying, appending and deleting)
The following example tests the behavior of the filter method when the array is modified. */

// Modifying each word
let words1 = ["spray", "limit", "exuberant", "destruction", "elite", "present"];

const modifiedWords = words1.filter((word, index, arr) => {
  arr[index + 1] += " extra";
  return word.length < 6;
});

console.log(modifiedWords);
// Notice there are three words below length 6, but since they've been modified one is returned
// ["spray"]

// Appending new words
words2 = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
const appendedWords = words2.filter((word, index, arr) => {
  arr.push("new");
  return word.length < 6;
});

console.log(appendedWords);
// Only three fits the condition even though the `words` itself now has a lot more words with character length less than 6
// ["spray" ,"limit" ,"elite"]

// Deleting words
words3 = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
const deleteWords = words3.filter((word, index, arr) => {
  arr.pop();
  return word.length < 6;
});

console.log(deleteWords); // ["spray" ,"limit"]
// Notice 'elite' is not even obtained as it's been popped off 'words' before filter can even get there


/**
 * Polyfill
 * 
 * O filter() foi adicionado ao padrão ECMA-262 na 5ª edição, assim como pode não estar presente em 
 * todas as implementações do padrão. Você pode trabalhar com isso adicionando o seguinte código no 
 * início de seus scripts, permitindo o uso do filter() na implementação ECMA-262 que não tem suporte nativo.
 * Esse algoritmo é exatamente aquele especificado na 5ª edição do ECMA-262, assumindo que fn.call.
 * Veja o valor original de Function.prototype.call() e que Array.prototype.push() tenha seu valor original.
 * Veja os links: 
 * 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/call
 * 
 ** https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push
 * 
 */

//  if (!Array.prototype.filter) {
//   Array.prototype.filter = function(fun/*, thisArg*/) {
//     'use strict';

//     if (this === void 0 || this === null) {
//       throw new TypeError();
//     }

//     var t = Object(this);
//     var len = t.length >>> 0;
//     if (typeof fun !== 'function') {
//       throw new TypeError();
//     }

//     var res = [];
//     var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
//     for (var i = 0; i < len; i++) {
//       if (i in t) {
//         var val = t[i];

//         // NOTE: Technically this should Object.defineProperty at
//         //       the next index, as push can be affected by
//         //       properties on Object.prototype and Array.prototype.
//         //       But that method's new, and collisions should be
//         //       rare, so use the more-compatible alternative.
//         if (fun.call(thisArg, val, i, t)) {
//           res.push(val);
//         }
//       }
//     }

//     return res;
//   };
// }











