/*

Check to see if a string has the same amount of 'x's and 'o's. The method must 
return a boolean and be case insensitive. The string can contain any char.

Examples input/output:


XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false



/*
PLAN-

1. Declare 2 variables, each to hold the number of occurances of each letter
2. Loop through the string, checking each letter
3. If the letter is an "o" or "O", add 1 to the oList variable
4. If the letter is an "x" or "X", add 1 to the xList variable
5. Return true if the oList and xList variables are equal, false if not


*/

function XO(str){
    let oList = 0
    let xList = 0
    
    for(i=0;i < str.length;i++){
        let letter = str[i]
        if (letter === "o" || letter === "O"){
            oList ++
          }
        else if (letter === "x" || letter === "O"){
            xList ++
        }
    }
    return oList === xList
}