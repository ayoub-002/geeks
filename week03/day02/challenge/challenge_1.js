// Step 1: Create a sentence containing "not" and "bad"
let sentence = "The movie is not that bad, I like it";

// Step 2: Find the position of the first appearance of "not"
let wordNot = sentence.indexOf("not");

// Step 3: Find the position of the first appearance of "bad"
let wordBad = sentence.indexOf("bad");

// Step 4: Check if "bad" comes after "not"
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
  // Replace the "not...bad" part with "good"
  let result = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
  console.log(result);
} else {
  // If "bad" doesn't come after "not", log the original sentence
  console.log(sentence);
}

