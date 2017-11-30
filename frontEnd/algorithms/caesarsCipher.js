// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) { // LBH QVQ VG!

    var alpha = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];

    // str.charCodeAt(0) // returns charCode
    // String.fromCharCode(65) // A
    // console.log(str.charCodeAt(0), String.fromCharCode(90))

    for (var i = 0; i < str.length; i++) {
        if (alpha.indexOf(str.charCodeAt([i])) !== -1) {
            str[i] = String.fromCharCode(str.charCodeAt(i) + 13);
        }
        console.log(str)
    }
    return str
}

// Change the inputs below to test
// rot13("SERR PBQR PNZC") should decode to "FREE CODE CAMP"
console.log(rot13("SERR PBQR PNZC"));
