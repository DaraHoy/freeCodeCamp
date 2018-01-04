/*Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.*/

function translatePigLatin(str) {
    // Reference first letter against vowels array
    var vowels = ["a", "e", "i", "o", "u"];
    var consonants = [];
    // If vowel is present as the first letter, return str+way
    if (vowels.indexOf(str[0]) !== -1) {
        return str + "way";
    }
    // Else if consonant is present as the first character we loop to find nearest vowel
    else {
        for (var i = 0; i < str.length;) {
            // If vowel is found
            if (vowels.indexOf(str[i]) !== -1) {
                // Join all found consonants & return new string
                consonants = consonants.join("");
                ``
                return str.substr(i) + consonants + "ay";
            }
            else {
                // Otherwise push letter to consonants array and incrememnt to next position
                consonants.push(str[i]);
                i++;
            }
        }
    }
}

//translatePigLatin("algorithm") should return "algorithmway".
console.log(translatePigLatin("algorithm"));
//translatePigLatin("california") should return "aliforniacay".
console.log(translatePigLatin("california"));
//translatePigLatin("glove") should return "oveglay".
console.log(translatePigLatin("glove"));
