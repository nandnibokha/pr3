let sum = 0;
let number = 370;

let temp = number;
while (temp > 0) {

    let remainder = temp % 10;
    sum += remainder * remainder * remainder;

    temp = parseInt(temp / 10);
}
if (sum == number) {
    document.getElementById("armstrong").innerHTML = `${number} is an Armstrong number.`
}
else {
    document.getElementById("armstrong").innerHTML = `${number} is not Armstrong number.`
}