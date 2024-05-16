let str = '';

for (let i = 1; i <=10; i++){
    str += i;

    if(i < 10){
        str += " - ";
    }
}
document.write(str);