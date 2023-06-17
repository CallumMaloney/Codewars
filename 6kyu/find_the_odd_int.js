/* 

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

PLAN -

1. declare variable to hold the occurences of current number
2. declare variable that will hold current and past numbers
3. loop through the array
4. if the current number is in the past numbers array, continue
5. loop using a nested loop through the array
6. if the current number is equal to the nested loop's current number, add 1 to the occurences variable
7. if the occurences variable is odd, return the current number
8. if the occurences variable is even, set the occurences variable to 0, push the current number to the past number variable, and break out of the nested loop


*/
function findOdd(A) {

    let occurences = 0;
    let pastNumbers = [];

    for (let i = 0; i < A.length; i++) {
        if (pastNumbers.includes(A[i])){
            continue;
        }
        for (let j = 0; j < A.length; j++) {
            if (A[i] === A[j]) {
                occurences++;
            }
        }
        if (occurences % 2 !== 0) {
            return A[i];
        }else{
            occurences = 0;
            pastNumbers.push(A[i]);
        }
    }
}