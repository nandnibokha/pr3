let i = 1;
let j = 1;
let k = '';

while(i <= 100){
    k = i + j;
    i = j;
    j = k;

    document.write(i + ' ');
}