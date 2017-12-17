/*Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.*/

function booWho(bool) {
    // // Array of primitive types
    // var primitives = ['string', 'number', 'boolean', 'undefined', 'null', 'undefined'];
    // if (primitives.indexOf(typeof bool) !== -1) {
    //     return true;
    // }
    // else { return false }
    return typeof bool === 'number' && isFinite(bool);
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
