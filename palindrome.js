/* Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way
both forward and backward, ignoring punctuation, case, and spacing. */


function isSpecial(char) {
    var specialCharacters = /[^a-zA-Z0-9]/;
    return specialCharacters.test(char);
}

function palindrome(str) {
    var firstPOS = 0;
    var lastPOS = str.length - 1;
    while (firstPOS < lastPOS) {
        if (isSpecial(str[firstPOS])) {
            firstPOS++;
        }
        else if (isSpecial(str[lastPOS])) {
            lastPOS--;
        }
        else if (str[firstPOS].toLowerCase() != str[lastPOS].toLowerCase()) {
            return false;
        }
        else {
            firstPOS++;
            lastPOS--;
        }
    }
    return true;
}

console.log("palindrome('race car') should return true.");
console.log(palindrome("race car"));
