/*

Task
You will be given an array of numbers. You have to sort the odd numbers in ascending 
order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

PLAN -

-Make 2 empty array variables called oddNums and oddNumIndex
    - oddNums to store odd numbers in the original array
    - oddNumIndex to store the index of odd numbers in the original array

- Make a for loop that iterates through array.length

- Within for loop, make an if statement.
    - Condition being if the absolute value of array[i] is even

- push array[i] to oddNum list and push i to oddNumIndex

-use the .sort() method on oddNums
    - within in it, make a function to compare to arguments. a,b 
    - if a - b is positive, eg(5 - 1 = 4) a is a bigger number than be and will be sorted after b.

- Make for loop to iterate through array.length

- Within for loop make if statement
    - condition being if oddNumIndex === undefined
    -break loop if there are no odd numbers left.

- Also within for loop, use splice on array.
    - we want to start at oddNumIndex[i] which is the first odd num position in array
    - We want to delete the orignal odd number
    - We want to replace it with our first num in sorted num odd num list  

- Return array
*/

function sortArray(array) {
    let oddNums = []
    let oddNumIndex = []
    for(let i = 0; i <array.length;i++){
      if(Math.abs(array[i]) % 2 == 1){
        oddNums.push(array[i])
        oddNumIndex.push(i)
      }
    } 
    oddNums.sort((a,b)=>
        
     a-b           )
    for(let i = 0; i <array.length;i++){
        if (oddNumIndex[i] === undefined) {
            break 
        }
        array.splice(oddNumIndex[i],1,oddNums[i])
    } 
    return array 
}


