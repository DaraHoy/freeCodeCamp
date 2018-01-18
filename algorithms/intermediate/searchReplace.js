/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the w
*/

function myReplace(str, before, after) {
    var b4 = new RegExp(before, 'i');
    return str.replace(b4, "#
    $1#");
}
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"))
//should return "Let us go to the mall".
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))
//should return "He is Sitting on the couch".
