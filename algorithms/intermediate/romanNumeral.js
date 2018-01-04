/*Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.*/

var convertToRoman = function(num) {

    var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNumeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    var romanized = '';

    for (var index = 0; index < decimalValue.length; index++) {
        while (decimalValue[index] <= num) {
            romanized += romanNumeral[index];
            num -= decimalValue[index];
        }
    }

    return romanized;
}

//convertToRoman(2) should return "II".
console.log(convertToRoman(2))
//convertToRoman(12) should return "XII".
console.log(convertToRoman(12))
//convertToRoman(68) should return "LXVIII"
console.log(convertToRoman(68))
//convertToRoman(649) should return "DCXLIX"
console.log(convertToRoman(649))
//convertToRoman(3999) should return "MMMCMXCIX"
console.log(convertToRoman(3999))
