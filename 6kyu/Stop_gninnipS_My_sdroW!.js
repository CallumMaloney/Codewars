/*

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). 
Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"

PLAN -

-refine string as the string with each word split in an array

-use for loop to iterate through string length

- If the word in a string (string[i]) is greater than or equal to 5

- redefine that word in the string (string[i]) as string[i] split(""). This splits up the word into letters
    - Then we reverse() it
    - then we join("") the word back together reversed.

- now we return string.join(" ") to make the array a string again.

*/

function spinWords(string){
    string = string.split(" ")
    for(let i = 0;i<string.length;i++){
      
      if(string[i].length >= 5){
        
        string[i]=string[i].split("").reverse().join("")
      } 
    } return string.join(" ")
  }