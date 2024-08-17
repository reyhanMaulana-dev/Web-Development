let findingNumber = true;
let number = 0;

while(findingNumber){
    number++;
    console.log(number);
    if(number === 20){
        findingNumber = false;
        console.log(`Number Found`);
    }
}