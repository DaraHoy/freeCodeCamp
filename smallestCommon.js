/*
  Find the smallest common multiple of the provided parameters that can 
  be evenly divided by both, as well as by all sequential numbers in the 
  range between these parameters.

  The range will be an array of two numbers that will not necessarily be in 
  numerical order.

  e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that 
  is evenly divisible by all numbers between 1 and 3.
*/

function smallestCommons(arr) {
  // Sort array from greater to lowest
  // This line of code was from Adam Doyle (http://github.com/Adoyle2014)
  arr.sort(function(a, b) {
      return b - a; //b - a is greater than 0, so sort b to an index lower than a, i.e. b comes first.
  });

  // Create new array and add all values from greater to smaller from the
  // original array.   
  let newArr = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
      newArr.push(i);
  };
  
  // Variables needed declared outside the loops.
  var quot = 0;
  var loop = 1;
  var n;
  
  // Run code while n is not the same as the array length.
  do {
    quot = newArr[0] * loop * newArr[1];
    for (n = 2; n < newArr.length; n++) {
      if (quot % newArr[n] !== 0) {
        break;
      }
    }
    loop++;
  } while (n !== newArr.length);

  return quot;
}


console.log(smallestCommons([1,5]));

// // arr = [a, b]
    // let a = arr[0];
    // let b = arr[1];
    // // variables for multiples
    // let mA = a;
    // let mB = b;
    // let multiple = false;
    // while(!multiple){
    //     if(a > b){
    //         mB+=b;
    //     }
    //     else if(b > a){
    //         mA+=a;
    //     }
        
    // }