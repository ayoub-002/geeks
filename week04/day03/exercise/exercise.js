// Exercise 1: Destructuring from object
const person = {
  name: 'John Doe',
  age: 25,
  location: {
    country: 'Canada',
    city: 'Vancouver',
    coordinates: [49.2827, -123.1207]
  }
};

const { name, location: { country, city, coordinates: [lat, lng] } } = person;
console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);


// Exercise 2: Destructure function param
function displayStudentInfo({ first, last }) {
  return `Your full name is ${first} ${last}`;
}
console.log(displayStudentInfo({ first: 'Elie', last: 'Schoppik' }));


// Exercise 3: Object to array and multiply values
const users = { user1: 18273, user2: 92833, user3: 90315 };
const usersArray = Object.entries(users);
console.log(usersArray);

const multipliedIds = usersArray.map(([key, value]) => [key, value * 2]);
console.log(multipliedIds);


// Exercise 4: Check class instance type
class Person {
  constructor(name) {
    this.name = name;
  }
}
const member = new Person('John');
console.log(typeof member);


// Exercise 5: Class inheritance
class Dog {
  constructor(name) {
    this.name = name;
  }
}

// correct use of super
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
}


// Exercise 6: Object reference
console.log([2] === [2]); // false
console.log({} === {});   // false
//javascript compare with reference not value

const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;

console.log(object2.number); // 4
console.log(object3.number); // 4
console.log(object4.number); // 5


// Exercise 6: Class with method
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

class Mammal extends Animal {
  sound(sound) {
    return `${sound} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}

const farmerCow = new Mammal('Lily', 'cow', 'brown and white');
console.log(farmerCow.sound('Moooo'));
