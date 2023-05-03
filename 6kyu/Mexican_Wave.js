/*
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You 
will be passed a string and you must return that string in an array where an uppercase letter is a 
person standing up.
 
Rules
 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat

*/
function wave(str){
    let mexWave = []
    let newStr = str.split("")
    for (let i = 0; i < str.length; i++){
      if (newStr[i] === ' ') {
        continue
      }
      newStr = str.split("")
      let theWave = newStr[i].toUpperCase()
      newStr[i] = theWave
      newStr = newStr.join("")
      mexWave.push(newStr)
    }
    return mexWave
  }