// Return an array consisting of the largest number from each provided sub-array.

function largestOfFour(arr) {
    var highestArr = [];
    //iterate through each group of numbers
    for (var group = 0; group < arr.length; group++) {
        var highestNum = 0;
        for (var number = 0; number < arr[group].length; number++) {
            //if number > highestNum, num = highestNum
            if (arr[group][number] > highestNum) { highestNum = arr[group][number] }
        }
        //push highestNum to highestArr
        highestArr.push(highestNum);
    }
    //return highestArray
    return highestArr;
}

console.log(largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]));
