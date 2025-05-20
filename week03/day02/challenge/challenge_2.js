// 1. First Solution

let pattern = "";
for (let i = 1; i <= 6; i++) {
  pattern += "* ".repeat(i) + "\n";
}
console.log(pattern);

// 2. Second Solution

let pattern1 = "";
for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= i; j++) {
    pattern1 += "* ";
  }
  pattern1 += "\n";
}
console.log(pattern1);
