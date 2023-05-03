/*

The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20


*/
/*

- To do this, we can use the Math.ceil() method.

- This method takes the input as a floating point and rounds it up into the nearest integer
    - eg 24.5 -> 25   OR   61.1 -> 62

- Then we can divide the year by 100 within the methodto move the decimal point 2 places back
    - eg 2002 -> 20.2  OR  47 -> 0.47  OR  407 -> 4.07

- This will then round it up to the next integer
- This works due to the century always being 1 higher than the hundrth of the year


*/


function century(year) {
    return Math.ceil(year/100)
   }