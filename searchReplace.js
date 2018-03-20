/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the w
*/

function myReplace(str, before, after) {
  //helper function to check casing
  const _checkCase = word => {
    regex = new RegExp(/[A-Z]/);
    return regex.test(word);
  };

  if (_checkCase(before)) {
    return str.split("").replace(str[0], str[0].toUpperCase);
  }
}
console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped")
);
