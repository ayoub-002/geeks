const _ = require('lodash');
const { add, multiply } = require('./math');

// Use custom functions
console.log("Add:", add(4, 5));         // 9
console.log("Multiply:", multiply(3, 6)); // 18

// Use lodash functions
const nums = [10, 5, 8, 20];
console.log("Max number:", _.max(nums));        // 20
console.log("Sorted:", _.sortBy(nums));         // [5, 8, 10, 20]
console.log("Shuffled:", _.shuffle(nums));      // random order
