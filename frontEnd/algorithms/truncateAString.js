// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

// Note that inserting the three dots to the end will add to the string length.

// However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

function truncateString(str, num) {
    var truncated;
    if (str.length <= num) {
        return str;
    }
    else if (num <= 3) {
        truncated = str.split("").splice(0, num).join("") + "...";
        return truncated;
    }
    else if (str.length + 3 > num) {
        truncated = str.split("").splice(0, num - 3).join("") + "...";
        return truncated;
    }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11)); //should return "A-tisket...".
console.log(truncateString("Absolutely Longer", 2)); //should return "Ab...".
console.log(truncateString("A-", 1)); //should return "A...".
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)) //should return "A-tisket a-tasket A green and yellow basket".
