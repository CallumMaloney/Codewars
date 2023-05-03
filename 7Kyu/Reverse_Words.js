/*

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces 
in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

PLAN -

- Split the words up in characters in an array
- .reverse() 
- .join("") the array up so it becomes "erehT iH"

- Now we need to get each word back to its original
place

- 

*/





function reverseWords(str) {
    let newStr = str.split("").reverse().join("")
      let newerStr = newStr.split(" ").reverse().join(" ")
      return newerStr
  }