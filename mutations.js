// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

function mutation(arr) {
    var str = arr[0].toLowerCase();
    var charChk = arr[1].toLowerCase();
    for (var pos = 0; pos <= charChk.length;) {
        if (str.indexOf(charChk) !== -1) { // Checks whether the entirety of charChk exist as is in str
            return true
        }
        else if (str.indexOf(charChk[pos]) !== -1) { //Checks for occurances for each index individually, only incrementing to the next position if an occurance is found
            pos++ // Only incrememnts if an occurance is found
        }
        else if (pos == charChk.length) {
            return true //If the position reaches the full length arr[1] then an occurance of all items were found and a true statement is returned
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
