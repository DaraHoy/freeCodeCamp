/*Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

Return the rest of the array, otherwise return an empty array.*/

function dropElements(arr, func) {
    // Drop them elements.
    for (var i = 0; i < arr.length; i++) {
        if (!func(arr[i])) { //if func returns true false for item it is dropped from arr
            arr.shift();
            i--; //i is decremented to check new arr[0]
        }
        else {
            return arr; //if func arr[i] returns true, arr is returned
        }
    }
    return arr; // returns arr if all items return false
}
//dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].
console.log(dropElements([1, 2, 3, 4], function(n) { return n >= 3; }));
//dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1]
console.log(dropElements([0, 1, 0, 1], function(n) { return n === 1; }));
//dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].
console.log(dropElements([1, 2, 3, 4], function(n) { return n > 5; }))
