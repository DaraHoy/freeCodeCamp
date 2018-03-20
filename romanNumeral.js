//Convert the given number into a roman numeral.

function convertToRoman(num) {
    const romanMap = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let romanNumeral = "";

    while(num > 0){
        for(char in romanMap){
            if (num >= romanMap[char]){
                romanNumeral += char;
                num -= romanMap[char];
                break;
            }
        }
    }

    return romanNumeral;
   }