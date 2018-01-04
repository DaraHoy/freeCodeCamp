/* Return the length of the longest word in the provided sentence.

Your response should be a number. */

function findLongestWord(str) {

    var strArray = str.split(' ');
    var longest = 0; // save longest word to variable
    for (var i = 0; i < strArray.length; i++) { // compare items of str to find longest word
        if (strArray[i].length > longest) {
            longest = strArray[i].length;
        }
    }
    return longest; // return longest word variable
}




console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("What if we try a super-long word such as otorhinolaryngology"));
console.log(findLongestWord("What is the average airspeed velocity of an unladen swallow"));
