const fs = require('fs');

// Function to read a file
function readFile(filename) {
  const data = fs.readFileSync(filename, 'utf8');
  return data;
}

// Function to write to a file
function writeFile(filename, content) {
  fs.writeFileSync(filename, content, 'utf8');
}

// Export both functions
module.exports = {
  readFile,
  writeFile
};
