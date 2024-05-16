let sum = 0;

for (let i = 1; i <= 10; i++){
    let value = i * i;
    sum += value;

    if (i < 10){
        document.write(value + " + ");
    }
    else{
        document.write(value + " = " + sum);
    }
}