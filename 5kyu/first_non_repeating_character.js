/*

Write a function named first_non_repeating_letter that takes a string input, and returns the 
first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t 
only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the 
function should return the correct case for the initial letter. For example, the input 'sTreSS' 
should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- 
see sample tests.

PLAN -

1. declare variable to hold first non repeating character index
2. declare variable that holds the string but lower case
3. loop through string
4. using an if statement
    - if indexOf and lastIndexOf are equal
    - firstNonRepeatingIndex = i
    - break loop
5. using an if/else if statement
    - if string == "" return empty string
    - else if firstNonRepeatingIndex === -1 return empty string
6. return string[firstNonRepeatingIndex]


*/

function firstNonRepeatingLetter(string) {
    let firstNonRepeatingIndex = -1;
    let stringLowerCase = string.toLowerCase();
    
    for (let i = 0; i < stringLowerCase.length; i++) {
      if (stringLowerCase.indexOf(stringLowerCase[i]) === stringLowerCase.lastIndexOf(stringLowerCase[i])) {
        firstNonRepeatingIndex = i;
        break;
      }
    }
    if (firstNonRepeatingIndex === -1) {
      return "";
    } else if (string === "") {
      return "";
    }
    return string[firstNonRepeatingIndex];
  }