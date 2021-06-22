function countPrimeNumbers () {
    function isPrime (num) {
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
    return true;
}

function display (n) {
    let arr = [2];
    for (var i = 3; i < n; i += 2) {
        if (isPrime(i)) {
            arr.push(i);
        }
    }
    console.log(arr);
}
display(100);
}

const timeBefore = performance.now();
setTimeout(function () {
    for (let i = 0; i < 100; i++) {
        countPrimeNumbers();
    }
});

const timeAfter = performance.now();
console.log(`Execution time of calculating prime numbers 100 times was ${timeAfter - timeBefore} milliseconds.`);