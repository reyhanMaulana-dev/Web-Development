import { users } from "../../../WeekendQuiz/database.js";

document.addEventListener(`DOMContentLoaded`, () => {
    const account = users.find((user) => user.email === localStorage.getItem(`email`));
    
    // inilization
    const accountName = document.querySelector(`#account-name`);
    accountName.innerHTML = `${account.firstName}`
    
    // render dashboard
    renderDashboard()
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
        throw error
    }
}

const renderCard = (cards, product) =>{
    cards.forEach((card, i) => {
        if(!product[i]) return;
        card.querySelector(`h4`).innerHTML = product[i].title;
        card.querySelector(`span`).innerHTML = product[i].price;
        card.querySelector(`img`).src = product[i].image;
    });
}


const renderDashboard = async () => {
    try {
        //-- fashion section 
        const manClothings = await getAPI("men's clothing");
        const womenClothings = await getAPI("women's clothing");
        const mixClothings = [...manClothings, ...womenClothings];
    
        const fashionCards = Array.from(document.querySelector(`#main_slider`).querySelectorAll(`.box_main`));
        renderCard(fashionCards, mixClothings);
        
        //-- electronic section
        const electronics = await getAPI("electronics");
        const electronicCards = Array.from(document.querySelector(`#electronic_main_slider`).querySelectorAll(`.box_main`));
        renderCard(electronicCards, electronics);

        //-- jewelery section
        const jewelerys = await getAPI("jewelery");
        console.log(jewelerys);
        
        const jeweleryCards = Array.from(document.querySelector(`#jewellery_main_slider`).querySelectorAll(`.box_main`));
        console.log(jeweleryCards);
        
        renderCard(jeweleryCards, jewelerys);

    } catch (error) {
        console.log(error);
    }
}

// const manClothings = await getAPI("men's clothing");
// const womenClothings = await getAPI("women's clothing");
// const mixClothings = [...manClothings, ...womenClothings]

// const container = document.querySelector(`#fashion-container`)
// const card = container.querySelector(`#card`);

// container.innerHTML = ` `;

// mixClothings.slice(0,3).forEach((clothing) => {
//         const cloneCard = card.cloneNode(true);
    
//         cloneCard.querySelector(`h4`).innerHTML = clothing.title;
//         cloneCard.querySelector(`span`).innerHTML = clothing.price;
//         cloneCard.querySelector(`img`).src = clothing.image;
    
//         container.appendChild(cloneCard);
//     });
    

// const container = document.querySelector("#main_slider");
// const cards = Array.from(container.querySelectorAll(`.box_main`));
    
// cards.forEach((card, i) =>{
//     if(!mixClothings[i]) return;

//     card.querySelector(`h4`).innerHTML = mixClothings[i].title;
//     card.querySelector(`span`).innerHTML = mixClothings[i].price;
//     card.querySelector(`img`).src = mixClothings[i].image;
// })




