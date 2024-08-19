const inventory = [
    {
        id : 1,
        nama : `Healing Potion`,
        buyPrice : 200,
        sellprice : 100,
        amount : 10,
    },
    {
        id: 2,
        nama: 'Mana Potion',
        buyPrice: 300,
        sellPrice: 150,
        amount: 5
      }
];

for(const item of inventory){
    for (const key in item) {
        if (Object.prototype.hasOwnProperty.call(item, key)) {
            const element = item[key];
            if(key === `nama`){
                console.log(`list item : ${item[key]}`);
                
            }
            
        }
    }
}

const newItem = {
    id : 3,
    nama : 'Town Scroll Portal',
    buyPrice: 1000,
    sellPrice: 500,
    amount: 2
};

inventory.push(newItem);
console.log(inventory);

const newItemWithoutId = {
    name: 'Katana',
    buyPrice: 5000,
    sellPrice: 2500,
    amount: 1
};

newItemWithoutId.id = inventory.at(-1).id + 1;
inventory.push(newItemWithoutId)
console.log(inventory);

/*
  Find an item
*/

console.log('________________');

const itemUsed = 'Healing Potion';

// Ver 1
let itemFound;

for (const item of inventory) {
  if (item.nama === itemUsed) {
    itemFound = item;
  }
}

console.log(itemFound, 'Ver 1');

// Ver 2
const selectedItem = inventory.find(item => item.nama === itemUsed);
console.log(selectedItem, 'Ver 2');