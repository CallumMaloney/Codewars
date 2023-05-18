/*

Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters
 in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so
  the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple
 words. Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

PLAN -

1. declare new variable to hold the splot string
2. for loop looping through variable
3. new variable in for loop to hold wordArray[i] split up into letters
4. nested for loop
5. if j mod 2 == 0, letterArray[j] should be uppercase, if not, lowercase
6. inside first for loop at end, wordarray[i] declared letterarray joined
8. return wordArray joined with space

*/

function toWeirdCase(string) {
    let wordArray = string.split(" ");
    
    // For every word in the array...
    for (let i in wordArray) {
      let letterArray = wordArray[i].split("");
      // For every letter in the word...
      for (let j in letterArray) {
        letterArray[j] = j % 2 === 0 ? letterArray[j].toUpperCase() : letterArray[j];
      }
      wordArray[i] = letterArray.join("");
    }
    return wordArray.join(" ");
  }