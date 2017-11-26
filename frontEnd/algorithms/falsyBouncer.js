// Remove all falsy values from an array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.


function bouncer(arr) {
    // Don't show a false ID to this bouncer.

    var bounceArr = arr.filter(function(item, index, arr) {
        return item; //returns only items that returns true
    })
    return bounceArr;
}

console.log(bouncer([7, "ate", "", false, 9]));
