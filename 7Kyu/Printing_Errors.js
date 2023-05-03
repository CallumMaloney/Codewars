/* 

In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of 
simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm 
meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced 
e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string 
representing a rational whose numerator is the number of errors and the denominator the length of the control string. 
Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

Examples:
s="aaabbbbhaijjjm"
printer_error(s) => "0/14"

s="aaaxbbbbyyhwawiwjjjwwm"
printer_error(s) => "8/22"
--------------------------------------------------------------------------------------------------------------
PLAN - 

If any letters are between m-z in the string, return the number of letters that were. We can do this by adding them to their own 
variable and returning the length of the variable.


- redefine s with .split("") to change it from a string to an array.
    - This is because we cannot use .filter on a string.

- Make a new variable called errors
    - Use s.filter with a fat function inside with item as perameter
    - Use regular expressions to search for letters bettwen /[n-z]/g
    - if we use .text(item) it will filter any searches that == true
        - eg. n == true, z == true, a == false

- Return using template literals.
    - We want ${errors.length}/${s.length}





*/


function printerError(s) {

    s = s.split("")
    
    // .filter creates an array in errors with any characters between n-z
    let errors = s.filter( item => /[n-z]/.test(item) )
    
    return `${errors.length}/${s.length}`
}