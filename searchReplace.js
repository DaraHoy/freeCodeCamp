/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the w
*/

function myReplace(str, before, after) {
  //Declare variable to hold regExp
  var match;

  //Checks casing and change after variable to match
  if (before[0] === before[0].toUpperCase()) {
    after = after.split('');
    after[0] = after[0].toUpperCase();
    after = after.join('');
  }
  //Builds new regExp to match, case insensitive flag is used as an option
  match = new RegExp(before, "i");

  //returns string with the replacment
  return str.replace(match, after);
}
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

// var arr = str.split(" ");

// for (var i = 0; i < arr.length; i++) {

//   if (arr[i] === before) {
//     arr[i] = after;
//   }
// }
// return arr.join(" ");
