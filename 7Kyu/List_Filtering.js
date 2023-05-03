/*
In this kata you will create a function that takes a list of non-negative integers and strings and returns a 
new list with the strings filtered out.

Example -

filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/


/* EXPLINATION OF METHOD

- Make empty array in function to house all items that are numbers

- iterate though the input of function (l) using .length

- use if statement to check if i is an integer

    - we do this by using Number.isinteger(value[bracket notation needed for array])

- using the .push method on our numbers array, we can push any i items that === true to if statement
    - again .push(value[bracket notation]) requires brackets do to working with array

- return the number array that we made earlier to return all i items that are integers

*/



function filter_list(l) {
    numbers = []
    for(i = 0; i<l.length; i++){
        if (Number.isInteger(l[i])){

            numbers.push(l[i])
            
        }
    }
    return numbers
}



    
    







































//   function filter_list(l) {
//     var integers = []
//     for(var i = 0; i < l.length; i++){
//         if(Number.isInteger(l[i])){
//             integers.push(l[i])
//         }
        
//     }
//     return integers
//   }
