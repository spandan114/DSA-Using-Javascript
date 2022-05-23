// Rotation of array or Pivot
/**
 q) Find pivot Index of rotated array [12,16,18,24,25,5,8,10]

**/

const rotationBinarySearchHelper = (array,min,max) =>{
    var mid = Math.floor((min+max)/2)
    console.log({min,mid,max})

    // CASE 1
    if(max < min){
        return 'NO MATCH'
    }
    // CASE 2
    if(array[mid+1] < array[mid]){
        return array[mid+1]
    }
     // CASE 3
    if(array[mid] < array[mid-1]){
         return array[mid]
    }
   
    //Iterate
    if(array[max] > array[mid]){
        return rotationBinarySearchHelper(array,min,mid - 1)
    }else{
        return rotationBinarySearchHelper(array,mid+1,max)
    } 
}

const rotationBinarySearch = (array) =>{
    var min = 0;
    var max = array.length - 1;
    return rotationBinarySearchHelper(array,min,max)
}

console.log(rotationBinarySearch([12,16,18,24,25,5,8,10]))

/**
 * q) Search in Rotated Sorted Array 
 * 
 **/