/*

Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]

PLAN -

1. Declare a variable to hold the array
2. for loop looping through size 
3. inside for loop declare a variable that will be the sub array to hold the numbers for that particular row
4. nested for loop looping through size
5. inside nested for loop, push the for loops index times by the nested loops index into the sub array
6. after the nested for loop, push the sub array into the array
7. return the array after the for loop is done

*/

multiplicationTable = function(size) {
  
    let array = [];

    for(let i = 1; i <= size; i++){
        let subArray = [];
        for(let j = 1; j <= size; j++){
            subArray.push(i * j);
        }
        array.push(subArray);
    }
    return array;
}