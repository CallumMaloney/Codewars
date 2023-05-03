/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

/* EXPLINATION OF METHOD

- We must first use the .split(" ") method on a newly defined variable to house our split string
    - This splits each word of our string into an array
    - If ("") is used as separator, the string is split between letters.

- Create another variable to house the split reverse string
    - We reverse the string using the .reverse() method.

- Create another variable to house the string once joined together
    - We can do this by using the .join() method
        - Using the join method, it joins them together using commas
        - To join them concatenated, we use .join("")instead

    - If we wanted wanted to link words using conjuctions, we can use (example):
    -str.join(" and ") OR str.join(" then ") etc etc

*/

// We can do this is ONE line of code using return str.split('').reverse().join('')




function solution(str){

    let splitstring = str.split("")
    let reversestring = splitstring.reverse()
    let cstring = reversestring.join("")

    return cstring

}