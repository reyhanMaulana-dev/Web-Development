const users = [
  {
    email: "john.doe@example.com",
    password: "asd",
  },
  {
    email: "jane.smith@example.com",
    password: "MyPassword@2024",
  },
  {
    email: "michael.brown@example.com",
    password: "Brownie#789",
  },
  {
    email : "qwe@q",
    password :"qwe",
  },
];

const loginForm = document.querySelector(`#login-form`);
const emailInput = loginForm.querySelector(`#login-email`);
const passwordInput = loginForm.querySelector(`#login-password`);

loginForm.addEventListener(`submit`, (event) =>{
  event.preventDefault();
    
  const emailInputValue = emailInput.value;
  const passwordInputValue = passwordInput.value;

  const userFound = users.find((user) => user.email === emailInputValue);
  
  if(!userFound){
    alert(`Email or Password is invalid`);
    return    
  }

  if(userFound.password !== passwordInputValue){
    alert(`Email or password is invalid`);
    return
  }

  alert(`login succes`)
  location.href = `https://vip.idlixofficialx.net/`;
})

