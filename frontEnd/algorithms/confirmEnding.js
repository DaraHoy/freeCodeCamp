// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
    // split string
    var strArray = str.split(' ');
    console.log(strArray)
    //put last item of str array into var last
    var last = strArray[strArray.length - 1];
    // if last == target return true
    if (last == target) {
        return true

    }
    // else return false
    else { return false }
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
console.log(confirmEnding("He has to give me a new name", "name"));
