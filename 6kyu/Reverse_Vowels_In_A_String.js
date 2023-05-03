/* 

In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which 
are not vowels should remain in their original position. Here are some examples:

reverseVowels("Hello!"); // "Holle!"
reverseVowels("Tomatoes"); // "Temotaos"
reverseVowels("Reverse Vowels In A String") // "RivArsI Vewols en e Streng"
--------------------------------------------------------------------------------------------------------------------------------------
PLAN - 

Find the index position of all vowels, store them in a variable called vowelIndex. DONE
Take all the vowels out the string and store them in a variable called vowellist. DONE
Reverse the index order in VowelIndex. DONE
Put the vowels back into the string in the reversed order.
    - use splice
Return string.

ONCE VOWEL LIST LENGTH GOES ABOVE 3, IT CREATES EMPTY SPACES.


*/
function reverseVowels(str) {
    
    let vowelIndex = []
    let vowelList = []
    let newStr = str

    for(let i = 0; i < str.length; i++){
        let letter = str[i]
        if ((letter === "a") || (letter === "A") || (letter === "e") || (letter === "E") || (letter === "i") || (letter === "I") || (letter === "o") || (letter === "O") || (letter === "u") || (letter === "U")){
            
            vowelIndex.push(i)  
        }     
    } 
    vowelList = str.replace(/[^aeiouAEIOU]/g,"")
    vowelIndex = vowelIndex.reverse()
    vowelList = vowelList.split("")
    str = str.split("")
    for(let i = 0; i < vowelList.length; i++){
        
        str.splice(vowelIndex[i],1,vowelList[i])      
    } 
        str = str.join("")
        return str    
} 