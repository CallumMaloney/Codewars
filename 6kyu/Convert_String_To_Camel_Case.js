/*

Complete the method/function so that it converts dash/underscore delimited words into camel 
casing. The first word within the output should be capitalized only if the original word was 
capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words
 should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"

PLAN -

To make any letter that is before or after "-" upper case.

STEP 1 - Create variable to store the letters that need to be capitalized

STEP 2 - Create for loop.

STEP 3 - Make an if statement
    - If letter  == "-"
    - Push i + 1 AND i - 1 to the variable
    - These are the positions that need to be capitalized
    - We also want to push the letters too so push str[i + 1] & [i - 1]

STEP 4 - Make another for loop to iterate through the capitalize variable
    - reassign each capitalize[i] as itself but upper case

STEP 5 - Return the split.join("") and replace any "-" AND any "_" with "" 



 */

function toCamelCase(str){
    let capitalize = [];
    let capitalizeIndex = [];
    let split = str.split("");

    for (let i = 0; i < str.length; i++) { 
        let letter = str[i];
        if (letter == "-"|| letter == "_") {
            capitalizeIndex.push(i + 1);
            capitalize.push(str[i + 1]);
        }
    }
    for (let i = 0; i < capitalize.length; i++) {
        capitalize[i] = capitalize[i].toUpperCase();
        split.splice(capitalizeIndex[i], 1, capitalize[i]);
    }
    return split.join("").replace(/[-_]/g, "");
}