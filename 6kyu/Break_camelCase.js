/*

Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""

PLAN -

1. Create variable to hold index to place space spaceIndex /DONE/
2. Create newStr that is the string but split newStr /DONE/
3. iterate through string /DONE/
4. If we come across any upper case letters, push the current index - 1 to the variable /DOE/
5. new for loop iterating through spaceIndex length
6. splice newStr (spaceIndex[i],0," ")
7. return newStr

*/

function solution(str) {
    let newStr = str.split("")
    let spaceIndex = []

    for (let i = 0; i < str.length; i++){
        letter = str[i]
        if (/[A-Z]/.test(letter)){
            spaceIndex.push(i - 1)
        }
    } 
    for (let i = 0; i < spaceIndex.length; i++){
        newStr.splice(spaceIndex[i],0," ")

    }return newStr.join("")

}