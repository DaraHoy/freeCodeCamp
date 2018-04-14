/*Write a function that takes two or more argumentsays and returns a new argumentsay of unique values in the order of the original provided argumentsays.

In other words, all values present from all argumentsays should be included in their original order, but with no duplicates in the final argumentsay.

The unique numbers should be sorted by their original order, but the final argumentsay should not be sorted in numerical order.
*/

function uniteUnique(arr) {

    //create new array
    var union = [];
    //look at each sub array
    for (var sub = 0; sub < arguments.length; sub++) {
        //looks through sub array for new elements to be added
        for (var item = 0; item < arguments[sub].length; item++) {
            //checks union array if element exist
            if (union.indexOf(arguments[sub][item]) == -1) {
                union.push(arguments[sub][item]);
            }
        }
    }
    return union;
}
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
