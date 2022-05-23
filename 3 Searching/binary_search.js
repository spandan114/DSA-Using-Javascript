// Original Solution
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle;
    }
    return -1;
}

// Refactored Version
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    while(arr[middle] !== elem && start <= end) {
        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

binarySearch([2,5,6,9,13,15,28,30], 103)

// Recursion version
function binarySearchHelper(arr,start,end,elem){
    console.log(arr,start,end,elem)
    middle = Math.floor((start + end) / 2);
    if(arr[middle] === elem){
        return middle
    }else if(elem < arr[middle]){
        var end = middle - 1;
        return binarySearchHelper(arr,start,end,elem)
    }else {
        var start = middle + 1;
        return binarySearchHelper(arr,start,end,elem)
    }
}

function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    return binarySearchHelper(arr,start,end,elem)
}

console.log(binarySearch([2,5,6,9,13,15,17,20,24,28,29,30], 28))