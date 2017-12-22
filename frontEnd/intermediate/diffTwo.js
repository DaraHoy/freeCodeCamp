/*Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.*/

/*
loop through items of arr1 and check for occurence in arr 2 abd vice versa
return array of differences


function diffArray(arr1, arr2) {
    var newArr = arr1.concat(arr2);
    // newArr.push(arr1.filter(el => arr2.indexOf(el) == -1))
    return newArr.filter(el => arr1.indexOf(el) == -1 && arr2.indexOf(el) !== -1 ||
        arr2.indexOf(el) == -1 && arr1.indexOf(el) !== -1)
}
*/

//Single line version, for fun
var diffArray = (arr1, arr2) => arr1.concat(arr2).filter(el => arr1.indexOf(el) == -1 && arr2.indexOf(el) !== -1 || arr2.indexOf(el) == -1 && arr1.indexOf(el) !== -1)

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
//["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"].
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))
//["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"].
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))
