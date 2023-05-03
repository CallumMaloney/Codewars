/* 

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

---------------------------------------------------------------------------------------------------------
THE PLAN -

- Returns true if the 2nd argument matches up to the end of the first argument. -

- Reverse the string example - abcde -> edcba

- Reverse the ending argument example - cde ->edc

- Make a count variable

- Iterate through using a for loop with the length of new ending string

- if on the iteration, both letters match, count++

- if the value of count is strictly equal to the length of new ending return true 
else, return false


*/

function solution(str, ending){

    let count = 0

    let newStr = str.split("").reverse().join("")
    let newEnding = ending.split("").reverse().join("")

    for(let i = 0; i < ending.length;i++){
        if (newStr[i] === newEnding[i]){
            count++
        }
    }
    if (count === newEnding.length){
        return true
    }else{
        return false
    }
}