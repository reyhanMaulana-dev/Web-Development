import { users } from "./database.js";

const loginForm = document.querySelector(`#login-form`);
const usernameInput = loginForm.querySelector(`#username`);
const passwordInput = loginForm.querySelector(`#password`);

loginForm.addEventListener(`submit`, (e) => {
  e.preventDefault();

  const getUser = users.find((user) => user.email === usernameInput.value);

  if (!getUser) {
    alert(`email not found`);
    return;
  }

  if (getUser.password !== passwordInput.value) {
    alert(`password is invalid`);
    return;
  }

  localStorage.setItem(`email`, getUser.email);
  window.location.href = `dashboard.html`;
});
