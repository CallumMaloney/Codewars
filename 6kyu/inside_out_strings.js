/*

You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi'

PLAN -

1. Define variable that holds x split into words
2. Define variable called result that will hold the new words
2. Iterate through x.length using a for loop
3. if words[i] is less than 4, push to result
4. if words[i].length is even:
    - define variable called middle to find half of the word length (words[i].length / 2)
    - define first half of word by slicing word[i] using 0,middle
    - define second half of word by slicing word[i] using only middle
    - for each half, split(""), reverse and join("")
    - define a new variable concatenating both words and push to result
5. if word[i].length is odd:
    - define variable called middleLetter to find index of middle letter of word (Math.floor(word.length/2))
    - define first half of word before middle by slicing word[i] 0,middleLetter
    - define second half of word before middle by slicing word[i] middleLetter + 1
    - for each half, split(""), reverse and join("")
    - concatenate together (firstHalf+middleLetter+secondHalf)
    - push to result
6. return result.join(" ")

*/

function insideOut(x){

}