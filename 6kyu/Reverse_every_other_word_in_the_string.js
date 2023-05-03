/*

Reverse every other word in a given string, then return the string. Throw away any leading or trailing 
whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be 
treated as if they are a part of the word in this kata.

SUMMARY -

Remove every other word. Remove whitespace and ensure there is one space between each word.

PLAN -

1. Split the string by each word
2. make a variable to hold every other word in the string
3. Loop through the array and target every other word (every odd number index)
4. clear the reversed variable
5. push the word at the current index to the variable
6. reversed = 
    - Join the word in the variable with no space
    - split it with no space
    - reverse it 
    - join it with no space
    - split it with space to return it to its original form just reversed
7. splice newStr at current index, delete what ever is there and add in reversed[0]
8. outside the loop, return newStr but joined with space to create a string and trim to erase whitespace


*/

function reverse(str){
    let newStr = str.split(" ")
    let reversed = []

    for(let i = 1; i < str.length;i+=2){
        reversed = []
        reversed.push(newStr[i])
        reversed = reversed.join("").split("").reverse().join("").split(" ")
        newStr.splice(i,1,reversed[0])
    }
    return newStr.join(" ").trim()  
  }