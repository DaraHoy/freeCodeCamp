/*Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

An integer is prime if it is not divisible by any prime less than or equal to its square root
*/
function isPrime(num) {
    for (var n = 2; n < num; n++) {
        if (num % n == 0) {
            return false // number is NOT prime
        }
    }
    return true
}

function sumPrimes(num) {
    //Find prime numbers for range: 2 through input
    //num = 2
    //total = 0
    var total = 0;
    for (var n = 2; n <= num; n++) {
        if (isPrime(n)) { //Check if num is prime
            total += n; //Add num to running total
        }
    }
    return total;
}

console.log("sumPrimes(977) should return 73156:", sumPrimes(977))
console.log("sumPrimes(10) should return 17:", sumPrimes(10))
