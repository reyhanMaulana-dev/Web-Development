import { users } from "../../../WeekendQuiz/database.js";

const loginForm = document.querySelector("form");
const email = loginForm.querySelector("#email");
const password = loginForm.querySelector("#password");

loginForm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const account = users.find((user) => user.email === email.value);

    if(!account){
        alert(`email is invalid`);
        return;
    }

    if(account.password !== password.value){
        alert(`password is invalid`);
        return;
    }

    localStorage.setItem("email", account.email);
    window.location.href = "home-youtube.html";
})