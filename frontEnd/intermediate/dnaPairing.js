/*The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array. - done with group*/

function pairElement(str) {
    var charArray = str.split("");
    console.log(charArray);

    var pairArray = [];
    console.log(pairArray);
    for (var i = 0; i < charArray.length; i++) {
        if (charArray[i] === "G") {
            pairArray.push(["G", "C"]);
            console.log(pairArray);
        }
        else if (charArray[i] == "C") {
            pairArray.push(["C", "G"]);
            console.log(pairArray);
        }
        else if (charArray[i] === "A") {
            pairArray.push(["A", "T"]);
            console.log(pairArray);
        }
        else if (charArray[i] === "T") {
            pairArray.push(["T", "A"]);
            console.log(pairArray);
        }
    }
    return pairArray;
}
