/*

My friend wants a new band name for her band. She like bands that use the formula: 
"The" + a noun with the first letter capitalized, for example:

"dolphin" -> "The Dolphin"

However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and 
connect them together with the first and last letter, combined into one word (WITHOUT "The" in front), 
like this:

"alaska" -> "Alaskalaska"

Complete the function that takes a noun as a string, and returns her preferred band name written 
as a string.


PLAN -

STEP 1 - Make a variable called strLastLetter that will hold the last letter of string
            - this is done by indexing the length of string - 1

STEP 2 - Make a variable called repeated string that holds the string split in array

STEP 3 - Use splice on repeated string.
    - start at index 0, remove that letter of the index and replace with nothing

STEP 4 - Join the array back to a string.

STEP 5 - Create if statement
    - If string first letter is equal to str last letter
        - re assign str to the first letter of string but uppercase, concatenate it with repeatedStr
          to create the str but capitalized, then concatenate again with repeatedStr.

STEP 6 - Else we reassign str with "The " then concatenate with the first letter of str but uppercase
         then concantenate with repeatedStr

STEP 7 - Return str
*/


function bandNameGenerator(str) {
  
    let strLastLetter = str[str.length - 1]
    let repeatedStr = str.split("")
    repeatedStr.splice(0,1,"")
    repeatedStr = repeatedStr.join("")

    if(str[0] == strLastLetter){

        str = str[0].toUpperCase() + repeatedStr + repeatedStr
    }else{

        str = "The " + str[0].toUpperCase()+repeatedStr
    }
    return str
}