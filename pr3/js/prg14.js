let str = "";
let row = 5;
let n = 1;

for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= i; j++) {
        str += n + " ";
        n++;
    }
    str += "<br>";
}
document.getElementById("pattern").innerHTML = str