/*Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined. -done with group*/

//input - string of character"a-z"
//output - undefined |or| the missing letter
// single possible missing charater

//no special chararters
//no wrap around 'a to z'
//a! = A - false for computer
//case not important

// Example:
// input - "abce"
// output - "d"
// 1. First character of input
// 2. Check if next letter is next in alphabet
//       3. Check if another letter available
//        4. Go to next letter and repeat step 2
//    5. else
//      6. Return undefined
// 7. else
//       8. return expected character

function fearNotLetter(str) {
    // var firstChar = str[0]; //start with string index 0
    // console.log(firstChar.charCodeAt(0));
    // console.log("char code of a:", "a".charCodeAt(0));
    for (var i = 0; i < str.length - 1; i++) {
        if (str.charCodeAt(i + 1) == str.charCodeAt(i) + 1) { //string index 1 character code equals first character code + 1
            console.log("next char is next in alphabet");
        }
        else {
            console.log("next char is not expected char");
            return String.fromCharCode(str.charCodeAt(i) + 1);
        }
    }
    console.log("hello");
    return undefined;
}


//fearNotLetter("abce") should return "d".
console.log(fearNotLetter("ace"));
