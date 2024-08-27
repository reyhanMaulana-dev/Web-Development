document.querySelector(".jsFilter").addEventListener("click", function () {
  document.querySelector(".filter-menu").classList.toggle("active");
});

document.querySelector(".grid").addEventListener("click", function () {
  document.querySelector(".list").classList.remove("active");
  document.querySelector(".grid").classList.add("active");
  document.querySelector(".products-area-wrapper").classList.add("gridView");
  document
    .querySelector(".products-area-wrapper")
    .classList.remove("tableView");
});

document.querySelector(".list").addEventListener("click", function () {
  document.querySelector(".list").classList.add("active");
  document.querySelector(".grid").classList.remove("active");
  document.querySelector(".products-area-wrapper").classList.remove("gridView");
  document.querySelector(".products-area-wrapper").classList.add("tableView");
});

var modeSwitch = document.querySelector('.mode-switch');
modeSwitch.addEventListener('click', function () {                      document.documentElement.classList.toggle('light');
 modeSwitch.classList.toggle('active');
});


import { users } from "./database.js";

const user = users.find((u) => u.email === localStorage.getItem(`email`));
const accountName = document.querySelector(`.account-info-name`);

accountName.innerHTML = `${user.firstName} ${user.lastName}`;

const logout = document.querySelector(`#logout-button`);

logout.addEventListener(`click`, () =>{
  localStorage.clear();
  window.location.replace(`login.html`);
})
