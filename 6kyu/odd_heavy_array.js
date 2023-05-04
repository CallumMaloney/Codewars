/*
- if numbers array is empty, return false
- declare 2 array variables, one for odd and for even
- declare highestEvenNum variable as -Infinity due to negative numbers
- loop through numbers array with forEach
    - if number is even, push to even array and check if it is greater than highestEvenNum
    - if number is odd, push to odd array
- if odd array is empty, return false
- declare result variable and set it to odd array every method
    - return true if every number in odd array is greater than highestEvenNum
- return result

 You have to check if there is no even number greater than 
 any odd number in the array (you also have to check there 
 is at least one odd number in the array)
*/

function isOddHeavy(numbersArray){
    if (numbersArray.length === 0){
      return false;
    }
    let evenArr = [];
    let oddArr = [];
    let highestEvenNum = -Infinity; 
  
    numbersArray.forEach(number => {
      if (number % 2 === 0) {
        if (number > highestEvenNum) {
          highestEvenNum = number;
        }
        evenArr.push(number);
      } else {
        oddArr.push(number);
      }
    });
    if (oddArr.length === 0){
      return false;
    }
    let result = oddArr.every(number =>{
      return number > highestEvenNum;
    });
    return result;
  }