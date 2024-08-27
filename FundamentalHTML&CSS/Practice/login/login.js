import { users } from "../../WeekendQuiz/database.js";

const loginForm = document.querySelector(`form`);
const emailInput = loginForm.querySelector(`#email-input`);
const passwordInput = loginForm.querySelector(`#password-input`);

loginForm.addEventListener(`submit`, (e)=>{
    e.preventDefault();
    
    const account = users.find((user) => user.email === emailInput.value);
    
    if(!account){
        alert(`email not found`);
        return;
    }
    
    if(account.password !== passwordInput.value){
        alert(`password is invalid`);
        return;
    }
    
    localStorage.setItem(`email`,account.email);
    window.location.replace(`../ecommerce/index.html`);
})