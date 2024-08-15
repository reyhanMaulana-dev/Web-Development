
const fruits = [`Apple`, `Banana`, `Watermelon`, `Grape`];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[10]);
console.log(fruits, 'before reasign');

// Reasign Array Value
fruits[0] = `Lemon`;
console.log(fruits,`after reasign`);

/* 
 Use Case
*/

const arrayOfArray = [[1,2,3], [4,5,6]];
console.log(arrayOfArray[0]);
console.log(arrayOfArray[0][2]);

const person = ['Agif', 'Ghaniyo', 'Yoga', 'Aisyah', 'Ihsan', 'Adi', 'Nisa'][5];
console.log(person);