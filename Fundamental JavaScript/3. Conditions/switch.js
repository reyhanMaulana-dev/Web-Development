const food = `Orange Juice`;

switch(food){
    case `Ayam bakar`:
        console.log(`This is your ayam bakar`);
        break;
    case `Orange Juice`:
        console.log(`This is your orange juice`);
        break;
    case 1:
        console.log(`one`);
        break;
    default:
        console.log(`Your request is not available`);
}


let x = 0;
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}
console.log(text);