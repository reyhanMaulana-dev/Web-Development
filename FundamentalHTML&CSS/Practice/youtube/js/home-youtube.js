import { users } from "../../../WeekendQuiz/database.js";

document.addEventListener("DOMContentLoaded", () => {
    const account = users.find((user) => user.email === localStorage.getItem("email"));
    
    // inilization
    const accountName = document.querySelector("#account-name");
    accountName.innerHTML = `${account.firstName} ${account.lastName}`;
})