
// Strict Comparison
// Check Value and its Data Types
if(5 === '5'){
    console.log(`A is equal to B`);
}else{
    console.log(`A is not equal to B`);
}

// Casual Comprasion
// Check Value only

if(5 =='5'){
    console.log(`A is equal to B`);
}else{
    console.log(`A is not equal to B`);
}

// Nested If-Else
// Use Case Login Feature

const email = `reyhanmaulana@gmail.com`;
const password = 1234;

const emailInput = `reyhanmaulana@gmail.com`;
const passwordInput = 1234;

if(email === emailInput){
    if(password === passwordInput){
        console.log(`login succesful`);
    }else{
        console.log(`password is invalid`);
    }
}else{
    console.log(`email is invalid`);
}

// AND Operator
if(email === emailInput && password === passwordInput){
    console.log(`login succesful`);
}else{
    console.log(`email or password is invalid`)
}

// OR operator
if (1 === 3 || 1 === 2 || 1 === 4 || 1 === 5 || 1 === 1) {
    console.log(true);
  } else {
    console.log(false);
  }
  