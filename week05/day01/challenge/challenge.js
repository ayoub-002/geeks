//Challenge 1

function makeAllCaps(words) {
  return new Promise((resolve, reject) => {
    if (words.every(word => typeof word === 'string')) {
      resolve(words.map(word => word.toUpperCase()));
    } else {
      reject("Error: Not all elements are strings.");
    }
  });
}

function sortWords(words) {
  return new Promise((resolve, reject) => {
    if (words.length > 4) {
      resolve(words.sort());
    } else {
      reject("Error: Array length is too short to sort.");
    }
  });
}

// Test cases
makeAllCaps([1, "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log("Success:", result))
  .catch(error => console.log("Error:", error));

makeAllCaps(["apple", "pear", "banana"])
  .then(arr => sortWords(arr))
  .then(result => console.log("Success:", result))
  .catch(error => console.log("Error:", error));

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then(arr => sortWords(arr))
  .then(result => console.log("Success:", result))
  .catch(error => console.log("Error:", error));

//Challenge 2

const morse = `{
  "0": "-----", "1": ".----", "2": "..---", "3": "...--", "4": "....-",
  "5": ".....", "6": "-....", "7": "--...", "8": "---..", "9": "----.",
  "a": ".-", "b": "-...", "c": "-.-.", "d": "-..", "e": ".", "f": "..-.",
  "g": "--.", "h": "....", "i": "..", "j": ".---", "k": "-.-", "l": ".-..",
  "m": "--", "n": "-.", "o": "---", "p": ".--.", "q": "--.-", "r": ".-.",
  "s": "...", "t": "-", "u": "..-", "v": "...-", "w": ".--", "x": "-..-",
  "y": "-.--", "z": "--..", ".": ".-.-.-", ",": "--..--", "?": "..--..",
  "!": "-.-.--", "-": "-....-", "/": "-..-.", "@": ".--.-.", "(": "-.--.",
  ")": "-.--.-"
}`;

// 1. Convert JSON string to JavaScript object
function toJs() {
  return new Promise((resolve, reject) => {
    const morseJS = JSON.parse(morse);
    if (Object.keys(morseJS).length === 0) {
      reject("Error: Morse object is empty.");
    } else {
      resolve(morseJS);
    }
  });
}

// 2. Prompt user and convert to Morse
function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const input = prompt("Enter a word or sentence to translate to Morse:").toLowerCase();
    const chars = input.split('');
    const translation = [];

    for (let char of chars) {
      if (morseJS[char]) {
        translation.push(morseJS[char]);
      } else if (char === ' ') {
        translation.push(' ');
      } else {
        reject(`Error: Character "${char}" is not supported in Morse code.`);
        return;
      }
    }
    resolve(translation);
  });
}

// 3. Display on page
function joinWords(morseTranslation) {
  const output = document.getElementById("output");
  output.innerHTML = morseTranslation.join('<br>');
}

// Chain them
toJs()
  .then(morseJS => toMorse(morseJS))
  .then(morseTranslation => joinWords(morseTranslation))
  .catch(err => {
    const output = document.getElementById("output");
    output.textContent = err;
    console.error(err);
  });
