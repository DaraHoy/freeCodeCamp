/* Reverse a String
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.*/

function reverseString(str) {
  str = str.split("");
  str = str.reverse();
  str = str.join("");
  return str;
}

console.log('results of reverseString("hello")');
console.log(reverseString("hello"));
console.log('results of reverseString("Howdy")');
console.log(reverseString("Howdy"));
console.log('results of reverseString("Greetings from Earth")');
console.log(reverseString("Greetings from Earth"));