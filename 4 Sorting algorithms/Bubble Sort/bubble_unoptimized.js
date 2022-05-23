// UN-OPTIMIZED VERSION OF BUBBLE SORT
const bubbleSort = (array)=>{
  for(var i=0;i<array.length;i++){
      for(var j=0;j< array.length;j++){
          if(array[i] < array[j]){
              var temp = array[i];
              array[i]=array[j]
              array[j]=temp
          }
      }
  }
  return array
}


// OPTIMIZED VERSION OF BUBBLE SORT
// ES2015 Version
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);