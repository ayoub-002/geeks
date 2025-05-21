// Prompt the user for input
let input = prompt("Enter several words separated by commas:");

// Convert the input into an array of trimmed words
let words = input.split(',').map(word => word.trim());

// Find the length of the longest word
let maxLength = Math.max(...words.map(word => word.length));

// Function to print the frame
function printFramedWords(words, maxLength) {
    // Top border
    console.log('*'.repeat(maxLength + 4));
    
    // Words with borders
    words.forEach(word => {
        let spaces = ' '.repeat(maxLength - word.length);
        console.log(`* ${word}${spaces} *`);
    });
    
    // Bottom border
    console.log('*'.repeat(maxLength + 4));
}

// Call the function
printFramedWords(words, maxLength);
