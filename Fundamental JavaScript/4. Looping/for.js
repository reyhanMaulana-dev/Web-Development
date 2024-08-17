// for - loops through a block of code a number of times
const sports = [`football`, `basket`, `swimming`, `marathon`, `fishing`];
console.log(`length :`, sports.length);

let i, len, text;
for(i = 0, len = sports.length, text = ``; i < len; i++){
    text += sports[i] + `, `;
}
console.log(text);

// for/of - loops through the values of an iterable object
const fruits = [`banana`, `apple`, `manggo`, `papaya`];;
for(const fruit of fruits){
    console.log(fruit);
}

// for/in - loops through the properties of an object
for(const index in sports){
    const number = Number(index) + 1;
    console.log(`${number}. ${sports[index]}`);
}
