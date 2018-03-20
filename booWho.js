/*Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.*/

function booWho(bool) {
    return typeof bool === 'boolean';
}

// booWho(true) should return true.
console.log("booWho(true) should return true:", booWho(true));
// booWho(false) should return true.
console.log("booWho(false) should return true:", booWho(true));
// booWho([1, 2, 3]) should return false.
console.log("booWho([1, 2, 3]) should return false:", booWho([1, 2, 3]));
// booWho([].slice) should return false.
console.log("booWho([].slice) should return false:", booWho([].slice));
// booWho({ "a": 1 }) should return false.
console.log('booWho({ "a": 1 }) should return false:', booWho({ "a": 1 }));
// booWho(1) should return false.
console.log("booWho(1) should return false:", booWho(1));
