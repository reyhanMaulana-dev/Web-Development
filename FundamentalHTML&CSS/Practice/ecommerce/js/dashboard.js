import { users } from "../../../WeekendQuiz/database.js";

document.addEventListener(`DOMContentLoaded`, () => {
    const account = users.find((user) => user.email === localStorage.getItem(`email`));
    
    // inilization
    const accountName = document.querySelector(`#account-name`);
    accountName.innerHTML = `${account.firstName}`
    
})

async function getAPI(category) {
    try {
        const link = `https://fakestoreapi.com/products/category/${category}`;
        const response = await fetch(link);

        if(!response.ok){
            throw new Error(response.statusText);
        }

        const products = await response.json();    
        return products;

    } catch (error) {
        console.log(error);
    }
}

const manClothings = await getAPI("men's clothing");
const womenClothings = await getAPI("women's clothing");
const mixClothings = [...manClothings, ...womenClothings]

const container = document.querySelector(`#fashion-container`)
const card = container.querySelector(`#card`);

container.innerHTML = ` `;

mixClothings.slice(0,3).forEach((clothing) => {
        const cloneCard = card.cloneNode(true);
    
        cloneCard.querySelector(`h4`).innerHTML = clothing.title;
        cloneCard.querySelector(`span`).innerHTML = clothing.price;
        cloneCard.querySelector(`img`).src = clothing.image;
    
        container.appendChild(cloneCard);
    });
    

// const cards = Array.from(container.querySelectorAll(`.box_main`));
// const container = document.querySelector("#main_slider");
    
// cards.forEach((card, i) =>{
//     if(!mixClothings[i]) return;

//     card.querySelector(`h4`).innerHTML = mixClothings[i].title;
//     card.querySelector(`span`).innerHTML = mixClothings[i].price;
//     card.querySelector(`img`).src = mixClothings[i].image;
// })




