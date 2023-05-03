/*

Remove the parentheses
In this kata you are given a string for example:

"example(unwanted thing)example"
Your task is to remove everything inside the parentheses as well as the parentheses themselves.

The example above would return:

"exampleexample"
---------------------------------------------------------------------------------------
PLAN

Remove all characters within () aswell as the () themselves.

- Make a variable for result
- Make variable for open parentheses = 0
- Make variable for closing parentheses = 0
- for loop
    - if s[i] === '(' add to open
    - if === ')' add to close 
- If s[i] is not ( or ) and openp and closep === then add [i] to result
*/

function removeParentheses(s){

    let result = ""
    let openP = 0
    let closeP = 0

    for(let i = 0;i<s.length;i++){

        if (s[i] === '('){
            openP++

        }else if (s[i] === ')'){

            closeP++

        }else if (s[i] !== '(' && s[i] !== ')' && openP === closeP){

            result+= s[i]
        }

    }

}