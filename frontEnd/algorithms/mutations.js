// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

function mutation(arr) {
    var str = arr[0].toLowerCase();
    var charChk = arr[1].toLowerCase();
    for (var pos = 0; pos <= charChk.length;) {
        if (str.indexOf(charChk) !== -1) {
            return true
        }
        else if (str.indexOf(charChk[pos]) !== -1) {
            pos++
        }
        else if (pos == charChk.length) {
            return true
        }
        else {
            return false
        }
    }
}

//mutation(["hello", "hey"]) should return false.
console.log(mutation(["hello", "hey"]));
//mutation(["hello", "Hello"]) should return true.
console.log(mutation(["hello", "Hello"]));
//mutation(["Mary", "Army"]) should return true.
console.log(mutation(["Mary", "Aarmy"]));
//mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
