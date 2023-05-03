/*

The goal of this Kata is to return the greatest distance of index positions between matching number 
values in an array or 0 if there are no matching values.

Example: In an array with the values [0, 2, 1, 2, 4, 1] the greatest index distance is between the 
matching '1' values at index 2 and 5. Executing greatestDistance against this array would return 3. 
(i.e. 5 - 2)

Here's the previous example in test form:

Test.assertEquals(greatestDistance([0, 2, 1, 2, 4, 1]), 3);

PLAN SUMMARY -

Find the largest index distance between matching numbers in array. We need to find what numbers are 
matching in the array and put them in a new array. We DON'T want any repeating numbers. We need to find
the first index of each matching number AND find the last index of each matching number. We can put
first and last index values in seperate arrays. Then we can do lastIndex - firstIndex on each iteration
of BOTH variables to give us the largest distance.




*/
var greatestDistance = function(data) { 
    let uniqueNumbers = []
    let duplicates = []
    let firstIndex = []
    let lastIndex = []
    let theGreatestDistance = 0 
    
    for(let i = 0; i < data.length; i++) {
        // Add all numbers that dont have duplicates to uniqueNumbers
        if(uniqueNumbers.indexOf(data[i]) === -1){
            uniqueNumbers.push(data[i]);
        // if they arent unique, add 1 of each duplicate in array to duplicates variable
        }else if(duplicates.indexOf(data[i]) === -1){
              duplicates.push(data[i]);
        } 
      // iterate through duplicates array   
    } for(let i = 0; i < duplicates.length; i++){
        firstIndex.push(data.indexOf(duplicates[i]))               // add the first index of each duplicate number to firstIndex variable
        lastIndex.push(data.lastIndexOf(duplicates[i]))           // add the last index of each duplicate number to lastIndex varaible

    } for(let i = 0; i < duplicates.length; i++){

        dist = lastIndex[i] - firstIndex[i]
        if (dist > theGreatestDistance){

            theGreatestDistance = dist
        }
    } return theGreatestDistance
}