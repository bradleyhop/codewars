/*
 *6kyu
 *Is Prime
 *
 *Define a function isPrime/is_prime() that takes one integer argument and
 *returns true/True or false/False depending on if the integer is a prime.
 *
 *Per Wikipedia, a prime number (or a prime) is a natural number greater than 1
 *that has no positive divisors other than 1 and itself.
 *
 *Example
 *bool isPrime(5) = return true
 *
 *Assumptions
 *You can assume you will be given an integer input.
 *You can not assume that the integer will be only positive. You may be given
 *negative numbers as well (or 0).
 */

function isPrime(num) {
    let numArray = [];

    // creates array of odd numbers up to num to test
    for (let i = 3; i <= num; i+= 2)
        numArray.push(i);

    if (num % 2 === 0 && num !== 2 || num % 5 === 0 && num !== 5) {
        console.log("div by 2 or 5");
        return false;
    } else if ([-1, 0, 1].includes(num)){
        return false;
    } else if ([2, 3, 5, 7].includes(num)) {
        return true;
    } else {
        for (let x = 0; x < numArray.length - 1; x++) {
            // mod operator shows even division
            if (num % numArray[x] === 0) {
                return false;
            }
        }
    }

    return true;
}

console.log(isPrime(4)); // false
console.log(isPrime(5)); // true
console.log(isPrime(75)); // false
console.log(isPrime(41)); // true
