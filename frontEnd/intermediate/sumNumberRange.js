// We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

// The lowest number will not always come first.

function sumAll(arr) {
    // fill range with values between arr[0] & arr[1]
    // Math.min/max takes number arguments and returns the number that is lowest/highest respectively
    var range = [Math.min(arr[0], arr[1])];
    for (var i = range[0]; i !== Math.max(arr[0], arr[1]);) {
        i++;
        range.push(i);
    }
    return range.reduce(function(sum, num) {
        return sum + num;
    }, 0);
}

//sumAll([1, 4]) should return 10.
console.log(sumAll([1, 4]))
//sumAll([4, 1]) should return 10.
console.log(sumAll([4, 1]))
//sumAll([5, 10]) should return 45.
console.log(sumAll([5, 10]))
