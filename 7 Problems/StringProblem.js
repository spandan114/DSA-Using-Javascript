/**
 * Reverse a string
 */

 const strRotate = (str) =>{
    var p1 = 0
    var p2 = str.length - 1
    
    var newStr = ""
    
    for(p2;p2 >= p1; p2--){
        newStr += str[p2]
    }
    return newStr
}

console.log(strRotate('olleh'))


/**
 *  Word rotation problem
 */

 const wordRotation = (sentence) =>{
    var array = sentence.split(' ')
    return array.reverse().join(' ')
}

console.log(wordRotation('i am good'))

/**
 *  Palindrome problem 
 */

 function palindrome(str){
    var reverse = [];
    for(var i=str.length-1;i >= 0;i--){
        reverse.push(str[i])
    }
    if(str === reverse.join('')){
        return 'PALINDROME'
    }else{
        return 'NOT PALINDROME'
    }
}

console.log(palindrome('wow'))