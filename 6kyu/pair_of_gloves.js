/*

Pair of gloves
Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)


PLAN - 

1. Create a variable to hold the number of pairs
2. Create a variable that holds a copy of the array
3. Loop through the array
4. create nested for loop that has an index of i+1
5. if the current current index's value is equal to the nested loop's index value, push both values to the current pair's index variable
6. add 1 to the number of pairs variable
7. remove both indexes from the matching pairs from the array
7. take away 2 from the index of the for loop to account for the removal of the matching pairs
8. break out of the nested for loop
9. return the number of pairs variable one the loop is complete

*/




function numberOfPairs(gloves) {
    let pairs = 0;
    const glovesCopy = [...gloves]; 
  
    for (let i = 0; i < glovesCopy.length; i++) {
      for (let j = i + 1; j < glovesCopy.length; j++) {
        if (glovesCopy[i] === glovesCopy[j]) {
          pairs++;
          glovesCopy.splice(i, 1);
          glovesCopy.splice(j, 1);
          i -= 2;
          break;
        }
      }
    }
    return pairs;
  }