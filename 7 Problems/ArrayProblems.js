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

 const searchRotatedArrayHelper = (arr,elem) =>{
    var min = 0;
    var max = arr.length - 1;
    var mid = Math.floor((min + max) / 2);
    
    if(min > max){
        return "NO MATCH"
    }
    
    while(arr[mid] !== elem && min <= max) {

    console.log({min,mid,max})

        if(arr[min] < arr[mid] && elem <= arr[mid] && elem >= arr[min]){
            max = mid - 1;
        } else if(arr[max] > arr[mid] && elem >= arr[mid] && elem <= arr[max]){
            min = mid + 1;
        }else if(arr[max] < arr[mid]){
            //pivot array found
            min = mid + 1;
        }else if(arr[min] > arr[mid]){
            //pivot array found
            max = mid - 1;
        }
        var mid = Math.floor((min + max) / 2);
    }
    
    if(arr[mid] === elem){
        return mid;
    }

    return -1;
}

console.log(searchRotatedArrayHelper([12,16,18,24,25,26,27,5,8,10],24))

/**
 * q) find the common element of 3 array
 *    var arr1 = [1,3,5,7,8]
 *    var arr2 = [4,5,6,9,10]
 *    var arr3 = [5,11,12,13]
 **/

 const findCommonElem = (arr1,arr2,arr3) =>{
    var p1 = 0;
    var p2 = 0;
    var p3 = 0;

    while(p1 < arr1.length && p2 < arr2.length && p3 < arr3.length){
        
        console.log({p1:arr1[p1],p2:arr2[p2],p3:arr3[p3]})
        
        if(arr1[p1] == arr2[p2] && arr2[p2] == arr3[p3] && arr3[p3] == arr1[p1]){
            return arr1[p1]
        }else if(arr1[p1] <= arr2[p2] && arr1[p1] <= arr3[p3]){
            p1 = p1+1
        }else if(arr2[p2] <= arr1[p1] && arr2[p2] <= arr3[p3]){
            p2 = p2+1
        }else if(arr3[p3] <= arr1[p1] && arr3[p3] <= arr2[p2]){
            p3 = p3+1
        }
    }

    return "No match"

}

var arr1 = [1,3,5,7,8]
var arr2 = [4,5,6,9,10]
var arr3 = [5,11,12,13]

console.log(findCommonElem(arr1,arr2,arr3))


/**
 *  Target triplet problem
 *  array = [1,2,3,4,5,6,7,8] 
 *  triplet = 8
 */

 const findTriplet = (array,triplet) =>{
    for(var i=0;i<=array.length-2;i++){
        var left = i+1;
        var right = array.length - 1
        
        while(left < right){
            var res = array[i]+array[left]+array[right]
            console.log(res)
            if(res === triplet){
                return [array[i],array[left],array[right]]
            }else if(res < triplet){
                left = left+1
            }else if(res >  triplet){
                right = right-1
            }
        }
    }
 
    return "NO MATCH"
 }
 
 console.log(findTriplet([1,2,3,4,5,6,7,8],8))