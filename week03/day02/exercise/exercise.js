// Exercise 1 : List of people
let people = ["Greg", "Mary", "Devon", "James"];

people.shift(); 
people[people.indexOf("James")] = "Jason"; 
people.push("Ayoub"); 
console.log("Index of Mary:", people.indexOf("Mary")); 

let copyPeople = people.slice(1, people.length - 1);
console.log("Copy of array:", copyPeople);

console.log("Index of Foo:", people.indexOf("Foo"));

let last = people[people.length - 1];
console.log("Last person:", last);

console.log("\nLoop through all people:");
for (let person of people) {
  console.log(person);
}

console.log("\nLoop until Devon:");
for (let person of people) {
  console.log(person);
  if (person === "Devon") break;
}

// Exercise 2 : Your favorite colors
const colors = ["blue", "red", "green", "yellow", "purple"];

console.log("\nFavorite Colors:");
for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i + 1} choice is ${colors[i]}`);
}

const suffixes = ["st", "nd", "rd", "th", "th"];
console.log("\nFavorite Colors with suffix:");
for (let i = 0; i < colors.length; i++) {
  console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
}

// Exercise 3 : Repeat the question

// let number;
// do {
//   number = prompt("Enter a number:");
// } while (Number(number) < 10);

// Exercise 4 : Building Management
const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};

console.log("\nBuilding Info:");
console.log("Number of floors:", building.numberOfFloors);
console.log("Apts on 1st and 3rd floors:", building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);
console.log("Second tenant:", building.nameOfTenants[1], "with rooms:", building.numberOfRoomsAndRent.dan[0]);

const totalRent = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1];
if (totalRent > building.numberOfRoomsAndRent.dan[1]) {
  building.numberOfRoomsAndRent.dan[1] = 1200;
  console.log("Dan's rent increased to 1200");
}

// Exercise 5 : Family
const family = {
  father: "John",
  mother: "Jane",
  child: "Alice",
};

console.log("\nFamily Keys:");
for (let key in family) {
  console.log(key);
}

console.log("Family Values:");
for (let key in family) {
  console.log(family[key]);
}

// Exercise 6 : Rudolf
const details = {
  my: "name",
  is: "Rudolf",
  the: "reindeer",
};

let sentence = "";
for (let key in details) {
  sentence += key + " " + details[key] + " ";
}
console.log("\nRudolf sentence:");
console.log(sentence.trim());

// Exercise 7 : Secret Group
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
const secretName = names.map(name => name[0]).sort().join('');
console.log("\nSecret Group Name:", secretName);
