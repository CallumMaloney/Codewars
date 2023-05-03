/*

Write a function

tripledouble(num1,num2)
which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at 
any place in num1 and also a straight double of the same number in num2.

If this isn't the case, return 0

Examples
tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1

PLAN -

1. Make a variable to hold the triple number of num 1
2. Make num 1 & 2 into a string
3. Loop through num 1
4. Using an if statement:
    - if the first digit & second digit are equal
    - AND the second digit & third digit are equal
    - store the first digit in the tripleNum variable
5. loop through num2 as a nested for loop
6. Using an if statement:
    - if num2[j] === tripleNum
    - AND if the first digit & second digit are equal
    - return 1
7. Return 0 outside the loop
    - This will only trigger if none of the above is truthy

*/

function tripledouble(num1, num2) {	
    let tripleNum = 0;	
    num1 = num1.toString();	
    num2 = num2.toString();	
        
    for (let i = 0; i < num1.length; i++) {	
      if (num1[i] === num1[i+1] && num1[i+1] === num1[i+2]) {	
        tripleNum = num1[i];	
        for (let j = 0; j < num2.length; j++) {	
          if (num2[j] === tripleNum && num2[j] === num2[j+1]) {	
            return 1;	
          }	
        }	
      }	
    }	
    return 0;	
  }
