const no = 15;

do{
    if(no % 3 === 0 && no % 5 === 0){
        document.write('FizzBuzz');
    }
    else if(no % 3 === 0){
        document.write('Fizz');
    }
    else if(no % 5 === 0){
        document.write('Buzz');
    }
    else{
        document.write(no);
    }
    no++;
}
while(no<=100)