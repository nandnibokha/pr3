let no = 16461;
let sum = 0;
let temp;
let a;

temp = no;

while(no != 0){
    a = no % 10;
    sum = (sum * 10) + a;
    no = parseInt(no / 10);
}
if(temp == sum){
    document.querySelector('.palindrome').innerHTML = temp + " is a Palindrome";
}
else{
    document.querySelector('.palindrome').innerHTML = temp + " is not a Palindrome";
}