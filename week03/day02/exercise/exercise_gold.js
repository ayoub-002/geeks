// Exercise 1

let numbers = [123, 8409, 100053, 333333333, 7];

console.log("Exercise 1: Divisible by Three");
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 === 0) {
    console.log(numbers[i] + " is divisible by 3: true");
  } else {
    console.log(numbers[i] + " is divisible by 3: false");
  }
}

// Exercise 2

let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
};

console.log("\nExercise 2: Attendance");
let name = prompt("What is your name?");

if (name.toLowerCase() in guestList) {
  console.log(`Hi! I'm ${name}, and I'm from ${guestList[name.toLowerCase()]}.`);
} else {
  console.log("Hi! I'm a guest.");
}

// Exercise 3

let age = [20, 5, 12, 43, 98, 55];

console.log("\nExercise 3: Playing with Numbers");

// 1. Sum of all ages
let sum = 0;
for (let i = 0; i < age.length; i++) {
  sum += age[i];
}
console.log("Sum of all ages:", sum);

// 2. Highest age
let max = age[0];
for (let i = 1; i < age.length; i++) {
  if (age[i] > max) {
    max = age[i];
  }
}
console.log("Highest age:", max);

