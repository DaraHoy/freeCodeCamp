// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

function titleCase(str) {
    var strSplit = str.split(' '); //seperate words
    var newStr = [];
    for (var wordIndex = 0; wordIndex < strSplit.length; wordIndex++) {
        var newWord = [];
        for (var letterIndex = 0; letterIndex < strSplit[wordIndex].length; letterIndex++) {
            // if word is a single letter uppercase and push + ' '
            if (strSplit[wordIndex].length == 1) {
                newWord.push(strSplit[wordIndex].toUpperCase() + ' ');
            }
            // if first capitilize push to new word
            else if (letterIndex == 0) { newWord.push(strSplit[wordIndex][letterIndex].toUpperCase()); }
            // if last [i] & last [j] lowercase and push
            else if (letterIndex == strSplit[wordIndex].length - 1 && wordIndex == strSplit.length - 1) {
                newWord.push(strSplit[wordIndex][letterIndex].toLowerCase());
            }
            // if last [j] lowercase and push with + ' '
            else if (letterIndex == strSplit[wordIndex].length - 1) {
                newWord.push(strSplit[wordIndex][letterIndex].toLowerCase() + ' ');
            }
            else { // else lowercase and push
                newWord.push(strSplit[wordIndex][letterIndex].toLowerCase());
            }
        }
        // join new word and push to newStr
        newStr.push(newWord.join(''));
    }
    return newStr.join('');
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
