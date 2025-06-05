const { readFile, writeFile } = require('./fileManager');

// Read the contents of Hello World.txt
const helloContent = readFile('Hello World.txt');
console.log('Reading from Hello World.txt:', helloContent);

// Write new content to Bye World.txt
writeFile('Bye World.txt', 'Writing to the file');

console.log('Content written to Bye World.txt!');
