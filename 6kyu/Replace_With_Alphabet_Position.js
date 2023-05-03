/*

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

PLAN - 

We want to take a string, iterate through it and return each letter of the string with its alphabet pos in a new string

STEP 1 - Create new variable called alphaPos
    - This will be an empty array to house all the alphabet positions

STEP 2 - Split up the text string.
    - We want it to be split up into individual letters

STEP 3 - Iterate through the text string using a for loop

STEP 4 - Inside the for loop, create an if statement.
    - If the for loop encounters any white space, tell the loop to continue over it.
    - Or if the for loop encounters any letters that arent a-z

STEP 5 - Inside the for loop, create a variable called letter and its value to be text[i]
    - This will be used to house the letter of each iteration

STEP 6- If the letter is "." OR is ","
    - We want to splice from the current index, remove 1 (the letter) and replace with ""

STEP 7 - Every iteration of a letter, push the alphabet position of that letter to our alphaPos array
    - We can do this by using letter.charCodeAt() - 96
    - charCodeat returns us the character code of the element using the ASCII table
    - Due to the alphabet starting at 97, we need to -96 to get the alphabet position of the element
    - EXAMPLE - b.charCodeAt() - 96 -> b charCode is 98. - 96 gives us 2. The alphabet pos = 2

STEP 8 - Return alphaPos but joined together with a space

*/

function alphabetPosition(text) {
    let alphaPos = [];
    text = text.toLowerCase().split("");
    for (let i = 0; i < text.length; i++) {
      let letter = text[i];
      if (text[i] === " " || !letter.match(/[a-z]/i)) {
        continue;
      }
     
      alphaPos.push(letter.charCodeAt() - 96);
    }
    return alphaPos.join(" ");
  }