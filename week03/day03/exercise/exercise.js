// Exercise 1
function displayNumbersDivisible(divisor = 23) {
  let sum = 0;
  for (let i = 0; i <= 500; i++) {
    if (i % divisor === 0) {
      console.log(i);
      sum += i;
    }
  }
  console.log("Sum:", sum);
}
displayNumbersDivisible();

// Exercise 2
const stock = { banana: 6, apple: 0, pear: 12, orange: 32, blueberry: 1 };
const prices = { banana: 4, apple: 2, pear: 1, orange: 1.5, blueberry: 10 };
const shoppingList = ["banana", "orange", "apple"];

function myBill() {
  let total = 0;
  for (let item of shoppingList) {
    if (stock[item] > 0) {
      total += prices[item];
      stock[item] -= 1;
    }
  }
  console.log("Total bill:", total);
  return total;
}
myBill();

// Exercise 3
function changeEnough(itemPrice, amountOfChange) {
  const values = [0.25, 0.10, 0.05, 0.01];
  let total = 0;
  for (let i = 0; i < amountOfChange.length; i++) {
    total += amountOfChange[i] * values[i];
  }
  return total >= itemPrice;
}

console.log(changeEnough(4.25, [25, 20, 5, 0]));
console.log(changeEnough(14.11, [2, 100, 0, 0]));
console.log(changeEnough(0.75, [0, 0, 20, 5]));

// Exercise 4
function hotelCost(nights) {
  return nights * 140;
}

function planeRideCost(destination) {
  if (destination === "London") return 183;
  if (destination === "Paris") return 220;
  return 300;
}

function rentalCarCost(days) {
  let cost = days * 40;
  if (days > 10) cost *= 0.95;
  return cost;
}

function totalVacationCost() {
  const nights = parseInt(prompt("How many hotel nights?"));
  const destination = prompt("Destination?");
  const days = parseInt(prompt("How many car rental days?"));

  const hotel = hotelCost(nights);
  const plane = planeRideCost(destination);
  const car = rentalCarCost(days);

  console.log(`Hotel: $${hotel}, Plane: $${plane}, Car: $${car}`);
  console.log(`Total vacation cost: $${hotel + plane + car}`);
}
// totalVacationCost(); // Uncomment to run

// Exercise 5
const div = document.getElementById("container");
console.log(div);

document.querySelectorAll("ul.list")[0].children[1].textContent = "Richard";
document.querySelectorAll("ul.list")[1].children[1].remove();

document.querySelectorAll("ul.list").forEach(ul => {
  ul.firstElementChild.textContent = "YourName";
});

document.querySelectorAll("ul.list").forEach(ul => ul.classList.add("student_list"));
document.querySelector("ul.list").classList.add("university", "attendance");

const allLis = document.querySelectorAll("ul.list li");
allLis.forEach(li => {
  if (li.textContent === "Dan") li.style.display = "none";
  if (li.textContent === "Richard") li.style.border = "2px solid black";
});

if (div.style.backgroundColor === "lightblue") {
  const names = Array.from(document.querySelectorAll("ul.list")[0].children).map(li => li.textContent);
  alert(`Hello ${names.join(" and ")}`);
}

// Exercise 6
const nav = document.getElementById("navBar");
nav.setAttribute("id", "socialNetworkNavigation");

const newLi = document.createElement("li");
newLi.textContent = "Logout";
nav.querySelector("ul").appendChild(newLi);

const ul = nav.querySelector("ul");
console.log("First link:", ul.firstElementChild.textContent);
console.log("Last link:", ul.lastElementChild.textContent);

// Exercise 7
const allBooks = [
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    image: "https://covers.openlibrary.org/b/id/7984916-L.jpg",
    alreadyRead: true
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://covers.openlibrary.org/b/id/8104449-L.jpg",
    alreadyRead: false
  }
];

const section = document.querySelector(".listBooks");

allBooks.forEach(book => {
  const div = document.createElement("div");

  const p = document.createElement("p");
  p.textContent = `${book.title} written by ${book.author}`;
  if (book.alreadyRead) p.style.color = "red";

  const img = document.createElement("img");
  img.src = book.image;
  img.style.width = "100px";

  div.appendChild(p);
  div.appendChild(img);
  section.appendChild(div);
});
