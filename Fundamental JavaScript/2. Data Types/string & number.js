
// Basic String
const word = "Cat";
const sentence = 'The cat is eating a lizard';
const paragraph = `The cat is sitting on the couch. The next time it awake, it will ask for food`;

console.log(word);
console.log(sentence);
console.log(paragraph);

// Concat String
const newSentence = sentence + word + paragraph;
console.log(newSentence);

const backtickConcat = `${word} in boots. ${sentence}. ${paragraph}`;
console.log(backtickConcat);

// Basic Number
const count = 1;
const countFloat = 15e5;
const countString = `10`;

console.log(countFloat);

// Checking Data Types
console.log(typeof count);
console.log(typeof countFloat);
console.log(typeof countString);

// Concating Number With String
const concatNumberWithString = countString + count;

console.log(concatNumberWithString);
console.log(typeof concatNumberWithString);

// Basic Mathematic Operator

let a = 10;
let b = 80;
a--;
b++;

console.log(a);
console.log(b);