/*

In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each 
string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

PLAN -

1. loop through each string in the array
2. make a nested for loop to loop through each letter in the stringArray[i]
3. if the letter is the same as the next letter, remove the next letter
4. return the new array

*/

function dup(strArr) {
  
    let newStr = ""
    let newStrArr = []
  
      for (let i = 0; i < strArr.length; i++ ){
          
          for (let j = 0; j < strArr[i].length; j++ ){
            
              if(strArr[i][j] === strArr[i][j - 1]){
  
                  continue
              }else{
                
                newStr += strArr[i][j]
              }              
          }
          newStrArr.push(newStr)
          newStr = ""
      }
      return newStrArr
  };