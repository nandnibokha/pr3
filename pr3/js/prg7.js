let a = 277;
let temp = a;
let rev = 0;
let sumOfDigits = 0;

while(temp > 0){
    sumOfDigits = sumOfDigits + temp % 10;
    temp = temp 
    temp = (temp / 10) | 0; 
}

temp = sumOfDigits;

while(temp > 0){
    rev = rev * 10 + temp % 10;
    temp = temp 
    temp = (temp / 10) | 0; 
}
if(rev * sumOfDigits === a){
    document.write(a + "is a Magic Number...");
}
else{
    document.write(a + "is not a Magic Number...");
}