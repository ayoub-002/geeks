// Exercise 1: Checking the BMI

console.log("Exercise 1: Checking the BMI");

let person1 = {
  fullName: "Alice Johnson",
  mass: 68,
  height: 1.65,
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  }
};

let person2 = {
  fullName: "Bob Smith",
  mass: 85,
  height: 1.75,
  calcBMI: function () {
    return this.mass / (this.height * this.height);
  }
};

function compareBMI(p1, p2) {
  const bmi1 = p1.calcBMI();
  const bmi2 = p2.calcBMI();

  console.log(`${p1.fullName}'s BMI: ${bmi1.toFixed(2)}`);
  console.log(`${p2.fullName}'s BMI: ${bmi2.toFixed(2)}`);

  if (bmi1 > bmi2) {
    console.log(`${p1.fullName} has the higher BMI.`);
  } else if (bmi2 > bmi1) {
    console.log(`${p2.fullName} has the higher BMI.`);
  } else {
    console.log("Both have the same BMI.");
  }
}

compareBMI(person1, person2);

// Exercise 2: Grade Average

console.log("\nExercise 2: Grade Average");

function calculateAverage(gradesList) {
  let sum = 0;
  for (let i = 0; i < gradesList.length; i++) {
    sum += gradesList[i];
  }
  return sum / gradesList.length;
}

function findAvg(gradesList) {
  const avg = calculateAverage(gradesList);
  console.log("Average grade:", avg.toFixed(2));

  if (avg >= 65) {
    console.log("Congratulations! You passed the course.");
  } else {
    console.log("Sorry, you failed and must repeat the course.");
  }
}

// Example usage:
let studentGrades = [90, 70, 60, 80, 50];
findAvg(studentGrades);

