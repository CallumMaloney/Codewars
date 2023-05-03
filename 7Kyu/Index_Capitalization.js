/*

Given a string and an array of integers representing indices, capitalize all letters at the given indices.

For example:

capitalize("abcdef",[1,2,5]) = "aBCdeF"
capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
The input will be a lowercase string with no spaces and an array of digits.

Good luck!

---------------------------------------------------------------------------------------------------------
MAIN PLAN - 

Capitalize the string characters using the numbers in tha array as index positions

- Make a new variable called capS. This will contain the s string but with the split method
    - let capS = s.split("")

- Iterate through using a for loop
    we want to use the arr.length

- Use an if statement with the condition of if CapS[arr[i]] is true
    - This is because we want it to trigger the if statement if our string has a index position of that 
    number in the array.

- If the if statment condition is true, replace the letter of that index with the exact same letter but 
in capitals

- Once the iteration is done, redefine capS as capS but with the .join("") method

- return capS


*/

function capitalize(s,arr){
    let capS = s.split("")
  
      for(let i = 0; i < arr.length; i++){
  
          if(capS[arr[i]]){
  
              capS[arr[i]] = capS[arr[i]].toUpperCase()
          }
      }
  
      capS = capS.join("")
      return capS
  };

  