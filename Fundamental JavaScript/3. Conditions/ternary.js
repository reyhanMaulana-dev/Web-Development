const a = 1;
const b = 2;

const ternary = a === b ? "It's true" : "It's false";
console.log(ternary);

console.log(a === b ? 50 : 100);
console.log(1 === 1 ? 50 : 100);

// Real Use Case

let statement = 'Benar';

if (1 === 2) {
  statement = 'Benar';
} else {
  statement = 'Salah';
}

console.log(statement);

const ternaryInVariable = 1 === 1 ? 'Benar' : 'Salah';
console.log(ternaryInVariable);