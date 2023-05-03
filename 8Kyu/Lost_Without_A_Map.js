/*

Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]
-------------------------------------------
PLAN - 

- Make empty array called doubledArray

- for loop iterates through length of x

- for every iteration, push x[i] * 2 onto the new array

- outside the function, return doubledArray



*/


let doubledArray = []
function maps(x){

   

    for (let i = 0; i < x.length; i++){

        doubledArray.push(x[i] * 2)
        



    } 
    
} return doubledArray