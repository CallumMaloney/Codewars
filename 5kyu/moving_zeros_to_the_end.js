/*

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

Example:
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

PLAN - 

1. declare a variable that will hold the number of zeros in the array
2. declare a variable that will hold the array without zeros and eventually be the array that is returned
3. loop through the array
4. if the current number is 0, add 1 to the number of zeros variable
5. if the current number is not 0, push it to the array without zeros variable
6. loop through the number of zeros variable
7. push 0 to the array without zeros variable
8. return the array without zeros variable

*/

function moveZeros(arr) {

    let zeros = 0;
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeros++;
        } else {
            newArr.push(arr[i]);
        }
    }
    for (let i = 0; i < zeros; i++) {
        newArr.push(0);
    }
    return newArr;
}