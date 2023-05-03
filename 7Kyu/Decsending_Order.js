/*

Your task is to make a function that can take any non-negative integer 
as an argument and return it with its digits in descending order. 
Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321

-------------------------------------------------------------------------------
PLAN

Take a selection of numbers and return them in descending order.
We want to use .sort to sort them in ascending order. for that, they need
to be part of an array and to be split up. We also need to convert to string.
 After, we can reverse them and  join them back up.

- Create new variable and store inside n.toString() to convert to string

- Create a new variable and store inside stringN but split it up using 
.split(""). No space inside "" so they're split individually.

- Then use .sort() on our array in a new varaible to sort in ascending order

- New variable and inside, we want to use .reverse() to make our numbers
go in descending order.

- New variable and inside, use .join("") with no space in "" as we dont want
space.

- New variable, in this we want to take our string and turn it back into numbers.
we can use Number(joinedArray)

*/

function descendingOrder(n){

    let stringN = n.toString()
    let array = stringN.split("")
    let sortArray = array.sort()
    let reversedArray = sortArray.reverse()
    let joinedArray = reversedArray.join("")
    let backToNumbers = Number(joinedArray)

    return backToNumbers


    


}