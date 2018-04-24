/*
* Convert a string to spinal case. Spinal case is all-lowercase-words
* -joined-by-dashes.
*/

function spinalCase(str) {
    //regex to match all whitespace + underscores
    var regex = /\s+|_+/g;
    
    //replace all lower-uppercase with lower-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    
    //return str replacing all spaces with dashes
    return str.replace(regex, '-').toLowerCase();
}

console.log(spinalCase('ThisIsSpinalTap'));