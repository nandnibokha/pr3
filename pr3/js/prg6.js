let a = 10;
let i = 1;
let no = 0;

while(i <= a){

    if(a % i == 0){

        no++;
    }
    i++;
}
if(no == 2){
    document.write(a + " is a prime number");
}
else{
    document.write(a + " is not a prime number");
}