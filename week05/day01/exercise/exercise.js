//Exercise 1: Comparison
function compareToTen(num) {
  return new Promise((resolve, reject) => {
    if (num <= 10) {
      resolve("The number is less than or equal to 10");
    } else {
      reject("The number is greater than 10");
    }
  });
}

// Test
compareToTen(15)
  .then(result => console.log("// Exercise 1:", result))
  .catch(error => console.log("// Exercise 1:", error));

compareToTen(8)
  .then(result => console.log("// Exercise 1:", result))
  .catch(error => console.log("// Exercise 1:", error));



//Exercise 2: Promises
const successPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("success");
  }, 4000);
});

successPromise.then(result => console.log("// Exercise 2:", result));



//Exercise 3: Resolve & Reject
const resolvedPromise = Promise.resolve(3);
const rejectedPromise = Promise.reject("Boo!");

// Handle the resolved promise
resolvedPromise.then(value => console.log("// Exercise 3 (resolve):", value));

// Handle the rejected promise
rejectedPromise.catch(error => console.log("// Exercise 3 (reject):", error));
