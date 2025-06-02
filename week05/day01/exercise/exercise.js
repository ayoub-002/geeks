//Exercise 1: Comparison
function compareToTen(num) {
  return new Promise((resolve, reject) => {
    if (num <= 10) {
      resolve(`${num} is less than or equal to 10`);
    } else {
      reject(`${num} is greater than 10`);
    }
  });
}

//Test cases for compareToTen
compareToTen(15)
  .then(result => console.log("Exercise 1:", result))
  .catch(error => console.log("Exercise 1:", error));

compareToTen(8)
  .then(result => console.log("Exercise 1:", result))
  .catch(error => console.log("Exercise 1:", error));


//Exercise 2: Promises
const successPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("success");
  }, 4000);
});

//Test for successPromise
successPromise.then(result => console.log("Exercise 2:", result));


//Exercise 3: Resolve & Reject
const resolvedPromise = Promise.resolve(3);
const rejectedPromise = Promise.reject("Boo!");

//Test for resolvedPromise
resolvedPromise.then(value => console.log("Exercise 3 (resolve):", value));

//Test for rejectedPromise
rejectedPromise.catch(error => console.log("Exercise 3 (reject):", error));
