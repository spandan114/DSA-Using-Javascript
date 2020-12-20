//Auxilary space complexity (space required by the algorithm)
//Rules of thumb
//+ most primitive (boolian number undefined null ) are constants space.
//+ strings required O(n) space (n=string length)
//+ refferance types O(n) ex array,linklist etc

function sum(arr) {
    let total = 0;
    for (let i = 1; i <= arr.length; i++) {
      total += arr[i];
    }
    return total;
  }

function double(arr) {
    let newArr = [];
    for (let i = 1; i <= arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr;
  }