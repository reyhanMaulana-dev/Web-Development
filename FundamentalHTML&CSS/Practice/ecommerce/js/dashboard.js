import { users } from "../../../WeekendQuiz/database.js";

const account = users.find((user) => user.email === localStorage.getItem(`email`));

const accountName = document.querySelector(`#account-name`);
accountName.innerHTML = `${account.firstName}`



