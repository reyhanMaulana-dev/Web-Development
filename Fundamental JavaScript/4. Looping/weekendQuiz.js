// Find the same fruit between 2 arrays

const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig' ,'grape', 'honeydew', 'kiwi'];
const favoriteFruits = ['apple', 'orange', 'watermelon', 'grape'];

for(const fruit of fruits){
    for(const favFruit of favoriteFruits){
        if(fruit === favFruit){
            console.log(fruit);
        }
    }
}

// Write a nested loop to flatten the paragraphs array into a single array of words and print the total word count.
const paragraphs = [
    ['The quick brown fox', 'jumps over the lazy dog'],
    ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit'],
    ['Sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua']
  ];

const newParagraph = [];

for(const arrayOfSetence of paragraphs){
    for(const setence of arrayOfSetence){
        const word = setence.split(" ");
        
        for(const w of word){
            newParagraph.push(w);
        }
    }
}
console.log(`new paragraph = ${newParagraph.join(` `)}`);
console.log(`total word = ${newParagraph.length}`)

// Write a nested loop to calculate and print the total sales for each day.

/* Expected Output:
Total sales for day 1: 255.80
Total sales for day 2: 355.70
Total sales for day 3: 476.10
*/

const salesData = [
    [120.50, 89.70, 45.60],
    [150.00, 130.20, 75.50],
    [200.10, 95.40, 180.60]
  ];

for(let i =0; i < salesData.length; i++){
    let datas = salesData[i];
    let count = 0;

    for(const data of datas){
        count += data;
    }

    console.log(`total sales for day ${i+1} : ${count}`)
}

// Write a nested loop to count and print the number of times the word 'quick' appears in the sentences array.
const sentecesArray = [
    ['The quick brown fox', 'jumps over the lazy dog'],
    ['The quick brown fox', 'is quick and agile'],
    ['A quick fox is hard to catch', 'but a lazy dog is easy']
  ];

let count = 0;
for(const sentences of sentecesArray){
    for(const sentence of sentences){
        const words = sentence.split(` `);
        for(word of words){
            if(word === `quick`){
                count ++;
            }
        }
    }
}
console.log(`total : ${count}`);

// Write a nested loop to extract and print all hashtags from the socialPosts array.

/* Expected Output:
#feature
#excited
#conference
#networking
#Throwback
#beach
*/

const socialPosts = [
    ['Loving the new #feature', '#excited for the update'],
    ['Had a great time at the #conference', 'Met some amazing people #networking'],
    ['#Throwback to the best vacation ever', 'Missing the #beach life']
  ];

for(const socialPost of socialPosts){
    for(const sentence of socialPost){
        const words = sentence.split(` `);

        for(const word of words){
            for(const hastag of word){
                if(hastag === `#`)
                console.log(word);
            }
        }
    }
}

// Write a nested loop to find and print elements in nestedArray that are not in compareArray.

/* Expected Output:
apple
cherry
date
elderberry
grape
honeydew
*/

const fruitGroups = [
    ['apple', 'banana', 'cherry'],
    ['date', 'elderberry', 'fig'],
    ['grape', 'honeydew', 'kiwi']
];
const targetFruits = ['banana', 'fig', 'kiwi', 'mango'];


for(const fruits of fruitGroups){
    for(let i=0; i < fruits.length; i++){
        const fruit = fruits[i]

        for(const target of targetFruits){
            if(target === fruit){
                fruits.splice(i,1);

                for(const f of fruits){
                    console.log(f);
                }
            }
        }
    }  
}

// Write a nested loop to replace matching elements in nestedArray with 'REPLACED' and print the updated nestedArray.

/* Expected Output:
[
    ['cat', 'REPLACED', 'bird'],
    ['REPLACED', 'lizard', 'hamster'],
    ['horse', 'turtle', 'REPLACED']
    ]
*/

const targetPets = ['dog', 'fish', 'rabbit', 'snake'];
const petGroups = [
    ['cat', 'dog', 'bird'],
    ['fish', 'lizard', 'hamster'],
    ['horse', 'turtle', 'rabbit']
  ];

for(const petGroup of petGroups){
    for(let i =0; i < petGroup.length; i++){
        const pet = petGroup[i];

        for(const target of targetPets){
            if(pet === target){
                petGroup.splice(i, 1, `REPLACED`)
            }
        }
    }
}

console.log(petGroups);

// Write a nested loop to find and print elements in nestedArray that start with the same letter as any element in compareArray.

/* Expected Output:
apple
banana
cherry
date
*/

const fruitBaskets = [
    ['apple', 'banana', 'cherry'],
    ['date', 'elderberry', 'fig'],
    ['grape', 'honeydew', 'kiwi']
  ];
const exoticFruits = ['apricot', 'blueberry', 'citrus', 'dragonfruit'];

for (const fruitBasket of fruitBaskets){
    for (const fruit of fruitBasket){
        for (const exoticFruit of exoticFruits){
            if(fruit[0] === exoticFruit[0]){
                console.log(fruit);
            }
        }
    }
}