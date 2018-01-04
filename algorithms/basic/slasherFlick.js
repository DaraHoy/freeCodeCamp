// Return the remaining elements of an array after chopping off n elements from the head.

// The head means the beginning of the array, or the zeroth index.

function slasher(arr, howMany) {
    // it doesn't always pay to be first
    var newArr = [];
    newArr = arr.slice(howMany);
    return newArr;
}

//slasher([1, 2, 3], 2) should return [3]
console.log(slasher([1, 2, 3], 2));
//slasher([1, 2, 3], 9) should return []
console.log(slasher([1, 2, 3], 9));

