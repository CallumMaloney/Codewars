/*

Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11

*/

const binaryArrayToNumber = arr => {
    arr = arr.reverse()
    let sum = 0
    let intArr = []
    for (let i = 0; i < arr.length; i++){
        if(arr[i]==0){
  
            continue
        }
      sum += 2 ** i
      console.log(sum)
      
    }return sum
  };