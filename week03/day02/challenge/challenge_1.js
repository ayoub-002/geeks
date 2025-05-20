//step 1
let sentence = "The movie is not that bad, I like it";
//step 2
let wordNot = sentence.indexOf("not");
//step 3
let wordBad = sentence.indexOf("bad");
//step 4
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
  //replace the word "not" and "bad" with "good"
  let result = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
  console.log(result);
} else {
  //print the original sentence or if the word "not" is after the word "bad"
  console.log(sentence);
}

