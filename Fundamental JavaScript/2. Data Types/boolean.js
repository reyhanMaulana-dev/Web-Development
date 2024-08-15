let x = 5;
let y = 5;
let z = 6;

console.log(x === y); // true
console.log(y === z); // false

console.log(typeof(true)); // boolean
console.log(typeof(false)); // boolean

/*
The flag will be false as default. And we will check whether the person input is the same as registeredPerson. If yes, then show this message "Welcome ${registeredPerson}" in console. If not, show this message instead "You are not registered". Don't forget to change the flag.
*/

let flag = false;

const registeredPerson = 'Reyhan';
const input = 'Reyhan';

if (input === registeredPerson) flag = true;
else flag = false;

if (flag) {
  console.log(`Welcome ${registeredPerson}`);
} else {
  console.log('You are not registered');
}