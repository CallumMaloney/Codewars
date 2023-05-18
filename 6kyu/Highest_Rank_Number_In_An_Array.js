/*

Complete the method which returns the number which is most frequent in the given input array. 
If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

PLAN -

1. Declare variable for most frequent number(s)
2. Declare variable to hold number of occurences
3. Declare variable for count
4. for loop based off length of arr
    - Reset count variable to 0
5. nested for loop
    - count ++ everytime arr[i] is equal to arr[j]
6. after nested for loop, push count to numOfOccurences
7

*/

function highestRank(arr){
    let frequentNum = []
    let numOfOccurences = []
    let count = 0


    for (let i = 0 ; i < arr.length ; i++ ){
        count = 0
        for (let j = i ; j < arr.length ; j++ ){
            if (arr[i] === arr[j]){
                count++
            }
        }
        let data = {[arr[i].toString()]: count}
        numOfOccurences.push(data)
    }
     
    }