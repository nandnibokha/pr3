let n = 15;

    for (let current = 1; current <= n; current++) {
        
        let Digits = 0;
        let tempnum = current;
        let temp = current;
        let sum = 0;

        while (tempnum > 0) {
            tempnum = (tempnum - (tempnum % 10)) / 10;
            Digits++;
        }

        while (temp > 0) {
            let digit = temp % 10;
            let product = 1;

            for (let i = 0; i < Digits; i++) {
                product *= digit;
            }

            sum += product;
            temp = (temp - digit) / 10;
        }

        if (sum == current) {
        document.querySelector('.disarium').innerHTML = " "+ current;
        }
    }