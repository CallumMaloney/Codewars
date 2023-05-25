/*

You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either 
entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes 
the array as an argument and returns this "outlier" N.

Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)

PLAN -

1. define 2 arrays, one for odd numbers and one for even numbers
2. iterate through the array
3, Using a tenary operator, push the odd numbers to the odd array and the even numbers to the even array
4. If the odd array has a length of 1, return the first index of the odd array
5. If the even array has a length of 1, return the first index of the even array

*/

function findOutlier(integers) {
    let oddArray = [];
    let evenArray = [];
  
    for (let i = 0; i < integers.length; i++) {
      integers[i] % 2 === 0 ? evenArray.push(integers[i]) : oddArray.push(integers[i]);
    }
    if (oddArray.length === 1) {
      return oddArray[0];
    } else {
      return evenArray[0];
    }
  }