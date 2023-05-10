/*

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]


PLAN - 

1. define new variable to hold all characters not in array b
2. for loop based on length of a
3. if a[item] is NOT included in b array
    - push to c
4. return c
*/

function arrayDiff(a, b) {

    let c = [];
    for (let i = 0; i < a.length; i++) {
      if (!b.includes(a[i])){
        c.push(a[i]);
  
    }
    }
    return c;
}