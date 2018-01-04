//You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
    // Remove all the values
    var args = [...arguments];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 1; j < args.length; j++) {
            if (arr[i] === args[j]) {
                delete arr[i];
            }
        }
    }
    return arr.filter(Boolean);
}

//destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
//destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
