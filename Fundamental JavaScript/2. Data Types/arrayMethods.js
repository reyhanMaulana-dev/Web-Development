
const people = ['Agif', 'Ihsan', 'Ghaniyo', 'Nisa', 'Adi'];
console.log(people);

// Array.push()
// Adding a new item on the back of the array
people.push('Yoga');
console.log(people,`after .push`);

// Array.pop();
// Removing the last item inside the array
people.pop();
console.log(people, `after .pop`);

// Array.unshift();
// Adding a new item on the start of the array
people.unshift('Kelvin');
console.log(people, `after .unshift`);

// Array.shift();
// Removing the first item inside the array
people.shift(); 
console.log(people, `after .shift`);

// String.split();
// Convert String into Array
const animals = 'Cat, Dog, Bird, Rat, Rabbit, Frog';
const arrayOfAnimals = animals.split(', ');
console.log(arrayOfAnimals); // ['Cat', 'Dog', 'Bird', 'Rat', 'Rabbit', 'Frog']

// Array.join();
// Convert Array into String
const joinedArray = people.join(', ');
console.log(joinedArray); // Agif, Ihsan, Ghaniyo, Nisa, Adi, Abi

// String.trim();
const personName = '        Ghaniyo ';
console.log(personName);

const trimmedName = personName.trim();
console.log(trimmedName);

// Last Index in Array
const lastIndex = people.at(-1);
console.log(lastIndex);

const anotherLastIndex = people[people.length - 1];
console.log(anotherLastIndex);


// Array.slice();
// ['Agif', 'Ihsan', 'Ghaniyo', 'Nisa', 'Adi']
// If only 1 parameter it will start from the first index
const slicedFromStart = people.slice(1); // [ 'Ihsan', 'Ghaniyo', 'Nisa', 'Adi', 'Abi' ]
console.log(slicedFromStart);

// If there is 2 parameters then the end and the start will be substracted
const slicedPeople = people.slice(1, 3); // ['Ihsan', 'Ghaniyo']
console.log(slicedPeople);

// Array.splice();
// ['Agif', 'Ihsan', 'Ghaniyo', 'Nisa', 'Adi', 'Abi']
people.splice(2, 0, 'Eko'); // Adding Eko to index 2
console.log(people, 'additionalPeople'); // ['Agif', 'Ihsan', 'Eko', 'Ghaniyo', 'Nisa', 'Adi', 'Abi']

people.splice(3, 3, 'Yoga', 'Kelvin'); // Adding Yoga and Kelvin to index 3 then remove 3 items after it
console.log(people); // [ 'Agif', 'Ihsan', 'Eko', 'Yoga', 'Kelvin', 'Abi' ]

people.splice(3, 2); // Slicing Yoga and Kelvin (index 3)
console.log(people); // [ 'Agif', 'Ihsan', 'Eko', 'Abi' ]