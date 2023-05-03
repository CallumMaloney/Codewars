/*

Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more 
than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

PLAN -

1. Convert string to lowercase
2. Create a variable to hold the number of duplicates
3. Create a variable to hold the unique numbers
5. Iterate through the string
6. If the number is not in the uniqueNumbers array, add it to the unique array
7. If it is in the unique array and not in the duplicates array, add it to the duplicates array
8. Return the length of the duplicates array

*/

function duplicateCount(text){
    text = text.toLowerCase()
    let uniqueNumbers = []
    let dupesList = []
    for(let i = 0;i<text.length;i++){

        if(uniqueNumbers.indexOf(text[i]) === -1){
            uniqueNumbers.push(text[i])
        }else if(dupesList.indexOf(text[i]) === -1){
            dupesList.push(text[i])
        }    
    } return dupesList.length
}