function mutation(arr) {
    var a = arr[0].toLowerCase().split("");
    var aCheck = arr[1].toLowerCase().split("");
    for (var i = 0; i < aCheck.length; i++) {
        if (a.indexOf(aCheck[i]) === -1) {
            console.log("not here")
            return false;
        }
        else {
            console.log("here")
            return true;
        }
    }
}

//mutation(["hello", "hey"]) should return false.
// console.log(mutation(["hello", "hey"]));
//mutation(["hello", "Hello"]) should return tru
console.log(mutation(["hello", "Hello"]));
