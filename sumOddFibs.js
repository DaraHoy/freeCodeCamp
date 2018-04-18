/*
 Given a positive integer num, return the sum of all
 odd Fibonacci numbers that are less than or equal to num.

 The first two numbers in the Fibonacci sequence are 1 and 1.
 Every additional number in the sequence is the sum of the two previous numbers.
 The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

 For example, sumFibs(10) should return 10 because
 all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {
    //variables
    var previous = 0;
    var current = 1;
    var sum = 0;
    var fib = 1;
    // continue to next fibonacci in sequence
    while (fib <= num) {
        //incrememnt sum if sequence numbers are odd
        if (fib % 2 !== 0) {
            sum += fib;
        }
        fib = previous + current;
        previous = current;
        current = fib;
    }
    return sum;
}

console.log(sumFibs(1000));
